import classes from './PrimaryButton.module.css';
import sendBtn from '../../../../assets/imgs/send-btn.svg';

function PrimaryButton({onClickHandler, disabled = false, text='Button', size='m', onlyIcon=false, type}) {
    let sizeStyle = classes.m;
    switch (size) {
        case 'm':
            sizeStyle = classes.m;
            break;
        case 's':
            sizeStyle = classes.s;
            break;
    }

    const onlyIconStyle = (onlyIcon) ? classes.onlyIcon : '';
    const styles = [
        classes.btn, 
        onlyIconStyle || sizeStyle,
    ];

    return (
        <button className={styles.join(' ')} onClick={onClickHandler} disabled={disabled} type={type}>
            {(!onlyIcon) ? text : <img src={sendBtn}/>}
        </button>
    )
}

export default PrimaryButton;