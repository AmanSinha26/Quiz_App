const QuizModel = require('../models/question');
const quizOperations = {
    async getQuestion({ number }) {
        const result = await QuizModel.findOne({ "number": number });
        return result;
    }
}
module.exports = quizOperations;