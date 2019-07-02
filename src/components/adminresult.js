import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { MDBBtn, MDBDataTable ,MDBRow,MDBIcon,MDBCard, MDBAnimation,MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBListGroup, MDBListGroupItem, MDBContainer, MDBAlert  } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Adminresult({db,cleartable}) {
    return (
        <div className="result">
            {db.adresultdata.rows.length ?


            <div className="  mt-3 mb-3">
<MDBAnimation type="fadeInLeft">

<MDBCard className="container offset-3 quizcard" style={{marginTop: '10px',width:'45rem'}}>
<h1 className='' style={{textAlign:'center' ,color:''}}><MDBIcon icon="graduation-cap" /> Previous Results</h1>
      
        </MDBCard> 

  <Link to="/"> <MDBBtn color="success" class="btn btn-warning" style={{float:'right'}} onClick={()=>{cleartable();}} >
    <MDBIcon icon="sign-out-alt" /> Exit</MDBBtn></Link><br/><br/>
        

 <MDBCol >
      <MDBCard>
        
        <MDBCardBody>
        <MDBDataTable
          striped
          bordered
          small
          data={db.adresultdata}
        />
         </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <div className='container d-flex justify-content-center'>
                      <Fragment>
             <Link to="/"> <MDBBtn color="success" class="btn btn-warning" style={{float:'right'}} onClick={()=>{cleartable();}} >
               <MDBIcon icon="sign-out-alt" /> Exit</MDBBtn></Link><br/><br/><br/>
              </Fragment></div>
              </MDBAnimation>

        </div>
    
        :null


        // <div>

        // <div className="container offset-3 mt-2  ">
        //         <MDBAnimation type="fadeInDown">
        
        //              <MDBContainer>
        //       <MDBRow>
        //         <MDBCol  md="6 mt-5">
        //           <MDBCard  className='' >
        //             <MDBCardBody>
        //               <h1 style={{textAlign:'center'}}><MDBIcon icon="graduation-cap" /> No Results</h1>
        //            </MDBCardBody>
        //           </MDBCard>
        //         </MDBCol>
        //       </MDBRow> 
        //     </MDBContainer>
        //     <div className='container d-flex justify-content-center'>
        //               <Fragment>
        //      <Link to="/"> <MDBBtn color="success" class="btn btn-warning" style={{float:'right'}}><MDBIcon icon="sign-out-alt" /> Exit</MDBBtn></Link><br/><br/><br/>
        //       </Fragment></div>
        //     </MDBAnimation>
        // </div>
        
        //     </div>

        }
        </div>
      );
    
}

export {Adminresult}
