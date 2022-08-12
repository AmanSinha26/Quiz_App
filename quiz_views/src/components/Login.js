import React, { useRef, useState } from 'react';
import { Dashboard } from './Dashboard';
import { doAjax } from '../utils/ajax';
// import { Home } from '../containers/Home';
import { PropTypes } from 'prop-types';


export const Login = ({ msg, setToken, token }) => {
    const userid = useRef('');
    const password = useRef('');
    const [message, setMessage] = useState('');
    const [Id, setId] = useState('');
    const changemessage = () => {
        msg("Home");
    }
    const doLogin = () => {
        let uid = userid.current.value;
        let pwd = password.current.value;
        const userObject = { "userid": uid, "password": pwd };
        console.log('URL IS ', process.env.REACT_APP_LOGIN_URL);
        const json = JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ', userObject);
        const promise = doAjax(process.env.REACT_APP_LOGIN_URL, 'POST', json);
        promise.then(response => {
            response.json().then(data => {
                console.log('Data Rec from Server ', data);
                setMessage(data.message);
                setToken(data.token);
                setId(data.userid);
            }).catch(err => {
                console.log("Invalid Json ", err);
            })
        }).catch(err => {
            console.log('Error During Server Call ', err);
        })
    }

    if (token) {
        return (
            <>
                <Dashboard setmsg={msg} msg={token.message} id={token.userid} setToken={setToken} />
            </>
        )
    }
    else if (message.startsWith("Welcome")) {
        return (
            <>
                <Dashboard setmsg={msg} msg={message} id={Id} setToken={setToken}/>
            </>
        )
    }
    else {
        return (
            <>
                <h1 className='alert-success text-center'>Quiz App</h1>
                <h2>{message}</h2>
                <div>
                    <label>Userid</label>
                    <input ref={userid} className='form-control' type="text" placeholder='Type Userid here' />
                </div>
                <div>
                    <label>Password</label>
                    <input ref={password} className='form-control' type="password" placeholder='Type Password here' />
                </div>
                <div className='form-group'>
                    <button onClick={doLogin} className='btn btn-primary'>Login</button>
                    &nbsp;&nbsp;
                    <button onClick={changemessage} className='btn btn-secondary'>Back</button>
                </div>
            </>
        )
    }
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}