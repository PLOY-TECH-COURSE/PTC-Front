import { useState, useEffect } from "react";
import * as S from './style';
import Header from '../../components/header';
import Search from '../../assets/search.svg';
import PostItem from "../../components/postItem";
import { useNavigate } from "react-router-dom";
import { getSearchPost } from "../../api/postList";
import Loading from "../../components/loading";

export default function PostList() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [sort, setSort] = useState("CREATE_AT");
    const [start, setStart] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setStart(0);
        setPosts([]);
    }, [searchQuery, sort]);
    
    useEffect(() => {
        loadMorePosts();
    }, [start]);
    
    const loadMorePosts = () => {
        if (loading) return;
        setLoading(true);
    
        const query = searchQuery.replace(/#/g, "%23");
    
        getSearchPost(query, sort, start)
            .then((data) => {
                setPosts((prevPosts) => (start === 0 ? data || [] : [...prevPosts, ...(data || [])])); // start가 0이면 초기화
                setLoading(false);
            })
            .catch((error) => {
                console.error("게시물을 불러오는 데 실패했습니다.", error);
                setLoading(false);
            });
    };
    
    const handleSortChange = (newSort) => {
        if (sort === newSort) return; // 동일한 정렬 방식이면 실행 안 함
        setSort(newSort);
        setStart(0);
        setPosts([]); // 정렬을 변경할 때 기존 데이터를 초기화
    };
    
    
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setStart((prevStart) => prevStart + 20)
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setStart(0);
        setPosts([]);
    };

    useEffect(() => {
        loadMorePosts();
    }, [searchQuery, sort]);
    
    const handlePostClick = (id) => {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            console.error("Invalid ID:", id);
            return;
        }
        navigate(`/post/${numericId}`);
    };

    // const loadMorePosts = () => {
    //     if (loading) return; 
    //     setLoading(true);

    //     const query = searchQuery.replace(/#/g, '%23');
        
    //     getSearchPost(query, sort, start)
    //         .then((data) => {
    //             setPosts((prevPosts) => [...prevPosts, ...(data || [])]); 
    //             setStart(prevStart => prevStart + 20);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error("게시물을 불러오는 데 실패했습니다.", error);
    //             setLoading(false);
    //         });
    // };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //         loadMorePosts();
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        loadMorePosts();
    }, [searchQuery, sort]);

    return (
        <S.Container>
            {loading && (
                <S.LoadingWrapper>
                    <Loading />
                </S.LoadingWrapper>
            )}
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
                    <S.Recent onClick={() => handleSortChange("CREATE_AT")} active={sort === "LIKE"}>
                        <button/><p>최신순</p>
                    </S.Recent>
                    <S.Like onClick={() => handleSortChange("LIKE")} active={sort === "CREATE_AT"}>
                        <button/><p>좋아요순</p>
                    </S.Like>
                </S.Sort>

                <S.PostListMain>
                    {posts.length === 0 ? (
                        <h2>{searchQuery ? "검색 결과가 없습니다." : "게시물이 없습니다."}</h2>
                    ) : (
                        posts.map((post) => (
                            <PostItem key={post.documents_id} post={post} onClick={handlePostClick} />
                        ))
                    )}
                </S.PostListMain>
            </S.Content>
        </S.Container>
    );
}