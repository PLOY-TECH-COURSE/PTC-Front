import axiosInstance from "../lib/axiosInstance";

export const ApplyAPI = async ({intro, promise}) =>{
	console.log(intro,promise);
	await axiosInstance.post(`/applications`, {
		introduction: intro,
    resolution: promise,
    })
    .then((/*response*/) => {
      console.log("신청값이 제대로 넘어갔습니다.", { intro, promise });
    })
    .catch((error) => {
      console.log("Error creating the entry:", error);
    });
}

