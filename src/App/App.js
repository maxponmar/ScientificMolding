import React from 'react';
import "./App.scss";

import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";

const ThemeContext = React.createContext("dark");
const SidebarContext = React.createContext("show");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <SidebarContext.Provider value="hide">
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
