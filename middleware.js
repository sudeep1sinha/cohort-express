const express = require('express');

const app = express();

function isOldEnoughMiddleware(req , res , next){
    const age = req.query.age;
    if (age>=14){
        next();

    }else {
        res.json({
            msg: "sorry you are not old enough to ride"
        });
    }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res){
        res.json({
            mesg: "you have successfully riden the ride 1"
        }); 
});

app.get("/ride2",isOldEnoughMiddleware,function (req, res){
    res.json({
        mesg: "you have successfully riden the ride 2"
    }); 
});

app.listen(3001);