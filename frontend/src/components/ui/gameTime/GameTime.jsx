import classes from './GameTime.module.css'
import {useGame} from "../../../storage/gameStorage.js";
import {useEffect, useState} from "react";

function GameTime() {

    const game = useGame();
    const [gameTime, setGameTime] = useState(game.gameTime);
    useEffect(() => {
        const interval = setInterval(() => {
            setGameTime(game.gameTime)
        }, 1000);
        return () => clearTimeout(interval);
    }, []);
    return (
        <div className={classes.gameTime}>{gameTime}</div>
    )
}

export default GameTime;