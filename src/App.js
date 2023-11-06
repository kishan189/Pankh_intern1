import NavScrollExample from "./component/header";
import Login from "./component/login";
import Register from "./component/register";
import './App.css';
import './component/Home';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavScrollExample/>
    <Routes>
    <Route path="/register" element={<Register/>}>Register</Route>
    <Route path="/" element={<Login/>}>Login</Route>
    <Route path="/Home" element={<Home/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
