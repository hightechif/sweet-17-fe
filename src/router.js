import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Game from './pages/Game';
import ExpiredQR from './pages/ExpiredQR';
import NotFound from './pages/NotFound';
import Instruction from "./pages/Instruction";

const router = (props) => {
    const gameEndpoint = '/'+props.endpoint;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register endpoint={props.endpoint} />} />
                <Route path="/instruction" element={<Instruction />} />
                <Route path={gameEndpoint} element={<Game />} />
                <Route path="/game/*" element={<ExpiredQR />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
