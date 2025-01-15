import * as S from '../style.jsx';
import Node from '../../../../assets/node.svg'
import Mongo from '../../../../assets/mongo.svg';

export default function Server(){
    return(
        <S.Box>
            <S.Title>서버 이해</S.Title>
            <S.Section>
                <S.ContentName>
                    <img src={Node} alt={'git'} width={60}/>
                    <h1>사용해보기</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>node js 의 프레임워크인 Express로 서버를 이해할 수 있어요</S.Text>
                    <S.Text>프로젝트로 구현도 하며<br/>
                        더 자세히 알아갈 수 있어요</S.Text>
                </S.Content>
            </S.Section>
            <S.Section>
                <S.ContentName>
                    <img src={Mongo} alt={'skill'} width={120}/>
                    <h1>사용해보기</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>NoSQL 데이터베이스인 mongo DB를 사용하여<br/>
                        데이터 베이스를 구축할 수 있어요</S.Text>
                    <S.Text>mongo DB를 node js와 연결부터<br/>
                        프로젝트 제작까지 알려드려요</S.Text>
                </S.Content>
            </S.Section>
        </S.Box>
    )
}