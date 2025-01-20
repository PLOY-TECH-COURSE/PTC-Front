import { createRoot } from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Onboarding from './pages/onboarding/index.jsx';
import {RecoilRoot} from 'recoil';

createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Onboarding />} />
            </Routes>
        </BrowserRouter>
    </RecoilRoot>
)