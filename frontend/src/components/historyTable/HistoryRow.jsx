import classes from './HistoryTable.module.css';
import PersonHistory from "../personHistory/PersonHistory.jsx";

function HistoryRow({data}) {

    let players = (
        <div className={classes.players}>
            <PersonHistory name={data.playerO.name} mode={'o'} isWin={data.playerO.isWin}/>
            против
            <PersonHistory name={data.playerX.name} mode={'x'} isWin={data.playerX.isWin}/>
        </div>
    );

    return (
        <tr className={classes.row}>
            <td>{players}</td>
            <td>{data.date}</td>
            <td>{data.time}</td>
        </tr>
    )
}

export default HistoryRow;