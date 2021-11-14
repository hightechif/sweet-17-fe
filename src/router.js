import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Game from './pages/Game';
import ExpiredQR from './pages/ExpiredQR';
import NotFound from './pages/NotFound';

const router = (props) => {
    const { endpoint } = props;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register endpoint={endpoint} />} />
                <Route path="/game" >
                    <Route path={`${endpoint}`} element={<Game endpoint={endpoint} />} />
                    <Route path="" element={<ExpiredQR />} />
                    <Route path="*" element={<ExpiredQR />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
