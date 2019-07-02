import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { MDBContainer,MDBAnimation, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBAlert , MDBIcon } from 'mdbreact';
import ListGroup from 'react-bootstrap/ListGroup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Score({db,resetscore}) {
    return (
      <div className="login ">
        {db.list.length
      ?  <div className="container offset-3 mt-2  ">
        <MDBAnimation type="fadeInDown">

             <MDBContainer>
      <MDBRow>
        <MDBCol  md="7" className= "mt-5">
          <MDBCard  className='scorecard' >
            <MDBCardBody>
              {console.log("hello",db.questions)}
              <h1 style={{textAlign:'center',color:''}}><strong><MDBIcon icon="graduation-cap" /> Score</strong></h1>
             <ListGroup variant="flush" >
             <ListGroup.Item className='scorecard'><h4 style={{color:''}} ><strong><i class="far fa-file-alt"></i> Quiz Name : {db.cquiz.qname}</strong></h4></ListGroup.Item>  
            <ListGroup.Item className='scorecard'><h4 style={{color:''}} ><strong><i class="fas fa-list-alt"></i> Total number of Questions : {db.cquiz.total}</strong></h4></ListGroup.Item>
            <ListGroup.Item className='scorecard'><h4 style={{color:''}} ><strong><i class="fas fa-check-circle"></i> Correct answer  : {db.score.correctans}</strong></h4></ListGroup.Item>
            <ListGroup.Item className='scorecard'><h4 style={{color:''}} ><strong><i class="fas fa-clock"></i>Time taken : {db.score.time}</strong></h4></ListGroup.Item>
            <ListGroup.Item className='scorecard'><h4 style={{color:''}} ><strong><i class="fas fa-trophy"></i> Final Score : {db.score.marks}</strong></h4></ListGroup.Item>
            <ListGroup.Item className='scorecard'><h4 style={{color:''}} ><strong><MDBIcon icon="award" /> Result : {(db.score.marks/(db.cquiz.total*db.cquiz.points)*100).toFixed(1)} %</strong></h4></ListGroup.Item>

            {/* <MDBAlert color="success" ></MDBAlert> */}
            </ListGroup>
            <Link to="/" ><MDBBtn color="primary" class="btn aqua-gradient" style={{float:'right'}} type="button" onClick={()=>resetscore()}>
              <i class="fas fa-home">  Home</i></MDBBtn></Link>
</MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow> 
    </MDBContainer>
    </MDBAnimation>
</div>
: null 
}

<br/><br/><br/><br/>
</div>

    );
}
export {Score}    