import * as S from '../style.jsx';
import AlgorithmIcon from '../../../../assets/onboarding/track-introduce/algorizm.svg'

export default function Algorithm(){
    return(
        <S.Box>
            <S.Title>알고리즘</S.Title>
            <S.Section>
                <S.ContentName>
                    <img src={AlgorithmIcon} alt={'git'} width={50}/>
                    <h1>정렬 알고리즘</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>요소들을 정렬시키는 알고리즘을 알려드려요</S.Text>
                    <S.Text>버블정렬, 선택정렬, 삽입정렬 등<br/>
                        정렬에대해서 알려드려요</S.Text>
                </S.Content>
            </S.Section>
        </S.Box>
    )
}