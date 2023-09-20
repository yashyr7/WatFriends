const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

//nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "watfriendsUW",
      pass: "W@$Fr^3nd$696"
    },
  });
const EMAIL_SECRET = 't9x7acuJDpqO3BjspaFXtuhW'

//User model
const User = require('../models/User')

//Matching responses model
const MatchingResponses = require('../models/MatchingResponses')

//Feedback Model
const Feedback = require('../models/Feedback')

//ProjectBuddy Model
const ProjectBuddy = require('../models/ProjectBuddy')

//Login page
router.get('/login', (req, res) => res.render('login'));

//Register page
router.get('/register', (req, res) => res.render('register'));

//Register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body;
    let errors = [];

    //only uwaterloo and laurier students can register
    let temp = email.indexOf('@');
    let temp2 = email.substring(0, temp);
    let temp3 = email.substring(temp+1);

    if(temp2.indexOf('.')>=0) {
        errors.push({msg: 'Please use the format d69tump@uwaterloo.ca or j96bden@mylaurier.ca'})
    }

    if(temp3!="uwaterloo.ca" && temp3!="mylaurier.ca") {
        errors.push({msg: 'Please use your uwaterloo or mylaurier email'})
    }

    //check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields'});
    }

    //check passwords match 
    if(password != password2) {
        errors.push({ msg: 'Passwords do not match'});
    }

    //check password length
    if(password.length < 6) {
        errors.push({ msg: 'Password should be atleast 6 characters'});
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        //validation passes
        //mongoose works like- you create a model and then you call methods (like save, find,etc) on that model

        //make sure that the same entry does not exist
        User.findOne({ email: email })
         .then(user => {
             if(user){
                 //user exists
                 errors.push({ msg: 'Email is already registered'})
                 res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
             } else {
                const newUser = new User({
                    name,
                    email, 
                    password
                });
                
                //Hash password
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        //set password to hashed
                        newUser.password = hash;
                        // save user
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'Registration successful. Please confirm your email to login');
                                res.redirect('/users/login')
                            })
                            .catch(err => console.log(err));
                }))

                //async email
                try{
                    user = new User({
                        name,
                        email, 
                        password
                    });
                jwt.sign(
                    {
                        user: user
                    },
                    EMAIL_SECRET, 
                    {
                        expiresIn: '0.5h',
                    },
                    (err, emailToken) => {
                        const url = `http://wat-friends.herokuapp.com/confirmation/${emailToken}`;
                       
                        transporter.sendMail({
                            to: email,
                            subject: 'WatFriends: Account activation',
                            html: `Hello ${name}, <br/><br/>
                            In order to activate your WatFriends account, click on: 
                            <a href="${url}"> ${url} </a>
                            <br/><br/>
                            Regards, <br/><br/>
                            WatFriends team`
                        })
                    }
                )
                }
                catch(e)
                {
                    console.log(e)  
                }

             }
         });    

    }

});

//forgot password
router.get('/resetPassword', (req, res) => res.render('resetPassword'));

router.post('/resetPassword', (req, res) => {
    const {email} = req.body;
    let errors = [];
    if(!email) {
        errors.push({msg: 'Please enter the registered email'});
    }

    if(errors.length > 0) {
        res.render('resetPassword', {
            errors,
            email
        });

    } else {
        //validation passes

        //make sure that the email is present in the database
        User.findOne({email: email})
            .then(user => {
                if(!user){
                    //user doesn't exist
                    errors.push({msg: 'Entered e-mail is not registered'})
                    res.render('resetPassword', {
                        errors,
                        email
                    })
                } else {
 
                    req.flash('success_msg', 'Please check your email for the reset link');
                    res.redirect("/users/login")
                    user.tokenValid = true
                    name = user.name
                    resetToken = user.resetToken
                    tokenValid = user.tokenValid
                    confirmed = user.confirmed
                    //send email with reset link
                    //async email
                    try{
                        user = new User({
                            email,
                            name,
                            resetToken,
                            tokenValid,
                            confirmed
                        });
                    jwt.sign(
                        {
                            user: user
                        },
                        EMAIL_SECRET, 
                        {
                            expiresIn: '0.5h',
                        },
                        (err, emailToken) => {
                            const url = `http://wat-friends.herokuapp.com/users/resetRedirect/${emailToken}`;
                            
                            const secretKey = Math.floor(Math.random()*89999999+10000000-25971)

                            var myquery = {email: email}
                            var newvalues = {$set: {resetToken: secretKey}}
                            User.updateOne(myquery, newvalues, function(err, res) {
                                
                            })

                            newvalues = {$set: {tokenValid: true}}
                            User.updateOne(myquery, newvalues, function(err, res){
                           
                            })
                            
                            transporter.sendMail({
                                to: email,
                                subject: 'WatFriends: Password Reset link',
                                html: `Hello ${user.name}, <br/><br/>
                                Someone has requested to reset the password of your watFriends account. 
                                <br/><br/>
                                If it wasn't you, then please ignore this email and make sure that someone 
                                doesn't hack your email account.
                                <br/><br/>
                                If it was you, then to reset your password, note your one time secret key:
                                 ${secretKey} and then click on: <a href="${url}"> ${url} </a> 
                                 <br/><br/>
                                 Regards, <br/><br/>
                                 WatFriends Team`
                            })
                        }
                    )
                    }
                    catch(e)
                    {
                        console.log(e)  
                    }
                }
            })
    }
})

//reset redirect handle
router.get('/resetRedirect/:token', async (req, res) => {
    try{
        const {user: {email} } = jwt.verify(req.params.token, EMAIL_SECRET);
        valid=false
        await(User.findOne({email: email})
            .then(user => {
                valid = user.tokenValid
            })  )

        if(valid)
        {
            var myquery = {email: email}
            var newvalues = {$set: {tokenValid: false}}
            User.updateOne(myquery, newvalues, function(err, res) {
            valid = false
            })

            res.render('newPassword')
        }
        else{
            req.flash('error_msg', 'ERROR! You have clicked on an invalid or expired link');
            res.redirect("/users/login")
        }
        
        
    }
    catch(e){
        console.log(e)
        req.flash('error_msg', 'ERROR! You have clicked on an invalid or expired link');
        res.redirect("/users/login")
    }
})

//resetting the password
//PROTECTED THIS ROUTE
router.get('/newPassword', (req, res) => {

    req.flash('error_msg', 'ERROR! You have tried to go to a route that you are not supposed to!');
    res.redirect("/users/login")
    
})

router.post('/newPassword/', (req, res) => {
    const {password, password2, secretKey} = req.body;
    let errors = [];

    //check required fields
    if((!password) || (!password2) || (!secretKey))
    {
        errors.push({msg: 'Password Fields cannot be blank! Redirected to login page'})
    }

    //check passwords match 
     if(password != password2) {
        errors.push({ msg: 'Passwords do not match! Redirected to login page'});
    }

    //check password length
    if(password.length < 6) {
        errors.push({ msg: 'Password should be atleast 6 characters! Redirected to login page'});
    }

    if(errors.length > 0) {
        res.render('login', {
            errors,
            password,
            password2
        });
    } else {
        //basic validation passes
        //verify the user and proceed
        //save the password for the specified user
            
        User.findOne({resetToken: secretKey})
        .then(user => {
            if(!user)
            {
                //wrong secret key provided
                req.flash('error_msg', 'Sorry, the entered secret key is incorrect');
                res.redirect("/users/login")
            }
            
             email = user.email;

            //Hash password
            bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                //set password to hashed
                user.password = hash;      
             
                req.flash('success_msg', 'Password changed successfully! You can now log in');
                res.redirect('/users/login')
               //update password
                var myquery = {email: email}
                var newvalues = {$set: {password: user.password}}
                User.updateOne(myquery, newvalues, function(err, res) {
                })

                newvalues = {$set: {resetToken: ""}}
                User.updateOne(myquery, newvalues, function(err, res) {
                 })
            }) )

           })
        
    }

})


// Resend email
router.get('/resendEmail', (req, res) => {
    res.render('resendEmail');
});

router.post('/resendEmail', (req, res) => {
    const {email} = req.body;
    let errors = [];
    if(!email) {
        errors.push({msg: 'Please enter the registered email'});
    }

    if(errors.length > 0) {
        res.render('resendEmail', {
            errors,
            email
        });

    } else {
        //validation passes

        //make sure that the email is present in the database
        User.findOne({email: email})
            .then(user => {
                if(!user){
                    //user doesn't exist
                    errors.push({msg: 'Entered e-mail is not registered'})
                    res.render('resendEmail', {
                        errors,
                        email
                    })
                } else if (user.confirmed) {
                    //email already confirmed
                    errors.push({msg: 'Entered e-mail has already been confirmed'})
                    res.render('resendEmail', {
                        errors,
                        email
                    })
                } else {
                    req.flash('success_msg', 'Confirmation Email Sent! Please confirm your email to login');
                    res.redirect("/users/login")

                    //async email
                    try{
                    jwt.sign(
                    {
                        user: user
                    },
                    EMAIL_SECRET, 
                    {
                        expiresIn: '0.5h',
                    },
                    (err, emailToken) => {
                        const url = `http://wat-friends.herokuapp.com/confirmation/${emailToken}`;

                        transporter.sendMail({
                            to: email,
                            subject: 'WatFriends: Account activation',
                            html: `Hello ${user.name}, <br/><br/>
                            In order to activate your WatFriends account, click on: 
                            <a href="${url}"> ${url} </a>
                            <br/><br/>
                            Regards, <br/><br/>
                            WatFriends team`
                        })
                    }
                    )
                }
                catch(e)
                {
                    console.log(e)  
                }

                }
            })
    }
})



//Login handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true 
    })(req, res, next);
});

//Logout handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;
