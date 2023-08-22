import classes from './MainContainer.module.css';

function MainContainer({children}) {
    return (
        <div className={classes.mainContainer}>
            {children}
        </div>
    )
}

export default MainContainer;