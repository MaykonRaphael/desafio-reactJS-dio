import * as S from './styles';

type Props = {
    name: string;
    fullName: string;
    linkToRepository: string;
    description: string;
}

const Item = ({name, fullName, linkToRepository, description}: Props) => {
    return (
        <S.ItemArea>
            <S.ItemTitle>{name}</S.ItemTitle>
            <S.ItemFullName>
                <strong>Full Name: </strong>
                <a
                    href={linkToRepository}
                    target="_blank"
                    rel="noreferrer"
                >
                    {fullName}
                </a>
            </S.ItemFullName>
            <div>
                <p><strong>Description: </strong>{description}</p>
            </div>
        </S.ItemArea>
    );
}

export default Item;