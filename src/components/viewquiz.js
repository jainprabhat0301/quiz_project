import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { MDBBtn,MDBIcon, MDBCard,MDBRow, MDBAnimation,MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBListGroup, MDBListGroupItem, MDBContainer, MDBAlert  } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Viewquiz({db,newitem,delquestion}){

  return (
   <div className="viewbg"><br/>
        {db.question.length ?
        <div>
<MDBAnimation type="fadeInLeft" >
        <MDBCard className="container offset-3 questioncard " style={{marginTop: '10px',width:'45rem'}}>
<h1 className='' style={{textAlign:'center'}}><MDBIcon icon="file-alt" /> {db.cquiz.qname}</h1> 
{/* list[match.params.id]       */}
        </MDBCard> 

    {db.question.map((p,index)=>


        <div className="container offset-3  mb-4">        
        <MDBCol>
     <MDBCard style={{marginTop: '10px',width:'40rem'}} className="viewcard" >
       <MDBCardBody>
         <MDBCardTitle>
</MDBCardTitle>
         <MDBCardText>
         <MDBContainer>
        
        <ListGroup variant="flush"  className="" >
 <ListGroup.Item className="viewcard"><h4><strong>Q. {index+1}: {p.quesname}</strong></h4> </ListGroup.Item>
  <ListGroup.Item  className="viewcard"><h5>(1) {p.op1}</h5></ListGroup.Item>
  <ListGroup.Item  className="viewcard"><h5>(2) {p.op2}</h5></ListGroup.Item>
  <ListGroup.Item  className="viewcard"><h5>(3) {p.op3}</h5></ListGroup.Item>
  <ListGroup.Item  className="viewcard"><h5>(4) {p.op4}</h5></ListGroup.Item>
  <ListGroup.Item  className="viewcard"><MDBAlert color="success" ><h5>Correct Option : {p.correctop}</h5></MDBAlert></ListGroup.Item>
</ListGroup>
<MDBBtn color="success" class="btn btn-info" style={{float:'right'}}  onClick={()=>delquestion(p)}><MDBIcon icon="trash" /> Remove</MDBBtn>
        </MDBContainer>
         </MDBCardText>
       </MDBCardBody>
     </MDBCard>
     </MDBCol>
       </div>
 
     )}
       <div className='container d-flex justify-content-center'>
              <Fragment>
     <Link to="/"> <MDBBtn color="success" class="btn btn-warning" style={{float:'right'}}><MDBIcon icon="sign-out-alt" /> Exit</MDBBtn></Link><br/><br/><br/>
      </Fragment></div>
      </MDBAnimation>
    </div>
    : 

    <div  className="viewbg">

    <div className="container offset-3 mt-2  ">
            <MDBAnimation type="fadeInDown">
    
                 <MDBContainer>
          <MDBRow>
            <MDBCol  md="6 mt-5">
              <MDBCard  className='questioncard' >
                <MDBCardBody>
                  <h1 style={{textAlign:'center'}}><MDBIcon icon="file-alt" /> No Questions</h1>
               </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow> 
        </MDBContainer>
        <div className='container d-flex justify-content-center'>
                  <Fragment>
         <Link to="/"> <MDBBtn color="success" class="btn btn-warning" ><MDBIcon icon="sign-out-alt" /> Exit</MDBBtn></Link><br/><br/><br/>
          </Fragment></div>
        </MDBAnimation>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

        }

      </div>
    );
  }

  
export {Viewquiz};
