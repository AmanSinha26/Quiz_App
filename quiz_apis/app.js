const express = require('express');
const cors=require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/', require('./routes/user'));
app.use('/',require('./routes/quiz'));
const server = app.listen(1234, (err)=>{
    if(err)
    {
        console.log('Error is',err);
    }
    else{
        console.log('Server Started.....',server.address().port);
    }
});




