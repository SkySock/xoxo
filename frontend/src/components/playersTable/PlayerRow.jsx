import classes from './PlayersTable.module.css';
import maleSvg from '../../assets/imgs/male.svg';
import femaleSvg from '../../assets/imgs/female.svg';
import StatusM from "../ui/status/StatusM.jsx";
import SecondaryButton from "../ui/buttons/secondaryButton/SecondaryButton.jsx";

function PlayerRow({data}) {
    let status;
    if (data.status === 1) {
        status = <StatusM state={'ready'}>Активен</StatusM>
    } else {
        status = <StatusM state={'blocked'}>Заблокирован</StatusM>
    }

    return (
        <tr className={classes.row}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{(data.sex === 2) ? <img src={femaleSvg} /> : <img src={maleSvg} />}</td>
            <td>{status}</td>
            <td>{data.createdAt}</td>
            <td>{(data.status === 1) ? <SecondaryButton text={'Заблокировать'} withIcon={true}/> : <SecondaryButton text={'Разблокировать'} />}</td>
        </tr>
    )
}

export default PlayerRow;