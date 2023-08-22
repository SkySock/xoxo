import classes from "./GamePage.module.css"
import PlayersInGame from "../../components/playersInGame/PlayersInGame.jsx";
import Game from "../../components/game/Game.jsx";
import Chat from "../../components/chat/Chat.jsx";

function GamePage() {
    return (
        <div className={classes.mainContainer}>
            <PlayersInGame />
            <Game />
            <Chat />
        </div>
    )
}

export default GamePage;