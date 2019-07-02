import React, { Fragment } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";
import { browserHistory } from 'react-router';
import {AddQues} from './components/addques2';
import {AddQuiz} from './components/addquiz2';
//import {Quiz} from './components/quiz';
import {Exam} from "./components/exam";
import {Login} from './components/login'
import {Register} from './components/register'
import  {Score} from './components/score'
import {Home} from './components/home';
import { Viewquiz } from "./components/viewquiz";
import { element } from "prop-types";
import Intro from "./components/instruction";

//import { createBrowserHistory } from "history";
//import history from './history'



import axios from 'axios' //  DATABASE CONNECTIONS

import * as firebase from "firebase/app";
import "firebase/auth";
import {Resulttable} from "./components/resulttable"
import { Adminresult } from "./components/adminresult";

const firebaseConfig = {
  apiKey: "AIzaSyBMLKXBwWVcTx4WK4G-x7tA2Sb0wm0Tiy4",
  authDomain: "quiz-f8f61.firebaseapp.com",
  databaseURL: "https://quiz-f8f61.firebaseio.com",
  projectId: "quiz-f8f61",
  storageBucket: "",
  messagingSenderId: "437970900018",
  appId: "1:437970900018:web:004a615eb03256a9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 class App extends React.Component {
  constructor(props){
    super(props)
     this.state= {answer:[], item:0,newitem:[0],quesnum:0,flag:0,radiovalue:"",admin:"",status:0,quesid:1,user:"",time:"",
                    uemail:"",upass:"",signupemail:"",signuppass:"",hour:"",minu:"",seco:"",stoptimer:0,useremail:"",updateflag:0,search:"",
                  arr:{qname:"",total:0,points:"",hr:0,min:0,sec:0,typeq:""},
                  ques:{quiz:"",quesname:"",op1:"",op2:"",op3:"",op4:"",correctop:""}}

     this.state.db = {
     list : [],
     questions:[],   
     question:[], 
      score:"",
      viewresult:"",
      data:{
        columns: [
          {
            label: '#',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'User',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Quiz Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Date of Quiz',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Total no. of Questions in Quiz',
            field: 'office',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Marks for each Question',
            field: 'age',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Maximum Marks of Quiz',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Your Score',
            field: 'salary',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Result',
            field: 'salary',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Time taken to complete quiz',
            field: 'salary',
            sort: 'asc',
            width: 100
          },
             
        ],
        rows:[],
      },
      adresultdata:{
        columns: [
          {
            label: '#',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'User',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Quiz Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Date of Quiz',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Total no. of Questions in Quiz',
            field: 'office',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Marks for each Question',
            field: 'age',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Maximum Marks of Quiz',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'User Score',
            field: 'salary',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Result',
            field: 'salary',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Time taken to complete quiz',
            field: 'salary',
            sort: 'asc',
            width: 100
          },
             
        ],
        rows:[],
      },
      cquiz:"",

    }
   }

   componentDidMount(){
    


    //---------------------- Check Auth------------------//
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let admin=this.state.admin
        admin=user.email
        let useremail=this.state.useremail
        useremail=user.email
        this.setState({
          user:user,admin:admin,useremail:useremail,
        })
        this.props.history.push('/')  
        console.log("logged in",user)
      } else {
        this.setState({
          user:null
        })
        console.log("logged out")
      }
    });

console.log("did mount user",this.state.user.email)

//------------------------Get Quiz-------------//
    axios.get("/getquiz").then((res)=>
    {
      //console.log(res.data)
let db=this.state.db
db.list=res.data
        this.setState({db:db})
     //   console.log("list",this.state.db.list)
    })

 
 
  }



                         // ------------------FIREBASE LOGIN----------------//

googleLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;
      let admin=this.state.admin
      admin=user.email    
      let useremail=this.state.useremail
      useremail=user.email
      this.setState({
        user:user,admin:admin,useremail:useremail,
      })
      this.props.history.push('/')
    //  console.log(user.displayName,user.email);
      console.log("user",this.state.user)

    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }


  loginCheck(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user:user
        })
        console.log("logged in",user)
      } else {
        console.log("logged out")
      }
    });
  }

  logOut(){
    firebase.auth().signOut().then(() => {
       this.setState({
         user:null,admin:null ,useremail:null,
       })
       console.log("signout")
       
      }).catch(function(error) {
console.log(error)    
  });
  }

  
emailSignUp=()=>{
  const email=this.state.signupemail;
  const pass=this.state.signuppass;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then((result)=>{
  // The signed-in user info.
  var user = result.user;
  let admin=this.state.admin
  admin=user.email
  let useremail=this.state.useremail
  useremail=user.email
  this.setState({
    user:user,admin:admin,useremail:useremail,})
  console.log("email signup",user.email);
  // ...
  this.props.history.push('/')  
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
  alert('The password is too weak.');
  } else {
  alert(errorMessage);
  }
  console.log(error);
  });
  }
  
  emailSignIn=()=>{
  const email=this.state.uemail;
  const pass=this.state.upass;
  console.log("email",email)
  console.log("pass",pass)
  firebase.auth().signInWithEmailAndPassword(email, pass).then((result)=>{
  // The signed-in user info.
  var user = result.user;
  let admin=this.state.admin
  admin=user.email
  let useremail=this.state.useremail
  useremail=user.email
  console.log("email signin",user.email);
  this.setState({
    user:user,admin:admin,useremail:useremail,})
    this.props.history.push('/')  
  // ...
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
  alert('Wrong password.');
  } else {
  alert(errorMessage);
  }
  console.log(error);
  // ...
  });
  }

  getvalue(e,propname) {  //--------NO DATABASE-------//
    var category = this.state.arr;
    category[propname] = e.target.value;
    this.setState({ arr: category ,flag:0});
  console.log("getvalue",this.state.arr)
  }
    createquiz(){   //---------------POST API-------------//
     if( this.state.arr.qname.trim()) {
      
      let flag=this.state.flag
    
      flag=1
      let db=this.state.db;
    
 
     let obj={qname:this.state.arr.qname,total:0,points:this.state.arr.points,hr:this.state.arr.hr,
                min:this.state.arr.min,sec:this.state.arr.sec,typeq:this.state.arr.typeq}

  axios.post('/quiz/',obj)
  .then((res)=>{
  console.log(res.data)
   })  

     db.list.push(obj)

     //---------------------Clearing inputs-------------------//
     let arr=this.state.arr
     arr.qname=""
     arr.points=""
     arr.hr=""
     arr.min=""
     arr.sec=""
    arr.typeq=""

      this.setState({
        db:db,flag:flag,arr:arr
      })
      //console.log("flag",this.state.flag)
     }
     else{
      // console.log("flag",this.state.flag)
     }
     console.log("list",this.state.db.list)

    }

     clearquiz(){    //-------------NO DATABASE------------//
       let arr=this.state.arr
       arr.qname=""
       arr.points=""
       arr.hr=""
       arr.min=""
       arr.sec=""
       arr.typeq=""
       this.setState({arr:arr,updateflag:0,})
      }

     getquestion(e,propname) {  //-------------NO DATABASE------------//
      var category = this.state.ques;
      category[propname] = e.target.value;
      this.setState({ ques: category });
    }
   
    setquestion(){   //---------------POST API-------------//
      if(this.state.ques.quesname.trim() && this.state.ques.op1.trim() && this.state.ques.op2.trim() && this.state.ques.op3.trim() && this.state.ques.op4.trim() && this.state.ques.correctop.trim()){
      let db=this.state.db;
     let obj={quizname:db.cquiz.qname,quesname:this.state.ques.quesname,op1:this.state.ques.op1,op2:this.state.ques.op2,op3:this.state.ques.op3,
                op4:this.state.ques.op4,correctop:this.state.ques.correctop,status:this.state.status}
        

        axios.post('/question/',obj)
      .then((res)=>{      
          })      
  
     // -----------Clearing input fields-----//
      let ques=this.state.ques
      ques.quesname=""
      ques.op1=""
      ques.op2=""
      ques.op3=""
      ques.op4=""
      ques.correctop=""

     //-------------------To calculate Total-----------------------------//
          
      db.cquiz.total+=1

      axios.put('/updatetotal/'+db.cquiz.qname, { total: db.cquiz.total }) .then(response => {
          console.log(response);
          })
      .catch(error => {
          console.log(error);
          });


//--------------------------------------------------------------//
      this.setState({ 
        db:db,ques:ques,
      })
//--------------------------------------------------------------//
      console.log("db",db)
     }}

     getindex(e,p){   
       console.log("quiz object",p)
      let db=this.state.db;
db.cquiz=p
this.setState({db:db})
console.log("this.state.db.cquiz",this.state.db.cquiz)

       console.log("item",this.state.item)
       
       let l=this.state.newitem
       l[0]=e 

     this.setState({newitem:l})
     console.log("newitem",this.state.newitem[0])

  //--------------------------------------------------------------//
 
}

     removequiz(p){   //---------------DELETE API-------------//
      let db=this.state.db;
      db.cquiz=p
      this.setState({db:db})

      axios.delete('/delquiz/'+p.qname).then((res)=>{ //Delete Quiz
        console.log("I Have Done It")

        console.log(res.data)
    })

      db.list.splice(db.list.indexOf(p),1)
      this.setState({ 
        db:db,
      })
      console.log(db)
     }
  
     clearquestion(){  //---------------NO API-------------//
   // -----------Clearing input fields-----//
   let ques=this.state.ques
   ques.quesname=""
   ques.op1=""
   ques.op2=""
   ques.op3=""
   ques.op4=""
   ques.correctop=""
   this.setState({ 
  ques:ques
  })
     }

    nextques=(e)=>{   //---------------NO API-------------//       
    e.preventDefault();
      if(this.state.quesnum<this.state.db.cquiz.total-1){
      let quesnum=this.state.quesnum
      quesnum=quesnum+1
      this.setState({quesnum:quesnum , radiovalue:""})
      }
      document.getElementById("resetvalue").reset()
      console.log("this.state.quesnum",this.state.quesnum)
    }

    getanswer=(e)=>{   //---------------NO API-------------//
        console.log("e.target.value",e.target.value)
        let answer=this.state.answer
        answer[this.state.quesnum]=e.target.value;
        if (answer[this.state.quesnum]!=0){
        }
        this.setState({answer:answer,})  
      
        console.log("answers",this.state.answer)
    }
    
    createansls(){
      let db=this.state.db;
      let answer=this.state.answer
      var ans=0
      for(var i=0;i<db.cquiz.total;i++){
        answer.push(ans)
        
        db.question[i].status=0 
      }
      this.setState({db:db,answer:answer})
    }

    getscore(){
this.setState({stoptimer:1})

      let db=this.state.db;
      let answer=this.state.answer
      let unit=db.cquiz.points;
      let count=0
      let attempt=0
      for(var i=0;i<db.cquiz.total;i++){
        if(answer[i]!=0){
          attempt+=1
        }
      }
      console.log("attempt",attempt)

var totaltime = (db.cquiz.hr * 60 * 60) + (db.cquiz.min * 60) + (db.cquiz.sec)
var remtime=this.state.time
var timetaken=totaltime-remtime
console.log("totaltime,remtime,timetaken",totaltime,remtime,timetaken)
var hour=0
var minu=0
var seco=0
if(timetaken>0){
hour=Math.floor(timetaken/(60*60))
minu=Math.floor((timetaken-((Math.floor(timetaken/(60*60)))*60*60))/60)
seco=Math.floor(timetaken-( hour*60*60 + minu*60 ))
}

var time
if(hour==0){
  if(minu==0){
    if(seco<10) seco='0'+seco;
      time=seco+" sec "
  }
  else{
    if(minu<10) minu='0'+minu;
    if(seco<10) seco='0'+seco;
    time=minu+" min "+seco+" sec "
  }
}
else{
  if(hour<10) hour='0'+hour;
  if(minu<10) minu='0'+minu;
  if(seco<10) seco='0'+seco;
  time=hour+" hr "+minu+" min "+seco+" sec "
}

console.log("hr,min,sec",hour,minu,seco)

      for(var i=0;i<db.cquiz.total;i++){
          if(answer[i]==db.question[i].correctop){
            count=count+1
           
            db.question[i].status=0  //Clearing status of questions
          }    
      }

      var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      var today = new Date();
      var dd = today.getDate();
      var mm = months[today.getMonth()]; 
      var yyyy = today.getFullYear();
      
      if(dd<10) dd='0'+dd;
      var quizdate = (mm+" "+dd+","+yyyy);

     // console.log("count",count)
      let marks=unit*count
    //  console.log("marks",marks)

   let obj={uid:this.state.useremail,quizname:this.state.db.cquiz.qname,total:this.state.db.cquiz.total,marks:marks,correctans:count,
            attempt:attempt,points:this.state.db.cquiz.points,time:time,quizdate:quizdate}

    axios.post('/score/',obj)
    .then((res)=>{
    console.log(res.data)
        }) 

      db.score=obj

      answer=[]
      this.setState({db:db,answer:answer})
  
      console.log("score",this.state.db.score)
    }



    resetscore(){
      let db=this.state.db;
        db.score.marks=""
        db.score.correctans=""
      this.setState({db:db,quesnum:0,time:""})
    }

previousques(){
  if(this.state.quesnum>0){
    let quesnum=this.state.quesnum
    quesnum=quesnum-1
    this.setState({quesnum:quesnum})
    }
    document.getElementById("resetvalue").reset()
}

resetques(){
  let answer=this.state.answer
  answer[this.state.quesnum]=0;
  this.setState({answer:answer,})  
  document.getElementById("resetvalue").reset()
  console.log("answers",this.state.db.answer)
}

jumpto(e){
this.setState({quesnum:e})
document.getElementById("resetvalue").reset()

}

markquestion(){
  let db=this.state.db
  db.question[this.state.quesnum].status=1
  this.setState({db:db})
  console.log("status",this.state.db.question[this.state.quesnum].status)
}

unmarkquestion(){
  let db=this.state.db
  db.question[this.state.quesnum].status=0
  this.setState({db:db})
  console.log("status",this.state.db.question[this.state.quesnum].status)
}


delquestion(p){
  let db=this.state.db

  axios.delete('/delquestion/'+p.quesname).then((res)=>{
    console.log("I Have Done It") 
    console.log(res.data)
})
  db.cquiz.total-=1

  axios.put('/updatetotal/'+db.cquiz.qname, { total: db.cquiz.total }) .then(response => {
      console.log(response);
      })
  .catch(error => {
      console.log(error);
      });
  db.question.splice(db.question.indexOf(p),1)
  this.setState({db:db})
}


getemail(e){
  let uemail=this.state.uemail
  uemail=e.target.value
  this.setState({uemail:uemail})
}

getpass(e){
  let upass=this.state.upass
  upass=e.target.value
  this.setState({upass:upass})
}

getsignupemail(e){
  let signupemail=this.state.signupemail
  signupemail=e.target.value
  this.setState({signupemail:signupemail})
}

getsignuppass(e){
  let signuppass=this.state.signuppass
  signuppass=e.target.value
  this.setState({signuppass:signuppass})
}

settime(){
  console.log("inside settime")
  this.setState({stoptimer:0})
 //let time=this.state.time
let db=this.state.db
var time = (db.cquiz.hr * 60 * 60) + (db.cquiz.min * 60) + (db.cquiz.sec)
  //  var time=730
      var hour=0
      var minu=0
      var seco=0
   var x=   setInterval(()=>{
        hour=Math.floor(time/(60*60))
      //  time=time-(hour*60*60)
     //   minu=Math.floor((time-((Math.floor(time/(60*60)))*60*60))/60)
          minu=Math.floor((time-((Math.floor(time/(60*60)))*60*60))/60)
     // minu=Math.floor(time-( hour*60*60 ))
      //  time=time-minu*60
      //  seco=time-(Math.floor((time-((Math.floor(time/(60*60)))*60*60))/60))*60
       //   seco=Math.floor(time-(Math.floor((time-((Math.floor(time/(60*60)))*60*60))/60))*60)
        seco=Math.floor(time-( hour*60*60 + minu*60 ))
        if(this.state.stoptimer==1){
          clearInterval(x)
        }
        if(time>0){
        time=time-1
        }
        else{
          clearInterval(x);
          this.getscore()
          this.props.history.push('/score')  


        }

        this.setState({time:time,hour:hour,minu:minu,seco:seco,})
      },1000)
}

viewresult(){ 
console.log("email",this.state.useremail)
  axios.get('/viewresult/'+this.state.useremail).then((res)=>
  {
    console.log("res",res.data)
    let db= this.state.db
    db.viewresult=res.data
    let l=res.data
    l.reverse();

    
    for (var i=0;i<l.length;i++){
    var  obj={sno:i+1,uid:l[i].uid,quizname:l[i].quizname,quizdate:l[i].quizdate,total:l[i].total,points:l[i].points,maxmarks:l[i].points*l[i].total,
              marks:l[i].marks,attempt:((l[i].marks/(l[i].points*l[i].total))*100).toFixed(1)+"%",time:l[i].time,}
              console.log("obj",obj)    // (l[i].marks/(l[i].points*l[i].total))*100
      db.data.rows.push(obj)
    }
  //  db.data.rows=res.data
    console.log("db",db.viewresult[0])
    db.viewresult.reverse()

this.setState({
    db:db
})
console.log("this.state.db.viewresult",this.state.db.viewresult)
 
  })
  console.log("viewresult",this.state.db.viewresult)

}

adminresult(){

  axios.get('/adminresult').then((res)=>
  {
    let db= this.state.db
    let l=res.data
    l.reverse();

    for (var i=0;i<l.length;i++){
    var  obj={sno:i+1,uid:l[i].uid,quizname:l[i].quizname,quizdate:l[i].quizdate,total:l[i].total,points:l[i].points,maxmarks:l[i].points*l[i].total,
              marks:l[i].marks,attempt:((l[i].marks/(l[i].points*l[i].total))*100).toFixed(1)+"%",time:l[i].time,}
              console.log("obj",obj)
      db.adresultdata.rows.push(obj)
    }

this.setState({
    db:db
}) 
  })
}

// updatequiz(p){

//   axios.get('/cquiz/'+p.qname).then((res)=>
//   {
//     let l=res.data
//      let db=this.state.db;
//     db.cquiz=l[0]
//      this.setState({db:db})
//   })

//   this.setState({updateflag:1})

//   let arr=this.state.arr
//   arr=p
//   this.setState({arr:arr})

// }


// setupdatequiz(){
//   let arr=this.state.arr
//   console.log("arr",arr)
  
//   axios.put('/updatequiz/'+this.state.db.cquiz._id,{qname:arr.qname,total:arr.total,points:arr.points,hr:arr.hr,
//                                                                 min:arr.min,sec:arr.sec,typeq:arr.typeq,})  .then((res)=>{
//      console.log(res)
//      console.log("inside api")
//       let db=this.state.db
//  db.list=res.data
//       this.setState({db:db})
// })
// .catch(error => {
//   console.log(error);
//   });

// // axios.put('/updatetotal/'+db.cquiz.qname, { total: db.cquiz.total }) .then(response => {
// //   console.log(response);
// //   })
// // .catch(error => {
// //   console.log(error);
// //   });

//   //---------------------Clearing inputs-------------------//
//   console.log("clearing inputs")
//   arr.qname=""
//   arr.points=""
//   arr.hr=""
//   arr.min=""
//   arr.sec=""
//  arr.typeq=""
//  this.setState({arr:arr})

// //  axios.get("/getquiz").then((res)=>
// //  {
// //    console.log("inside get list api")
// // let db=this.state.db
// // db.list=res.data
// //      this.setState({db:db})
// //  })
 
// this.setState({updateflag:0})
// }


viewquiz(p){
  let db=this.state.db
  db.cquiz=p
  console.log("this.state.db.cquiz.qname",this.state.db.cquiz.qname)
  this.setState({db:db})

  axios.get('/viewquestion/'+this.state.db.cquiz.qname).then((res)=>
  {
    console.log(res.data)
      db.question=res.data
      this.setState({db:db})
      console.log("this.state.db.viewques",this.state.db.question)

  })
}

getsearch(e){

  console.log("e",e.target.value)
  let db=this.state.db
  var flag=0
  var search=e.target.value
  let arr=[]

  for(var i=0;i<db.list.length;i++){
//    if(db.list[i].qname.toLowerCase()==search.toLowerCase() || db.list[i].qname==search){
       
      if(db.list[i].qname.toLowerCase().startsWith(search.toLowerCase()) || db.list[i].qname.startsWith(search) ){
      flag=1
      arr.push(db.list[i])


    }
    else{
      flag=0
    }
  }

  if(search){}
  else{arr=[]}

console.log("arr",arr)

if(arr.length){
  db.list=arr
  this.setState({db:db,search:search})
}
else{
  axios.get("/getquiz").then((res)=>
         {
               console.log("inside axios")
              let db=this.state.db
                db.list=res.data
                this.setState({db:db,search:search})
          })
}
}

cleartable(){
  let db=this.state.db
  db.data.rows=[]
  db.adresultdata.rows=[]
  this.setState({db:db})
}


  render() {
    return (
      <div>
      

      <Route path="/" exact render={props=>
      <Home  {...props} db={this.state.db}  admin={this.state.admin}  time={this.state.time} hour={this.state.hour} minu={this.state.minu}seco={this.state.seco}
        search={this.state.search} useremail={this.state.useremail} user={this.state.user}
        getindex={this.getindex.bind(this)} 
       removequiz={this.removequiz.bind(this)}  getanswer={this.getanswer.bind(this)} 
       loginCheck={this.loginCheck.bind(this)}  logOut={this.logOut.bind(this)} googleLogin={this.googleLogin.bind(this)}
       viewresult={this.viewresult.bind(this)} adminresult={this.adminresult.bind(this)} 
       viewquiz={this.viewquiz.bind(this)}    getsearch={this.getsearch.bind(this)}
       >
      </Home>}/>

      <Route path="/login" render={props=><Login {...props} googleLogin={this.googleLogin.bind(this)}  loginCheck={this.loginCheck.bind(this)}
       logOut={this.logOut.bind(this)}  getemail={this.getemail.bind(this)}  getpass={this.getpass.bind(this)} 
        emailSignIn={this.emailSignIn.bind(this)} 
       ></Login>}/>
      
      <Route path="/register"  render={props=><Register  {...props} getsignupemail={this.getsignupemail.bind(this)}
        getsignuppass={this.getsignuppass.bind(this)}   emailSignUp={this.emailSignUp.bind(this)}
       ></Register>}/>
     
      <Route path="/addquiz2" render={props=>
      <AddQuiz {...props} db={this.state.db} flag={this.state.flag} qname={this.state.arr.qname}points={this.state.arr.points}
      hr={this.state.arr.hr} updateflag={this.state.updateflag} 
      min={this.state.arr.min}sec={this.state.arr.sec}typeq={this.state.arr.typeq}  clearquiz={this.clearquiz.bind(this)}
       getvalue={this.getvalue.bind(this)} createquiz={this.createquiz.bind(this)}  >
       </AddQuiz>}/>
     
      <Route path="/addques2" render={props=>
      <AddQues {...props} db={this.state.db} newitem={this.state.newitem[0]} quesname={this.state.ques.quesname}op1={this.state.ques.op1}
       op2={this.state.ques.op2} op3={this.state.ques.op3} op4={this.state.ques.op4}correctop={this.state.ques.correctop}
        getquestion={this.getquestion.bind(this)} setquestion={this.setquestion.bind(this)} 
       clearquestion={this.clearquestion.bind(this)} >
      </AddQues>}/>
      
      <Route path="/exam" render={props=>
      <Exam {...props} db={this.state.db}  answer={this.state.answer} quesnum={this.state.quesnum} radiovalue={this.state.radiovalue} 
      time={this.state.time} hour={this.state.hour} minu={this.state.minu}seco={this.state.seco}
      newitem={this.state.newitem[0]} previousques={this.previousques.bind(this)} resetques={this.resetques.bind(this)}
        getanswer={this.getanswer.bind(this)} nextques={this.nextques.bind(this)} getscore={this.getscore.bind(this)}
        jumpto={this.jumpto.bind(this)} markquestion={this.markquestion.bind(this)} unmarkquestion={this.unmarkquestion.bind(this)}
        counter={this.state.counter}
         > 
      </Exam>}/>
      
      <Route path="/score" render={props=>
      <Score  {...props} db={this.state.db} newitem={this.state.newitem[0]} resetscore={this.resetscore.bind(this)}  > 
      </Score>}/>

      <Route path="/viewquiz" render={props=><Viewquiz {...props} db={this.state.db} newitem={this.state.newitem[0]} 
       delquestion={this.delquestion.bind(this)} >  </Viewquiz>}/>

      <Route path="/instruction" render={props=>< Intro {...props} db={this.state.db} newitem={this.state.newitem[0]}
      quesnum={this.state.quesnum}  settime={this.settime.bind(this)} createansls={this.createansls.bind(this)} >  </ Intro>}/>
      
      <Route path="/resulttable" render={props=>
      <Resulttable  {...props} db={this.state.db} useremail={this.state.useremail} cleartable={this.cleartable.bind(this)}  > 
      </Resulttable>}/>

      <Route path="/adminresult" render={props=>
      <Adminresult  {...props} db={this.state.db} useremail={this.state.useremail} cleartable={this.cleartable.bind(this)}  > 
      </Adminresult> }  />


      </div>
    )
  }
}

export default withRouter(App);

