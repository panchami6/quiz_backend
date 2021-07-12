const mongoose = require("mongoose");
const { Schema } = mongoose;

const Options = new Schema({
  text:{
    type: String
  },
  isRight:{
    type: Boolean
  }
})

const Questions = new Schema({
  question:{
    type: String
  },
  options: [Options]
})

const QuizSchema = new Schema([{
  _id:{
    type:Schema.Types.ObjectId,
    required:true
  },
  id:{
    type:String,
    required: true
  },
   quizName:{
    type:String,
    required:true
  },
  questions: [Questions]
}], { collection : 'quizs' }
);

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = { Quiz }