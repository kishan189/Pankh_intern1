const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
// mongoose.connect('mongodb://0.0.0.0:27017/login');
// mongodb+srv://kishan20372:<password>@cluster0.wtacofy.mongodb.net/

mongoose.connect('mongodb://0.0.0.0:27017/login').then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log(err));
const mongoSchema= new mongoose.Schema({
    Name:String,
    email:String,
    password:String
})

const User= mongoose.model('users',mongoSchema);



app.post("/register",(req,res)=>{
    try{
        const{email}=req.body;
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
    }  catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
     
})

app.post("/login", (req,res)=>{
   try{
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
   }  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
    
})




app.listen((4000),()=>{
    console.log("started at port 4000");
});