import { createRoot } from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {RecoilRoot} from 'recoil';

import Onboarding from './pages/onboarding/index.jsx';
import Apply from './pages/apply/index.jsx';
<<<<<<< Updated upstream
=======
import Proposer from './pages/proposer/index.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
>>>>>>> Stashed changes

createRoot(document.getElementById('root')).render(
   <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/apply" element={<Apply/>} />
<<<<<<< Updated upstream
=======
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/proposer" element={<Proposer />} />
>>>>>>> Stashed changes
        </Routes>
    </BrowserRouter>
</RecoilRoot>
)