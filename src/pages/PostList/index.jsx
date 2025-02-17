import { useState } from "react";
import * as S from './style';
import Header from '../../components/header';
import Search from '../../assets/search.svg';

export default function () {
    const [activeSort, setActiveSort] = useState("recent");

    return (
        <S.Container>
            <Header />
            <S.Content>
                <S.PostListTop>
                    <S.Search>
                        <img src={Search} width={20} />
                        <S.Input type="text" placeholder="검색어를 입력하세요" />
                    </S.Search>
                </S.PostListTop>

                <S.Sort>
                    <S.Recent 
                        onClick={() => setActiveSort("recent")} 
                        active={activeSort === "like"}
                    >
                        <button /><p>최신순</p>
                    </S.Recent>
                    
                    <S.Like 
                        onClick={() => setActiveSort("like")} 
                        active={activeSort === "recent"}
                    >
                        <button /><p>좋아요순</p>
                    </S.Like>
                </S.Sort>
            </S.Content>
        </S.Container>
    );
}
