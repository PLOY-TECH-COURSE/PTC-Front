import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';

import Onboarding from './pages/onboarding/index.jsx';
import Apply from './pages/apply/index.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
import Proposer from './pages/proposer/index.jsx';
=======
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
>>>>>>> origin/main
=======
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/signup.jsx';
>>>>>>> origin/main

createRoot(document.getElementById('root')).render(
<RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Onboarding />} />
<<<<<<< HEAD
            <Route path="/apply" element={<Apply/>} /> 
            <Route path="/proposer" element={<Proposer/>} /> 
=======
            <Route path="/apply" element={<Apply/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
>>>>>>> origin/main
        </Routes>
    </BrowserRouter>
</RecoilRoot>
)