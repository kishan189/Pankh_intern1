// import NavScrollExample from "./component/header";
import Login from "./component/login";
import Register from "./component/register";
import './App.css';
import './component/Home';
import { BrowserRouter, Route,Routes } from "react-router-dom";
// import Home from "./component/Home";
import About from "./component/About/About";
import Donate from "./component/List/Donate";
import NewsPaperRecognisation from "./component/List/NewsPaperRecognisation";
import OurCertificates from "./component/List/Our-Certificates";
import Mypage from "./component/Mypage";
import Feedback from "./component/feedback/Feedback";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Routes>
    <Route path="/register" element={<Register/>}>Register</Route>
    {/* <Route path="/" element={<Login/>}>Login</Route> */}
    <Route path="/login" element={<Login/>}>Login</Route>
    {/* <Route path="/Mypage" element={<Mypage  />}></Route> */}
    <Route path="/" element={<Mypage  />}></Route>
         
        <Route exact path='/Mypage' element={<Mypage/>} ></Route>
         <Route exact path='/About' element={<About/>} ></Route>
        <Route exact path='/OurCertificates' element={<OurCertificates/>} ></Route>
        <Route exact path='/NewsPaperRecognisation' element={<NewsPaperRecognisation/>} ></Route>
        <Route exact path='/Donate' element={<Donate/>} ></Route>
        <Route exact path='/Feedback' element={<Feedback/>} ></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
