const express = require('express')
const app = express();
const session = require('express-session')
const {checkloggeIn,bypasslogin}= require('./middleware')


app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))

// Local Session Stroage
app.use(session({
    secret:'my_session_secret',
    resave:true,
    saveUninitialized:false,
    name:'shri',
    cookie:{
        maxAge: 10000
    }
}))

// Get The Local User Name
app.use((req,res,next)=>{
    res.locals.user = req.session.user
    next()
})


// Configure Routes
app.get('/',checkloggeIn,(req,res)=>{
    res.render('home')
})

app.get('/login',bypasslogin,(req,res)=>{
    res.render('login',{error:null})
})

app.post('/login',(req,res)=>{
    if (req.body.Username === 'shri' && req.body.password === '123') {
        req.session.user = { id :1 ,Username:'shri',name:'shrishail'}

        res.redirect('/')
    } else {
        res.render('login',{error : "Wrong Credentials "})
    }
})

// Logout The Session and Delete Old Cookie
app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.clearCookie('shri')
    res.redirect('/')
})

let PORT = 8080;


app.listen(PORT,()=>{
    console.log(` server is Runnig http://localhost:${PORT}`)
})