import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";

import ThemeContext from "../Store/ThemeContext";
import About from "../Pages/About/About";
import ViscosityCurve from "../Pages/ViscosityCurve/ViscosityCurve";
import { CavityBalance } from "../Pages/CavityBalance/CavityBalance";

function App() {
  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      <div className="App">
        <Router>
          <Header />
          <Sidebar />
          <Switch>
            <Route path="/viscositycurve" component={ViscosityCurve} />
            <Route path="/cavitybalance" component={CavityBalance} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer name="Scientific Molding Tools" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
