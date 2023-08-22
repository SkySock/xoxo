import HeaderString from "../ui/headerString/HeaderString.jsx";
import classes from "./SignUp.module.css";
import InputField from "../ui/inputField/InputField.jsx";
import femaleSVG from "../../assets/imgs/female.svg";
import maleSVG from "../../assets/imgs/male.svg";
import PrimaryButton from "../ui/buttons/primaryButton/PrimaryButton.jsx";
import {useState} from "react";
import authService from "../../http/auth.js";

function SignUp() {
    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const registrationData = {
            display_name: displayName,
            username,
            password,
            birthday: new Date(Date.parse(birthday)).toJSON(),
            gender
        };

        console.log(registrationData)
        authService.signUp(registrationData).then((res) => {
            console.log(res)
        })
    };

    const getDefaultInputHandler = (setFn) => (event) => {
        setFn(event.target.value);
    }

    const handleUsername = (event) => {
        const validateUsername = /^\w*$/;
        validateUsername.test(event.target.value) && setUsername(event.target.value);
    };

    const todayString = new Date().toISOString().substring(0, 10);

    const passwordIsConfirmed = password === confirmPassword;

    const errorConfirmPassword = passwordIsConfirmed && confirmPassword !== "" ? "" : "Пароль не совпадает"

    const disabledButton = !(passwordIsConfirmed && displayName && username && birthday && gender && password)

    return (
        <>
            <HeaderString>Регистрация</HeaderString>
            <form className={classes.signUpForm} onSubmit={handleSubmit}>
                <div className={classes.inputName}>
                    <InputField onChange={getDefaultInputHandler(setDisplayName)} value={displayName} placeholder={"Отображаемое имя"}/>
                    <InputField onChange={handleUsername} value={username} placeholder={"Логин"}/>
                    <InputField onChange={getDefaultInputHandler(setPassword)} value={password} placeholder={"Пароль"} type="password" />
                    <InputField onChange={getDefaultInputHandler(setConfirmPassword)} error={errorConfirmPassword} value={confirmPassword} placeholder={"Повторите пароль"} type="password" />
                </div>

                <div className={classes.ageAndSex}>
                    <div className={classes.inputAge}>
                        Дата рождения
                        <InputField onChange={getDefaultInputHandler(setBirthday)} value={birthday} type={"date"} max={todayString}/>
                    </div>
                    <div className={classes.radioSex}>
                        Пол
                        <div className={classes.radioButtons}>
                            <div className={classes.formRadio}>
                                <input id={"female"} type="radio" name="gender" value={"FEMALE"} onChange={getDefaultInputHandler(setGender)} checked={gender === "FEMALE"}/>
                                <label htmlFor={"female"}><img src={femaleSVG}/></label>
                            </div>
                            <div className={classes.formRadio}>
                                <input id={"male"} type="radio" name="gender" value={"MALE"} onChange={getDefaultInputHandler(setGender)} checked={gender === "MALE"}/>
                                <label htmlFor={"male"}><img src={maleSVG}/></label>
                            </div>
                        </div>
                    </div>
                </div>

                <PrimaryButton type="submit" text={'Создать аккаунт'} disabled={disabledButton} />
            </form>
        </>
    )
}

export default SignUp;