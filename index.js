const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
const connectFlashMW = require('./middlewares/connectFlasMW');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 8999;

const store = new MongoDBStore({
    uri:process.env.Mongoose_URL,
    collection:"ToastSession"
});

store.on('error',(err)=>{
    console.log("Error using Mongo Store")
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'));
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
    name:"Farouche",
    secret:"HELLOOOOO",
    cookie:{
        maxAge:(1000*24*60)
    },
    resave:false,
    saveUninitialized:false,
    store:store
}));

app.use(expressLayout);
app.use(cookieParser());

app.use(connectFlash());
app.use(connectFlashMW.connectFlashMiddleware);


app.use('/',require('./routes/index'));



app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in listening",err);
        return;
    }
    console.log('Listening on Port',PORT)
})