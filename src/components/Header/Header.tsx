import "./Header.css";
import { Project } from "../Menu/Menu";


export const Header = () => {


  return (
    <header className="header">
      <span style={{ fontFamily: "BlackOps", fontSize: 20 }}>DEVELOPER</span>
      <nav className="header-nav">
        <Project />
      </nav>
    </header>
  );
};
