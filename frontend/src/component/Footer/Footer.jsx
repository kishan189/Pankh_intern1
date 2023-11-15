import React from 'react';
import "./Footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerSection'>
        <div className='footerText'>
          <h1>Get in touch</h1>
          <p>career@nayepankh.com</p>
          <p>WhatsApp: +91-6306266557</p>
          <p>Calling: +91- 8318500748</p>
          <p>Office Address: 104A/279 P.Road Kanpur</p>
          <p>Pin Code: 208012</p>
          <div className='footerLogo'>
           <IoLogoTwitter style={{margin:"0 8px",fontSize:"1.5rem"}}/>
           <IoLogoFacebook style={{margin:"0 8px",fontSize:"1.5rem"}}/>
           <IoLogoYoutube style={{margin:"0 8px",fontSize:"1.5rem"}}/>
           <IoLogoInstagram style={{margin:"0 8px",fontSize:"1.5rem"}}/>
          </div>
        </div>
        <div className='footerPic'>
         <img src={require("./footerPic.avif")} alt='error'/>
        </div>
      </div>
    </div>
  )
}
