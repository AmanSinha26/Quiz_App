const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,
(err=>{
    if(err){
        console.log('Problem in DB Connection');
    }
    else{
        console.log('DB Connection Created....');
    }
}));
module.exports = mongoose;