if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


var express = require('express');
var mongoose =require('mongoose');
var bodyParser = require('body-parser');
var homeRouter = require('./routers/homeRouter')


//const PORT = process.env.PORT || 5000;
var PORT = parseInt(process.env.PORT) || 3000;
console.log(PORT);



var app = express();

//db connection
//mongoose.connect('mongodb+srv://Hamza:Sisijoy123@cluster0.eabv6fz.mongodb.net/test',{useUnifiedTopology:true})



mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true},{useUnifiedTopology:true})

var db = mongoose.connection;

db.on('error',() =>{
     console.log("error connecting database")
    })
db.once('open',() =>{
     console.log("succesfully connected to database")
    })







//we are telling server that we are using ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')










//linking css files 
app.use(express.static('public'))


//below line of code for body parser
app.use(bodyParser.urlencoded({ extended: false}))

//parse application/json
app.use(bodyParser.json())




//router running on index
app.use('/', homeRouter)



//app.listen(PORT, () =>
//console.log("listening on http://localhost:8080 ...") + PORT);

app.listen(PORT)






