import classes from './Cell.module.css';
import xSVG from '../../../assets/imgs/xxl-x.svg';
import zeroSVG from '../../../assets/imgs/xxl-zero.svg';
import {useGame} from "../../../storage/gameStorage.js";
import {observer} from "mobx-react-lite";

function Cell({idx}) {

    const game = useGame();
    const row = Math.floor(idx / 3);
    const col = idx % 3;
    const getImage = (symbol) => {
        if (symbol === 'x') {
            return <img src={xSVG}/>;
        } else if (symbol === 'o') {
            return <img src={zeroSVG}/>;
        }
        return null;
    }

    const cellHandler = () => {
        if (!game.field[row][col]) {
            game.makeMove(row, col);
        }
    }

    return (
        <div className={classes.cell} onClick={cellHandler}>{getImage(game.field[row][col])}</div>
    )
}

export default observer(Cell);