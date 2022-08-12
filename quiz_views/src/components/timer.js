import React from 'react';
import { useState, useEffect } from 'react';

const Timer = ({message, msg}) => {
    let initialMinute = 1;
    let initialSeconds = 0;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
    let myInterval = setInterval(() => {
              
            if (seconds > 0) {
                if(message==="submit")
                {
                    setMinutes(0);
                    setSeconds(0);
                    clearInterval(myInterval);
                }
                else{
                setSeconds(seconds - 1);}
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    msg(25);
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return () => {
            clearInterval(myInterval);
          };
    });
    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}
export default Timer;