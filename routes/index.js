const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const ConnectyCube = require('connectycube');
const appConfig = require('../config/connectycube');

const questionList = require('../config/questions')

//User Model
const User = require('../models/User')

//MatchingResponses Model
const MatchingResponses = require('../models/MatchingResponses')

//Feedback Model
const Feedback = require('../models/Feedback')

//ProjectBuddy Model
const ProjectBuddy = require('../models/ProjectBuddy')

//nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {

      user: "watfriendsUW",
      pass: "W@$Fr^3nd$696"

    },
});

const EMAIL_SECRET = 't9x7acuJDpqO3BjspaFXtuhW'

//welcome page
router.get('/', (req, res) => res.render('welcome'));

//personalized dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {

    res.render('dashboard', {
        name: req.user.name,
        email: req.user.email,
        token: req.user._id.toString(),
    })
});

router.get('/meetTeam', (req, res) => {
    res.render('team')
});


//dashboard
router.get('/dashboardp', ensureAuthenticated, (req, res) => {
    res.render('genericDashboard')
});

//form for registering for our events
router.get('/form', ensureAuthenticated, (req, res) => {
    MatchingResponses.findOne({ email: req.user.email })
        .then(user => {
            if (user) {
                res.render('form', {
                    applied: true,
                    email: req.user.email,
                })
            } else {
                res.render('form', {
                    applied: false,
                    questionList: questionList,
                    email: req.user.email,
                    answerList: {}
                })
            }
        })
});

router.post('/form', (req, res) => {
    let { q1, q2, q3, q4a, q4b, q5, q6, q7a, q7b,
         q8a, q8b, q9, q10, q11, q12a, q12b, q13, q14, q15, q16,
        q17a, q17b, q18, q19, q20, q21, q22, q23a, q23b, q24,
        q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35,
        q36, q37, q38, q39, q40, q41a, q41b, q41c, q41d, q41e,
        q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52a, q52b, 
        q52c, q52d, q52e, q52f, q52g, q52h, q52i, q52j, q52k, q52l
    } = req.body;

    const email = req.user.email;

    let errors = [];
    //some validations
    if (!q1 || !q2 || !q3 || !q4a || !q4b || !q5 || !q6 || !q7a || !q7b
        || !q8a || !q8b || !q9 || !q10 || !q11 || !q12a || !q12b || !q13 || !q14 || !q15 || !q16 || !
        q17a || !q17b || !q18 || !q19 || !q20 || !q21 || !q22 || !q23a || !q23b || !q24 || !
        q25 || !q26 || !q27 || !q28 || !q29 || !q30 || !q31 || !q32 || !q33 || !q34 || !q35 || !
        q36 || !q37 || !q38 || !q39 || !q40 || !q41a || !q41b || !q41c || !q41d || !q41e || !
        q42 || !q43 || !q44 || !q45 || !q46 || !q47 || !q48 || !q49 || !q50 || !q51 || !q52a || !
        q52b || !q52c || !q52d || !q52e || !q52f || !q52g || !q52h || !q52i || !q52j || !q52k || !q52l ) {
        errors.push({ msg: 'Please answer all the questions' });
    }

    if (Array.isArray(q4b)) {
        if (q4b.indexOf('i') > -1 && q4b.length > 1) {
            errors.push({ msg: "Please do not select other options if Doesn't Matter is selected for question 4b" });
        }
    }

    if (Array.isArray(q7b)) {
        if (q7b.indexOf('k') > -1 && q7b.length > 1) {
            errors.push({ msg: "Please do not select other options if Doesn't Matter is selected for question 7b" });
        }
    }

    if (Array.isArray(q8b)) {
        if (q8b.indexOf('g') > -1 && q8b.length > 1) {
            errors.push({ msg: "Please do not select other options if Doesn't Matter is selected for question 8b" });
        }
    }

    if (Array.isArray(q11)) {
        if (q11.indexOf('h') > -1 && q11.length > 1) {
            errors.push({ msg: "Please do not select other options if Doesn't Matter is selected for question 11" });
        }
    }

    if (Array.isArray(q12b)) {
        if (q12b.indexOf('k') > -1 && q12b.length > 1) {
            errors.push({ msg: "Please do not select other options if Doesn't Matter is selected for question 12b" });
        }
    }

    if (Array.isArray(q14)) {
        if (q14.indexOf('j') > -1 && q14.length > 1) {
            errors.push({ msg: "Please do not select other options if Doesn't Matter is selected for question 14" });
        }
    }

    if (Array.isArray(q16)) {
        if (q16.indexOf('n') > -1 && q16.length > 1) {
            errors.push({ msg: "Please do not select other options if Doesn't Matter is selected for question 16" });
        }
    }

    let answerList = req.body;

    if(errors.length > 0) {
        res.render('form', {
            errors,
            applied: false,
            questionList,
            answerList
        });
    } else {
        MatchingResponses.findOne({ email: email })
            .then(user => {

                if (user) {
                    //user exists
                    //console.log("hi")
                    errors.push({ msg: 'You can submit your responses once' })
                    res.render('dashboardp', {
                        errors
                    })
                    res.redirect('/dashboardp')
                }
                else {
                    //fix data that is being passed in 
                    const newCandidate = new MatchingResponses({
                        email: email,
                        q1: q1, q2: q2, q3: q3, q4: q4a, q5: q4b, 
                        q6: q5, q7: q6, q8: q7a, q9: q7b, q10: q8a, q11: q8b,
                        q12: q9, q13: q10, q14: q11, q15: q12a, q16: q12b, 
                        q17: q13, q18: q14, q19: q15, q20: q16, q21: q17a, 
                        q22: q17b, q23: q18, q24: q19, q25: q20, q26: q21, q27: q22,
                        q28: q23a, q29: q23b, q30: q24, q31: q25, q32: q26, q33: q27,
                        q34: q28, q35: q29, q36: q30, q37: q31, q38: q32, q39: q33, 
                        q40: q34, q41: q35, q42: q36, q43: q37, q44: q38, q45: q39, 
                        q46: q40, q47: q41a, q48: q41b, q49: q41c, q50: q41d, q51: q41e,
                        q52: q42, q53: q43, q54: q44, q55: q45, q56: q46, q57: q47, 
                        q58: q48, q59: q49, q60: q50, q61: q51, q62: q52a, q63: q52b, 
                        q64: q52c, q65: q52d, q66: q52e, q67: q52f, q68: q52g, q69: q52h,
                        q70: q52i, q71: q52j, q72: q52k, q73: q52l
                    })
                    newCandidate.save()
                        .then(user => {
                            req.flash('success_msg', 'Your responses have been submitted! :)')
                            res.redirect('/dashboardp')
                        })
                        .catch(err => console.log(err))
                    //send email that feedback form is submitted
                    transporter.sendMail({
                        to: email,
                        subject: 'WatFriends: Valentines Match Form received',
                        html: `Hello ${q1}, <br/><br/>
                Thank you for submitting your responses! 
                Sit tight and wait for the algorithm to run its magic and find you a perfect match! <3 
                <br/><br/>
                 Regards, <br/><br/>
                 WatFriends Team`
                    })

                }
            })
            .catch(err => console.log(err))

    }

    //NOTE: user can only submit form once from an account
})



//feedback form
router.get('/feedback', ensureAuthenticated, (req, res) => res.render('feedback', {
    email: req.user.email,
    username: req.user.name
}));

//save in a separate table
router.post('/feedback', (req, res) => {
    const { yourname, likes, dislikes, features, otherQuestions } = req.body;
    const email = req.user.email;
    let errors = [];
    //checking required fields
    if (!yourname || !likes || !dislikes) {
        errors.push({ msg: 'Please fill in all the required fields (username, likes & dislikes)' });
    }

    if (yourname.length < 4) {
        errors.push({ msg: 'Your preferred name should be atleast 4 characters long!' });
    }

    if (likes.length < 10) {
        errors.push({ msg: 'Please describe what you like about WatFriends in atleast 10 characters' });
    }

    if (dislikes.length < 10) {
        errors.push({ msg: 'Please describe what you dislike about WatFriends in atleast 10 characters' });
    }

    if (features.length > 0 && features.length < 8) {
        errors.push({ msg: 'Please leave the features empty or describe it in atleast 8 characters' });
    }

    if (otherQuestions.length > 0 && otherQuestions.length < 10) {
        errors.push({ msg: 'Please leave the last question empty or describe it in atleast 10 characters' });
    }

    username = req.user.name;

    if (errors.length > 0) {
        res.render('feedback', {
            errors,
            yourname,
            likes,
            dislikes,
            features,
            otherQuestions,
            username,
            email,
        });
    } else {
        Feedback.findOne({ email: email })
            .then(user => {
                const newFeedback = new Feedback({
                    preferredName: yourname,
                    email,
                    likes,
                    dislikes,
                    features,
                    otherQuestions
                });
                newFeedback.save()
                    .then(user => {
                        req.flash('success_msg', 'Feedback submitted successfully!')
                        res.redirect('/dashboardp')

                        //send email that feedback form is submitted
                        transporter.sendMail({
                            to: email,
                            subject: 'WatFriends: Feedback received',
                            html: `Hello ${yourname}, <br/><br/>
                        Thank you for your valuable feedback. Your input has been submitted successfully. <br/>
                        Please don't hesitate to contact us if you have any questions.
                        <br/><br/>
                         Regards, <br/><br/>
                         WatFriends Team`
                        })
                    })
                    .catch(err => console.log(err))
            });
    }
});

//apply for second matching round- INCOMPLETE
router.get('/applySecondRound', ensureAuthenticated, (req, res) => {
    MatchingResponses.findOne({ email: req.user.email })
        .then(user => {
            if (user && user.secondRound) {
                res.render('secondRound', {
                    applied: true,
                })
            } else {
                res.render('secondRound', {
                    applied: false,
                })
            }
        })
});

router.post('/applySecondRound', async (req, res) => {
    let errors = [];
    const email = req.user.email;
    if (errors.length > 0) {
        res.render('dashboard', {
            errors
        })
    } else {
        //validation passes

        MatchingResponses.findOne({ email: email })
            .then(async user => {
                if (user) {
                    //user exists
                    var newvalues = { $set: { secondRound: true }}
                    await MatchingResponses.updateOne({ email: email }, newvalues)
                    transporter.sendMail({
                        to: email,
                        subject: 'WatFriends: Valentines Match Second Round',
                        html: `Hello ${req.user.name}, <br/><br/>
                We have recieved your application for the second round
                Sit tight and wait for the algorithm to run its magic and find you a perfect match! <3 
                <br/><br/>
                 Regards, <br/><br/>
                 WatFriends Team`
                    })
                    res.redirect('/dashboard')
                } else {
                    errors.push({ msg: 'You can only apply for the second round after you apply for the first round' })
                    res.render('secondRound', {
                        errors,
                        applied: false
                    })
                }
            })
    }

})


//project buddy
router.get('/projectBuddyForm', ensureAuthenticated, (req, res) =>
    res.render('projectBuddyForm', {
        email: req.user.email,
        username: req.user.name
    }
    ));

//save in a separate table
router.post('/projectBuddyForm', async (req, res) => {
    const { yourname, skills, interests, description, instagram } = req.body;
    const email = req.user.email;
    let errors = [];

    //check required fields
    if (!yourname || !skills || !interests) {
        errors.push({ msg: 'Please fill in all the required fields (preferred name, skills, interests)' });
    }

    if (yourname.length < 4) {
        errors.push({ msg: 'Your preferred name should be atleast 4 characters long!' });
    }

    if (skills.length < 3) {
        errors.push({ msg: 'The skills you entered should be atleast 3 characters long!' });
    }

    if (interests.length < 10) {
        errors.push({ msg: 'Please describe your interests in atleast 10 characters' });
    }

    if (description.length > 0 && description.length < 10) {
        errors.push({ msg: 'Please enter a description in atleast 10 characters or leave it empty' });
    }

    if (instagram.length > 0 && instagram.length < 3) {
        errors.push({ msg: 'As of now, we accept instagram id\'s which are atleast 3 characters in length. If that is not possile, then please leave this field empty' });
    }

    username = req.user.name;
    if (errors.length > 0) {
        res.render('projectBuddyForm', {
            errors, yourname, skills, interests, description, instagram, username, email
        })
    } else {
        //validation passes
        // Check for three postings
        // ProjectBuddy.find({ email: email })
        //     .then(user => {

        //         if (user) {
        //             //user exists
        //             errors.push({ msg: 'You can submit only one time. Delete your previous post before making a new one' })
        //             res.render('projectBuddyForm', {
        //                 errors, username, email
        //             })
        //             res.redirect('/dashboardp')
        //         }
        //         else {
        //             //create a posting
        //             const newPost = new ProjectBuddy({
        //                 preferredName: yourname,
        //                 email,
        //                 skills,
        //                 interests,
        //                 description,
        //                 instagram
        //             })
        //             newPost.save()
        //                 .then(user => {
        //                     req.flash('success_msg', 'Post created successfully!')
        //                     res.redirect('/dashboardp')
        //                 })
        //                 .catch(err => console.log(err))
        //             //send email that feedback form is submitted
        //             transporter.sendMail({
        //                 to: email,
        //                 subject: 'WatFriends: successfully registered for project buddy!',
        //                 html: `Hello ${yourname}, <br/><br/>
        //             Thank you for submitting the project buddy form. Your details are now live and can be viewed under "find a project buddy". <br/>
        //             Please don't hesitate to contact us if you have any questions. 
        //             <br/><br/>
        //              Regards, <br/><br/>
        //              WatFriends Team`
        //             })

        //         }
        //     })
        let projectBuddyRecords = await ProjectBuddy.find({ email: email });
        //console.log(projectBuddyRecords.length);
        if (projectBuddyRecords.length >= 3) {
            errors.push({ msg: 'You can submit three postings. Delete one of your previous posts to make a new one' })
            res.render('projectBuddyForm', {
                errors, username, email
            });
        }
        else {
            //create a posting
            const newPost = new ProjectBuddy({
                preferredName: yourname,
                email,
                skills,
                interests,
                description,
                instagram
            })
            newPost.save()
                .then(user => {
                    req.flash('success_msg', 'Post created successfully!')
                    res.redirect('/dashboardp')
                })
                .catch(err => console.log(err))
            //send email that feedback form is submitted
            transporter.sendMail({
                to: email,
                subject: 'WatFriends: successfully registered for project buddy!',
                html: `Hello ${yourname}, <br/><br/>
                            Thank you for submitting the project buddy form. Your details are now live and can be viewed under "find a project buddy". <br/>
                            Please don't hesitate to contact us if you have any questions. 
                            <br/><br/>
                             Regards, <br/><br/>
                             WatFriends Team`
            })

        }
    }
    //some validations

    //throw inside the database if everything is good :)


})

//project buddy
// router.get('/projectBuddyView', ensureAuthenticated, (req, res) => {
//     // extract records from database
//     ProjectBuddy.find(function (err, result) {
//         if (err) throw err;
//         res.render('projectBuddyView', {
//             result: result
//         });
//     });
// })

router.get('/projectBuddyView', ensureAuthenticated, async (req, res) => {
    try {
        let query = ProjectBuddy.find()
        const projectBuddyRecords = await query;
       //console.log(projectBuddyRecords)
        res.status(200).render('projectBuddyView', {
            count: projectBuddyRecords.length,
            result: projectBuddyRecords
        })
    }
    catch (err) {
        throw err;
    }
})

router.get('/myPostings', ensureAuthenticated, async (req, res) => {
    try {
        const email = req.user.email;
        let query = ProjectBuddy.find({ email: email })
        const projectBuddyRecords = await query;
        //console.log(projectBuddyRecords)
        res.status(200).render('myPostings', {
            count: projectBuddyRecords.length,
            result: projectBuddyRecords
        })
    }
    catch (err) {
        throw err;
    }
})

router.get('/myPostings/delete/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        let query =  await ProjectBuddy.find({ _id: postId });
        if (query) {
            await ProjectBuddy.deleteOne({ _id: postId });
            res.redirect('/myPostings')
        } else {
            res.redirect('/dashboard')
        }
    }
    catch (err) {
        throw err;
    }
})

router.post('/projectBuddyView', async (req, res) => {

    try {
        //console.log(req.body)
        let skills = req.body.quickSearch
        let query = ProjectBuddy.find({ $or: [{ preferredName: { $regex: `.*${skills}.*`, $options: 'i' } }, { interests: { $regex: `.*${skills}.*`, $options: 'i' } }, { description: { $regex: `.*${skills}.*`, $options: 'i' } }, { skills: { $regex: `.*${skills}.*`, $options: 'i' } }] })
        const projectBuddyRecords = await query;
        //console.log(projectBuddyRecords)
        res.status(200).render('projectBuddyView', {
            count: projectBuddyRecords.length,
            result: projectBuddyRecords
        })
    }
    catch (err) {
        throw err;
    }
})

router.get('/confirmation/:token', async (req, res) => {
    try {

        const { user: { email } } = jwt.verify(req.params.token, EMAIL_SECRET);

        var myquery = { email: email }

        User.findOne(myquery)
        .then(async newUser => {
            if(newUser) {
                ConnectyCube.init(appConfig.connectyCubeConfig[0])
                await ConnectyCube.createSession()
                await ConnectyCube.users.signup({
                    login: email,
                    password: newUser._id.toString(),
                    email: email,
                    full_name: newUser.name,
                })
                .then(() => {
                    var newvalues = { $set: { confirmed: true } }
                    User.updateOne(myquery, newvalues, function (err, res) {
                        if (err) {
                            req.flash('success_msg', 'Account verification sucessful. You can now log in');
                            res.redirect("/users/login")
                        }
                    })
                })
                .catch(err => {
                    console.log(err);
                    req.flash('error_msg', 'User could not be created. Please contact us. Sorry for the inconvenience');
                    res.redirect("/users/register");
                })
            }
        })

        req.flash('success_msg', 'Account verification sucessful. You can now log in');
        res.redirect("/users/login")
    }
    catch (e) {
        console.log(e);
        req.flash('error_msg', 'ERROR! You have clicked on an invalid or expired link');
        res.redirect("/users/register")
    }
})

module.exports = router;
