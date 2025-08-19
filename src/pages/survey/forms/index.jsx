import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import * as S from './style';
import Header from '../../../components/header/index';
import { getSurvey } from '../../../api/survey';

const GradingPage = () => {
  const { formId } = useParams();
  
  if (isNaN(parseInt(formId))) {
    return <Navigate to="/error" replace />;
  }

  // const gradingData = {
  //   formId: parseInt(formId),
  //   title: "최종 발표 채점표(이우린)",
  //   student_id: 17,
  //   grader_counts: 7,
  //   description: "dddd",
  //   questions: [
  //     {
  //       questionId: 1,
  //       question: "개발을 완성도 있게 하였는가?",
  //       scores: [0, 8, 15, 23, 30]
  //     },
  //     {
  //       questionId: 2,
  //       question: "발표를 적절하게 하였는가?",
  //       scores: [0, 7, 13, 20]
  //     }
  //   ]
  // };

  const [gradingData, setGradingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedScores, setSelectedScores] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        setLoading(true);
        const data = await getSurvey(parseInt(formId));
        setGradingData(data);
        setError(null);
      } catch (err) {
        console.error('설문 데이터 가져오기 실패:', err);
        setError(err.message || '데이터를 가져오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchSurveyData();
  }, [formId]);

  const handleScoreSelect = (questionId, score) => {
    setSelectedScores(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const handleSubmit = () => {
    const allAnswered = gradingData.questions.every(
      question => selectedScores[question.questionId] !== undefined
    );
    
    if (allAnswered) {
      setIsSubmitted(true);
      console.log('제출된 점수:', selectedScores);
      console.log('Form ID:', formId);
    }
  };

  if (error || !gradingData) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>오류가 발생했습니다. 순서를 선택하였는지 확인해 주세요</h2>
        <p>{error || '데이터를 불러올 수 없습니다.'}</p>
      </div>
    );
  }

  const isAllAnswered = gradingData.questions.every(
    question => selectedScores[question.questionId] !== undefined
  );

  const totalScore = Object.values(selectedScores).reduce((sum, score) => sum + score, 0);
  const maxPossibleScore = gradingData.questions.reduce((sum, question) => 
    sum + Math.max(...question.scores), 0
  );

  return (
    <S.GradesPage>
      <S.BackgroundImage />

      <Header />

      <S.MainContent>
        <S.GradingInfoCard>
          <S.CardHeader>
            <S.CardTitle>{gradingData.title}</S.CardTitle>
            <S.CardSubtitle>채점자 : {gradingData.grader_counts}명</S.CardSubtitle>
            <S.CardDescription>
              {gradingData.description}
            </S.CardDescription>
          </S.CardHeader>
          <S.CardTopBorder />
          <S.CardDivider />
        </S.GradingInfoCard>

        {gradingData.questions.map((question, index) => (
          <S.QuestionCard key={question.questionId}>
            <S.QuestionHeader>
              <S.QuestionText>{question.question}</S.QuestionText>
            </S.QuestionHeader>
            
            <S.ScoreSelectionSection>
              <S.ScoreOptions>
                {question.scores.map((score) => (
                  <S.ScoreOption
                    key={score}
                    selected={selectedScores[question.questionId] === score}
                    onClick={() => handleScoreSelect(question.questionId, score)}
                  >
                    <S.ScoreCircle selected={selectedScores[question.questionId] === score} />
                  </S.ScoreOption>
                ))}
              </S.ScoreOptions>
              
              <S.ScoreLabels>
                {question.scores.map((score) => (
                  <S.ScoreLabel key={score}>
                    {score}
                  </S.ScoreLabel>
                ))}
              </S.ScoreLabels>
            </S.ScoreSelectionSection>
          </S.QuestionCard>
        ))}

        <S.SummaryCard>
          <S.SummaryContent>
            <S.SummaryItem>
              <S.SummaryLabel>선택된 점수</S.SummaryLabel>
              <S.SummaryValue>{totalScore}점</S.SummaryValue>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryLabel>최대 가능 점수</S.SummaryLabel>
              <S.SummaryValue>{maxPossibleScore}점</S.SummaryValue>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryLabel>답변 완료</S.SummaryLabel>
              <S.SummaryValue>
                {Object.keys(selectedScores).length} / {gradingData.questions.length}
              </S.SummaryValue>
            </S.SummaryItem>
          </S.SummaryContent>
        </S.SummaryCard>
      </S.MainContent>

      {!isSubmitted && (
        <S.SubmitButton 
          disabled={!isAllAnswered}
          onClick={handleSubmit}
        >
          채점 제출
        </S.SubmitButton>
      )}
    </S.GradesPage>
  );
};

export default GradingPage;
