import styled from "styled-components";
import Header from "../../components/header";
import book from "../../assets/book.svg";
import like from "../../assets/like.svg";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue} from "recoil";
import {getUserProfile} from "../../api/mypage";
import { getFavoritePosts } from "../../api/favortie";
import { getMyPosts } from "../../api/mywrite";
import { getMyPage } from "../../api/remypage";
import { updateBio } from "../../api/edit";
import { uploadImg,uploadImg1 } from "../../api/profile";
import PostItem from "../../components/postItem";
import Confirm from "../../components/modal/confirm/index.jsx";
import { authAtom } from "../../recoil/authAtom.js";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  ${({ isOwnProfile }) => 
    isOwnProfile && `
      justify-content: space-between;
    `
  }
`;


const Avatar = styled.img`
  width: 96px;
  height: 96px;
  background-color: #d1d5db;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: opacity(0.7);
  }
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

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 20px;
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
  border-bottom: ${(props) =>
    props.$active === "true" ? "2px solid #4970FB" : "none"};
  cursor: pointer;
`;

const Sojung = styled.button`
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
  display: none;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const NoFavoriteMessage = styled.p`
  text-align: center;
  color: #4970FB;
  font-size: 16px;
  font-weight: bold;
`;

const Delete = styled.div`
  background-color: #e84848;
  margin-top: 10px;
  width: 120px;
  height: 30px;
  border: none;
  color: white;
  font-size: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`

const Mypage = () => {
  const { userId } = useParams();
  const location = useLocation();
  const { uid } = location.state || {};
  const loggedInUserId = useRecoilValue(authAtom).role;
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [editedBio, setEditedBio] = useState("");
  const [activeTab, setActiveTab] = useState("글");
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [profileImage, setProfileImage] = useState(userData?.profile || "");
  const role = useRecoilValue(authAtom).role;
  const user = useRecoilValue(authAtom);
  const isOwnProfile = loggedInUserId === userId;

  useEffect(() => {
    if (!userId) {
      console.warn("userId가 없습니다.");
      return;
    }

    if (isNaN(userId)) {
      const fetchData = async () => {
        const data = await getMyPage();
        setProfileImage(data?.profile || "");
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
          setProfileImage(data?.profile || "");
          setEditedBio(data.bio);
        })
        .catch((error) => console.error("API 요청 실패:", error));
      getMyPosts(uid)
        .then((data) => setMyPosts(data))
        .catch((error) => console.error("내가 쓴 글 데이터 가져오기 실패:", error));
    }
  }, [userId, loggedInUserId]);

  const handleEditClick = () => {
    if (isEditing) {
      setIsEditing(false);
      updateBio(editedBio)
        .then((response) => {
          console.log("프로필 수정 성공:", response);
          setUserData((prev) => ({
            ...prev,
            bio: editedBio,
          }));
        })
        .catch((error) => {
          console.error("프로필 수정 실패:", error);
        });
    } else {
      setIsEditing(true);
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

  const handleProfileClick = async (event) => {
    if (!isOwnProfile) return;
    const file = event.target.files[0];
  
    if (file) {
      const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedImageTypes.includes(file.type)) {
        alert("이미지 파일만 업로드할 수 있습니다. (jpg, png, jpeg)");
        return;
      }
  
      const fileData = new FormData();
      fileData.append("file", file);
  
      try {

        const imageUrl = await uploadImg(fileData);

        if (imageUrl) {
          const profileData = { "profile" : imageUrl.url };  // profile에 URL만 담기
          const result = await uploadImg1(profileData); // profile 데이터로 처리
          if (result) {
            console.log("프로필 이미지 업로드 성공:", result);
            window.location.reload();
          } else {
            alert("프로필 이미지 업로드 실패");
          }
        } else {
          alert("이미지 업로드 실패");
        }
      } catch (error) {
        console.error("이미지 업로드 실패", error);
        alert("이미지 업로드 실패");
      }
    }
  };

  const [isModal, setIsModal] = useState(false);
  const handleDeleteClick = () =>{
    setIsModal(true);
  }
  
  return (
    <>
      <Header />
      {isModal && <Confirm setIsModal={setIsModal} />}
      <Container>
        <ProfileSection>
          <Avatar
            src={profileImage || ""}
            alt="Profile"
            disabled={!isOwnProfile}
            onClick={() => document.getElementById("fileInput").click()} 
          />
          <Inputtag
            id="fileInput"
            type="file"
            disabled={!isOwnProfile}
            onChange={handleProfileClick} 
          />
          <Info>
            <Tie>
              <Batch>      {role === "ROLE_ADMIN"
        ? "멘토"
        : userData?.generation 
          ? `${userData.generation}기` 
          : "유저"
      }
    </Batch>

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
            <input
              type="text"
              value={editedBio}
              onChange={(e) => setEditedBio(e.target.value)}
              style={{
                fontSize: "16px",
                padding: "4px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          ) : (
            <p onClick={() => isOwnProfile && setIsEditing(true)} style={{ cursor: isOwnProfile ? "pointer" : "default" }}>
              {userData?.bio || "자기소개를 입력해주세요"}
            </p>
          )}
          </Info>

          {isOwnProfile && (
              <div style={{marginLeft: "auto"}}>
                <Sojung onClick={handleEditClick}>
                  {isEditing ? "완료" : "프로필 편집"}
                </Sojung>
                <Delete onClick={()=>handleDeleteClick()}>계정 삭제</Delete>
              </div>
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
          <PostList>
            {myPosts.length > 0 ? (
              myPosts.map((post) => (
                <PostItem key={myPosts.documents_id} post={post} onClick={handlePostClick} />
              ))
            ) : (
              <NoFavoriteMessage>작성한 글이 없습니다.</NoFavoriteMessage>
            )}
          </PostList>
        )}

        {activeTab === "즐겨찾기" && (
          <PostList>
            {favoritePosts.length > 0 ? (
              favoritePosts.map((post) => (
                <PostItem key={post.documents_id} post={post} onClick={handlePostClick} />
              ))
            ) : (
              <NoFavoriteMessage>즐겨찾기한 글이 없습니다.</NoFavoriteMessage>
            )}
          </PostList>
        )}
      </Container>
    </>
  );
};

export default Mypage;
