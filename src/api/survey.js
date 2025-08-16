import axiosInstance from '../lib/axiosInstance.js';

export const createSurvey = async (title, graderCounts, description, questions) => {
  try {
    const res = await axiosInstance.post('/grades/forms', {
      title: title,
      grader_counts: graderCounts,
      description: description,
      questions: questions, 
    });
    return res.status === 200 || res.status === 201;
  } catch (error) {
    console.error('tld에러에러 생성 오류:', error);
    return false;
  }
};

export const getSurvey = async (form_id) => {
  try {
      const res = await axiosInstance.get(`/grades/forms/${form_id}`);
      if (res.status !== 200) {
          return Promise.reject({
              status: res.status,
              message: res.message,
          });
      }
      return res.data;
  }
  catch (err) {
      return Promise.reject(err);
  }
};