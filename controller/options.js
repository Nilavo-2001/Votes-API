const options = require('../models/options');
const questions = require('../models/questions');
module.exports.create = async (req, res) => {
    // action to create an option
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
        question.options.push(option.id); // passing the option to the question
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
    // action to delete an option
    const optionId = req.params.id;
    let code = 200;
    let message;
    try {
        const option = await options.findById(optionId);
        const questionId = option.questionId;
        await option.remove(); // deleting the option doc from db
        const question = await questions.findById(questionId);
        const index = question.options.indexOf(optionId);
        question.options.splice(index, 1); // deleting the option object from the question doc
        await question.save();
        message = "option deleted sucessfully";
    } catch (error) {
        console.log(error);
        message = "internal server error: could not delete the option :(";
    }
    return res.status(code).json({ message });
}

module.exports.vote = async (req, res) => {
    //action to add vote to an option
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