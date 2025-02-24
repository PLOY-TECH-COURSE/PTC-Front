import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import icon from "../../assets/sujung.svg";
import book from "../../assets/book.svg";
import like from "../../assets/like.svg";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  background-color: #d1d5db;
  border-radius: 50%;
`;

const Info = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Batch = styled.div`
  color: #4970FB;
  font-size: large;
`;

const Id = styled.div`
  font-size: large;
  margin-left: 10px;
  color: #000000;
`;

const Tie = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Tabs = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  border-top: 2px solid rgb(229, 231, 235);
  padding-top: 20px;
`;

const TabButton = styled.button`
  font-weight: 600;
  width: 5em;
  height: 3em;
  color: ${(props) => (props.active ? "#4970FB" : "#6B7280")}; 
  background: none;
  border: none;
  border-bottom: ${(props) => (props.active ? "2px solid #4970FB" : "none")};
  cursor: pointer;
`;

const Sojung = styled.button`
  margin-left: auto;
  background-color: #4970FB;
  width: 120px;
  height: 30px;
  border: none;
  font-size: 12px;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;
const Inputtag = styled.input`
  margin-left: 10px;
  width: 120px;
  padding: 1px;
  font-size: 14px;
  color: #000; 
  border: 2px solid #ccc; 
  border-radius: 4px; 
  outline: none; 
  
`;
const Inputtag2 = styled.input`
  width: 120px;
  padding: 1px;
  font-size: 12px;
  color: #000; 
  border: 2px solid #ccc; 
  border-radius: 4px; 
  outline: none; 
  
`;
const Mypage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "테스트 유저",
    bio: "자기소개 테스트",
    numberOfPosts: 10,
    numberOfLove: 25,
    profile: "data:image/jpeg;base64,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",
    generation: 3,
    uid: "test_id"
  });

  const [editedId, setEditedId] = useState(userData.uid);
  const [editedBio, setEditedBio] = useState(userData.bio);
  const [activeTab, setActiveTab] = useState("글");

  const handleEditClick = () => {
    if (isEditing) {
      setUserData((prev) => ({
        ...prev,
        uid: editedId,
        bio: editedBio,
      }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Header />
      <Container>
        <ProfileSection>
          <Avatar src={userData.profile} alt="Profile" />
          <Info>
            <Tie>
              <Batch>{userData.generation}기</Batch>
              {isEditing ? (
                <Inputtag
                  type="text" 
                  value={editedId} 
                  onChange={(e) => setEditedId(e.target.value)}
                />
              ) : (
                <Id>{userData.uid}</Id>
              )}
            </Tie>
            <Stats>
              <StatItem>
                <span>이름: {userData.name}</span>
              </StatItem>
              <StatItem>
                <img src={book} alt="book icon" width="14" height="14" />
                <span>글목록: {userData.numberOfPosts}</span>
              </StatItem>
              <span>|</span>
              <StatItem>
                <img src={like} alt="like icon" width="14" height="14" />
                <span>누적 좋아요: {userData.numberOfLove}</span>
              </StatItem>
            </Stats>

            {isEditing ? (
              <Inputtag2 
                type="text" 
                value={editedBio} 
                onChange={(e) => setEditedBio(e.target.value)}
              />
            ) : (
              <p>{userData.bio}</p>
            )}
          </Info>

          <Sojung onClick={handleEditClick}>
            <img src={icon} alt="icon" width="16" height="16" />
            {isEditing ? "프로필 편집" : "프로필 편집"}
          </Sojung>
        </ProfileSection>
        <Tabs>
          <TabButton 
            active={activeTab === "글"} 
            onClick={() => setActiveTab("글")}
          >
            글
          </TabButton>
          <TabButton 
            active={activeTab === "즐겨찾기"} 
            onClick={() => setActiveTab("즐겨찾기")}
          >
            즐겨찾기
          </TabButton>
        </Tabs>
      </Container>
    </>
  );
};

export default Mypage;
