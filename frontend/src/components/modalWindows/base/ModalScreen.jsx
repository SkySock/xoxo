import classes from './Modal.module.css';

function ModalScreen({children}) {
    return (
        <div className={classes.screen}>
            {children}
        </div>
    )
}

export default ModalScreen;