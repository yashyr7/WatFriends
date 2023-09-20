const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session')
const passport = require('passport');


//basic express server
const app = express();

//Passport config
require('./config/passport')(passport); 

app.use('/favicon.png', express.static('images/favicon.png'));


// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/"));

// Express body parser
app.use(express.urlencoded({ extended: false }));

// Express session middleware
app.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash middleware
app.use(flash());

//Global vars (like a custom middleware)
app.use( (req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

//creating port to run our app
const PORT = process.env.PORT || 5000;

//for server
app.listen(PORT, console.log(`Server started on port ${PORT}`));

//unknown url redirect
app.get("*", function(req,res){
	req.flash("error","The page you requested does not exist. Redirected to the home page.")
	res.redirect("/");
});
