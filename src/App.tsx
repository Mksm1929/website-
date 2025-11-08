import "./App.css";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { Header } from "./components/Header/Header";
import { Router } from "./provider/router";
import { Footer } from "./components/Footer/Footer";
import "./AppCommon.css";


function App() {
  return (
    <div className="app">
      <Header />
      <WelcomePage />
      <div className="app-content">
        <Router />
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;


