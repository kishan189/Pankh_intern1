import React from 'react';
import MyNavbar from './Navbar/Navbar';
import Home from './Home';
import Footer from './Footer/Footer';
import TestBot from './chatboat';
export default function Mypage() {
  return (
    <div>
       <MyNavbar />
       <TestBot/>
       <Home/>      
       <Footer/>
       
    </div>
  )
}
