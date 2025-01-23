import { createRoot } from 'react-dom/client'
import { useNavigate } from 'react-router-dom';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';

import Onboarding from './pages/onboarding/index.jsx';
import Apply from './pages/apply/index.jsx';
<<<<<<< HEAD
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
=======
<<<<<<< Updated upstream
=======
import Proposer from './pages/proposer/index.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
>>>>>>> Stashed changes
>>>>>>> bbcf83d (feat(#23) :: post 값 보내기)

createRoot(document.getElementById('root')).render(
   <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/apply" element={<Apply/>} />
<<<<<<< HEAD
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
=======
<<<<<<< Updated upstream
=======
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/proposer" element={<Proposer />} />
>>>>>>> Stashed changes
>>>>>>> bbcf83d (feat(#23) :: post 값 보내기)
        </Routes>
    </BrowserRouter>
</RecoilRoot>
)