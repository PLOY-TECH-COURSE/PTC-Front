import styled from 'styled-components';

export const GradesPage = styled.div`
  height: 100vh;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const DecorationCircle1 = styled.div`
  position: absolute;
  top: 13vh;
  left: 0;
  width: 45vw;
  height: 81vh;
  background: linear-gradient(180deg, rgba(150, 173, 253, 1) 0%, rgba(97, 132, 255, 1) 100%);
  border-radius: 50%;
  z-index: 0;
`;

export const DecorationCircle2 = styled.div`
  position: absolute;
  top: 13vh;
  left: 33vw;
  width: 14vw;
  height: 25vh;
  background: rgba(30, 80, 255, 0.2);
  border-radius: 50%;
  z-index: 0;
`;

export const DecorationCircle3 = styled.div`
  position: absolute;
  top: 40vh;
  left: 82vw;
  width: 17vw;
  height: 31vh;
  background: rgba(150, 173, 253, 0.2);
  border-radius: 50%;
  z-index: 0;
`;

export const DecorationCircle4 = styled.div`
  position: absolute;
  top: 52vh;
  left: 96vw;
  width: 4vw;
  height: 8vh;
  background: rgba(150, 173, 253, 0.4);
  border-radius: 50%;
  z-index: 0;
`;

export const DecorationCircle5 = styled.div`
  position: absolute;
  top: 44vh;
  left: 117vw;
  width: 6vw;
  height: 10vh;
  background: rgba(119, 149, 255, 0.4);
  border-radius: 50%;
  z-index: 0;
`;

export const DecorationRectangle = styled.div`
  position: absolute;
  top: 0;
  left: 101vw;
  width: 27vw;
  height: 52vh;
  background: linear-gradient(90deg, rgba(227, 233, 255, 1) 0%, rgba(158, 179, 253, 1) 100%);
  border-radius: 0px 100px 100px 0px;
  z-index: 0;
`;

export const CompletionButton = styled.button`
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  background: #4970FB;
  color: #ffffff;
  border: none;
  border-radius: 0.625rem;
  padding: 0.75rem 0;
  width: 48vw;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  z-index: 20;
  
  &:hover {
    background: #3b5bdb;
  }
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 10;
  max-width: 48vw;
  margin: 0 auto;
  padding: 7vh 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  height: calc(100vh - 7vh);
  overflow-y: auto;
  padding-bottom: 6rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GradingInfoCard = styled.div`
  width: 100%;
  height: auto;
  min-height: 12.5rem;
  border: 0.0625rem solid #A2A2A2;
  border-radius: 1.0625rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 2.5rem 1rem 1rem 1rem;
`;

export const CardTitle = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  color: #000000;
  margin: 0 0 1.2rem 0;
`;

export const CardSubtitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #797979;
  margin-top: 1rem;
`;

export const CardDescription = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #797979;
  margin-top: 0.7rem;
  line-height: 1.5;
`;

export const CardTopBorder = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 3vh;
  background: #4970FB;
  border-radius: 0.9rem 0.9rem 0px 0px;
`;

export const CardDivider = styled.div`
  position: absolute;
  bottom: 6.88rem;
  left: 1rem;
  width: 44vw;
  height: 0;
  border: 0.06rem solid #4970FB;
`;

export const QuestionCard = styled.div`
  width: 100%;
  border: 0.06rem solid #A2A2A2;
  border-radius: 1.06rem;
  background: #ffffff;
  padding: 2.13rem 1.94rem 1.88rem 1.94rem;
`;

export const QuestionHeader = styled.div`
  margin-bottom: 1.88rem;
`;

export const QuestionNumber = styled.span`
  display: block;
  font-weight: 600;
  font-size: 1.125rem;
  color: #4970FB;
  margin-bottom: 0.625rem;
`;

export const QuestionText = styled.h3`
  font-weight: 500;
  font-size: 1.25rem;
  color: #000000;
  margin: 0;
  line-height: 1.4;
`;

export const ScoreSelectionSection = styled.div`
  margin-top: 1.25rem;
`;

export const ScoreTitle = styled.h4`
  font-weight: 500;
  font-size: 1.13rem;
  color: #000000;
  margin: 0 0 1.56rem 0;
`;

export const ScoreOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.56rem;
  margin-bottom: 1.88rem;
`;

export const ScoreOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScoreCircle = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  border: 0.1875rem solid #4970FB;
  border-radius: 50%;
  background: ${props => props.selected ? '#4970FB' : 'transparent'};
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.selected ? '3.125rem' : '2.5rem'};
    height: ${props => props.selected ? '3.125rem' : '2.5rem'};
    border-radius: 50%;
    background: ${props => props.selected ? '#4970FB' : 'transparent'};
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ScoreLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 7px;
  padding: 0 2.4rem;
`;

export const ScoreLabel = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
  color: #000000;
  text-align: center;
`;

export const SummaryCard = styled.div`
  width: 100%;
  border: 0.0625rem solid #A2A2A2;
  border-radius: 1.0625rem;
  background: #ffffff;
  padding: 1.875rem 1.9375rem;
`;

export const SummaryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
`;

export const SummaryItem = styled.div`
  text-align: center;
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 0.75rem;
`;

export const SummaryLabel = styled.div`
  font-weight: 500;
  font-size: 0.88rem;
  color: #797979;
  margin-bottom: 0.63rem;
`;

export const SummaryValue = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #4970FB;
`;

export const SubmitButton = styled.button`
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.disabled ? '#cccccc' : '#4970FB'};
  color: #ffffff;
  border: none;
  border-radius: 0.625rem;
  padding: 0.75rem 0;
  width: 48vw;
  font-weight: 700;
  font-size: 1rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  z-index: 20;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: ${props => props.disabled ? '#cccccc' : '#3b5bdb'};
  }
`;


