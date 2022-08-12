const express = require('express');
const routes = express.Router();
routes.post('/getQuestion', async (request, response) => {
    let userObject = request.body;
    const quizOperations = require('../db/services/quizoperations')
    let result = await quizOperations.getQuestion(userObject);
    // response.json({message:result});
    if (result && result._id) {
        response.status(200).json(result);
    }
    else {
        response.status(200).json(null);
    }
});
module.exports = routes;