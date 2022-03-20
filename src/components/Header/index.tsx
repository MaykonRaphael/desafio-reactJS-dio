import { useState } from 'react';
import { useGithub } from '../../hooks/provider';
import * as S from './styles';


const Header = () => {

    const { getUser } = useGithub();
    const [usernameSearched, setUsernameSearched] = useState('');

    const searchUsername = () => {
        if(!usernameSearched) return
        return getUser(usernameSearched)
    }

    return (
        <S.Header>
            <S.Container>
                <S.Input
                    type="text"
                    placeholder="Digite o username para pesquisa..."
                    onChange={(event)=>setUsernameSearched(event.target.value)}
                    onKeyUp={(event)=> {
                        if(event.key === 'Enter') {
                            searchUsername();
                        }
                    }}
                />
                <S.Button
                    type="submit"
                    onClick={searchUsername}
                >
                    Buscar
                </S.Button>
            </S.Container>
        </S.Header>
    );
}

export default Header;