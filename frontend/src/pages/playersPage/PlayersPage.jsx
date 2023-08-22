import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import TableContainer from "../../components/tableContainer/TableContainer.jsx";
import HeaderString from "../../components/ui/headerString/HeaderString.jsx";
import PrimaryButton from "../../components/ui/buttons/primaryButton/PrimaryButton.jsx";
import classes from './PlayersPage.module.css';
import PlayersTable from "../../components/playersTable/PlayersTable.jsx";
import NewPlayerModal from "../../components/modalWindows/newPlayer/NewPlayerModal.jsx";
import {useState} from "react";

function PlayersPage() {
    const [newUserIsOpen, setNewUserIsOpen] = useState(false)

    const openModal = () => {
        setNewUserIsOpen(true);
    };

    const closeModal = () => {
        setNewUserIsOpen(false);
    };

    return (
        <>
        <MainContainer>
            <TableContainer>
                <HeaderString>
                    Список игроков
                    <div className={classes.btnWrapper}>
                        <PrimaryButton text={'Добавить игрока'} onClickHandler={openModal}/>
                    </div>
                </HeaderString>
                <PlayersTable />
            </TableContainer>
        </MainContainer>

            {newUserIsOpen && <NewPlayerModal closeHandler={closeModal}/>}
        </>
    )
}

export default PlayersPage;