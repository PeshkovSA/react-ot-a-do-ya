import React, {useEffect, useState} from "react";
import './styles/App.css'

import {BrowserRouter, Link, NavLink, Route, Routes, Redirect} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import {SwitchTransition} from "react-transition-group";
import Error from "./pages/Error";
import AppRouter from "./components/UI/AppRouter";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth]=useState(false);
    const [isLoading, setIsLoading]=useState(true);

    useEffect(()=> {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setIsLoading(false);
    },[])


    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
