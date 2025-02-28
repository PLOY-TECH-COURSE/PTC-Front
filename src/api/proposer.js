import axiosInstance from "../lib/axiosInstance";

export const getProposerList = async () => {
  try {
    const token = localStorage.getItem("accessToken"); 
    const res = await axiosInstance.get("/applications", {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    const formattedData = res.data.map(user => ({
      ...user,
      intro: user.introduction,
      promise: user.resolution,
    }));

    return formattedData;
  } catch (err) {
    console.error("API 요청 실패:", err);
    return [];
  }
};
export const deleteProposer = async (id) => {
  try {
      const token = localStorage.getItem("accessToken");
      const res = await axiosInstance.post(`/decline`, {
          headers: {
              Authorization: `Bearer ${token}`
          },
          id:id
      });
      return res.data || { success: res.status === 200 || res.status === 204 };
  } catch (error) {
      console.error("신청자 거부 실패", error.response?.data || error);
      return null;
  }
};
export const approveProposer = async (id,name) => {
  try {
      const token = localStorage.getItem("accessToken");
      const res = await axiosInstance.post(`/accept`, {
          headers: {
              Authorization: `Bearer ${token}`
          },
          userId:id,
          generation: 1,
          trackId: 1
      });
			alert(`${name}이 신청되었습니다.`);
      return res.data || { success: res.status === 200 || res.status === 204 };
  } catch (error) {
      console.error("신청자 승인 실패", error.response?.data || error);
      return null;
  }
};
