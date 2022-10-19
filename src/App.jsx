import Courses from './components/Courses'
import About from './components/About'
import Home from './components/Home'
import FED from './components/FED'
import BED from './components/BED'
import Any from "./components/Any";
import Checkout from "./components/Checkout";



import { Route, Routes, Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import './App.css'

function App() {

  return (
    <Routes className="App">
      <Route path="/lco" element={<Navigate replace to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/courses" element={<Courses />}>
        <Route path="frontend" element={<FED />} />
        <Route path="backend" element={<BED />} />
        <Route path=":anything" element={<Any />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App
