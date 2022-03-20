import { useGithub } from '../../hooks/provider';

import * as S from './styles';

const Profile = () => {
    
    const  { user }  = useGithub();

    return (
        <S.Container>
            <S.UserImage src={user.avatar_url} />
            <S.UserInfos>
                <div>
                    <S.UserName>{user.name}</S.UserName>
                    <S.UserNickname>
                        <h3>Username: </h3>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {user.login}
                        </a>
                    </S.UserNickname>
                    <S.UserOtherData>
                        <div>
                            <h4>Location:</h4>
                            <span>{user.location}</span>
                        </div>
                        
                        {
                            user.company === null
                            ?
                            <span></span>
                            :
                            <div>
                                <h4>Company:</h4>
                                <span>{user.company}</span>
                            </div>
                        }
                        {
                            user.blog === ''
                            ?
                            <span></span>
                            :
                            <div>
                                <h4>Blog:</h4>
                                <a
                                    href={user.blog}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {user.blog}
                                </a>
                            </div>
                        }
                    </S.UserOtherData>
                </div>
                <S.UserStatusAccount>
                    <div>
                        <h4>Followers:</h4>
                        <span>{user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings:</h4>
                        <span>{user.following}</span>
                    </div>
                    <div>
                        <h4>Repos:</h4>
                        <span>{user.public_repos}</span>
                    </div>
                    <div>
                        <h4>Gists:</h4>
                        <span>{user.public_gists}</span>
                    </div>
                </S.UserStatusAccount>
            </S.UserInfos>
        </S.Container>
    );
}

export default Profile;