import classes from "./PersonHistory.module.css";
import zeroSVG from '../../assets/imgs/zero.svg';
import xSVG from '../../assets/imgs/x.svg';
import winSVG from '../../assets/imgs/win.svg';

function PersonHistory({name = '', mode = 'x', isWin=false}) {

    return (
        <div className={classes.person}>
            <img className={classes.modeIMG} src={(mode === 'o') ? zeroSVG : xSVG}/>
            {name}
            {isWin && <img src={winSVG}/>}
        </div>
    )
}

export default PersonHistory;