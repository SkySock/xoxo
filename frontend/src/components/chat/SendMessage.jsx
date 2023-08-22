import PrimaryButton from '../ui/buttons/primaryButton/PrimaryButton.jsx';
import classes from './Chat.module.css';
import InputField from '../ui/inputField/InputField.jsx';
import {useState} from "react";


function SendMessage() {
    const [message, setMessage] = useState('');
    const messageHandler = (event) => {
        let msg = event.target.value;
        setMessage(msg);
    }
    return (
        <div className={classes.msgInteractiveElements}>
            <InputField placeholder="Сообщение..." onChange={messageHandler}></InputField>
            <PrimaryButton onlyIcon={true} disabled={!message}/>
        </div>
    )
}

export default SendMessage;