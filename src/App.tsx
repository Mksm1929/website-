import "./App.css";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { Header } from "./components/Header/Header";
import { Router } from "./provider/router";
import { Footer } from "./components/Footer/Footer";
import "./AppCommon.css";
import { TextWriter } from "./components/TextWriter";


function App() {
  return (
    <div className="app">
      <Header />
      <WelcomePage />
      <div className="app-content">
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
        <Router />
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;


