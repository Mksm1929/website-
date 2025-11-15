import { useEffect, useState } from "react";
import "./Clicker.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addRecord } from "./ClickerSlice";

export const Clicker = () => {
  const [second, setSecond] = useState(-1);
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();
  const { highScore } = useAppSelector((state) => state.clicker);

  useEffect(() => {
    let interval: any;
    if (second > 0) {
      interval = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [second]);

  useEffect(() => {
    if (second === 0) {
      dispatch(addRecord(counter));
    }
  }, [second, counter, dispatch]);

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

  const bestScore = highScore.length > 0
    ? Math.max(...highScore)
    : 0;
  
  return (
    <div className="clicker-container">
      <h1 className="clicker-title">Кликер</h1>
      <p className="clicker-subtitle">Жми как можно быстрее!</p>

      <div className="timer-container">
        <h1 className={getTimerClass()}>Время: {second >= 0 ? second : 0}</h1>
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
          {highScore.length > 0 ? 'Начать заново' : 'Начать'}
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
            Лучший результат: <span className="high-score">{bestScore}</span>
          </p>
        </div>
      )}
    </div>
  );
};
