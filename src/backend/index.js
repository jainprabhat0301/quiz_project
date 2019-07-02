const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors=require("cors")
const bodyParser = require("body-parser") 



//--------------------MIDDLEWARES---------------------------------------------//

//app.use(express.static('build'));
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(cors());

//mongoose.connect('mongodb://localhost:27017/quiz', {useNewUrlParser: true});

mongoose
  .connect(
    "mongodb://localhost:27017/quiz", {useNewUrlParser: true} 
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!");
    console.log(error);
  });

// mongoose
//   .connect(
//     "mongodb+srv://Prabhat:9571923475@quiz-e1sh2.mongodb.net/test?retryWrites=true&w=majority",{dbName:'quiz'} 
//   )
//   .then(() => {
//     console.log("Connected to database!");
//   })
//   .catch((error) => {
//     console.log("Connection failed!");
//     console.log(error);
//   });




  const quizSchema = new Schema({   //--------------Quiz Schema-------------//
    qname:  {type:String,required:true},
    total:{type:Number},
    points:{type:Number,required:true},
    hr:{type:Number},
    min:{type:Number},
    sec:{type:Number},
    typeq: {type:String,required:true}
  });
  const Quiz = mongoose.model('Quiz', quizSchema);

  
  const questionSchema = new Schema({ //------Question Schema--------//
    quizname:{type:String},
    quesname:  {type:String},
    op1:{type:String,},
    op2:{type:String,},
    op3:{type:String,},
    op4:{type:String,},
    correctop:{type:String},
    status:{type:Number},
  });
  const Question = mongoose.model('Question', questionSchema);


  const scoreSchema = new Schema({  //---------Socre Schema-------//
    uid:   {type:String},
    quizname:{type:String},
    total:{type:Number},
    marks:  {type:Number},
    correctans:{type:Number},
    attempt:{type:Number},
    points:{type:Number},
    time:{type:String},
    quizdate:{type:String}
    
  });
  const Score = mongoose.model('Score', scoreSchema);


  //------------------------------API's--------------------------//

 //--------------------------Post Api------------------------//


app.post("/quiz",function(req,res){   //----------Save Quiz------//
  
  let quiz = new Quiz();
  quiz.qname = req.body.qname ;
  quiz.total = req.body.total ;
  quiz.points = req.body.points ;
  quiz.hr = req.body.hr ;
  quiz.min = req.body.min ;
  quiz.sec = req.body.sec ;
  quiz.typeq = req.body.typeq ;

  quiz.save();
 res.json(quiz) 
})


app.post("/question",function(req,res){  //----------Save Quiestion-----//
  
  let question = new Question();
  question.quizname = req.body.quizname ;
  question.quesname = req.body.quesname ;
  question.op1 = req.body.op1 ;
  question.op2 = req.body.op2 ;
  question.op3 = req.body.op3 ;
  question.op4 = req.body.op4 ;
  question.correctop = req.body.correctop ;
  question.status = req.body.status ;

  question.save();
 res.json(question) 
})

app.post("/score",function(req,res){ //---------------Save Score--------//
  
  let score = new Score();
  score.uid = req.body.uid ;
  score.quizname = req.body.quizname ;
  score.total = req.body.total ;
  score.marks = req.body.marks ;
  score.correctans = req.body.correctans ;
  score.attempt = req.body.attempt ;
  score.points = req.body.points ;
  score.time = req.body.time ;
  score.quizdate = req.body.quizdate ;
  
  score.save();
 res.json(score) 
})


//--------------------------Get Api------------------------//


app.get("/getquiz",function(req,res){  // ------------Get Quiz---------//
  Quiz.find({},function(err,doc){
     // console.log(doc)  
      res.json(doc)
  })
})


app.get("/viewquestion/:quizname",function(req,res){  // ------------Get Quiz---------//
  Question.find({quizname:req.params.quizname},function(err,doc){
     // console.log(doc) 
     console.log(doc) 
      res.json(doc)
  })
})

app.get("/cquiz/:qname",function(req,res){  // ------------Get Quiz---------//
  Quiz.find({qname:req.params.qname},function(err,doc){
     console.log(doc) 
      res.json(doc)
  })
})

app.get("/viewresult/:uid",function(req,res){  // ------------Get User Result---------//
  Score.find({uid:req.params.uid},function(err,doc){
     // console.log(doc) 
     console.log("inside result api") 
      res.json(doc)
  })
})

app.get("/adminresult",function(req,res){  // ------------Get Admin  Result---------//
  Score.find({},function(err,doc){
     console.log("inside admin result api") 
      res.json(doc)
  })
})

//--------------------------Get Api------------------------//

app.delete("/delquiz/:qname",function(req,res){   //---------------Delete Quiz------------//
  console.log(req.params.qname)
   Quiz.deleteOne({ qname: req.params.qname}, function (err) {
    console.log("delete one")
   })
   Question.deleteMany({ quizname: req.params.qname}, function (err) {
    console.log("delete many")
   })
})


app.delete("/delquestion/:quesname",function(req,res){   //---------------Delete Question------------//
  console.log(req.params.quesname)
   Question.deleteOne({ quesname: req.params.quesname}, function (err) {
    console.log("delete one")
   })
})

        //------------------------Update Api--------------------------//

app.put("/updatequiz/:qname",function(req,res){
  console.log("qname",req.params.qname)
  console.log("req.body.typeq",req.body.typeq)
   Quiz.findOneAndUpdate({qname:req.params.qname},{$set:{qname:req.body.qname,total:req.body.total,points:req.body.points,hr:req.body.hr,
                                                    min:req.body.min,sec:req.body.sec,typeq:req.body.typeq}},function(err,doc){
     console.log(doc)
     //res.json(doc)
   })
   Quiz.find({},function(err,doc){
     console.log(doc)  
     res.json(doc)
    
 })
})

app.put("/updatetotal/:qname",function(req,res){
  console.log("qname",req.params.qname)
 console.log("data",req.body.total)
 Quiz.findOneAndUpdate({qname:req.params.qname},{$set:{total:req.body.total}},function(err,doc){
  console.log(doc)  
})
 res.send(req.params.qname)


})

//--------------------------------Listen---------------------------//

// app.listen(process.env.PORT || 8081,function(){
//     console.log("server started")
// })


app.listen(8081,function(){
    console.log("server started")
})