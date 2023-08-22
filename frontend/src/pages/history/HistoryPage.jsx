import MainContainer from "../../components/mainContainer/MainContainer.jsx";
import TableContainer from "../../components/tableContainer/TableContainer.jsx";
import HeaderString from "../../components/ui/headerString/HeaderString.jsx";
import HistoryTable from "../../components/historyTable/HistoryTable.jsx";


function HistoryPage() {
    return (
        <MainContainer>
            <TableContainer>
                <HeaderString>История игр</HeaderString>
                <HistoryTable />
            </TableContainer>
        </MainContainer>
    )
}

export default HistoryPage;