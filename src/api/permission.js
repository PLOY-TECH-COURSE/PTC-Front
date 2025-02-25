import axiosInstance from "../lib/axiosInstance";

export const getProposerList = async () => {
  try {
    const token = localStorage.getItem("accessToken"); 
    const res = await axiosInstance.get("/permissions", {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰 추가
      },
    });
    const formattedData = res.data.map(user => ({
      ...user,
      auth: user.role === "ROLE_USER" ? "USER" : user.role === "ROLE_STUDENT" ? "STUDENT" : user.role === "ROLE_ADMIN" ? "ADMIN":"SUPERADMIN", 
    }));

    return formattedData;
  } catch (err) {
    console.error("API 요청 실패:", err);
    return [];
  }
};

export const updateUserRole = async (userId, newRole) => {
  try {
    const token = localStorage.getItem("accessToken"); 
    
    const response = await axiosInstance.post(
      "/permissions", 
      {
        id: userId, 
        role: `ROLE_${newRole.toUpperCase()}`, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    return response.data; 
  } catch (error) {
    console.error("권한 변경 실패:", error);
    return null; 
  }
};