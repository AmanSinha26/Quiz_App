const express = require('express');
const routes = express.Router();
routes.get('/',(request,response)=>{
    response.send('Welcome to Home Page');
});
routes.post('/register', async (request,response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/useroperations')
    let result = await userOperations.register(userObject);
    if(result && result._id)
    {
        response.status(200).json({message:'Record added Successfully'});
    }
    else
    {
        response.status(200).json({message:'Record not Found'});
    }
});
routes.post('/login', async (request,response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/useroperations')
    let result = await userOperations.login(userObject);
   // response.json({message:result});
   if(result && result._id){
    response.status(200).json({message: 'Welcome ' + result.name,userid: result.userid});
   }
   else{
    response.status(200).json({message: 'Invalid Userid or Password', userid: null});
   }
});

routes.post('/setHighScore', async (request,response)=>{
    let userObject = request.body;
    console.log(userObject);
    const userOperations = require('../db/services/useroperations')
    let result = await userOperations.setHighScore(userObject);

   if(result && result._id){
    response.status(200).json('score updated');
   }
   else{
    response.status(200).json('error');
   }
});

routes.post('/getHighScore', async (request,response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/useroperations')
    let result = await userOperations.getHighScore(userObject);
    
   if(result && result._id){
    response.status(200).json(result.highscore);
   }
   else{
    response.status(200).json('error');
   }
});

module.exports = routes;