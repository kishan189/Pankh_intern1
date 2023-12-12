import React, {useState } from 'react';
import {Link,useNavigate } from 'react-router-dom';
import {VscMail} from "react-icons/vsc";
import {VscLock} from "react-icons/vsc";
import axios from 'axios';
import "./from.css";
export default function Login() {
 
  const navigate=useNavigate();
  const[user,setUser]=useState({
    email:"",
    password:"",
  });
   
  function hadleChange(e){
    const{name,value}=e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const myfun=(e)=>{
    e.preventDefault();
    const{email,password}=user;
    // conts [username,setUsername]=useState();
    if(email && password){
  // http://localhost:4000
  // https://mylogin-nayepankh.onrender.com
     axios.post("https://mylogin-nayepankh.onrender.com/login",{email,password})
     .then(res=>{
      console.log(res);
      if(res.data==="success"){
        navigate('/Mypage');
        
        
      }
       else if(res.data==="the password is incorrect"){ 
        alert("password is incorrect");
      }
      else if(res.data==="No record existed"){
        alert("user not found ");
      }
     })
     .catch(err=>console.log(err))
  
    }
    else{
      alert("invalied input");
    }
    
  }
  
// console.log(Email);
// console.log(password);
  return (
    <>
    <div className='loginbox'>
    <form onSubmit={myfun} className="formContent">
                  <div className="inputcontent">
                    <label><VscMail/> email id</label>
                    <input id="inputid" type="email" name='email' value={user.email} onChange={hadleChange} />
                  </div>
                 <div className="inputcontent">
                  <label><VscLock/> password</label>
                  <input id="inputpass" type="password" name='password' value={user.password} onChange={hadleChange} />
                 </div>  
                    <button className="loginbtn1" type="submit">Log in</button>
                  <Link to='/register' className='linkto'> <button  className="loginbtn2">Sign up for Nayepankh?</button></Link>
                </form>         
    </div>
   
    </>
  )
}
