import { useState, useEffect } from "react";
import store from '../store';
import styled from "styled-components";
  

const StyledGame = styled.div`
    background-image: url('./images/game-bg.png');
    width: 360px;
    height: 640px;
    position: relative;
    #catcher {
        position: absolute;
        width: 47px;
        margin: 0 auto;
        top: 490px;
        left: ${(props) => `${props.tubePositionX}px`};
        z-index: 10;
    }
    .arena {
        .ball {
            width: 47px;
            position: absolute;
            padding: 10px 10px;
            box-sizing: border-box;
            top: ${(props) => `${props.ballPositionY}px`};
            left: ${(props) => `${props.ballPositionX}px`};
            z-index: 100;
        }
    }
`

const Game = (props) => {
    const [ score, setScore ] = useState(10);
    const [ tubePositionX, setTubePositionX ] = useState(150);
    const [ ballPositionX, setBallPositionX ] = useState(150);
    const [ ballPositionY, setBallPositionY ] = useState(0);
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
        setTubePositionX(tubePositionX - (360/12));
    }

    const handleRightButton = () => {
        setTubePositionX(tubePositionX + (360/12));
    }

    const scoreChangeHandler = (tubePositionX, ballPositionX, ballPositionY) => {
        if (ballPositionY >= 470 && ballPositionX === tubePositionX) {
            switch (ball) {
                case "purple":
                    setScore(score+50);
                    break;
                case "yellow":
                    setScore(score+10);
                    break;
                case "black":
                    setScore(score-20);
                    break;
                default:
                    break;
            }
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

    const ballGenerator = (ballPositionY) => {
        if (ballPositionY > 470) {
            setBallPositionY(0);
            setBall(ballType[randomGenerator(0, 7)]);
            setBallPositionX((Math.floor(360/12))*randomGenerator(0, 10));
        } else {
            setTimeout(() => setBallPositionY(ballPositionY+20), 100);
        }
    }

    const scoreValueInterlock = (score) => {
        if (score < 10) {
            setScore(10);
        } else if (score > 500) {
            setScore(1000);
        }
    }

    const catcherPosisitonInterlock = (tubePositionX) => {
        if (tubePositionX < 0) {
            setTubePositionX(0);
        } else if (tubePositionX > 300) {
            setTubePositionX(300);
        }
    }

    useEffect(() => {
        scoreValueInterlock(score);
        catcherPosisitonInterlock(tubePositionX);
        ballGenerator(ballPositionY);
        scoreChangeHandler(tubePositionX, ballPositionX, ballPositionY)
    }, [score, tubePositionX, ballPositionX, ballPositionY])

    console.log(ballPositionX, tubePositionX);
    return (
        <StyledGame tubePositionX={tubePositionX} ballPositionX={ballPositionX} ballPositionY={ballPositionY}>
            <div className="arena">
                <div className="ball">
                    <img src={`./images/ball_${ball}.png`} alt={`${ball} ball`} />
                </div>
            </div>
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
