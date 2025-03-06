import axiosInstance from "../lib/axiosInstance";

export const getProposerList = async () => {
  try {
    const token = localStorage.getItem("accessToken"); 
    const res = await axiosInstance.get("/permissions", {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰 추가
      },
    });
    const formattedData = res.data
    .filter(user => user.role !== "ROLE_SUPERADMIN")
    .map(user => ({
      ...user,
			id:user.id,
      auth: user.role === "ROLE_USER" ? "USER" : user.role === "ROLE_STUDENT" ? "STUDENT" : user.role === "ROLE_ADMIN" ? "ADMIN":"SUPERADMIN", 
    }));
    console.log("유저 데이터 :",formattedData);
    return formattedData;
  } catch (err) {
    console.error("사용자 조회 API 요청 실패:", err);
    return [];
  }
};

export const updateUserRole = async (userId, newRole) => {
  try {
    const token = localStorage.getItem("accessToken"); 
    const requestData = {
      id: userId, 
      role: `ROLE_${newRole.toUpperCase()}`, 
    };
    console.log("요청 데이터:", requestData);

    const response = await axiosInstance.patch(
      "/permissions", 
      requestData,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    console.log("서버 응답:", response.data);
    return response.data; 
  } catch (error) {
    if (error.response) {
      console.error("서버 응답 에러:", error.response.data);
    } else {
      console.error("권한 변경 실패:", error);
    }
    return null; 
  }
};
