import "./App.css";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { Header } from "./components/Header/Header";
import { Router } from "./provider/router";

function App() {
  return (
    <div className="container">
      <Header />
      <WelcomePage />
      <div className="container-content">
        <Router />
      </div>
    </div>
  );
}

export default App;


