import "./WelcomePage.css";
import Portret from "../../assets/partfolio.jpg";
import { TextWriter } from "../TextWriter";


export const WelcomePage = () => {
  return (
    <div className="container-welcome">
      <div className="welcome">

        <div className="welcome-frontend">
          <span>Frontend</span>
        </div>
        <div className="welcome-container">
          <img src={Portret} />
          <div className="welcome-container-text">
            <h1>МАКСИМ</h1>
            <h2>ВАРНИН</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
