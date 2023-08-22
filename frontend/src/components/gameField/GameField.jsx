import classes from './GameField.module.css';
import Cell from "../ui/cell/Cell.jsx";
import {useEffect} from "react";
import {useGame} from "../../storage/gameStorage.js";
import {observer} from "mobx-react-lite";

function GameField() {
    const game = useGame();
    useEffect(() => {
        game.loadStateFromLocalStorage();
    }, []);
    return (
        <div className={classes.gameBoard}>
            {Array.from({length: 9}).map((_, idx) => <Cell key={idx} idx={idx}/>)}
        </div>
    )
}

export default observer(GameField);