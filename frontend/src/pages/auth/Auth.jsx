import {observer} from "mobx-react-lite";
import AuthContainer from "../../components/authContainer/AuthContainer.jsx";
import {useAuth} from "../../storage/authStorage.js";
import {Navigate} from "react-router-dom";

function Auth() {
    const authStorage = useAuth();

    if (authStorage.isAuth) {
        return <Navigate to={"/active-players"} />
    }

    return (
        <AuthContainer />
    )
}

export default observer(Auth);
