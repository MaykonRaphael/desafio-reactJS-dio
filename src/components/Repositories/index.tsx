import { useEffect, useState } from 'react';
import { useGithub } from '../../hooks/provider';
import Item from '../Item';
import * as S from './styles';

const Repositories = () => {

    const { user, getUserRepos, repos, getUserStarred, starred } = useGithub();
    const [ userRepositories, setUserRepositories ] = useState(false);

    // const repositories = JSON.stringify(repos);

    useEffect(()=>{
        if(!!user.login){
            getUserRepos();
            getUserStarred();
        }
        setUserRepositories(!!user.login);
    },[user]);

    return (
        <>
            {
                userRepositories
                ?
                <S.TabsArea
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <S.TabListArea>
                        <S.TabArea>Repositories</S.TabArea>
                        <S.TabArea>Started</S.TabArea>
                    </S.TabListArea>
                    <S.TabPanelArea>
                        <S.TabPanelItem>
                        {
                            repos.map((item)=>(
                                <Item
                                    key={item['id']}
                                    name={item['name']}
                                    fullName={item['full_name']}
                                    linkToRepository={item['html_url']}
                                    description={item['description']}
                                />
                            ))
                        }
                        </S.TabPanelItem>
                    </S.TabPanelArea>
                    <S.TabPanelArea>
                        <S.TabPanelItem>
                            {
                                starred.map((item)=>(
                                    <Item
                                        key={item['id']}
                                        name={item['name']}
                                        fullName={item['full_name']}
                                        linkToRepository={item['html_url']}
                                        description={item['description']}
                                    />
                                ))
                            }
                            </S.TabPanelItem>
                    </S.TabPanelArea>
                </S.TabsArea>
                :
                <></>
            }
        </>
    );
}

export default Repositories;