import classes from './ActivePlayer.module.css';
import StatusM from "../ui/status/StatusM.jsx";
import PrimaryButton from "../ui/buttons/primaryButton/PrimaryButton.jsx";
import SecondaryButton from "../ui/buttons/secondaryButton/SecondaryButton.jsx";

function ActivePlayer({name, statusState}) {
    const disabled = statusState !== 'ready';
    const button = (disabled) ? <SecondaryButton text={'Позвать играть'} disabled={statusState !== 'ready'}/> :
        <PrimaryButton text={'Позвать играть'} disabled={disabled}/>;

    return (
        <div className={classes.row}>
            <p className={classes.name}>
                {name}
            </p>

            <div className={classes.statusAndButton}>
                <div className={classes.statusWrapper}>
                    <StatusM state={statusState} />
                </div>
                <div className={classes.btnWrapper}>
                    {button}
                </div>

            </div>

        </div>
    )
}

export default ActivePlayer;