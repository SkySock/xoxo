import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import TableContainer from "../../components/tableContainer/TableContainer.jsx";
import HeaderString from "../../components/ui/headerString/HeaderString.jsx";
import PrimaryButton from "../../components/ui/buttons/primaryButton/PrimaryButton.jsx";
import classes from './PlayersPage.module.css';
import PlayersTable from "../../components/playersTable/PlayersTable.jsx";
import NewPlayerModal from "../../components/modalWindows/newPlayer/NewPlayerModal.jsx";
import {useState} from "react";

function PlayersPage() {

    return (
        <>
        <MainContainer>
            <TableContainer>
                <HeaderString>
                    Список игроков
                </HeaderString>
                <PlayersTable />
            </TableContainer>
        </MainContainer>
        </>
    )
}

export default PlayersPage;