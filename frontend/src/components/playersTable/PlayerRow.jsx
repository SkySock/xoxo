import classes from './PlayersTable.module.css';
import maleSvg from '../../assets/imgs/male.svg';
import femaleSvg from '../../assets/imgs/female.svg';
import StatusM from "../ui/status/StatusM.jsx";
import SecondaryButton from "../ui/buttons/secondaryButton/SecondaryButton.jsx";

function PlayerRow({data}) {

    return (
        <tr className={classes.row}>
            <td>{data.display_name}</td>
            <td>{data.username}</td>
            <td>{data.age}</td>
            <td>{(data.gender === "FEMALE") ? <img src={femaleSvg} /> : <img src={maleSvg} />}</td>
            <td>{new Date(Date.parse(data.joined_at)).toISOString().substring(0, 10)}</td>
        </tr>
    )
}

export default PlayerRow;