import { Login } from "../components/Login"
import React, { useState } from 'react';
import '../stylesheets/home.css';
import { Register } from "../components/Register";
import useToken from "../components/Logintoken";
export const Home = () => {
    const [message, setMessage] = useState('');
    const {token, setToken} = useToken();

    const doRegister = () => {
        setMessage('Register');
    }
    const doLogin = () => {
        setMessage('Login');
    }
    if(token) {
        return(
            <>
                <Login msg={setMessage} setToken={setToken} token={token}/>
            </>
        )
    }
    if (message === 'Register') {
        return (
            <>
                <Register msg={setMessage}/>
            </>
        )
    }
    else if (message === 'Login') {
        return (
            <>
                <Login msg={setMessage} setToken={setToken} token={token}/>
            </>
        )
    }
    else {
        return (
            <>
                <div className="page">
                    <img className="image" src="https://t3.ftcdn.net/jpg/03/09/97/24/360_F_309972409_jp5Dz0DFz9ecptLG4yFmnhiTh3nsrO3Q.jpg" alt="imag" />
                    <div className="sideBar1">
                    </div>
                    <div id="main">
                        <div className="main-1">
                            <h1 className="heading1">QUIZ APP</h1>
                        </div>
                        <div className="main-2">
                            <h1 className="heading2">LET'S GO !!</h1>
                            <button onClick={doLogin} id="homeBtn1" className="homeBtn">Log in</button>
                            <button onClick={doRegister} id="homeBtn2" className="homeBtn">Register</button>
                        </div>
                        <div className="main-3">
                        </div>
                    </div>
                    <div className="sideBar2">
                    </div>
                </div>
            </>
        )
    }
}