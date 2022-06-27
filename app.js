const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter')


const port = process.env.port || 8080;


const app = express();

//db connection
mongoose.connect('mongodb+srv://Hamza:Test123!@cluster0.eabv6fz.mongodb.net/test',{useNewUrlParser:true})
const db = mongoose.connection;

db.on('error',() =>{
     console.log("error connecting database")
    })
db.once('open',() =>{
     console.log("succesfully connected to database")
    })







//we are telling server that we are using ejs
app.set('view engine', 'ejs')



//get route for index.ejs
app.get('/',(req,res) =>{
    res.render('index.ejs',{name:"Hamza"})
})
//get route for login.ejs and register.ejs
app.get('/login',(req,res) =>{
    res.render('login.ejs')
})

app.get('/register',(req,res) =>{
    res.render('register.ejs')
})








//linking css files 
app.use(express.static('public'))


//below line of code for body parser
app.use(bodyParser.urlencoded({ extended: false}))

//parse application/json
app.use(bodyParser.json())





app.use('/',homeRouter)

app.listen(8080)