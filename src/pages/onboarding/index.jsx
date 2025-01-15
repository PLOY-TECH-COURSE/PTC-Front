import { SectionsContainer, Section } from 'react-fullpage';
import First from "../../components/onboarding/first";
import PTCIntroduce from "../../components/onboarding/PTC-introduce/index.jsx";
import TrackIntroduce from "../../components/onboarding/track-introduce/index.jsx";
import TeamIntroduce from "../../components/onboarding/team-introduce/index.jsx";

const Main = () => {

    // SectionsContainer에 사용할 options 설정을 정의합니다.
    const options = {
        sectionClassName: 'section', // 각 섹션에 적용될 클래스 이름을 설정합니다.
        anchors: ['PloyTechCourse', '소개', '트랙소개', '팀소개'], // 각 섹션의 앵커를 설정합니다.
        scrollBar: false, // 스크롤 바를 표시할지 여부를 설정합니다.
        navigation: false, // 페이지 내비게이션을 표시할지 여부를 설정합니다.
        verticalAlign: false, // 섹션을 수직으로 정렬할지 여부를 설정합니다.
        sectionPaddingTop: '0', // 각 섹션의 상단 여백을 설정합니다.
        sectionPaddingBottom: '0', // 각 섹션의 하단 여백을 설정합니다.
    };

    // Fullpage 스크롤을 적용할 섹션들의 내용을 배열로 정의합니다.
    const sections = [
        { component: <First /> },
        { component: <PTCIntroduce /> },
        { component: <TrackIntroduce /> },
        {component: <TeamIntroduce />}
    ];

    return (
        <div>
            <SectionsContainer {...options}>
                {sections.map((section, index) => (
                    <Section key={index}>
                        {section.component}
                    </Section>
                ))}
            </SectionsContainer>
        </div>
    );
};
export default Main;
