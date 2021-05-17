import "./App.scss";

import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";

import ThemeContext from "../Store/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      <div className="App">
        <Header />
        <Sidebar />
        <Home />
        <Footer name="Scientific Molding Tools" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
