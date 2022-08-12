import React, { useState } from 'react';
import { Quiztime } from './Quiztime1';
import { doAjax } from '../utils/ajax';
import Carousel from 'react-bootstrap/Carousel';

export const Dashboard = ({ setmsg, msg, id, setToken }) => {
  const [message, setMessage] = useState('');
  const [highScore, setHighScore] = useState(0);

  const takequiz = () => {
    setMessage('quiztime');
  }
  const logout = () => {
    setToken(null);
    setmsg('logout');
  }
  const getHighScore = () => {
    setMessage('viewhighscore');
    const userObject = { "userid": id };
    const json = JSON.stringify(userObject);
    const promise = doAjax(process.env.REACT_APP_GETHIGHSCORE_URL, 'POST', json);
    promise.then(response => {
      response.json().then(data => {
        setHighScore(data);
        setMessage('highscore');
      }).catch(err => {
        console.log("Invalid Json", err);
      })
    }).catch(err => {
      console.log('Error During Server Call ', err);
    })
  }

  if (message === 'quiztime') {
    return (
      <>
        <Quiztime msg={msg} id={id} msg={msg} setToken={setToken} />
      </>
    )
  }

  else if (message === 'highscore') {
    return (
      <>
        <h1 className="welcomeMsg">{msg}</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel_img d-block w-100"
              src="https://t3.ftcdn.net/jpg/02/31/07/66/360_F_231076694_rxAik9swiCT8WEwHfYXu0noL7K8a382k.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="carousel_img d-block w-100"
              src="https://keyofsuccess.in/wp-content/uploads/2021/03/tyk.png"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="carousel_img d-block w-100"
              src="https://www.thedubrovniktimes.com/media/k2/items/cache/30917a4b2dee144385c49297465d68a3_XL.jpg"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>

        <button onClick={takequiz}>Take Quiz</button>
        <button onClick={logout}>LogOut</button>
        <button className="highScoreBtn" onClick={getHighScore}>High Score</button>
        <h1 className="highScore">HighScore is: {highScore}</h1>
      </>
    )
  }

  return (
    <>
      <h1 className="welcomeMsg">{msg}</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel_img d-block w-100"
            src="https://t3.ftcdn.net/jpg/02/31/07/66/360_F_231076694_rxAik9swiCT8WEwHfYXu0noL7K8a382k.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel_img d-block w-100"
            src="https://keyofsuccess.in/wp-content/uploads/2021/03/tyk.png"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel_img d-block w-100"
            src="https://www.thedubrovniktimes.com/media/k2/items/cache/30917a4b2dee144385c49297465d68a3_XL.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>

      <button onClick={takequiz}>Take Quiz</button>
      <button onClick={logout}>LogOut</button>
      <button className="highScoreBtn" onClick={getHighScore}>High Score</button>

    </>
  )
}
