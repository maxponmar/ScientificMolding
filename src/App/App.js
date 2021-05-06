import "./App.scss";

import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";

import SidebarContext from "../Store/SidebarContext";
import ThemeContext from "../Store/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      <SidebarContext.Provider
        value={{
          isHidden: false,
          toggle: function () {
            this.isHidden = !this.isHidden;
          }
        }}
      >
        <div className="App show-sidebar">
          <Header />
          <Sidebar />
          <Home />
          <Footer name="Scientific Molding Tools" />
        </div>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
