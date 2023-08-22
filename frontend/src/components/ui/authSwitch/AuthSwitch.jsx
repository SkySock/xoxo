import classes from './AuthSwitch.module.css';
import HeaderString from "../headerString/HeaderString.jsx";

function AuthSwitch({id, onChange, label='', isChecked = false}) {
    // const []
    return (
        <div className={classes.switchWrapper}>
            <div className={classes.switch}>
                <input
                    className={classes.switchCheckbox}
                    id={id}
                    type="checkbox"
                    onChange={onChange}
                />

                <label
                    className={classes.switchLabel}
                    htmlFor={id}
                >
                    <span className={classes.switchButton}>{isChecked ? "SignIn" : "SignUp"}</span>
                    <div className={classes.info}>SignIn</div>
                    <div className={classes.info}>SignUp</div>
                </label>
            </div>
        </div>
    )
}

export default AuthSwitch;