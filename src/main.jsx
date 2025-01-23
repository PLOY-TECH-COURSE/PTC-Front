import { createRoot } from 'react-dom/client'
import { useNavigate } from 'react-router-dom';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Onboarding from './pages/onboarding.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
)