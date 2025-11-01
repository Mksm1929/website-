import "./WelcomePage.css";
import Portret from "../../assets/partfolio.jpg";
import { TextWriter } from "../TextWriter";

export const WelcomePage = () => {
  return (
    <div className="container-welcome">
      <div className="container-welcome-p">
        <TextWriter
          text={`Начинающий Frontend-разработчик с уверенными знаниями\r\n
          HTML, CSS, JavaScript и базовым опытом работы с React.\r\n
          Читаю профильную литературу, например "Чистый код".\n
          Быстро обучаюсь, умею работать с Git.\n
          Ищу первую работу в команде,\n
          где смогу развиваться и приносить пользу.`}
          speed={25}
        />
      </div>
      <div className="welcome">
        <div className="welcome-welcome">
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
