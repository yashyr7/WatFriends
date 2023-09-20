
const mongoose = require('mongoose');

const MatchingSchema = new mongoose.Schema({
    // preferredName: {
    //     type: String,
    //     required: true
    // },

    // //every user can post only once
    // posted: {
    //     type: Boolean,
    //     default: false
    // },

    secondRound: {
        type: Boolean,
        default: false
    },

    email: {
        type: String,
        required: true
    }, //autoextracted!

    // q1: {
    //     type: String,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now
    },

    q1: { type: String, required: true },   //1
    q2: { type: String, required: true },   //2
    q3: { type: String, required: true },   //3
    q4: { type: String, required: true },   //4a
    q5: { type: Array, required: true },   //4b
    q6: { type: String, required: true },    //5
    q7: { type: String, required: true },   //6
    q8: { type: String, required: true },   //7a
    q9: { type: Array, required: true },   //7b
    q10: { type: String, required: true },   //8a
    q11: { type: Array, required: true },  //8b
    q12: { type: String, required: true },   //9
    q13: { type: String, required: true },  //10
    q14: { type: Array, required: true },   //11
    q15: { type: String, required: true },   //12a
    q16: { type: Array, required: true },   //12b
    q17: { type: Array, required: true },  //13
    q18: { type: Array, required: true },  //14
    q19: { type: Array, required: true },  //15
    q20: { type: Array, required: true },  //16
    q21: { type: Number, required: true },  //17a
    q22: { type: Number, required: true },  //17b
    q23: { type: Number, required: true },  //18
    q24: { type: Number, required: true },  //19
    q25: { type: Number, required: true },  //20
    q26: { type: Number, required: true },  //21
    q27: { type: Number, required: true },  //22
    q28: { type: Number, required: true },  //23a
    q29: { type: Number, required: true },  //23b
    q30: { type: Number, required: true },  //24
    q31: { type: Number, required: true },  //25
    q32: { type: Number, required: true },  //26
    q33: { type: Number, required: true },  //27
    q34: { type: Number, required: true },  //28
    q35: { type: String, required: true },  //29
    q36: { type: Number, required: true },  //30
    q37: { type: Number, required: true },  //31
    q38: { type: Number, required: true },  //32
    q39: { type: Number, required: true },  //33
    q40: { type: Number, required: true },  //34
    q41: { type: Number, required: true },  //35
    q42: { type: Number, required: true },  //36
    q43: { type: String, required: true },  //37
    q44: { type: String, required: true },  //38
    q45: { type: String, required: true },  //39
    q46: { type: Number, required: true },  //40
    q47: { type: Number, required: true },  //41a
    q48: { type: Number, required: true },  //41b
    q49: { type: Number, required: true },  //41c
    q50: { type: Number, required: true },  //41d
    q51: { type: Number, required: true },  //41e
    q52: { type: String, required: true },  //42
    q53: { type: String, required: true },  //43
    q54: { type: String, required: true },  //44
    q55: { type: Number, required: true },  //45
    q56: { type: String, required: true },  //46
    q57: { type: String, required: true },  //47
    q58: { type: String, required: true },  //48
    q59: { type: String, required: true },  //49
    q60: { type: String, required: true },  //50
    q61: { type: String, required: true },  //51
    q62: { type: Number, required: true },  //52a
    q63: { type: Number, required: true },  //52b
    q64: { type: Number, required: true },  //52c
    q65: { type: Number, required: true },  //52d
    q66: { type: Number, required: true },  //52e
    q67: { type: Number, required: true },  //52f
    q68: { type: Number, required: true },  //52g
    q69: { type: Number, required: true },  //52h
    q70: { type: Number, required: true },  //52i
    q71: { type: Number, required: true },  //52j
    q72: { type: Number, required: true },  //52k
    q73: { type: Number, required: true },  //52l
})

const MatchingResponses = mongoose.model('MatchingResponses', MatchingSchema);

module.exports = MatchingResponses;