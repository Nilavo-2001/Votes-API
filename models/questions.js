const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({ //schema for questions
    title: {
        type: String,
        required: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "options"
    }
    ]
})

const questions = mongoose.model("questions", questionsSchema);

module.exports = questions;