

var express = require('express')
var Router = express.Router();
var homeSchema = require('../models/homeSchema')
Router.use(express.urlencoded({ extended: false}))


Router.get("/",(req,res) =>{
    res.render("index")
})


//you are defining titile and email and password messages here
Router.get("/register",(err,res) =>{
    res.render("register.ejs",{title:'Sign up to explore!', password:'',email:''})
})



Router.post("/register",async(req,res) =>{
  try{
    var {
        name,
        email,
        password,
        cpassword
    } = req.body;
    
    if(password === cpassword){
        var userData = new homeSchema ({
            name,
            email,
            password
        })
        userData.save(err =>{
            if(err){
                console.log('Error!')
              //  res.render('register',{title:'Error!', password:'',email:''})
            }else{
                res.render('register',{title:'Sign up was successfull, Please Log In!', password:'',email:''})
            }
            
        })

        //this code below above else is to prevent email from multi uses, if to be submit email = exited email => show error
        var useremail = await homeSchema.findOne({ email:email});
          if (email === useremail.email) {
            res.render('register',{title:'', password:'',email:'This e-mail is already taken!'})
          
          }

    } else{
        res.render("register",{title:'Passwords does not match!', password:'',email:''})

    }
    
  } catch(error){

    res.render('register',{title:'Error!', password:'',email:''})
  }
})













//same above get and post route for login.ejs
    Router.get('/login',(err,res) =>{
    res.render('login',{title:'Sign In to explore the power!', password:'',email:''})
})

Router.post('/login',async(req,res) =>{
  
    var {
        email,
        password
    } = req.body;

    homeSchema.findOne({ email:email}, (err,result) =>{ 
      
        if (email === result.email && password === result.password) {
        res.render('dashbord', {name: result.name})

      } else{
        console.log(err)
        
        res.render('login.ejs',{title:'Sign In error!', password:'',email:''})

      }
    })   

})



Router.get('/login',  function (req, res, next)  {
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });







module.exports = Router;

