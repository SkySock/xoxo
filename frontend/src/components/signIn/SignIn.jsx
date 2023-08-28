import dog from "../../assets/imgs/dog.svg";
import HeaderString from "../ui/headerString/HeaderString.jsx";
import classes from "./SignIn.module.css";
import InputField from "../ui/inputField/InputField.jsx";
import PrimaryButton from "../ui/buttons/primaryButton/PrimaryButton.jsx";
import {useState} from "react";
import {useAuth} from "../../storage/authStorage.js";
import authService from "../../http/auth.js";
import {observer} from "mobx-react-lite";

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authStorage = useAuth();

    const validateDict = /^\w*$/;

    const usernameHandler = (event) => {
        const val = event.target.value;
        validateDict.test(val) && setUsername(val);
    }

    const passwordHandler = (event) => {
        const val = event.target.value;
        setPassword(val);
    }

    const submitLogin = (event) => {

        authService.logIn(username, password)
            .then((data) => {
                authStorage.signIn(data.token);
            })
            .catch((error) => {
                console.log(error.response)

                // setError(error.response.data.message)
            })
    }

    return (
        <>
            <img src={dog} alt={"Dog"}/>
            <HeaderString>Войдите в игру</HeaderString>
            <div className={classes.subjectSignInData}>
                <InputField value={username} onChange={usernameHandler} placeholder="Логин" onCopy={ (e) => e.preventDefault() }></InputField>
                <InputField value={password} onChange={passwordHandler} placeholder="Пароль" onCopy={(e) => e.preventDefault()} type="password"></InputField>
            </div>
            <PrimaryButton text="Войти" onClickHandler={submitLogin} disabled={!username || !password} size='m' />
        </>
    )
}

export default observer(SignIn);