const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyparser = require("body-parser");
const exphbs = require('express-handlebars');
const app = express();
// const port = process.env.PORT || 3000;
// const port = 3000;
const port = 80;

// Set up the mongoose templates

// Set up the mongoose templates
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// All schema in mongoose templates
const login = require("./static/js/schema")

const feedback = require("./static/js/mainschema.js")

const booking = require("./static/js/bookschema.js")


app.use('/static', express.static('static'))
app.use(express.urlencoded())

// All Create New Pages

// Starting pages

app.get('/page', (req, res) => {
    res.status(200).render('page');
})

app.get('/', (req, res) => {
    res.status(200).render('indexes');
})

// Login pages
app.get('/login', (req, res) => {
    res.status(200).render('login');
})

// Sign Up pages

app.get('/signup', (req, res) => {
    res.status(200).render('signup');
})

// Sign Up pages Message

app.get('/data', (req, res) => {
    res.status(200).render('data');
})

app.get('/contact', (req, res) => {
    res.status(200).render('contact');
})

// All Data Store In Database

// Quote Data Store in Database
app.post('/main', (req, res) => {
    const mydatamain = new feedback(req.body);
    mydatamain.save().then(() => {
        res.send("This Items will save to the Database")
        // window.alert("This Information will save to the Database")
    }).catch(() => {
        res.send("This Items was not save to the Database")
    })
})

// Booking Data Store in Database
app.post('/', (req, res) => {
    const mybooking = new booking(req.body);
    mybooking.save().then(() => {
        // res.send("Your tickect is booking successfully")
        res.render(`data`)
        // window.alert("This Information will save to the Database")
    }).catch(() => {
        res.send("Your tickect is not booking successfully")
    })
})

// Login(signin) Data Store in Database
app.post('/login', async (req, res) => {
    try {
        // const email = req.body.email;
        // const password = req.body.cpassword;

        // This is Checking code for user
        // findOne({Database Wala email : user ne jo email daala hai wo email hai}) 
        // user = login.findOne({ email: email });
        user = login.findOne(email);
        console.log(user)

        if (user.password === password) {
            res.status(200).render('indexes')
        }
        else {
            res.send('Invaild login Password')
        }

    } catch (error) {
        res.status(400).send('Invaild login email')
    }
})

// Signup Data Store in Database
app.post('/signup', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if (password === cpassword) {
            // const mydata = new login({
            //     name:req.body.name,
            //     email:req.body.email,
            //     phone:req.body.phone,
            //     password:req.body.password,
            //     cpassword:req.body.cpassword
            // })

            const mydata = new login(req.body);

            mydata.save().then(() => {
                res.send("This Items will save to the Database")
                // res.render(`data`)
            }).catch(() => {
                res.send("This Items was not save to the Database")
            })
        }

        else {
            res.send('Password Are Not Matching')
        }
    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(port, () => {
    console.log(`website starting Succesfully at http://localhost:${port}`)
})