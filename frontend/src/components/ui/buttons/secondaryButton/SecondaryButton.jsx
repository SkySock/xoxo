import classes from "./SecondaryButton.module.css";
import BlockIcon from "../../icons/BlockIcon.jsx";

function SecondaryButton({onClickHandler, disabled = false, text='Button', size='Medium', withIcon=false}) {
    let sizeStyle = classes.medium;
    let iconSize = (size === 'SSmall') ? 16.67 : 20;
    switch (size) {
        case 'MSmall':
            sizeStyle = classes.mSmall;
            break;
        case 'SSmall':
            sizeStyle = classes.sSmall;
            break;
    }

    const styles = [
        classes.btn,
        sizeStyle,
    ];

    return (
        <button className={styles.join(' ')} onClick={onClickHandler} disabled={disabled}>
            {withIcon && <BlockIcon size={iconSize}/>}
            {text}
        </button>
    )
}

export default SecondaryButton;