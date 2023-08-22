import classes from './PlayersTable.module.css';
import PlayerRow from "./PlayerRow.jsx";
import {useEffect, useState} from "react";
import mockedUsersApi from "../../mocks/users/users.js";

const players = [
    {
        name: 'Александров Игнат Анатолиевич',
        age: 24,
        sex: 'female',
        isActive: false,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Мартынов Остап Фёдорович',
        age: 12,
        sex: 'female',
        isActive: true,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Комаров Цефас Александрович',
        age: 83,
        sex: 'male',
        isActive: true,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Кулаков Станислав Петрович',
        age: 43,
        sex: 'male',
        isActive: false,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Борисов Йошка Васильевич',
        age: 32,
        sex: 'female',
        isActive: true,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Негода Михаил Эдуардович',
        age: 33,
        sex: 'male',
        isActive: true,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Жданов Зураб Алексеевич',
        age: 24,
        sex: 'male',
        isActive: true,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Бобров Фёдор Викторович',
        age: 19,
        sex: 'male',
        isActive: false,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Александров Игнат Анатолиевич',
        age: 21,
        sex: 'male',
        isActive: true,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
    {
        name: 'Многогрешный Павел Виталиевич',
        age: 24,
        sex: 'male',
        isActive: false,
        createdAt: '12 октября 2021',
        editedAt: '22 октября 2021',
    },
];

function PlayersTable() {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        const getUsers = async () => {
            try {
                const users = await mockedUsersApi.getAll()
                setUsers(users);
            } catch (e) {
                console.log(e)
            }
        };

        getUsers();

    }, []);
    return (
        <table>
            <thead>
                <tr className={classes.row}>
                    <th>ФИО</th>
                    <th>Возраст</th>
                    <th>Пол</th>
                    <th>Статус</th>
                    <th>Создан</th>
                    <th></th>
                </tr>
            </thead>
                <tbody>
                {users.map((data, idx) => <PlayerRow key={idx} data={data}/>)}
            </tbody>

        </table>
    )
}

export default PlayersTable;