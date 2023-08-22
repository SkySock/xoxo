import classes from './Modal.module.css';
import ModalScreen from "./ModalScreen.jsx";

function ModalContainer({children}) {
    return (
        <ModalScreen>
            <div className={classes.window}>
                {children}
            </div>
        </ModalScreen>
    )
}

export default ModalContainer;