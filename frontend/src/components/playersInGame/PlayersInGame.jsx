import classes from "./PlayersInGame.module.css"
import PlayerContainer from "./PlayerContainer.jsx";
import zeroSVG from '../../assets/imgs/zero.svg'
import xSVG from '../../assets/imgs/x.svg'
import HeaderString from "../ui/headerString/HeaderString.jsx";

function PlayersInGame() {
    return (
        <div className={classes.subjectList}>
            <HeaderString>Игроки</HeaderString>
            <div className={classes.container}>
                <PlayerContainer fullName='Пупкин Владлен Игоревич' winRate={63} mod={zeroSVG}/>
                <PlayerContainer fullName='Плюшкина Екатерина Викторовна' winRate={23} mod={xSVG}/>
            </div>
        </div>
    )
}

export default PlayersInGame;