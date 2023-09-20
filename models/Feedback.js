const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    preferredName: {
        type: String,
        required: true
    },
    
    email: { 
        type: String,
        required: true
    }, //autoextracted!

    likes: {
        type: String,
        required: true
    },

    dislikes: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    features: {
        type: String,
        required: false
    },

    otherQuestions: {
        type: String,
        required: false
    },
})

const Feedback = mongoose.model('FeedbackResponses', FeedbackSchema);

module.exports = Feedback;