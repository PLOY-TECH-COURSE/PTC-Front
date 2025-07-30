import * as S from "./style.jsx";
import FooterComponent from '../../../components/footer'

export default function Footer({isAnimation, change}){
    const data = [

        {
            id:2,
            title:"전공 관련 지식이 부족한데 신청해도 무리가 없을까요?",
            content:'기술적인 부분을 모르겠다면 자신에 대한 내용을 더욱 많이 써주시면 됩니다.',
        },
        {
            id:1,
            title:"선발기준이 어떻게 되나요?",
            content:'본인의 장단점을 잘 파악하고 있는 학생, 발표를 할때 청중을 바라보고 하는 학생을 우선시합니다.',
        },
        {
            id:3,
            title:"테크코스에 들어가면 무엇을 하게 되나요?",
            content:'선배들이 제공하는 과제로 수업하게 되고 주마다 오프라인 미팅을 갖게 됩니다. 이 때는 배운 내용에 대한 프레젠테이션을 진행하게 됩니다. 상세 일정은 합격 후 공지해드리도록 하겠습니다.',
        },
        {
            id:4,
            title:"불합격해도 과제 내용 공유해주시면 안 되나요?",
            content:'불합격하신 경우, 과제 내용은 별도로 제공되지 않습니다. 하지만 학습한 내용을 정리하여 수강생들이 플테코 블로그에 공유할 예정이니 참고하시면 좋을 것 같습니다.',
        },
        
    ]
    return (
        <S.FooterContainer>
            <S.UnBox />
            <S.FAQ>
              <h3>FAQ</h3>
              <S.FAQBox>
                {data.map((item)=>{
                  const time = item.id * 0.1
                  return(
                    <S.Q key={item.id} $isAnimation={isAnimation} $time={0.5 + time}>
                      <span><h1>Q. </h1>{item.title}</span>
                      <p>{item.content}</p>
                    </S.Q>
                  )
                })}
              </S.FAQBox>
            </S.FAQ>
            <FooterComponent change={change} />
        </S.FooterContainer>
    )
}