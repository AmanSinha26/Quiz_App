import React, { useRef, useState } from'react';
import { Home } from '../containers/Home';
import { doAjax } from '../utils/ajax';
export const Register=()=>{
    const userid = useRef('');
    const password = useRef('');
    const name = useRef('');
    const [message, setMessage]=useState('');
    const doRegister = ()=>{  
       let uid=userid.current.value;
       let pwd= password.current.value;
       let uname = name.current.value;
       const userObject = {"userid":uid, "password":pwd,"name":uname};
       console.log('URL IS ',process.env.REACT_APP_REGISTER_URL);
       const json= JSON.stringify(userObject);
       console.log('JSON is ', json, ' Object is ',userObject );
       const promise = doAjax(process.env.REACT_APP_REGISTER_URL,'POST', json);
       promise.then(response=>{
          response.json().then(data=>{
              console.log('Data Rec from Server ',data);
              setMessage(data.message);
          }).catch(err=>{
              console.log("Invalid Json ",err);
          })
       }).catch(err=>{
           console.log('Error During Server Call ', err);
       })
    }

    const goBack = () => {
        setMessage('goBack');
    }

    if(message === 'goBack'){
        return(
            <Home />
        )
    }
    return(
        <>
        <h1 className='alert-success text-center'>Quiz App</h1>
        <h2>{message}</h2>
        <div>
            <label>Userid</label>
            <input ref={userid} className='form-control' type="text" placeholder='Type Userid here'/>
        </div>
        <div>
            <label>Password</label>
            <input ref={password} className='form-control' type="password" placeholder='Type Password here'/>
        </div>
        <div>
            <label>Name</label>
            <input ref={name} className='form-control' type="text" placeholder='Type Name here'/>
        </div>
        <div className='form-group'>
            <button onClick={doRegister} className='btn btn-primary'>Register</button>
            &nbsp;&nbsp;
            <button onClick={goBack} className='btn btn-secondary'>Back</button>
        </div>
        </>
    )
    }