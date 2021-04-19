import './App.scss';

import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Home from '../Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Home />
    </div>
  );
}

export default App;
