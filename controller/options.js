const options = require('../models/options');
const questions = require('../models/questions');
module.exports.create = async (req, res) => {
    const questionId = req.params.id;
    let code = 200;
    let message;
    let curOption = {
        ...req.body,
        questionId
    };
    try {
        var option = await options.create(curOption);
        const question = await questions.findById(questionId);
        question.options.push(option.id);
        await question.save();
        message = "option sucessfully created";
    } catch (error) {
        console.log(error);
        code = 500;
        message = "internal server error : could not create the option :(";
    }
    return res.status(code).json({ message, option });
}

module.exports.destroy = async (req, res) => {
    const optionId = req.params.id;
    let code = 200;
    let message;
    try {
        const option = await options.findById(optionId);
        const questionId = option.questionId;
        await option.remove();
        const question = await questions.findById(questionId);
        const index = question.options.indexOf(optionId);
        question.options.splice(index, 1);
        await question.save();
        message = "option deleted sucessfully";
    } catch (error) {
        console.log(error);
        message = "internal server error: could not delete the option :(";
    }
    return res.status(code).json({ message });
}

module.exports.vote = async (req, res) => {
    const optionId = req.params.id;
    let code = 200;
    let message;
    try {
        const option = await options.findById(optionId);
        option.votes++;
        await option.save();
        message = "sucessfully voted";
    } catch (error) {
        code = 500;
        console.log(error);
        message = "Internal server error : could not vote :("
    }
    return res.status(code).json({ message });

}