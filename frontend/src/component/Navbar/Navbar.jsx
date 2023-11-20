import React, { useState } from 'react';
import "./Navbar.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function MyNavbar(props) {
  const [mobile, setMobile] = useState(false);
  // console.log(mobile);
  return (
      <div className='navBarSection'>
        <header className='header flex'>
          <div className='logoDiv'>
            <img src={require('./logo.jpeg')} alt='error' />
          </div>
            <ul className={mobile?"hemburgerNav":"navlist flex"}>
              <Link to="/Mypage" >
                <li>Home</li>
              </Link>
              <Link to="/About" >
                <li>About Us</li>
              </Link>
              <Link to="/OurCertificates" >
                <li>Our Certificates</li>
              </Link>
              <Link to="/NewsPaperRecognisation" >
                <li>NewsPaper-recognisation</li>
              </Link>
              <Link to="/Donate" >
                <li>Donate</li>
              </Link>
              <Link to="/Feedback" >
                <li>Feedback</li>
              </Link>
              
            </ul>
         
          <div className='hemburgerButton' onClick={() => setMobile(!mobile)}>
            <AiOutlineUnorderedList />
          </div>
          
        </header>
      </div>
    
  )
}
