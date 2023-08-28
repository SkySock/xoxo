import classes from './PlayersTable.module.css';
import PlayerRow from "./PlayerRow.jsx";
import {useEffect, useState} from "react";
import mockedUsersApi from "../../mocks/users/users.js";
import usersService from "../../http/users.js";
import PrimaryButton from "../ui/buttons/primaryButton/PrimaryButton.jsx";


function PlayersTable() {
    const [users, setUsers] = useState([]);
    const [limit, setLimit] = useState(15);
    const [offset, setOffset] = useState(0);

    useEffect(() => {

        const getUsers = async () => {
            usersService.getList(limit, offset)
                .then((data) => {
                    setUsers(users.concat(data.users));
                })
                .catch((err) => console.log(err));
        };

        getUsers();

    }, [offset]);

    const pageHandler = () => {
        setOffset(offset + limit);
    }

    return (
        <>
            <table>
                <thead>
                    <tr className={classes.row}>
                        <th>ФИО</th>
                        <th>Username</th>
                        <th>Возраст</th>
                        <th>Пол</th>
                        <th>Создан</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data, idx) => <PlayerRow key={data.id} data={data}/>)}
                </tbody>
            </table>
            <PrimaryButton onClickHandler={pageHandler} text={"Показать ещё"} />
        </>
    )
}

export default PlayersTable;