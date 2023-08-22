import {useEffect, useState} from 'react';
import './App.css'
import Auth from "./pages/auth/Auth.jsx";
import GamePage from "./pages/gameField/GamePage.jsx";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from "./components/header/Header.jsx";
import {observer} from "mobx-react-lite";
import {useAuth} from "./storage/authStorage.js";
import RatingPage from "./pages/raiting/RatingPage.jsx";
import ActivePlayersPage from "./pages/activePlayers/ActivePlayersPage.jsx";
import HistoryPage from "./pages/history/HistoryPage.jsx";
import PlayersPage from "./pages/playersPage/PlayersPage.jsx";


function App() {
    const authStorage = useAuth();

    const getRoutes = () => {
        if (!authStorage.isAuth) {
            return (
                <>
                    <Route path='*' element={<Navigate to='/auth'/>}/>
                    <Route path='/auth' element={<Auth />} />
                </>
            )
        }
        return (
            <>
                <Route path='*' element={<Navigate to='/active-players'/>} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/game' element={<GamePage />} />
                <Route path='/top' element={<RatingPage />} />
                <Route path='/active-players' element={<ActivePlayersPage />} />
                <Route path='/history' element={<HistoryPage />} />
                <Route path='/players' element={<PlayersPage />} />
            </>
        )

    }

    return (
        <BrowserRouter>
            {authStorage.isAuth && <Header />}
            <Routes>
                {getRoutes()}
            </ Routes>
        </BrowserRouter>
    )
}

export default observer(App);
