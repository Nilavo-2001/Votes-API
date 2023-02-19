const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };
const optionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
}, opts)
optionsSchema.virtual('link_to_vote').get(function () {
    return `http://localhost:8000/options/${this._id}/add_vote`;
});
const options = mongoose.model("options", optionsSchema);

module.exports = options;