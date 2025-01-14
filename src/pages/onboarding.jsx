import { SectionsContainer, Section } from 'react-fullpage';
import styled from "styled-components";

const Main = () => {
    // Fullpage 스크롤을 적용할 섹션들의 내용을 배열로 정의합니다.
    const sections = [
        { content: 'Section 1 content' },
        { content: 'Section 2 content' },
        { content: 'Section 3 content' },
    ];
    // SectionsContainer에 사용할 options 설정을 정의합니다.
    const options = {
        sectionClassName: 'section', // 각 섹션에 적용될 클래스 이름을 설정합니다.
        anchors: ['section1', 'section2', 'section3'], // 각 섹션의 앵커를 설정합니다.
        scrollBar: false, // 스크롤 바를 표시할지 여부를 설정합니다.
        navigation: false, // 페이지 내비게이션을 표시할지 여부를 설정합니다.
        verticalAlign: false, // 섹션을 수직으로 정렬할지 여부를 설정합니다.
        sectionPaddingTop: '0', // 각 섹션의 상단 여백을 설정합니다.
        sectionPaddingBottom: '0', // 각 섹션의 하단 여백을 설정합니다.
    };
    return (
        <div>
            <SectionsContainer {...options}>
                {sections.map((section, index) => (
                    <Section key={index}>
                        <SectionContainer >{section.content}</SectionContainer>
                    </Section>
                ))}
            </SectionsContainer>
        </div>
    );
};
export default Main;

export const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
    border: 1px solid black;
`;