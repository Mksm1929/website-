import { useEffect, useState } from "react";
import "./Clicker.css"; 

export const Clicker = () => {
  const [second, setSecond] = useState(10);
  const [counter, setCounter] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    let interval: any;
    if (second !== 0) {
      interval = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [second]);

  if (counter > highScore) {
    setHighScore(counter);
  }

  const handleClick = () => {
    if (second > 0) {
      setCounter((prev) => prev + 1);
    }
  };

  const handleClickStart = () => {
    setSecond(10);
    setCounter(0);
  };

  
  const getTimerClass = () => {
    if (second <= 3) return "timer-text timer-critical";
    if (second <= 6) return "timer-text timer-warning";
    return "timer-text";
  };

  const progressWidth = (second / 10) * 100;

  return (
    <div className="clicker-container">
      <h1 className="clicker-title">Кликер</h1>
      <p className="clicker-subtitle">Жми как можно быстрее!</p>

      <div className="timer-container">
        <h1 className={getTimerClass()}>Время: {second}</h1>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>

      <div className="buttons-container">
        <button
          className="clicker-button restart-button"
          onClick={handleClickStart}
        >
          Начать заново
        </button>
        <button
          className="clicker-button click-button"
          onClick={handleClick}
          disabled={second === 0}
        >
          Жми быстрей
        </button>
      </div>

      <div className="counter-container">
        <h1 className="counter-text">Счет: {counter}</h1>
      </div>

      {second === 0 && (
        <div className="results-container">
          <p className="result-message">Игра окончена!</p>
          <p className="result-message">
            Ваш результат: <span className="high-score">{counter}</span>
          </p>
          <p className="result-message">
            Лучший результат: <span className="high-score">{highScore}</span>
          </p>
        </div>
      )}
    </div>
  );
};
