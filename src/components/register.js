import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody , MDBIcon  } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//className="container offset-3 mt-4 mb-4"
const Register = ({getsignupemail,getsignuppass,emailSignUp}) => {
  return (
    <div className="login">
    <div >
      <br/><br/><br/><br/>
    <MDBContainer className="">
    <MDBRow>
    <MDBCol md="6"  className="offset-2">
      
    <MDBCard className="logincard"  >
   <MDBCardBody>

  <form>
 <p className="h2 text-center " style={{color:'white'}} >REGISTER</p>
 <p className="h6 text-center " style={{color:'white'}} >Create your account. It's free and only takes a minute.</p>

<div className="grey-text">

{/* <MDBInput label="Username"  icon="user" group type="text" validate error="wrong" success="right"  name="username"/> */}
 
<MDBInput label="Email"  icon="envelope" group type="email" validate error="wrong" success="right"  name="email"  style={{color:'white'}} onChange={(e)=>getsignupemail(e)} />

 <MDBInput label="Password"  icon="lock"  group  type="password"  validate  name="pass" style={{color:'white'}}  onChange={(e)=>getsignuppass(e)} />
    </div>

    <div className="text-center  mt-3">
   <MDBBtn color="dark-green" type="button"  onClick={()=>emailSignUp()} > Register Now</MDBBtn>
     </div>
    </form>

        <p className="h6 text-center py-4" style={{color:'white'}} >Already have an account? <Link to="/login" style={{color:'white'}} > Login</Link> </p>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br/> <br/> <br/> <br/> 
    </div>
    </div>
  );
};

export {Register};