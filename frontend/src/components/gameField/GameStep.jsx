import classes from './GameField.module.css';
import zeroSVG from '../../assets/imgs/zero.svg';

function GameStep() {
    return (
        <div className={classes.gameStep}>
            Ходит&nbsp;<img src={zeroSVG}/>&nbsp;Владелен Пупкин
        </div>
    )
}

export default GameStep;