import axiosInstance from "../lib/axiosInstance";



export const uploadImg = async (fileData) => {
  try {
    const res = await axiosInstance.post('/S3', fileData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    if (res.status === 200) {
      return res.data;  // 서버에서 반환된 URL을 반환
    }
  } catch (err) {
    console.log("이미지 업로드 실패", err);
    return "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcckdnY%2FbtqDogEdAS4%2F7kJZCk4ZhTYhNQMl6RkIU1%2Fimg.png";
  }
};

export const uploadImg1 = async (fileData) => {
    if (!fileData || !fileData.profile) {  // profile 속성에 URL이 없으면 처리하지 않음
      console.log("업로드할 이미지가 없습니다.");
      return null;  // 비어있는 경우 null 반환
    }
  
    try {
      // fileData.profile에서 URL을 받아와서 처리
      const profileUrl = fileData.profile;  // profile에 담긴 URL 처리
      console.log("업로드된 프로필 이미지 URL:", profileUrl);
  
      // 서버로 전송 (profile만 보내기)
      const res = await axiosInstance.post('/profile', { profile: profileUrl });
      if (res.status === 200) {
        return profileUrl;  // 프로필 URL을 반환
      }
    } catch (error) {
      console.error("프로필 이미지 업로드 실패", error);
      return null;  // 실패 시 null 반환
    }
  };
  