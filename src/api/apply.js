import axiosInstance from "../lib/axiosInstance";

export const ApplyAPI = async ({intro, promise}) =>{
	console.log(intro,promise);
	await axiosInstance.post(`/applications`, {
		introduction: intro,
    resolution: promise,
    })
    .then((/*response*/) => {
      alert("신청이 완료되었습니다.");
      console.log("신청값이 제대로 넘어갔습니다.", { intro, promise });
    })
    .catch((error) => {
      alert("잘못된 요청입니다.\n 신청은 한 번만 가능합니다.");
      console.log("Error creating the entry:", error);
    });
}

