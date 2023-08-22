import classes from './HistoryTable.module.css';
import HistoryRow from "./HistoryRow.jsx";

const games = [
    {
        playerO: {
            name: 'Терещенко У. Р.',
            isWin: true,
        },
        playerX: {
            name: 'Многогрешный П. В.',
            isWin: false,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Горбачёв А. Д.',
            isWin: false,
        },
        playerX: {
            name: 'Многогрешный П. В.',
            isWin: true,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Константинов В. Н.',
            isWin: true,
        },
        playerX: {
            name: 'Сасько Ц. А.',
            isWin: false,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Никифорова Б. А.',
            isWin: false,
        },
        playerX: {
            name: 'Горбачёв А. Д.',
            isWin: true,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Кулишенко К. И.',
            isWin: false,
        },
        playerX: {
            name: 'Вишняков Ч. М.',
            isWin: true,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Гриневска Д. Б.',
            isWin: false,
        },
        playerX: {
            name: 'Кудрявцев Э. В.',
            isWin: true,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Нестеров Х. А.',
            isWin: true,
        },
        playerX: {
            name: 'Исаева О. А.',
            isWin: false,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Исаева О. А.',
            isWin: false,
        },
        playerX: {
            name: 'Кулишенко К. И.',
            isWin: true,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Коновалова В. В.',
            isWin: false,
        },
        playerX: {
            name: 'Терещенко У. Р.',
            isWin: true,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Казаков Х. Е.',
            isWin: true,
        },
        playerX: {
            name: 'Овчаренко Б. М.',
            isWin: false,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
    {
        playerO: {
            name: 'Сасько Ц. А.',
            isWin: false,
        },
        playerX: {
            name: 'Никифорова Б. А.',
            isWin: true,
        },
        date: '12 февраля 2022',
        time: '43 мин 13 сек',
    },
];

function HistoryTable() {
    return (
        <table>
            <thead>
                <tr className={classes.row}>
                    <th>Игроки</th>
                    <th>Дата</th>
                    <th>Время игры</th>
                </tr>
            </thead>
            <tbody>
                {games.map((data, idx) => <HistoryRow key={idx} data={data}/>)}
            </tbody>

        </table>
    )
}

export default HistoryTable;