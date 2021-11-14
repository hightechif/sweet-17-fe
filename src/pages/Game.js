import { useState, useEffect, useRef } from "react";
import  { useNavigate } from 'react-router-dom';
import store from '../store';
import styled from 'styled-components';

const StyledGame = styled.div`
    background-image: url('./images/background.png');
    margin: 0 auto;
    left: 5px;
    right: 5px;
    bottom: 5px;
`

const Game = (props) => {
    const { endpoint } = props;
    const [ score, setScore ] = useState(10);
    const navigate = useNavigate();

    const scoreChangeHandler = (action, value) => {
        switch(action) {
            case "increase":
                return setScore(score + value);
            case "decrease":
                return setScore(score - value);
            default:
                break;
        }
    }

    const storeHandler = async () => {
        try {
            const STORE_SCORE = await store.actions.game.storeScore();
            console.log(STORE_SCORE.status, STORE_SCORE.statusText);
            console.log("Score: ", score);
        } catch (error) {
            
        }
    }

    const mounted = useRef();
    useEffect(() => {
        if (score < 10) {
            setScore(10);
        } else if (score > 500) {
            setScore(500);
        }
        if (!mounted.current) {
            // do componentDidMount
            if (!endpoint) {
                navigate("/game/expired");
            }
            mounted.current = true;
        } else {
            // do componentDidUpdate
        }
        return () => {
            // do componentWillUnmount
        }
    }, [score, endpoint, navigate])

    return (
        <StyledGame>
            <p>Score: {score}</p>
            <button variant="secondary" onClick={() => scoreChangeHandler("increase", 5)}>Bola Ungu</button>
            <button variant="secondary" onClick={() => scoreChangeHandler("increase", 1)}>Bola kuning</button>
            <button variant="secondary" onClick={() => scoreChangeHandler("decrease", 2)}>Bola hitam</button>
            <button variant="secondary" onClick={storeHandler}>SIMPAN</button>
        </StyledGame>
    )
}

export default Game;
