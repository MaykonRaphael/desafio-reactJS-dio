import {
    createContext,
    ReactNode,
    useContext,
    useState
} from 'react';
import { api } from '../services/api';

type GithubProps = {
    children: ReactNode;
}

type User = {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    public_repos: number
    public_gists: number;
    followers: number;
    following: number;
}

type Repos = {
    id: number,
    name: string,
    full_name: string,
    html_url: string,
    description: string
}

type GithubContextData = {
    user: User;
    repos: Repos[],
    starred: Repos[];
    loading: boolean;
    hasUser: boolean;
    getUser: (username: string) => void;
    getUserRepos: () => void;
    getUserStarred: () => void;
}

export const GithubContext = createContext({} as GithubContextData);

const GithubProvider = ({children}: GithubProps) => {

    const [user, setUser] = useState({} as User);
    const [repos, setRepos] = useState([]);
    const [starred, setStarred] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasUser, setHasUser] = useState(false);

    const getUser = ( username:string ) => {
        setLoading(true);

        api.get(`users/${username}`)
            .then(({ data }) => {
                // console.log(`User data: ${JSON.stringify(data)}`)
                setUser((prevState)=> ({
                    ...prevState,
                    login: data.login,
                    avatar_url: data.avatar_url,
                    html_url: data.html_url,
                    name: data.name,
                    company: data.company,
                    blog: data.blog,
                    location: data.location,
                    public_repos: data.public_repos,
                    public_gists: data.public_gists,
                    followers: data.followers,
                    following: data.following
                }));
                setHasUser(true);
            })
            .finally(()=>setLoading(false))
    }

    const getUserRepos = () => {
        api.get(`users/${user.login}/repos`)
        .then((response)=>{
            // console.log(`Data: ${JSON.stringify(data)}`);
            setRepos(response.data);
            // console.log(`Repos: ${JSON.stringify(repos[0]['name'])}`);
        })
    }

    const getUserStarred = () => {
        api.get(`users/${user.login}/starred`)
        .then((response)=>{
            // console.log(`Data: ${JSON.stringify(data)}`);
            setStarred(response.data);
            // console.log(`Repos: ${JSON.stringify(repos[0]['name'])}`);
        })
    }

    return(
        <GithubContext.Provider
            value={{
                user,
                repos,
                starred,
                loading,
                hasUser,
                getUser,
                getUserRepos,
                getUserStarred
            }}
        >
            {children}
        </GithubContext.Provider>
    );
}

const useGithub = () => {
    const githubContext = useContext(GithubContext);

    return githubContext;
}

export {
    GithubProvider,
    useGithub
};