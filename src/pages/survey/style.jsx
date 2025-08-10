import styled from 'styled-components';

export const Container = styled.div`
  position: relative;      
  min-height: 100vh;      
  isolation: isolate;      

  &::before {
    content: "";                    
    position: fixed;                 
    top: 0;                          
    right: 0;                        
    bottom: 0;                       
    left: 0;                         
    z-index: -1;                     
    background-image: url('/backgroundptc.svg'); 
    background-position: center;     
    background-repeat: no-repeat;   
    background-size: cover;          
  }
`;


export const Wrap = styled.div`
  padding: 24px 24px 80px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 24px;
`;

export const Main = styled.div`
  position: relative;
  display: grid;
  grid-auto-rows: max-content;
  gap: 24px;
`;

export const Aside = styled.aside`
  position: relative;
`;

export const Card = styled.section`
  background: #fff;
  border: 1px solid #e8eaf2;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(33, 37, 41, 0.04);
`;

export const ScoreCard = styled(Card)`
  position: sticky;
  top: 96px;
  padding: 16px;
`;

export const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 600;
  color: #2b2f38;
  &::placeholder {
    color: #b8bec9;
    font-weight: 500;
  }
`;

export const DescInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  color: #666e7a;
  margin-top: 12px;
  &::placeholder {
    color: #c2c8d2;
  }
`;

export const SectionTitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  color: #2b2f38;
  margin-bottom: 14px;
  &::placeholder {
    color: #c2c8d2;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #eef1f6;
  margin: 14px 0 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6f7a88;
  font-size: 14px;
`;

export const Meta = styled.span`
  color: #6f7a88;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  strong {
    color: #3b5bfd;
    font-weight: 600;
  }
`;

export const NumInput = styled.input`
  width: 64px;
  height: 32px;
  border: 1px solid #e3e7ef;
  border-radius: 8px;
  padding: 0 8px;
  text-align: center;
  font-weight: 700;
  color: #2b2f38;
  background: #f9fbff;
`;

export const NumInputSm = styled(NumInput)`
  width: 48px;
  height: 28px;
`;

export const Tilde = styled.span`
  display: inline-block;
  margin: 0 4px;
  color: #98a2b3;
  font-weight: 700;
`;

export const RangeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

export const RangeBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
  align-items: end;
`;

export const Option = styled.div`
  text-align: center;
`;

export const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  border: 3px solid #3b5bfd;
  background: transparent;
  margin: 0 auto 8px;
`;

export const OptionLabel = styled.div`
  font-size: 13px;
  color: #6f7a88;
  font-weight: 600;
`;

export const ScoreRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ScoreLabel = styled.div`
  font-size: 14px;
  color: #6f7a88;
`;

export const ScoreValue = styled.div`
  background: #f3f6ff;
  border-radius: 8px;
  padding: 6px 10px;
  min-width: 54px;
  text-align: center;
  font-weight: 700;
  color: #2b2f38;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #3b5bfd;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

export const Fab = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -24px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: #3b5bfd;
  color: #fff;
  font-size: 22px;
  line-height: 1;
  box-shadow: 0 6px 18px rgba(59, 91, 253, 0.25);
  cursor: pointer;
`;
