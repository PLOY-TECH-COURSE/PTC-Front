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

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setStart(0);
    };

    const handleSortChange = (newSort) => {
        setSort(newSort);
        setStart(0);
    };

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    };

    useEffect(() => {
        setLoading(true);

        const encodedQuery = encodeURIComponent(searchQuery);

        getSearchPost(encodedQuery || "", sort, start)
            .then((data) => {
                setPosts(data.documents);
                setLoading(false);
            })
            .catch((error) => {
                console.error("게시물을 불러오는 데 실패했습니다.", error);
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
                            <PostItem key={post.document_id} post={post} onClick={handlePostClick} />
                        ))
                    )}
                </S.PostListMain>
            </S.Content>
        </S.Container>
    );
}
