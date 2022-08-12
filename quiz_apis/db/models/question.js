const mongoose = require("../connect.js");
const {Schema, SchemaTypes} = mongoose;
const QuizSchema = new Schema({
    'question':{type:SchemaTypes.String, required:true, unique:true},
    'option1':{type:SchemaTypes.String, required:true},
    'option2':{type:SchemaTypes.String, required:true},
    'option3':{type:SchemaTypes.String, required:true},
    'option4':{type:SchemaTypes.String, required:true},
    'answer':{type:SchemaTypes.String, required:true},
    'number':{type:SchemaTypes.String, required:true, unique:true}
});
const QuizModel = mongoose.model('questions', QuizSchema);
module.exports = QuizModel;