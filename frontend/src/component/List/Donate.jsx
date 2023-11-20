import React from 'react';
import "./Donate.css";
import MyNavbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function Donate() {
  return (
    <>
    <MyNavbar/>
      <div className='donationSection'>
        <div className='DonationPic'>
          <img src={require("../About/images/IMG-20231025-WA0057.jpg")} alt='error'/>
          <img  className="middPic" src={require("../About/images/IMG-20231025-WA0057.jpg")} alt='error'/>
          <img src={require("../About/images/IMG-20231025-WA0057.jpg")} alt='error'/>
        </div>
        <div className='TogetherSection'>
          <div className='TogetherDonate'>
            <h1>           
                "Together, Let's Make a Difference!"
                <button>Donate</button>
            </h1> 
          </div>
          <p style={{ margin:"1rem 4rem"}}>
              Dear Supporters and Friends, 
          </p>
          <div className='para3'>
            <p>
             NayePankh Foundation was founded with a simple yet powerful vision - to uplift the underprivileged and marginalized
              communities and provide them with access to education, healthcare, and basic necessities that we
               often take for granted. We strongly believe that every child has the right to dream and achieve 
               their aspirations, irrespective of their socio-economic background. We have been working
                relentlessly towards this goal, but we need your support to continue our efforts and make a
                lasting impact. As you read this, countless children and families are struggling to survive 
                without the most basic necessities. They lack access to clean water, sanitation, and proper 
                healthcare facilities. Most of them are unable to attend school due to financial constraints or
                lack of infrastructure. They are trapped in a cycle of poverty and hopelessness, and they need
                our help. We at Nayepankh Foundation strive to break this cycle and provide a ray of hope to 
                those in need. With your support, we can continue to provide education, healthcare, and other
               basic amenities to these communities. We can empower them to lead better lives and realize 
               their true potential. Every donation, no matter how small, can make a huge difference. 
               Your support can provide a child with a school uniform, a pair of shoes, or even a nutritious 
                meal. It can provide a family with access to clean water, sanitation, and healthcare 
                facilities. It can change the trajectory of someone's life forever. We understand that times
                are tough, and everyone is going through their own struggles. But we urge you to think of 
                those who are less fortunate and extend a helping hand. Your generosity can make a world of
                difference to someone in need. We know that we can count on your support to continue our 
                mission. Your donations will help us reach more communities and make a meaningful impact in
                 the lives of those who need it the most. Let's come together and make a difference. Thank
                you for considering our cause and supporting Nayepankh Foundation. Your support means the
                 world to us and those we serve. Let's work together to create a better world for all. 
            </p>
          </div>
          <p style={{ margin:"1rem 4rem"}}>
             With heartfelt gratitude, 
          </p>
          <p style={{ margin:"1rem 4rem"}}>
             Prashant Shukla, Founder & President, NayePankh Foundation
          </p>
      </div>
      </div>
      <Footer/>
    </>
  )
}
