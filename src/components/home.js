import React, { Fragment} from "react";
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Form , Button} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
//import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBAnimation, MDBCardText, MDBCol,MDBListGroup, MDBListGroupItem, MDBContainer,MDBIcon  } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Home({db,admin,getindex,removequiz,createansls,getanswer,loginCheck,viewquiz,search,useremail,
                user,logOut,time,googleLogin,hour,minu,seco,viewresult,adminresult,getsearch}){
    return (
      <div  className='cream'>


  <Navbar bg="primary" variant="dark" className="fixed-top">
  
    <Navbar.Brand href="/" className="logo" ><MDBIcon icon="book-reader" /> Quizact</Navbar.Brand>

    {admin=="adminquiz@gmail.com"
        ? <Link to="/addquiz2"> <MDBBtn class="btn btn-amber"><MDBIcon icon="folder-plus" /> Create Quiz</MDBBtn></Link>
         :<p></p>
     }

    <Nav className="mr-auto ">
      
    </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={(e)=>getsearch(e)} />

     {typeof(user)=="string" || user==null
      ?<p></p>
      :admin=="adminquiz@gmail.com" 
       ? <Link to="/adminresult"> <MDBBtn  color="secondary"  onClick={()=>adminresult()} ><MDBIcon icon="chart-bar" /> Analyze Results</MDBBtn></Link>
       : <Link to="/resulttable"> <MDBBtn   color="secondary" onClick={()=>viewresult()} ><MDBIcon icon="chart-bar" /> Analyze Results</MDBBtn></Link>
     }


{typeof(user)=="string" || user==null
      ?   <Link to="/register"> <MDBBtn class="btn btn-danger">Register</MDBBtn></Link>
         : <p></p>}


{typeof(user)=="string"  || user==null
? <Link to="/login"> <MDBBtn  class="btn btn-success">Login</MDBBtn></Link> 
: <Link to="/"><MDBBtn  type="button" class="btn btn-success my-2 my-sm-0" onClick={()=>logOut()} ><MDBIcon icon="power-off" /> LogOut</MDBBtn></Link> 
  }        </Form>

  </Navbar>

<br/><br/><br/><br/><br/><br/><br/><br/>

<div className="container">
       <div className="row">

     {db.list.map((p,index)=>
        <div className=" hoverable">
           <MDBAnimation type="fadeInUp">
        <MDBCol>
        <MDBCard className="cdbg" style={{marginTop: '10px',width:'30rem'}}>
       <MDBCardBody>
     
<MDBCardText>

         <MDBContainer>
        <ListGroup variant="flush"  >
  <ListGroup.Item className="cdbg" style={{textAlign:'center'}}><h3><strong><i class="far fa-file-alt"></i> {p.qname}&nbsp;&nbsp;&nbsp;</strong></h3></ListGroup.Item>
  <ListGroup.Item className="cdbg" ><h5><i class="fas fa-list-alt"></i> <strong> No. of Questions : {p.total}</strong></h5></ListGroup.Item>
  <ListGroup.Item className="cdbg" ><h5><MDBIcon icon="star" /> <strong> Points : {p.points}</strong></h5></ListGroup.Item>
  <ListGroup.Item className="cdbg" ><h5><strong><i class="fas fa-clock"></i> Time : {p.hr} hr : {p.min} min : {p.sec} sec</strong></h5></ListGroup.Item>
  <ListGroup.Item className="cdbg"><h5><strong><i class="fas fa-th-list"></i> Type : {p.typeq}</strong></h5></ListGroup.Item>
</ListGroup>
        </MDBContainer>

 </MDBCardText>
          {admin=="adminquiz@gmail.com"
      ?  <Link to = "/addques2" > <MDBBtn class="btn btn-success" onClick={()=>getindex(index,p)}><MDBIcon icon="folder-plus" /> Add Question</MDBBtn></Link> 
      :<p></p>}
      
       {admin=="adminquiz@gmail.com"
     ? <Link to="/"> <MDBBtn class="btn btn-danger" onClick={()=>removequiz(p)}><MDBIcon icon="trash" /> Remove</MDBBtn></Link> 
      :<p></p>}
     

     {/* <Link to = "/addquiz2" ><MDBBtn class="btn btn-success" onClick={()=>{getindex(index,p);updatequiz(p)}}><MDBIcon icon="edit" /></MDBBtn></Link> */}
        

        {admin!="adminquiz@gmail.com"
        ?<p></p>
        :  p.total==0
        ?<p></p>// ?  <Link to =  '/viewquiz' > <MDBBtn class="btn btn-warning"  style={{color:'white'}} onClick={()=>viewquiz(p)}><MDBIcon icon="folder-open" /> View</MDBBtn></Link>
        :  <Link to =  '/viewquiz' > <MDBBtn class="btn btn-warning"  style={{color:'white'}} onClick={()=>viewquiz(p)}><MDBIcon icon="folder-open" /> View</MDBBtn></Link>

      } 
      
      
      {useremail=="" || admin=="adminquiz@gmail.com"
      ?<p></p>
        : p.total==0 
      ?<p></p>  // ?   <Link to="/"> <MDBBtn class="btn btn-success" onClick={()=>{viewquiz(p);}} ><MDBIcon icon="play" /> Start Quiz</MDBBtn></Link> 
        :  <Link to= '/instruction' > <MDBBtn class="btn btn-success" onClick={()=>{viewquiz(p);}} ><MDBIcon icon="play" /> Start Quiz</MDBBtn></Link> 
      } 
       {/* {'/instruction/${index}'} */}
        
       </MDBCardBody>
     </MDBCard>
     </MDBCol>
     </MDBAnimation>
       </div>
 
     )} 
       </div>
       </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  }

  
export {Home};
//<MDBBtn href="#">Edit Quiz Name</MDBBtn><MDBBtn href="#">Remove Quiz</MDBBtn>
//Quiz Name : {p.qname}&nbsp;&nbsp;&nbsp;