import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';

import Onboarding from './pages/onboarding/index.jsx';
import PostList from './pages/PostList/index.jsx';
import Write from './pages/write/index.jsx';
import MyPage from './pages/mypage/mypage.jsx';
import Detail from './pages/PostList/detail/index.jsx';
import Broadcast from './pages/broadcast/index.jsx';
import Detail2 from './pages/broadcast/detail/index.jsx';
import Proposer from './pages/proposer/index.jsx';
import Select from './pages/select/index.jsx';
import {LoginConfirm} from "./components/loginConfirm/index.jsx";
import Mobile from './components/confirm/index.jsx';
import Confirm from './components/authConfirm/index.jsx';
import Error from './components/error/index.jsx';
import Survey from './pages/survey/index.jsx';
import SurveyLayout from "./pages/surveyLayout/index.jsx";
import SurveyList from "./pages/surveyList/index.jsx";
import SurveyForm from "./pages/survey/form/index.jsx";
createRoot(document.getElementById('root')).render(
   <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route element={<Mobile />}>
                <Route element={<LoginConfirm />}>
                    <Route path="/" element={<Onboarding />} />
                    <Route path='/postList' element={<PostList />} />
                    <Route path='/user/:userId' element={<MyPage />} />
                    <Route path="/post/:id" element={<Detail />} /> 
                    <Route path='/broadcast' element={<Broadcast />} />
                    <Route path="/announcement/:id" element={<Detail2 />} />
                    <Route element={<Confirm role='ROLE_STUDENT, ROLE_ADMIN, ROLE_SUPERADMIN' />}>
                      <Route path='/write/:id' element={<Write />} />
                    </Route>
                    <Route element={<Confirm role='ROLE_ADMIN, ROLE_SUPERADMIN' />}>
                        <Route path="/proposer" element={<Proposer />} />
                        <Route path="/survey" element={<SurveyLayout/>}>
                            <Route path="add" element={<Survey/>} />
                            <Route path="list" element={<SurveyList/>} />
                            <Route path=":formId" element={<SurveyForm/>} />
                        </Route>
                    </Route>
                    <Route element={<Confirm role='ROLE_SUPERADMIN' />}>
                        <Route path="/authority" element={<Select/>} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
</RecoilRoot>
)