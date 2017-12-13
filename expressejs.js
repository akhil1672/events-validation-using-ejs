const express = require('express');
const bodyparser = require('body-parser');
let ejs = require('ejs');
let app = express();
app.set('view engine','.ejs');
app.use(bodyparser());
let agevalidate = function(req,res,next){
    let uname=req.body.uname;
    let age=req.body.age;
    //console.log(age);
    //console.log(uname);
    if(age<18 || !uname)
    {
        res.render('./events/ageerr');
    }
    else
    {
        res.render('./events/success');
    }
    next();
}
let loginvalidate = function(req,res,next)
{
    let uname=req.body.userid;
    let pass=req.body.password;
    if(!uname || !pass)
    {
        res.render('./events/loginerr');
    }
    else{
        res.render('./events/home');
    }
    next();
}
app.get('/',function(req,res){
    res.render('./events/home');
})

app.get('/login',function(req,res){
    res.render('./events/login');
})

app.post('/login',loginvalidate,function(req,res){

})

app.get('/signup',function(req,res){
    res.render('./events/signup');
})

app.post('/signup', agevalidate, function (req1, res1) {

})
app.listen(3000,console.log("Listening on 3000"));
