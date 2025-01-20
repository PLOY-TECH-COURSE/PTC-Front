import { createRoot } from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {RecoilRoot} from 'recoil';

import Onboarding from './pages/onboarding/index.jsx';
import Apply from './pages/apply/index.jsx';

createRoot(document.getElementById('root')).render(
   <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/apply" element={<Apply/>} />
        </Routes>
    </BrowserRouter>
</RecoilRoot>