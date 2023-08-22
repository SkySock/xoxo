import TableContainer from "../../components/tableContainer/TableContainer.jsx";
import HeaderString from "../../components/ui/headerString/HeaderString.jsx";
import RatingTable from "../../components/ratingTable/RatingTable.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";

function RatingPage() {
    return (
        <MainContainer>
            <TableContainer>
                <HeaderString>Рейтинг игроков</HeaderString>
                <RatingTable />
            </TableContainer>
        </MainContainer>
    )
}

export default RatingPage;