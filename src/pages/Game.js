import { useState, useEffect } from "react";
import store from '../store';
import styled from "styled-components";
  

const StyledGame = styled.div`
    background-image: url('./images/game-bg.png');
    width: 360px;
    height: 640px;
    #catcher {
        position: relative;
        margin: 0 auto;
        top: 450px;
        left: ${(props) => `${props.position}px`};
        z-index: 10;
    }
    .arena {
        img {
            transform: scale(0.5);
            position: fixed;
            top: ${(props) => `${props.maju}px`};
            left: ${(props) => `${props.random*10}px`};
            z-index: 100;
        }
    }
`

const Game = (props) => {
    const [ score, setScore ] = useState(10);
    const [ position, setPosition ] = useState(0);
    const [ randomNumber, setRandomNumber ] = useState(30);
    const [ maju, setMaju ] = useState(0);
    const [ ball, setBall ] = useState("yellow");

    const ballType = {
        0: 'purple',
        1: 'purple',
        2: 'yellow',
        3: 'yellow',
        4: 'yellow',
        5: 'yellow',
        6: 'yellow',
        7: 'black'
    }

    function randomGenerator(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const handleLeftButton = () => {
        setPosition(position - 10);
    }

    const handleRightButton = () => {
        setPosition(position + 10);
    }

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

    const ballGenerator = (maju) => {
        if (maju > 470) {
            setMaju(0);
            setBall(ballType[randomGenerator(0, 7)]);
            setRandomNumber(randomGenerator(2, 30));
        } else {
            setTimeout(() => setMaju(maju+20), 400);
        }
    }

    const scoreValueInterlock = (score) => {
        if (score < 10) {
            setScore(10);
        } else if (score > 500) {
            setScore(500);
        }
    }

    const catcherPosisitonInterlock = (position) => {
        if (position < -140) {
            setPosition(-140);
        } else if (position > 150) {
            setPosition(150);
        }
    }

    useEffect(() => {
        scoreValueInterlock(score);
        catcherPosisitonInterlock(position);
        ballGenerator(maju);
    }, [score, position, randomNumber, maju])

    return (
        <StyledGame position={position} random={randomNumber} maju={maju}>
            <div className="arena">
                <img src={`./images/ball_${ball}.png`} alt={`${ball} ball`} />
            </div>
            <button onClick={() => scoreChangeHandler("increase", 50)}>
            </button>
            <button onClick={() => scoreChangeHandler("increase", 10)}>
            </button>
            <button onClick={() => scoreChangeHandler("decrease", 20)}>
            </button>
            <img id="catcher" src="./images/tube_catcher.png" alt="black ball" />
            <div className="game-controller">
                <button onClick={handleLeftButton}>
                    <img src="./images/button_left.png" alt="black ball" />
                </button>
                <p>Score: {score}</p>
                <button onClick={handleRightButton}>
                    <img src="./images/button_right.png" alt="black ball" />
                </button>
            </div>
        </StyledGame>
    )
}

export default Game;
