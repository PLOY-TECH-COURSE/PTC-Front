import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';

import Block from './components/block/index.jsx';
import Onboarding from './pages/onboarding/index.jsx';
import Apply from './pages/apply/index.jsx';
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/signup.jsx';
import PostList from './pages/PostList/index.jsx';
import Write from './pages/write/index.jsx';
import MyPage from './pages/mypage/mypage.jsx';
import Detail from './pages/PostList/detail/index.jsx';
import Proposer from './pages/proposer/index.jsx';

createRoot(document.getElementById('root')).render(
   <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/apply" element={<Apply/>} />
            <Route path="/login" element={<Block><Login /></Block>} />
            <Route path="/proposer" element={<Proposer />} />
            <Route path="/signup" element={<Block><Signup /></Block>} />
            <Route path='/postList' element={<PostList />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/write' element={<Write />} />
            <Route path="/post/:id" element={<Detail />} /> 
        </Routes>
    </BrowserRouter>
</RecoilRoot>
)