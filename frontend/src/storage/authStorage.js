import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";

class AuthStorage {
    constructor() {
        try {
            this.isAuth = JSON.parse(localStorage.getItem('isAuth'))
        } catch (e) {
            this.isAuth = false;
            localStorage.setItem('isAuth', 'false');
        }
        makeAutoObservable(this);
    }

    signOut() {
        this.isAuth = false;
        localStorage.setItem('isAuth', 'false');
        localStorage.removeItem("bearer");
    }

    signIn(token) {
        this.isAuth = true;
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem("bearer", token);
    }
}

const authStorage = new AuthStorage();

export const AuthContext = createContext(authStorage);
export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthStorage;