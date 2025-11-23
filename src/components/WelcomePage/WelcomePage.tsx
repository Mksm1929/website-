import "./WelcomePage.css";
import Portret from "../../assets/partfolio.jpg";
import { useLocation } from "react-router-dom";


export const WelcomePage = () => {
  const location = useLocation()

  return (
    <div className="container-welcome">
      <div className={location.pathname === "/" ? "welcome-home welcome" : "welcome"} >

        <div className="welcome-frontend">
          <span>Frontend</span>
        </div>
        <div className="welcome-container">
          <img className={location.pathname === "/" ? "welcome-img-home" : "welcome-img"} src={Portret} />
          <div className="welcome-container-text">
            <h1>МАКСИМ</h1>
            <h2>ВАРНИН</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
