import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { MDBBtn,MDBAnimation,MDBIcon,MDBAlert, MDBRow,MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBListGroup, MDBListGroupItem, MDBContainer  } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import CountdownTimer from "react-countdown-timer-component";

function Exam({db,match,newitem,quesnum,nextques,getanswer,hour,minu,seco,time,
              getscore,previousques,resetques,jumpto,markquestion,unmarkquestion,answer,counter,}) {
  
 
  return (
      <div className="exambg">

        {db.list.length && db.question.length ?
        <div>

            {/* <MDBAlert color="success" ></MDBAlert> */}

        <h1 className="hc mb-4" ><MDBAlert color="success" >{db.cquiz.qname}</MDBAlert></h1> 

        <MDBAnimation  type="slideInRight" > 
<div className="row">


  {/*------------------------Timer--------------------------*/ }
  <div className="col-3">
  <Card className="examcard">
        <CardBody>
          <MDBCardTitle><h4><strong><MDBIcon icon="hourglass-start" /> Time Left</strong></h4></MDBCardTitle>
       <h4><strong>{hour} hr : {minu} min : {seco} sec</strong></h4>
        </CardBody>
      </Card>
  </div>
  {/*------------------------Timer End--------------------------*/ }

<div className="col-6">
<div className="container">
      
      <Card className="examcard">
        <CardBody>

      
          <h4 className=""><strong>Q.{quesnum+1} : {db.question[quesnum].quesname}</strong></h4>
          <br/> 
  
          <strong className="" style={{float:'right'}} >Marks: {db.cquiz.points}</strong><br/>

          
 <Form className="examcard" id="resetvalue">
<FormGroup tag="fieldset">

<FormGroup check>
<Label className="" check> 
  <Input type="radio" name="radio1"  value={db.question[quesnum].op1} 
  onClick={(e)=>getanswer(e)}/><h5>A) {db.question[quesnum].op1} </h5></Label>
</FormGroup>

<FormGroup check>
<Label check className="">
  <Input type="radio" name="radio1" value={db.question[quesnum].op2}
   onClick={(e)=>getanswer(e)} /><h5>B) {db.question[quesnum].op2}</h5> </Label>
</FormGroup>

<FormGroup check>
<Label check className="">
  <Input type="radio" name="radio1" value={db.question[quesnum].op3}
   onClick={(e)=>getanswer(e)}/><h5>C) {db.question[quesnum].op3}</h5> </Label>
</FormGroup>

<FormGroup check>
<Label check className="">
  <Input type="radio" name="radio1" value={db.question[quesnum].op4}
   onClick={(e)=>getanswer(e)} /><h5>D) {db.question[quesnum].op4}</h5> </Label>
</FormGroup>

<br/>
{answer[quesnum]==0
  ?<p className=""><h5><strong>Your answer : </strong></h5></p>
  :<p className=""><h5><strong>Your answer : {answer[quesnum]}</strong></h5></p>
  }
  
  
  { quesnum>0 
  ? <Link to="/exam" ><MDBBtn style={{float:'left'}} color="primary" gradient="aqua" type="submit" onClick={()=>previousques()}><i class="fas fa-angle-double-left"></i> Previous</MDBBtn></Link>
  :    <p></p>
  } 
    
    <MDBBtn style={{float:''}} color="primary" gradient="aqua" type="button" onClick={()=>resetques()}><MDBIcon far icon="file" /> Clear</MDBBtn>
  
  {console.log("prestatus",db.question[quesnum].status)}
  {db.question[quesnum].status==0
    ? <MDBBtn style={{float:''}} color="primary" gradient="aqua" type="button" onClick={()=>markquestion()}><MDBIcon icon="check" /> Mark for Review</MDBBtn>
    :  <MDBBtn style={{float:''}} color="primary" gradient="aqua" type="button" onClick={()=>unmarkquestion()}><MDBIcon icon="times" /> Unmark</MDBBtn>
  }


    { quesnum==db.cquiz.total-1
  ?   <Link to="/score" ><MDBBtn style={{float:'right'}}  class="btn btn-success" type="button" onClick={()=>getscore()}>Submit <MDBIcon icon="play" /></MDBBtn></Link>
 :  <MDBBtn style={{float:'right'}} color="primary" gradient="aqua" type="submit" onClick={(e)=>nextques(e)}>Next <i class="fas fa-angle-double-right"></i></MDBBtn>
        }

</FormGroup>
</Form>

        </CardBody>
      </Card>
      </div>
      </div>
<div className="col-3">

      <Card className="examcard">
        <CardBody>

      
          <MDBCardTitle><h4><strong><MDBIcon icon="sync-alt" /> Go to</strong></h4></MDBCardTitle>

          {db.question.map((p,index)=> 
          <div style={{display: 'inline-block'}}>
  
     {p.status==1
    ? <MDBBtn   color="amber"  onClick={()=>jumpto(index)}>{index+1}</MDBBtn>
     :   answer[index]!=0
      ?  <MDBBtn   color="light-green" onClick={()=>{jumpto(index)}}>{index+1}</MDBBtn>
     : <MDBBtn   color="blue-grey" onClick={()=>jumpto(index)}>{index+1}</MDBBtn>
     } 

               </div>

           )}
      
        </CardBody>
      </Card>
   
      </div>
    </div>

    </MDBAnimation>

</div>
    : null
   }

 </div> 
);}

export {Exam}
