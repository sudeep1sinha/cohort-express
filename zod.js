const express = require("express");
const z = require("zod");

// if this is an array of numbers with atleast 1 input , return true else return false

/*function validateInput(arr){
    const schema=z.array(z.number());

    const response= schema.safeParse(arr);
    console.log(response);
}*/

function validateInput(obj){
    const schema=z.object({
        email:z.string().email(),
        password:z.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"sudeep@gmail.com",
    password:"123456789"
})

// how to use zod in auth
app.post("/login", function(req,res){
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg:"your inputs are invalid"
        })
        return;
    }
    
})