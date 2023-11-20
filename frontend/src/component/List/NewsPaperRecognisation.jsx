import React from 'react';
import "./News.css";
import MyNavbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function NewsPaperRecognisation() {
  return (
    <>
    <MyNavbar/>
      <div className='NewsSection'>
       <img src={require("../About/images/PankhNewspaperPic.avif")} alt='error'/>
      </div>
      <Footer/>
    </>
  )
}
