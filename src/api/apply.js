import axiosInstance from "../lib/axiosInstance";

export const ApplyAPI = async ({intro,tech,study,hope}) =>{
	await axiosInstance.post(`/applications`, {
    introduction: intro,
    skill: tech,
    study: study,
    expectation: hope
    })
    .then((/*response*/) => {
      alert("신청이 완료되었습니다.");
    })
    .catch((error) => {
      alert("잘못된 요청입니다.\n 신청은 한 번만 가능합니다.");
      console.log("Error creating the entry:", error);
    });
}