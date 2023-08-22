import classes from './RatingTable.module.css';

function RatingRow(
    {
        data = [],
        isHeader = false,
    }) {

    return (
        <tr className={classes.row}>
            {data.map((value, index) => (isHeader) ? <th key={index}>{value}</th> : <td key={index}>{value}</td>)}
        </tr>
    )
}

export default RatingRow;