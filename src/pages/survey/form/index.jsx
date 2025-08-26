import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import * as S from './style';
import Header from '../../../components/header/index';
import { getSurvey, submitSurvey } from '../../../api/survey';

const GradingPage = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  
  if (isNaN(parseInt(formId))) {
    return <Navigate to="/error" replace />;
  }

  const [gradingData, setGradingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedScores, setSelectedScores] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (gradingData === null && !loading) {
      alert("데이터를 불러올 수 없습니다.");
      navigate('/survey/list');
    }
  }, [gradingData, loading, navigate]);

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const data = await getSurvey(parseInt(formId));
        setGradingData(data);
      } catch (err) {
        alert('순서가 선택되었는지 확인해주세요');
        navigate('/survey/list');
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

  const handleSubmit = async () => {
    const allAnswered = gradingData.questions.every(
      question => selectedScores[question.questionId] !== undefined
    );
    
    if (allAnswered) {
      try {
        const answers = Object.entries(selectedScores).map(([questionId, score]) => ({
          question_id: parseInt(questionId),
          score: score
        }));

        const submitData = {
          student_id: gradingData.student_id || 0,
          answers: answers
        };

        console.log('제출할 데이터:', submitData);
        
        const result = await submitSurvey(formId, submitData);
        
        if (result) {
          setIsSubmitted(true);
          alert('채점이 성공적으로 제출되었습니다.');
          navigate('/survey/list');
        } else {
          alert('채점 제출에 실패했습니다.');

        }
      } catch (error) {
        console.error('채점 제출 오류:', error);
        alert('채점 제출 중 오류가 발생했습니다.');
      }
    }
  };

  if (!gradingData) {
    navigate('/survey/list');
    return null;
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