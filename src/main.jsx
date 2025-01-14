import { createRoot } from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Onboarding from './pages/onboarding.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Onboarding />} />
        </Routes>
    </BrowserRouter>
)