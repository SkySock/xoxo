import classes from './Game.module.css';
import GameTime from "../ui/gameTime/GameTime.jsx";
import GameField from "../gameField/GameField.jsx";
import GameStep from "../gameField/GameStep.jsx";
import {observer} from "mobx-react-lite";

function Game() {
    return (
        <div className={classes.gameContainer}>
            <GameTime />
            <GameField />
            <GameStep />
        </div>
    )
}

export default observer(Game);