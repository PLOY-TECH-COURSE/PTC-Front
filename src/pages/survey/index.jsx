import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import * as S from './style';
import { createSurvey } from '../../api/survey';

function clampNumber(n, { min = -Infinity, max = Infinity, fallback = 0 } = {}) {
  const v = Number.parseInt(String(n), 10);
  if (Number.isNaN(v)) return fallback;
  return Math.max(min, Math.min(max, v));
}

function ScoreBlock({ index, data, onChange }) {
  const { label, min, max, count } = data;
  const [ticks, setTicks] = useState([]);

  const handleLabel = (e) => onChange(index, { ...data, label: e.target.value });

  const handleMin = (e) => {
    const nextMin = clampNumber(e.target.value, { min: 0, fallback: 0 });
    const fixedMax = Math.max(nextMin, Number.isFinite(max) ? max : nextMin);
    onChange(index, { ...data, min: nextMin, max: fixedMax });
  };

  const handleMax = (e) => {
    const raw = clampNumber(e.target.value, { fallback: min });
    const nextMax = Math.max(raw, min);
    onChange(index, { ...data, max: nextMax });
  };

  const handleCount = (e) => {
    const next = clampNumber(e.target.value, { min: 2, max: 10, fallback: 2 });
    onChange(index, { ...data, count: next });
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
        onChange={handleLabel}
      />
      <S.RangeRow>
        <S.RangeBox>
          <S.NumInput type="number" min={0} value={min} onChange={handleMin} />
          <S.Tilde>~</S.Tilde>
          <S.NumInput type="number" min={min} value={max} onChange={handleMax} />
        </S.RangeBox>
        <S.Meta>
          선택 수
          <strong>
            <S.NumInputSm type="number" min={2} max={10} value={count} onChange={handleCount} />
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

  const totalScore = items.reduce((sum, it) => sum + (Number(it.max) || 0), 0);

  const handleSubmit = async () => {
    const questions = items
      .map((it) => ({
        question: String(it.label ?? '').trim(),
        scores: Array.isArray(it.scores) ? it.scores : [],
      }))
      .filter((q) => q.question.length > 0);

    const g = Number(graderCount);
    if (!title.trim()) return alert('제목을 입력하세요.');
    if (!Number.isFinite(g) || g < 0) return alert('채점자 수를 올바르게 입력하세요.');
    if (questions.length === 0) return alert('최소 1개 이상의 문항이 필요합니다.');
    for (let i = 0; i < questions.length; i++) {
      const s = questions[i].scores;
      if (!Array.isArray(s) || s.length < 2 || s.length > 10) {
        return alert(`${i + 1}번 문항의 점수 개수는 2~10개여야 합니다.`);
      }
    }

    const ok = await createSurvey(title, g, desc, questions);
    if (ok) alert('채점표가 생성되었습니다.');
    else alert('생성에 실패했습니다.');
  };

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
                min={0}
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
              <S.ScoreValue>{totalScore}</S.ScoreValue>
            </S.ScoreRow>
            <S.SubmitButton onClick={handleSubmit}>설문 제출</S.SubmitButton>
          </S.ScoreCard>
        </S.Aside>
      </S.Wrap>
    </S.Container>
  );
}
