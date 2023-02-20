const mongoose = require('mongoose');
const opts = {
    toObject: { virtuals: true },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) { // this function is called whenever the document object 
            // is converted to plain js object
            // the doc is the doucment object and the ret is the plain js object that will be returned
            // we are deleting the following properties from the plain js object returned
            delete ret.id;
            delete ret.__v;
            delete ret.questionId;
        }
    }
};

const optionsSchema = new mongoose.Schema({ // schema for options
    title: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    questionId: {
        type: String,
        required: true
    }
}, opts)

optionsSchema.virtual('link_to_vote').get(function () {
    // adding a virtual property to create a voting link dynamically
    return `http://localhost:8000/options/${this._id}/add_vote`;
});

const options = mongoose.model("options", optionsSchema);

module.exports = options;