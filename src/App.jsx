// import logo from './bope.png';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './components/main/main';
import NavBar from "./components/header/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" />
          <Route path="/Main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;