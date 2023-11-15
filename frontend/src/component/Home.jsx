import React from 'react';
import "./Home.css";
import Footer from './Footer/Footer';

export default function Home() {
  return (
    <>
     <div className='homeBarBackground'>
       <h2>UP GOVT. | 80G & 12A Registered</h2>
       <div className='smileFaces'>
         <h1>
         It's that easy to bring a Smile on Their Faces
         </h1>
         <p>
         We don't ask for much, just help us with what you can- Be it Money, Skill or Your Time
         </p>
         <button>Donate Now</button>
       </div>
     </div>
      <div className='homesection'>
        <div className='childteeth'>
          <img src={require("./teethPic.avif")} alt="error" />
        </div>
        <div className='aboutUsSection'>
          <p className='para1'>ABOUT US</p>
          <h1>Think global,</h1>
          <h1>Act Local.</h1>
          <p>
            "NayePankh Foundation" is a non governmental organisation with a strong desire to help the
            society and make it a better place for all, by doing everything in our power and to make our
            vision successful we would require your vital support. Service to mankind is the service to
            god. Let’s revolutionise the society together!.
          </p>
          <div className='learnButton'>
            <button className='learnbtn'>LEARN MORE</button>
            <button className='learnbtn'>OURCERTIFICATES</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='welcomeSection'>
        <div className='nayePankhFoundationSection'>
          <h1>
            Welcome to
          </h1>
          <h1>
            NayePankh Foundation
          </h1>
          <h2>
            UP GOVT. | 80G & 12A Registered
          </h2>
          <div className='AbouNgo'>
            <h2>We are one of the Biggest Student led NGO of India with its </h2>
            <h2>operations extended in the city of Kanpur, Ghaziabad and </h2>
            <h2>various other cities.</h2>
          </div>
        </div>
      </div>
      {/* carsoul */}

      {/*  */}
      <div className='homesection flex'>
        <div className='childteeth'>
          <img src={require("./nayepankhpic5.avif")} alt="error" />
        </div>
        <div className='aboutUsSection'>
          <p className='para1'>JOIN OUR</p>
          <h1>TEAM</h1>
          
          <p className='para2'>
          "Join our team and make a difference in the lives of those in need. At NayePankh Foundation,
           we are committed to creating positive change and empowering communities. By joining our 
           team, you will have the opportunity to contribute your time, skills, and ideas to help 
           make a real impact. Whether you are passionate about education, health, or providing 
           support during times of crisis, there is a place for you on our team. Join us today and 
           be a part of an organization that is making a difference, one person at a time."
          </p>
          <div className='learnButton'>
            <button className='learnbtn'>JOIN US</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='founderSection'>
        <div className='founderStatement'>
          <h1>
          "If we all do something, then together there is no problem that we cannot solve!"
          </h1>
          <p>PRASHANT SHUKLA</p>
          <p>Founder & President, NayePankh Foundation</p>
          <div className='supportSection'>
            <div className='support1'>
               <p>All our efforts are made possible only because of </p>
               <p>your support</p>
            </div>
            <div className='support2'>
               <p>Your donations are tax exempted under 80G of the </p>
               <p>Indian Income Tax Act</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
