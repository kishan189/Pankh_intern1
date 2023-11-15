import React, {useState } from 'react';
import {VscMail} from "react-icons/vsc";
import {VscLock} from "react-icons/vsc";
import axios from 'axios';
import "./from.css";
import { Link } from 'react-router-dom';
export default function Register() {
  const[user,setUser]=useState({
    Name:"",
    email:"",
    password:"",
    repass:""
  });
 
const myfun=async(e)=>{
  e.preventDefault();
  const{Name,email,password,repass}=user
  if(Name && email && password && (password===repass)){
  
   axios.post("https://nayepankh-auth.onrender.com/register",{Name,email,password})
     .then(res=>{
      console.log(res);
      if(res.data==="already existed"){
        alert("already existed")
      }
      else{
        alert("successfully registered");
      }
     })
     .catch(err=>console.log(err))
  
   }
  else{
    alert("invalied input");
  }
  
}

function hadleChange(e){
  const{name,value}=e.target;
  setUser({
    ...user,
    [name]:value
  })
}
// console.log(user.email);
// console.log(user.password);
  return (
    <>
     <div className='loginbox'>
     <form onSubmit={myfun}  className="formContent">
     <div className="inputcontent">
                    <label>Name</label>
                    <input id="inputid" type="text" name='Name' value={user.Name} onChange={hadleChange} />
                  </div>
                  <div className="inputcontent">
                    <label><VscMail/> email id</label>
                    <input id="inputid" type="email" name='email' value={user.email} onChange={hadleChange} />
                  </div>
                 <div className="inputcontent">
                  <label><VscLock/>password</label>
                  <input id="inputpass" type="password" name='password' value={user.password} onChange={hadleChange} />
                 </div>
                <div className="inputcontent">
                  <label><VscLock/> reenter password</label>
                  <input id="inputpass" type="password" name='repass' value={user.repass} onChange={hadleChange} />
                 </div>
                    <button className="loginbtn1" type="submit">Sign Up</button>
                  <button  className="loginbtn2"><Link to='/' className='linkto'>Already have an account?</Link></button>        
                </form>
     </div>
    </>
  )
}
