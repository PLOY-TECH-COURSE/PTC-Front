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
      console.log(`자기소개:${intro}, 기술경험:${tech}, 배울점:${study}, 바라는 점:${hope}`);
    })
    .catch((error) => {
      alert("잘못된 요청입니다.\n 신청은 한 번만 가능합니다.");
      console.log(`자기소개:${intro}, 기술경험:${tech}, 배울점:${study}, 바라는 점:${hope}`);
      console.log("Error creating the entry:", error);
    });
}