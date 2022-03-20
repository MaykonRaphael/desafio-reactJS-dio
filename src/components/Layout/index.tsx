import { ReactNode } from 'react';
import { useGithub } from '../../hooks/provider';
import Header from '../Header';
import * as S from './styles';

// import { styles } from './styles';

type Props = {
    children: ReactNode;
}

const Layout = ({children}: Props) => {

    const { hasUser } = useGithub();

    return (
        <S.Section>
            <Header/>
            {
                hasUser
                ? children
                : <S.NoUserSearched>Nenhum usuário pesquisado...</S.NoUserSearched>
            }
        </S.Section>
    );
}

export default Layout;