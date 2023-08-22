import classes from './PlayerContainer.module.css'

function PlayerContainer(props) {
    return (
        <div className={classes.subjectContainer}>
            <div><img className={classes.subjectIcon} src={props.mod}/></div>
            <div className={classes.subjectInfo}>
                <div className={classes.subjectName}>{props.fullName}</div>
                <div className={classes.subjectPercent}>{props.winRate}% побед</div>
            </div>
        </div>
    )
}

export default PlayerContainer;