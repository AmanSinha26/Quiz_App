// import React, { useState, useRef } from 'react';
// import { doAjax } from '../utils/ajax';
// import { Dashboard } from './Dashboard';
// // import Timer from './timer';

// export const Quiztime = ({ msg, id, count }) => {
//     const [questions, setQuestions] = useState([]);
//     const [message, setMessage] = useState("");
//     let [score, setScore] = useState(0);
//     let [min, setMin] = useState(1);
//     let [max, setMax] = useState(2);
//     const [timer, setTimer] = useState('00:40');
//     let Ref = useRef(null);
//     const [check, setCheck] = useState('false');
//     const [isSub, setIsSub] = useState('false');

//     const setHighScore = async () => {

//         const userObject = { "currScore": score, "userid": id };
//         const json = JSON.stringify(userObject);
//         const promise = doAjax(process.env.REACT_APP_SETHIGHSCORE_URL, 'POST', json);
//         promise.then(response => {
//             response.json().then(data => {
//                 console.log(data);
//             }).catch(err => {
//                 console.log("Invalid Json", err);
//             })
//         }).catch(err => {
//             console.log('Error During Server Call ', err);
//         })
//     }

//     const getQuestion = async () => {
//         let no = Math.floor((Math.random() * (max - min + 1)) + min);
//         no.toString(10);
//         const userObject = { "number": no };
//         console.log('URL IS ', process.env.REACT_APP_QUIZ_URL);
//         const json = JSON.stringify(userObject);
//         console.log('JSON is ', json, ' Object is ', userObject);
//         const promise = doAjax(process.env.REACT_APP_QUIZ_URL, 'POST', json);
//         promise.then(response => {
//             response.json().then(data => {
//                 setQuestions(data);
//                 setMessage("question")
//             }).catch(err => {
//                 console.log("Invalid Json ", err);
//             })
//         }).catch(err => {
//             console.log('Error During Server Call ', err);
//         })
//         setMin(min + 2);
//         setMax(max + 2);

//         if (check === 'false') {
//             clearTimer(getDeadTime());
//             setCheck('true');
//         }
//     }

//     const Submit = () => {
//         if (min < 21) {
//             return (
//                 <button onClick={checkQuestion} id="nextBtn">Next</button>
//             )
//         }
//         else {
//             return (
//                 <button onClick={dispScore}>Submit</button>
//             )
//         }
//     }

//     const dispScore = () => {

//         let op1 = document.querySelector('#option1');
//         let op2 = document.querySelector('#option2');
//         let op3 = document.querySelector('#option3');
//         let op4 = document.querySelector('#option4');

//         if (op1.checked === true) {
//             if (op1.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//         }
//         else if (op2.checked === true) {
//             if (op2.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//         }
//         else if (op3.checked === true) {
//             if (op3.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//         }
//         else if (op4.checked === true) {
//             if (op4.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//         }
//         setHighScore();
//         setMessage("submit");
//     }

//     const checkQuestion = async () => {

//         // console.log(questions.answer);
//         let op1 = document.querySelector('#option1');
//         let op2 = document.querySelector('#option2');
//         let op3 = document.querySelector('#option3');
//         let op4 = document.querySelector('#option4');
//         console.log(questions.answer);
//         if (op1.checked === true) {
//             if (op1.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//             op1.checked = false;
//         }
//         else if (op2.checked === true) {
//             if (op2.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//             op2.checked = false;
//         }
//         else if (op3.checked === true) {
//             if (op3.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//             op3.checked = false;
//         }
//         else if (op4.checked === true) {
//             if (op4.value === questions.answer) {
//                 console.log('correct!');
//                 setScore(++score);
//                 console.log(score);
//             }
//             op4.checked = false;
//         }
//         getQuestion();
//     }

//     const homeScreen = () => {
//         setMessage('homescreen');
//     }
//     //////////////////////////////////////////////////////////////////////////////////////////////////
//     const getTimeRemaining = (e) => {
//         const total = Date.parse(e) - Date.parse(new Date());
//         if (total === 0) {
//             dispScore();
//         }
//         const seconds = Math.floor((total / 1000) % 60);
//         const minutes = Math.floor((total / 1000 / 60) % 60);
//         const hours = Math.floor((total / 1000 * 60 * 60) % 24);
//         return {
//             total, hours, minutes, seconds
//         };
//     }

//     const startTimer = (e) => {
//         let { total, hours, minutes, seconds }
//             = getTimeRemaining(e);
//         if (total >= 0) {

//             setTimer(
//                 (minutes > 9 ? minutes : '0' + minutes) + ':'
//                 + (seconds > 9 ? seconds : '0' + seconds)
//             )
//         }
//     }

//     const clearTimer = (e) => {

//         // If you adjust it you should also need to
//         // adjust the Endtime formula we are about
//         // to code next    
//         setTimer('00:40');

//         // If you try to remove this line the 
//         // updating of timer Variable will be
//         // after 1000ms or 1sec
//         if (Ref.current) clearInterval(Ref.current);
//         const id = setInterval(() => {
//             startTimer(e);
//         }, 1000)
//         Ref.current = id;
//     }

//     const getDeadTime = () => {
//         let deadline = new Date();

//         // This is where you need to adjust if 
//         // you entend to add more time
//         deadline.setSeconds(deadline.getSeconds() + 40);
//         return deadline;
//     }

//     // We can use useEffect so that when the component
//     // mount the timer will start as soon as possible

//     // We put empty array to act as componentDid
//     // mount only


//     // Another way to call the clearTimer() to start
//     // the countdown is via action event from the
//     // button first we create function to be called
//     // by the button
//     // const onClickReset = () => {
//     //     clearTimer(getDeadTime());
//     // }

//     // return (
//     //     <div className="App">
//     //         <h2>{timer}</h2>
//     //         {/* <button onClick={onClickReset}>Reset</button> */}
//     //     </div>
//     // )

//     ////////////////////////////////////////////////////////////////////////////////////////////////////
//     console.log("outer", isSub);
//     if (message === "question") {
//         return (
//             <>
//                 <h1 className='alert-success text-center'>Quiz</h1>
//                 <br />
//                 {timer}
//                 <div>{questions.question}</div>
//                 <br />
//                 <div class="form-check">
//                     <input class="form-check-input" value={questions.option1} type="radio" name={questions.option1} id="option1" />
//                     <label class="form-check-label" for="option1">
//                         {questions.option1}
//                     </label>
//                 </div>
//                 <div class="form-check">
//                     <input class="form-check-input" value={questions.option2} type="radio" name={questions.option1} id="option2" />
//                     <label class="form-check-label" for="option2">
//                         {questions.option2}
//                     </label>
//                 </div>
//                 <div class="form-check">
//                     <input class="form-check-input" value={questions.option3} type="radio" name={questions.option1} id="option3" />
//                     <label class="form-check-label" for="option3">
//                         {questions.option3}
//                     </label>
//                 </div>
//                 <div class="form-check">
//                     <input class="form-check-input" value={questions.option4} type="radio" name={questions.option1} id="option4" />
//                     <label class="form-check-label" for="option4">
//                         {questions.option4}
//                     </label>
//                 </div>
//                 {Submit()}
//             </>
//         )
//     }

//     else if (message === "submit") {
//         // if (isSub === "false") {
//         //     setIsSub("true");
//             // console.log("inner", isSub);
//             return (
//                 <>
//                     <h1> your score: {score}</h1>
//                     <button onClick={homeScreen}>Home Screen</button>
//                 </>
//             );

//         // else {
//         //     return (
//         //         <>
//         //            <Dashboard msg={msg} id={id} />
//         //         </>
//         //     );
//         // }

//     }
//     else if (message === "homescreen") {
//         return (
//             <Dashboard msg={msg} id={id} />
//         )
//     }

//     else {
//         return (
//             <>
//                 <h1 className='alert-success text-center'>Quiz ----- {id}</h1>
//                 <br />
//                 <button onClick={getQuestion}>Start</button>

//             </>
//         )
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { doAjax } from '../utils/ajax';
import { Dashboard } from './Dashboard';
import Timer from './timer.js';

export const Quiztime = ({ msg, id }) => {
    const [questions, setQuestions] = useState([]);
    const [message, setMessage] = useState("");
    let [score, setScore] = useState(0);
    let [min, setMin] = useState(1);
    let [max, setMax] = useState(2);

    const setHighScore = async () => {

        const userObject = { "currScore": score, "userid": id };
        const json = JSON.stringify(userObject);
        const promise = doAjax(process.env.REACT_APP_SETHIGHSCORE_URL, 'POST', json);
        promise.then(response => {
            response.json().then(data => {
                console.log(data);
            }).catch(err => {
                console.log("Invalid Json", err);
            })
        }).catch(err => {
            console.log('Error During Server Call ', err);
        })
    }

    const getQuestion = async () => {
        let no = Math.floor((Math.random() * (max - min + 1)) + min);
        no.toString(10);
        const userObject = { "number": no };
        console.log('URL IS ', process.env.REACT_APP_QUIZ_URL);
        const json = JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ', userObject);
        const promise = doAjax(process.env.REACT_APP_QUIZ_URL, 'POST', json);
        promise.then(response => {
            response.json().then(data => {
                setQuestions(data);
                setMessage("question")
            }).catch(err => {
                console.log("Invalid Json ", err);
            })
        }).catch(err => {
            console.log('Error During Server Call ', err);
        })
        setMin(min + 2);
        setMax(max + 2);
    }
    const dispScore = () => {
        let op1 = document.querySelector('#option1');
        let op2 = document.querySelector('#option2');
        let op3 = document.querySelector('#option3');
        let op4 = document.querySelector('#option4');

        if (op1.checked === true) {
            if (op1.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        else if (op2.checked === true) {
            if (op2.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        else if (op3.checked === true) {
            if (op3.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        else if (op4.checked === true) {
            if (op4.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        setHighScore();
        setMessage("submit");
    }
    const checkQuestion = async () => {

        // console.log(questions.answer);
        let op1 = document.querySelector('#option1');
        let op2 = document.querySelector('#option2');
        let op3 = document.querySelector('#option3');
        let op4 = document.querySelector('#option4');
        console.log(questions.answer);
        if (op1.checked === true) {
            op1.checked = false;
            if (op1.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        else if (op2.checked === true) {
            op2.checked = false;
            if (op2.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        else if (op3.checked === true) {
            op3.checked = false;
            if (op3.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        else if (op4.checked === true) {
            op4.checked = false;
            if (op4.value === questions.answer) {
                console.log('correct!');
                setScore(++score);
                console.log(score);
            }
        }
        getQuestion();
    }
    const Submit = () => {
        if (min === 25) {
            dispScore();
            return (
                <>
                </>)
        }
        else if (min < 21) {
            return (
                <button onClick={checkQuestion} id="nextBtn">Next</button>
            )
        }
        else {
            return (
                <button onClick={dispScore}>Submit</button>
            )
        }
    }
    const homeScreen = () => {
        setMessage('homescreen');
    }

    if (message === "question") {

        return (
            <>
                <h1 className='alert-success text-center'>Quiz</h1>
                <br />
                <Timer msg={setMin} message={message} />
                <div>{questions.question}</div>
                <br />
                <div class="form-check">
                    <input class="form-check-input" value={questions.option1} type="radio" name={questions.option1} id="option1" />
                    <label class="form-check-label" for="option1">
                        {questions.option1}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" value={questions.option2} type="radio" name={questions.option1} id="option2" />
                    <label class="form-check-label" for="option2">
                        {questions.option2}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" value={questions.option3} type="radio" name={questions.option1} id="option3" />
                    <label class="form-check-label" for="option3">
                        {questions.option3}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" value={questions.option4} type="radio" name={questions.option1} id="option4" />
                    <label class="form-check-label" for="option4">
                        {questions.option4}
                    </label>
                </div>
                {Submit()}
            </>
        )
    }
    else if (message === "submit") {

        return (
            <>
                <h1> your score: {score}</h1>
                <button onClick={homeScreen}>Home Screen</button>
            </>
        );
    }

    else if (message === "homescreen") {
        return (
            <Dashboard msg={msg} id={id} />
        )
    }
    else {
        return (
            <>
                <h1 className='alert-success text-center'>Quiz </h1>
                <br />
                <button onClick={getQuestion}>Start</button>
            </>
        )
    }
}