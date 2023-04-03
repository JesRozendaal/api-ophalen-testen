import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import Webshop from "./pages/webshop/Webshop";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/webshop" element= {<Webshop/>} />
      </Routes>
    </div>
  );
}

export default App;
