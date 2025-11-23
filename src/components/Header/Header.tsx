import "./Header.css";
import { Menu } from "../Menu/Menu";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <span className="cursor-pointer" onClick={()=> navigate("/")}>DEVELOPER</span>
      <nav className="header-nav">
        <Menu />
      </nav>
    </header>
  );
};
