import React, { useState } from 'react';
import "./feedback.css";
import axios from 'axios';
import MyNavbar from '../Navbar/Navbar';
export default function Feedback() {

  const[user, setUser]=useState(
   {
    rating:'',
    suggestion:'',
   }
  );

  const myfun=async(e)=>{
    e.preventDefault();
    const{ rating, suggestion}=user
    if( suggestion){
      // https://mylogin-nayepankh.onrender.com/register
     axios.post("https://mylogin-nayepankh.onrender.com/feedback",{rating, suggestion})
       .then(res=>{
        console.log(res);
        if(res.data==="feedbackDone"){
          alert("feedback submited")
        
        }
       })
       .catch(err=>console.log(err))
     }
    else{
      alert("invalied input");
    }
    
  }

  function handlechange(event){
    const{name, value}=event.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  // console.log(user)
  return (
    <>
    <MyNavbar/>
    <div className='feedback'>
        <form onSubmit={myfun} className="feedbackContent">
                <h1>write your feedback</h1>
                  <div className="inputcontent2">
                   <p>Did you achieve your goal?</p>
                   <div className='permormance'><span>poor</span><span>average</span><span> very good</span>
                   </div>
                   <div className='rangemeter'><span>1</span><span>2</span><span>3</span><span>4</span>
                   <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span></div>
                 <input className='input' type="range" min={0} max={10} step={1} name='rating' value={user.rating} onChange={handlechange}/>
                  </div>
                 <div className="inputcontent2">
                  <p>Do you have any suggestion to make our website better?</p>
                  <textarea rows={4} cols={80} name='suggestion' placeholder='write here...' value={user.suggestion} onChange={handlechange}></textarea>
                 </div>  
                    <button className="loginbtn3" type="submit">submit</button>
                  
                </form>  
    </div>
    </>
  )
}
