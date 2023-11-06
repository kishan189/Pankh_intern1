const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://0.0.0.0:27017/login');


const mongoSchema= new mongoose.Schema({
    Name:String,
    email:String,
    password:String
})

const User= mongoose.model('users',mongoSchema);


app.post("/register",(req,res)=>{
    const{email,password}=req.body;
        User.findOne({email:email})
        .then(user =>{
            if(user){
                res.json("already existed")
            }
            else{
             User.create(req.body)
               .then(result=>{
                  result.save()               
                    res.json(result);
               
               })
            }
           
        })
        .catch(err=>res.json(err))

      
})

app.post("/login", (req,res)=>{
    const{email,password}=req.body;
    User.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }
            else{
                res.json("the password is incorrect")
              
            }
        }
        else{
            res.json("No record existed")
        }
    })
    
})




app.listen(4000);