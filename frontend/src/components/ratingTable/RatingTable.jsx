import classes from './RatingTable.module.css';
import RatingRow from "./RatingRow.jsx";

const gamers = [
    {
        name: 'Александров Игнат Анатольевич',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Шевченко Рафаил Михайлович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Мазайло Трофим Артёмович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Логинов Остин Данилович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Борисов Йошка Васильевич',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Соловьёв Ждан Михайлович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Негода Михаил Эдуардович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Гордеев Шамиль Леонидович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Многогрешный Павел Виталиевич',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Александров Игнат Анатольевич',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Волков Эрик Алексеевич',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Кузьмин Ростислав Васильевич',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Стрелков Филипп Борисович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
    {
        name: 'Галкин Феликс Платонович',
        total: 24534,
        wins: 9824,
        loses: 1222,
        winRate: 87
    },
];

function RatingTable() {
    let rows = gamers.map(
        (gamer, idx) => {
            let wins = Math.floor(Math.random() * 1500) + 500;
            let loses = Math.floor(Math.random() * 500);
            let total = wins + loses;
            let winRate = Math.floor(wins / total * 100);
            return <RatingRow key={idx} data={[gamer.name, total, wins, loses, winRate + '%']}/>;
        })
    return (
        <table>
            <thead>
                <RatingRow data={['ФИО', 'Всего игр', 'Победы', 'Проигрыши', 'Процент побед',]} isHeader={true}/>
            </thead>
            <tbody>
                {rows}
            </tbody>

        </table>
    )
}

export default RatingTable;