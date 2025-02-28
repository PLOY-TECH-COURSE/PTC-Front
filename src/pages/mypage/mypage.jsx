import styled from "styled-components";
import Header from "../../components/header";
import book from "../../assets/book.svg";
import like from "../../assets/like.svg";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { useRecoilValue } from "recoil"; 
import { authAtom } from "../../recoil/authAtom"; 
import { getUserProfile } from "../../api/mypage"; 
import { getFavoritePosts } from "../../api/favortie";  
import { getMyPosts } from "../../api/mywrite";  
import { getMyPage } from "../../api/remypage"; 
import { updateBio } from "../../api/edit";
import PostItem from "../../components/postItem"; 

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
  color: ${(props) => (props.$active === "true" ? "#4970FB" : "#6B7280")}; 
  background: none;
  border: none;
  border-bottom: ${(props) => (props.$active === "true" ? "2px solid #4970FB" : "none")};
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

const NoFavoriteMessage = styled.p`
  text-align: center;
  color: #4970FB;
  font-size: 16px;
  font-weight: bold;
`;

const Mypage = () => {
  const { userId } = useParams(); 
  const loggedInUserId = useRecoilValue(authAtom).uid; 
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false); 
  const [userData, setUserData] = useState(null); 
  const [editedBio, setEditedBio] = useState(""); 
  const [activeTab, setActiveTab] = useState("글"); 
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  
  const isOwnProfile = loggedInUserId === userId;

  useEffect(() => {
    if (!userId) {
      console.warn("userId가 없습니다.");
      return;
    }

    if (isNaN(userId)) {
      const fetchData = async () => {
        const data = await getMyPage(); 
        getFavoritePosts(userId)
          .then((data) => setFavoritePosts(data))
          .catch((error) => console.error("즐겨찾기 가져오기 실패:", error));
        getMyPosts(userId)
          .then((data) => setMyPosts(data))
          .catch((error) => console.error("내가 쓴 글 데이터 가져오기 실패:", error));
        if (data) {
          setUserData(data);
          setEditedBio(data.bio);
        } else {
          console.error("마이페이지 데이터 로드 실패");
        }
      };
      fetchData(); 
    } else {
      getUserProfile(userId)
        .then((data) => {
          setUserData(data);
          setEditedBio(data.bio);
        })
        .catch((error) => console.error("API 요청 실패:", error));
    }
  }, [userId, loggedInUserId]);

  const handleEditClick = () => {
    if (isEditing) {
      setIsEditing(false);
      updateBio(editedBio)  // 프로필 수정 시 호출되는 함수
        .then((response) => {
          console.log("프로필 수정 성공:", response);
          setUserData((prev) => ({
            ...prev,
            bio: editedBio,  // 수정된 bio로 업데이트
          }));
        })
        .catch((error) => {
          console.error("프로필 수정 실패:", error);
        });
    } else {
      setIsEditing(true);  // 수정 시작
    }
  };
  const handlePostClick = (id) => {
    const numericId = Number(id);
    if (isNaN(numericId)) {
        console.error("Invalid ID:", id);
        return;
    }
    navigate(`/post/${numericId}`);
};

  return (
    <>
      <Header />
      <Container>
        <ProfileSection>
          <Avatar src={userData?.profile || ""} alt="Profile" />
          <Info>
            <Tie>
              <Batch>{userData?.generation}기</Batch>
              <Id>{userData?.uid}</Id>
            </Tie>
            <Stats>
              <StatItem>
                <span>이름: {userData?.name}</span>
              </StatItem>
              <StatItem>
                <img src={book} alt="book icon" width="14" height="14" />
                <span>글목록: {userData?.numberOfPosts}</span>
              </StatItem>
              <StatItem>
                <img src={like} alt="like icon" width="14" height="14" />
                <span>누적 좋아요: {userData?.numberOfLove}</span>
              </StatItem>
            </Stats>
            {isEditing ? (
              <Inputtag
                type="text"
                value={editedBio}
                onChange={(e) => setEditedBio(e.target.value)} 
              />
            ) : (
              <p>{userData?.bio}</p> 
            )}
          </Info>

          {isOwnProfile && (
            <Sojung onClick={handleEditClick}>
              {isEditing ? "완료" : "프로필 편집"}
            </Sojung>
          )}
        </ProfileSection>

        <Tabs>
          <TabButton $active={activeTab === "글" ? "true" : "false"} onClick={() => setActiveTab("글")}>
            글
          </TabButton>
          {isOwnProfile && (
            <TabButton $active={activeTab === "즐겨찾기" ? "true" : "false"} onClick={() => setActiveTab("즐겨찾기")}>
              즐겨찾기
            </TabButton>
          )}
        </Tabs>

        {activeTab === "글" && (
          <div>
            {myPosts.length > 0 ? (
              myPosts.map((post) => <PostItem key={post.documents_id} post={post} />)
            ) : (
              <NoFavoriteMessage>내가 쓴 글이 없습니다.</NoFavoriteMessage>
            )}
          </div>
        )}

        {activeTab === "즐겨찾기" && (
          <div>
            {favoritePosts.length > 0 ? (
              favoritePosts.map((post) => (
<PostItem key={post.documents_id} post={post} onClick={handlePostClick} />
              ))
            ) : (
              <NoFavoriteMessage>즐겨찾기한 글이 없습니다.</NoFavoriteMessage>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default Mypage;
