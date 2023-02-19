const questions = require("../models/questions");
const options = require('../models/options');
module.exports.create = async (req, res) => {
    console.log(req.body);
    let mesage;
    let code = 200;
    try {
        var question = await questions.create(req.body);
        message = 'sucessfully created a question';
    } catch (error) {
        console.log(error);
        message = 'sorry could not create the question :( , internal server error ';
        code = 500;
    }
    return res.status(code).json({ message, question });
}

module.exports.destroy = async (req, res) => {
    const questionId = req.params.id;
    let code = 200;
    let message;
    try {
        const question = await questions.findById(questionId);
        const curOptions = question.options;
        await options.deleteMany({ _id: { $in: curOptions } });
        await question.remove();
        message = "question deleted sucessfully";
    } catch (error) {
        console.log(error);
        message = "internal server error: could not delete the question :("
    }
    return res.status(code).json({ message })
}

module.exports.show = async (req, res) => {
    const questionId = req.params.id;
    try {
        const question = await questions.findById(questionId).populate("options");
        return res.status(200).json({ question })
    } catch (error) {
        console.log(error);
        code = 500;
        let message = "Internal server error: Cannot show the question";
        return res.status(500).json({ message })
    }

}