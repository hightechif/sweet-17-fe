import { useState } from "react";
import store from '../store';
import { Button } from "@elevenia/master-ui/components/Atom";

const Game = () => {
    const [ score, setScore ] = useState(0);

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
            console.log(STORE_SCORE.statusText);
            console.log(score);
        } catch (error) {
            
        }
    }

    return (
        <div>
            <Button variant="secondary" onClick={() => scoreChangeHandler("increase", 100)}>Increase Score</Button>
            <Button variant="secondary" onClick={() => scoreChangeHandler("decrease", 50)}>Decrease Score</Button>
            <p>Score: {score}</p>
            <Button variant="secondary" onClick={storeHandler}>SIMPAN</Button>
        </div>
    )
}

export default Game;
