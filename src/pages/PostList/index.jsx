import { useState, useEffect } from "react";
import * as S from './style';
import Header from '../../components/header';
import Search from '../../assets/search.svg';
import PostItem from "../../components/postItem";
import { useNavigate } from "react-router-dom";
import { getSearchPost } from "../../api/postList";

export default function () {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [sort, setSort] = useState("CREAT_AT");
    const [start, setStart] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("🔄 컴포넌트 렌더링됨");
    console.log("👉 현재 상태값:", { searchQuery, sort, start, posts });

    const handleSearchChange = (e) => {
        const query = e.target.value;
        console.log("🔍 검색어 변경:", query);
        setSearchQuery(query);
        setStart(0);
    };

    const handleSortChange = (newSort) => {
        console.log("📌 정렬 방식 변경:", newSort);
        setSort(newSort);
        setStart(0);
    };

    const handlePostClick = (id) => {
        console.log("📝 게시물 클릭됨, ID:", id);
        const numericId = Number(id);
        if (isNaN(numericId)) {
            console.error("❌ 잘못된 ID:", id);
            return;
        }
        console.log("📍 이동할 경로: /post/" + numericId);
        navigate(`/post/${numericId}`);
    };

    useEffect(() => {
        console.log("📡 데이터 요청 시작");
        setLoading(true);

        const encodedQuery = encodeURIComponent(searchQuery);
        console.log("🔎 검색어 인코딩:", encodedQuery);

        getSearchPost(encodedQuery || "", sort, start)
            .then((data) => {
                console.log("✅ 데이터 수신 완료:", data);
                setPosts(data.documents);
                setLoading(false);
            })
            .catch((error) => {
                console.error("🚨 게시물 불러오기 실패:", error);
                setLoading(false);
            });
    }, [searchQuery, sort, start]);

    return (
        <S.Container>
            <Header />
            <S.Content>
                <S.PostListTop>
                    <S.Search>
                        <img src={Search} width={20} alt="Search" />
                        <S.Input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </S.Search>
                </S.PostListTop>

                <S.Sort>
                    <S.Recent onClick={() => handleSortChange("CREAT_AT")} active={sort === "LIKE"}>
                        <button /><p>최신순</p>
                    </S.Recent>
                    <S.Like onClick={() => handleSortChange("LIKE")} active={sort === "CREAT_AT"}>
                        <button /><p>좋아요순</p>
                    </S.Like>
                </S.Sort>

                <S.PostListMain>
                    {posts.length === 0 ? (
                        <h2>{searchQuery ? "검색 결과가 없습니다." : "모든 게시물이 없습니다."}</h2>
                    ) : (
                        posts.map((post) => (
                            <PostItem key={post.document_id} post={post} onClick={() => handlePostClick(post.document_id)} />
                        ))
                    )}
                </S.PostListMain>
            </S.Content>
        </S.Container>
    );
}
