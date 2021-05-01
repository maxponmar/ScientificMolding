import './App.scss';

import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Home from '../Pages/Home/Home';
import Footer from '../Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Home />
      <Footer name="Scientific Molding Tools" />
    </div>
  );
}

export default App;
