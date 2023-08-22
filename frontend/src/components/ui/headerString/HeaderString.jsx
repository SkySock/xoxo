import classes from './HeaderString.module.css';

function HeaderString({children}) {
    return (
        <div className={classes.title}>
            {children}
        </div>
    )
}

export default HeaderString;