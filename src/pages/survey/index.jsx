import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import * as S from './style';

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
    <S.Card>
      <S.SectionTitleInput
        placeholder="채점 항목 제목을 입력해주세요"
        value={label}
        onChange={(e) => onChange(index, { ...data, label: e.target.value })}
      />
      <S.RangeRow>
        <S.RangeBox>
          <S.NumInput
            type="number"
            value={min}
            onChange={(e) => onChange(index, { ...data, min: num(e.target.value) })}
          />
          <S.Tilde>~</S.Tilde>
          <S.NumInput
            type="number"
            value={max}
            onChange={(e) => onChange(index, { ...data, max: num(e.target.value) })}
          />
        </S.RangeBox>
        <S.Meta>
          선택 수
          <strong>
            <S.NumInputSm
              type="number"
              min={2}
              max={10}
              value={count}
              onChange={(e) => onChange(index, { ...data, count: num(e.target.value, 2) })}
            />
          </strong>
          개
        </S.Meta>
      </S.RangeRow>
      <S.Options>
        {ticks.map((n) => (
          <S.Option key={n}>
            <S.Circle />
            <S.OptionLabel>{n}</S.OptionLabel>
          </S.Option>
        ))}
      </S.Options>
    </S.Card>
  );
}

export default function Survey() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [graderCount, setGraderCount] = useState('');
  const [items, setItems] = useState([{ label: '', min: 0, max: 30, count: 5, scores: [] }]);

  const updateItem = (i, next) =>
    setItems((prev) => prev.map((it, idx) => (idx === i ? next : it)));

  const addItem = () =>
    setItems((prev) => [...prev, { label: '', min: 0, max: 30, count: 5, scores: [] }]);

  return (
    <S.Container>
      <Header />
      <S.Wrap>
        <S.Main>
          <S.Card>
            <S.TitleInput
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <S.Divider />
            <S.DescInput
              placeholder="설명을 입력해주세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <S.Row>
              <S.Meta>채점자 수</S.Meta>
              <S.NumInputSm
                type="number"
                placeholder="0"
                value={graderCount}
                onChange={(e) => setGraderCount(e.target.value)}
              />
              명
            </S.Row>
          </S.Card>

          {items.map((block, i) => (
            <ScoreBlock key={i} index={i} data={block} onChange={updateItem} />
          ))}

          <S.Fab onClick={addItem}>＋</S.Fab>
        </S.Main>

        <S.Aside>
          <S.ScoreCard>
            <S.ScoreRow>
              <S.ScoreLabel>총 점수 :</S.ScoreLabel>
              <S.ScoreValue>
                {items.length ? Math.max(...items.map((i) => i.max || 0)) : 0}
              </S.ScoreValue>
            </S.ScoreRow>
            <S.SubmitButton>채점 제출</S.SubmitButton>
          </S.ScoreCard>
        </S.Aside>
      </S.Wrap>
    </S.Container>
  );
}
