import classes from './InputField.module.css';


function InputField({
    placeholder = '',
    error = '',
    onChange,
    onCopy,
    value,
    type = '',
    ...other
}) {
    const errorStyle = (error) ? classes.error : '';
    return (
        <div className={classes.textField} >
            <input className={errorStyle} type={type} value={value} placeholder={placeholder} onCopy={onCopy} onChange={onChange} {...other}></input>
            {error}
        </div>
    )
}

export default InputField;