import classes from './Switch.module.css';

function Switch({id, onChange, label=''}) {
    return (
        <div className={classes.switchWrapper}>
            {label}
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
                    <span className={classes.switchButton} />
                </label>
            </div>
        </div>
    )
}

export default Switch;