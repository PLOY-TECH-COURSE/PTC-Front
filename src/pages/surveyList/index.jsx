import {useEffect, useState} from "react";
import * as S from "./style.js";
import Loading from "../../components/loading.jsx";
import Header from "../../components/header/index.jsx";
import Search from "../../assets/search.svg";
import SurveyItem from "../../components/surveyItem/index.jsx";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../recoil/authAtom.js";
import AddSurvey from "../../assets/survey/surveyAdd.svg"
const PAGE_SIZE = 21;
const SurveyList = () => {
    // const navigate = useNavigate();
    const auth = useRecoilValue(authAtom)
    const [searchQuery, setSearchQuery] = useState("");
    const [start, setStart] = useState(0);
    const [posts, setPosts] = useState([
        {
            id: 1,
            title:"플테코 1학기 중간발표 채점",
            introduction:"채ㅐ채점",
            date:"2013-09-04"
        },
        {
            id: 2,
            title:"플테코 1학기 chlwhd발표 채점",
            introduction:"으아이ㅏ아아",
            date:"2013-09-04"
        },
        {
            id: 3,
            title:"플테코 2학기발표 채점",
            introduction:"ㅏ아아",
            date:"2013-09-04"
        }
    ]);
    console.log(posts.length)
    useEffect(() => {
        console.log("posts changed:", posts);
    }, [posts]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setStart(0);
    }, [searchQuery]);
    const handleNScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 2) {
            setStart(prev => prev + PAGE_SIZE);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNScroll);
        return () => {
            window.removeEventListener("scroll", handleNScroll);
        };
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setStart(0);
        // setPosts([]);
    };
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    const visiblePosts = filteredPosts.slice(0, start + PAGE_SIZE);
    const handleAddSurvey = () => {
    // 여기에 채점등록 페이지 불러오면 됨
    }
    // useEffect(() => {
    //     loadMorePosts();
    // }, [searchQuery, start]);

    // const handlePostClick = (id) => {
    //     const numericId = Number(id);
    //     if (isNaN(numericId)) {
    //         return;
    //     }
    //     navigate(`/post/${numericId}`);
    // };

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
                <S.PostListMain>
                    {filteredPosts.length === 0 ? (
                        <h2>{searchQuery ? "검색 결과가 없습니다." : "게시물이 없습니다."}</h2>
                    ) : (
                        <>
                            {visiblePosts.map((post) => (
                                <SurveyItem key={post.id} post={post} />
                            ))}
                            {auth.role === "ROLE_SUPERADMIN" && (
                                <S.ImageDiv onClick={handleAddSurvey}>
                                    <S.AddImage src={AddSurvey} alt="채점 등록" />
                                </S.ImageDiv>
                            )}
                        </>
                    )}
                </S.PostListMain>
            </S.Content>
        </S.Container>
    );
}
export default SurveyList
