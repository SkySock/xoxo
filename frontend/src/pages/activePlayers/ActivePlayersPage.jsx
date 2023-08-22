import classes from './ActivePlayers.module.css';
import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import TableContainer from "../../components/tableContainer/TableContainer.jsx";
import Switch from "../../components/ui/switch/Switch.jsx";
import HeaderString from "../../components/ui/headerString/HeaderString.jsx";
import ActivePlayer from "../../components/activePlayer/ActivePlayer.jsx";

function ActivePlayersPage() {
    return (
        <MainContainer>
            <TableContainer>
                <HeaderString>
                    Активные игроки
                    <Switch id={'activeOnly'} label={'Только свободные'}/>
                </HeaderString>
                <div className={classes.players}>
                    <ActivePlayer name={'Александров Игнат Анатолиевич'} statusState={'ready'}/>
                    <ActivePlayer name={'Василенко Эрик Платонович'} statusState={'inGame'}/>
                    <ActivePlayer name={'Быков Юрий Виталиевич'} statusState={'ready'}/>
                    <ActivePlayer name={'Галкин Феликс Платонович'} statusState={'inGame'}/>
                    <ActivePlayer name={'Комаров Цефас Александрович'} statusState={'inGame'}/>
                    <ActivePlayer name={'Шевченко Рафаил Михайлович'} statusState={'inGame'}/>
                    <ActivePlayer name={'Гордеев Шамиль Леонидович'} statusState={'ready'}/>
                    <ActivePlayer name={'Бобров Фёдор Викторович'} statusState={'ready'}/>
                    <ActivePlayer name={'Суворов Феликс Григорьевич'} statusState={'inGame'}/>
                    <ActivePlayer name={'Марков Йошка Фёдорович'} statusState={'ready'}/>
                </div>
            </TableContainer>
        </MainContainer>
    )
}

export default ActivePlayersPage;