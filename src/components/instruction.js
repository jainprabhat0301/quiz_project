import React , { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {MDBBtn,MDBAnimation, MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 function Intro({db,match ,quesnum,settime,createansls}){
var newitem=match.params.id
//console.log("match",match.params.id)
console.log("question number",quesnum)
 return(
 <div className="bg">
   {db.list.length ?
 <div >
  <MDBAnimation type="fadeInDown">
   <MDBContainer>
      <MDBRow>
        <MDBCol md="6 mt-4 offset-3">      
<Card style={{ width: '30rem',backgroundColor:' #ffd9b3' }}>
  
  <Card.Body>
    <Card.Title style={{textAlign:'center'}}><h3><strong><i class="fas fa-list-alt"></i> Instructions</strong></h3></Card.Title>
    <Card.Text>
    <MDBContainer>
  <ListGroup variant="flush"    style={{backgroundColor: ' #ffd9b3'}}>
    {console.log("list",db.list)}
  <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>1) All questions are compulsory.</strong></h6></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>2) Total time for exam is {db.cquiz.hr} hr: {db.cquiz.min} min: {db.cquiz.sec} sec.</strong></h6></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>3) There are {db.cquiz.total} questions.</strong></h6></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>4) There are {db.cquiz.points}  points for each questions.</strong></h6></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>5) All questions are {db.cquiz.typeq} type.</strong></h6></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>6) <MDBBtn   color="blue-grey">1</MDBBtn> Not Attempt / Unmarked</strong></h6></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>7) <MDBBtn   color="light-green">1</MDBBtn>  Attempted   <MDBBtn   color="amber">1</MDBBtn> Marked</strong></h6></ListGroup.Item>
  {/* <ListGroup.Item style={{backgroundColor: '#ffd9b3'}}><h6><strong>8) No negative marks.</strong></h6></ListGroup.Item> */}
</ListGroup>

</MDBContainer>
    </Card.Text>
    <Fragment>
   <Link to="/exam"> <MDBBtn  gradient="aqua" style={{float:'right'}} onClick={()=>{settime();createansls()}} >
     Next <i class="fas fa-angle-double-right"></i></MDBBtn> </Link>
      
    </Fragment>
  </Card.Body>
</Card>
</MDBCol>
      </MDBRow>
    </MDBContainer> 
    </MDBAnimation>

 </div>
   :null

   }
 </div>
     )
 }
 export default Intro;