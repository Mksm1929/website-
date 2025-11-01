import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export const Header = () => {
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  const handleClickPage = (page: string) => {
    navigate(page);
  };

  return (
    <header className="header">
      <span style={{ fontFamily: "fantasy", fontSize: 20 }}>DEVELOPER</span>
      <nav className="header-nav">
        <button
          onClick={() => {
            handleClickPage("/Skills");
          }}
        >
          Навыки
        </button>
        <button
          onMouseEnter={() => setIsPopup(true)}
          onMouseLeave={() => setIsPopup(false)}
        >
          Проекты
        </button>
        {isPopup && (
          <div
            className="popup"
            onMouseEnter={() => setIsPopup(true)}
            onMouseLeave={() => setIsPopup(false)}
          >
            <button onClick={() => handleClickPage("/Project/Todo-List")}>
              Todo-List
            </button>
            <button onClick={() => handleClickPage("/Project/Clicker")}>
              Clicker
            </button>
          </div>
        )}
        <button
          onClick={() => {
            handleClickPage("/Contact");
          }}
        >
          Контакты
        </button>
      </nav>
    </header>
  );
};
