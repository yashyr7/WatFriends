const mongoose = require('mongoose');

const ProjectBuddySchema = new mongoose.Schema({
    preferredName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }, //autoextracted!

    skills: {
        type: String,
        required: true
    },

    interests: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    description: {
        type: String,
        default: ""
    },

    instagram: {
        type: String,
        default: "Not Available"
    },

    //every user can post only once

})

const ProjectBuddy = mongoose.model('ProjectBuddy', ProjectBuddySchema);

module.exports = ProjectBuddy;
