import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody , MDBIcon  } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Login = ({googleLogin,logOut,getemail,getpass ,emailSignIn}) => {
  return (
    <div className="login">
  
      <br/><br/>
      {/* <div className="row">
        <div className="col-3"></div>
        <div className="col-6"> */}
    <MDBContainer className="login">
    <MDBRow>
    <MDBCol md="6" className="offset-2">
      
    <MDBCard className="logincard">
   <MDBCardBody>

  <form>
 <p className="h2 text-center " style={{color:'white'}} >LOGIN</p>
<div className="grey-text">

<MDBInput  style={{color:'white'}} label="Email"  icon="envelope" group type="email" validate error="wrong" success="right"  name="email"  onChange={(e)=>getemail(e)}/>
 
 <MDBInput label="Password"  icon="lock"  group  type="password"  validate  name="pass" style={{color:'white'}}  onChange={(e)=>getpass(e)} />
    </div>

    <div className="text-center  mt-3">
   <MDBBtn color="primary" type="button" onClick={()=>emailSignIn()} > LOGIN</MDBBtn>
     </div>
    </form>

    <p className="h6 text-center py-4 " style={{color:'white'}} >Or login with</p>
  
    <div className='container d-flex justify-content-center'>
              <Fragment>
              <MDBBtn color="deep-orange"  onClick={()=>googleLogin()} >
          <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google
        </MDBBtn>
      </Fragment></div>

      

        <p className="h6 text-center py-4" style={{color:'white'}} >Not a member? <Link to="/register"  style={{color:'white'}} >Sign Up</Link></p>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br/><br/>
    {/* </div>
        <div className="col-3"></div>

   
    </div> */}
    </div>
  );
};

export {Login};