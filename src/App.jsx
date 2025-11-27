// import logo from './bope.png';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/main/Home';
import Perifericos from './components/main/Perifericos';
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/main/Home" element={<Home/>} />  
          <Route path="/main/Perifericos" element={<Perifericos/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
export default App;