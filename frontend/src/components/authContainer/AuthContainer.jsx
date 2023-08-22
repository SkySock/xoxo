import classes from "./AuthContainer.module.css";
import {useState} from "react";
import SignIn from "../signIn/SignIn.jsx";
import AuthSwitch from "../ui/authSwitch/AuthSwitch.jsx";
import SignUp from "../signUp/SignUp.jsx";


function AuthContainer() {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSwitch = (event) => {
        setIsSignIn(!isSignIn)
    };

    return (
        <div className={classes.authContainer}>
            <AuthSwitch isChecked={isSignIn} id={"authSwitch"} onChange={handleSwitch}/>
            <div className={classes.authForm}>
                {isSignIn ? <SignIn /> : <SignUp />}
            </div>
        </div>
    )
}

export default AuthContainer;