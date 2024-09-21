const express = require("express");
const app = express();
app.use(express.json());

const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin:Ss4NN61xFeTGg382@sudeepcluster.pw8oh60.mongodb.net/");

const User = mongoose.model(
    "user",{
        name:String,
        email:String,
        password:String
    }
) 
app.post("/signup",async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existUser = await User.findOne({email:username});
    if(existUser){
        return res.status(400).send("username already exist");
    }

const newUser = new User({
    name:name,
    email:username,
    password:password
});

await newUser.save();
res.json({
    "msg":"user created successfully"
})
});
app.listen(3001);