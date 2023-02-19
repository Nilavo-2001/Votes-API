const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
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

const questions = new mongoose.model("questions", questionsSchema);

module.exports = questions;