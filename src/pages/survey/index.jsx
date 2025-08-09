import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';

function ScoreBlock({ index, data, onChange }) {
  const { label, min, max, count } = data;
  const [ticks, setTicks] = useState([]);

  const num = (v, def = 0) => {
    const n = parseInt(String(v), 10);
    return Number.isNaN(n) ? def : n;
  };

  useEffect(() => {
    if (min >= max || count < 2) {
      setTicks([]);
      onChange(index, { ...data, scores: [] });
      return;
    }
    const arr = [];
    for (let i = 0; i < count; i++) {
      const t = i === count - 1 ? max : Math.round(min + (i * (max - min)) / (count - 1));
      arr.push(t);
    }
    const uniq = arr.filter((v, i, a) => a.indexOf(v) === i);
    setTicks(uniq);
    onChange(index, { ...data, scores: uniq });
  }, [min, max, count]);

  return (
    <Card>
      <SectionTitleInput
        placeholder="채점 항목 제목을 입력해주세요"
        value={label}
        onChange={(e) => onChange(index, { ...data, label: e.target.value })}
      />
      <RangeRow>
        <RangeBox>
          <NumInput
            type="number"
            value={min}
            onChange={(e) => onChange(index, { ...data, min: num(e.target.value) })}
          />
          <Tilde>~</Tilde>
          <NumInput
            type="number"
            value={max}
            onChange={(e) => onChange(index, { ...data, max: num(e.target.value) })}
          />
        </RangeBox>
        <Meta>
          선택 수
          <strong>
            <NumInputSm
              type="number"
              min={2}
              max={10}
              value={count}
              onChange={(e) => onChange(index, { ...data, count: num(e.target.value, 2) })}
            />
          </strong>
          개
        </Meta>
      </RangeRow>
      <Options>
        {ticks.map((n) => (
          <Option key={n}>
            <Circle />
            <OptionLabel>{n}</OptionLabel>
          </Option>
        ))}
      </Options>
    </Card>
  );
}

export default function Survey() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [graderCount, setGraderCount] = useState('');
  const [items, setItems] = useState([
    { label: '', min: 0, max: 30, count: 5, scores: [] }
  ]);

  const updateItem = (i, next) => setItems((prev) => prev.map((it, idx) => (idx === i ? next : it)));
  const addItem = () =>
    setItems((prev) => [...prev, { label: '', min: 0, max: 30, count: 5, scores: [] }]);

  return (
    <Container>
      <Header />
      <Wrap>
        <Main>
          <Card>
            <TitleInput
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Divider />
            <DescInput
              placeholder="설명을 입력해주세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Row>
              <Meta>채점자 수</Meta>
              <NumInputSm
                type="number"
                placeholder="0"
                value={graderCount}
                onChange={(e) => setGraderCount(e.target.value)}
              />
              명
            </Row>
          </Card>

          {items.map((block, i) => (
            <ScoreBlock key={i} index={i} data={block} onChange={updateItem} />
          ))}

          <Fab onClick={addItem}>＋</Fab>
        </Main>

        <Aside>
          <ScoreCard>
            <ScoreRow>
              <ScoreLabel>총 점수 :</ScoreLabel>
              <ScoreValue>
                {items.length ? Math.max(...items.map((i) => i.max || 0)) : 0}
              </ScoreValue>
            </ScoreRow>
            <SubmitButton>채점 제출</SubmitButton>
          </ScoreCard>
        </Aside>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  background-image: url('/backgroundptc.svg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const Wrap = styled.div`
  padding: 24px 24px 80px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 24px;
`;

const Main = styled.div`
  position: relative;
  display: grid;
  grid-auto-rows: max-content;
  gap: 24px;
`;

const Aside = styled.aside`
  position: relative;
`;

const Card = styled.section`
  background: #fff;
  border: 1px solid #e8eaf2;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(33, 37, 41, 0.04);
`;

const ScoreCard = styled(Card)`
  position: sticky;
  top: 96px;
  padding: 16px;
`;

const TitleInput = styled.input`
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

const DescInput = styled.input`
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

const SectionTitleInput = styled.input`
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

const Divider = styled.div`
  height: 1px;
  background: #eef1f6;
  margin: 14px 0 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6f7a88;
  font-size: 14px;
`;

const Meta = styled.span`
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

const NumInput = styled.input`
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

const NumInputSm = styled(NumInput)`
  width: 48px;
  height: 28px;
`;

const Tilde = styled.span`
  display: inline-block;
  margin: 0 4px;
  color: #98a2b3;
  font-weight: 700;
`;

const RangeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const RangeBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
  align-items: end;
`;

const Option = styled.div`
  text-align: center;
`;

const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  border: 3px solid #3b5bfd;
  background: transparent;
  margin: 0 auto 8px;
`;

const OptionLabel = styled.div`
  font-size: 13px;
  color: #6f7a88;
  font-weight: 600;
`;

const ScoreRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ScoreLabel = styled.div`
  font-size: 14px;
  color: #6f7a88;
`;

const ScoreValue = styled.div`
  background: #f3f6ff;
  border-radius: 8px;
  padding: 6px 10px;
  min-width: 54px;
  text-align: center;
  font-weight: 700;
  color: #2b2f38;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #3b5bfd;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const Fab = styled.button`
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
