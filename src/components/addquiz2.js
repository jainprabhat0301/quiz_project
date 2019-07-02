import React from 'react';
import '../App.css'
import { Col, Row,Button, Form, FormGroup, Label, Input, FormText , InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { MDBContainer,MDBAnimation, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBIcon } from 'mdbreact';


function AddQuiz ({getvalue,createquiz,flag,qname,points,hr,min,sec,typeq,clearquiz,updateflag,setupdatequiz}){ 
    return (
      <div className='bgqz'>
        <div className="container offset-2  mb-4 img">
        <MDBAnimation type="fadeInDown">
          <br/>
           <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard  style={{ backgroundColor: 'beige'}}  className="container mt-3 quizcard">
            <MDBCardBody>
            <h1  style={{textAlign:'center'}}><strong><MDBIcon icon="file-alt" /> Quiz</strong></h1> 
      <Form >
      <FormGroup>
          <h4><Label  for="exampleText"><i class="far fa-file-alt"></i> Quiz Name</Label></h4>
          <Input type="text" name="ques" id="exampleText" placeholder="Enter quiz name" value={qname} required onChange={(e)=>getvalue(e,"qname")}/>
        </FormGroup>
        
        <FormGroup>
        <h4>  <Label  for="exampleNumber"><MDBIcon icon="star" /> Points</Label></h4>
          <Input  type="number" name="point" id="exampleNumber" placeholder="Points" value={points} required onChange={(e)=>getvalue(e,"points")} />

        </FormGroup>

     <h4 > <i class="fas fa-clock"></i> Time Duration of Quiz</h4>

        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label style={{color:'white'}}  for="exampleCity">Hours</Label>
              <Input  type="number" name="point" id="exampleNumber" placeholder="hr" value={hr} required onChange={(e)=>getvalue(e,"hr")} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label style={{color:'white'}}  for="exampleState">Minutes</Label>
              <Input  type="number" name="point" id="exampleNumber" placeholder="min" value={min}required onChange={(e)=>getvalue(e,"min")} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label style={{color:'white'}}  for="exampleZip">Seconds</Label>
              <Input  type="number" name="point" id="exampleNumber" placeholder="sec" value={sec} required onChange={(e)=>getvalue(e,"sec")} />
            </FormGroup>  
          </Col>
        </Row>

        <FormGroup>
        <Input type="select" name="correct" id="exampleSelect" value={typeq}  onChange={(e)=>getvalue(e,"typeq")} >
          <option value="Type of Quiz">Type of Quiz </option>
          <option value="Single Choice MCQ"> Single Choice MCQ</option>
         
        </Input>
      </FormGroup>

      <Link to='/'> <MDBBtn color="blue-grey" type="button" ><MDBIcon far icon="times-circle" />  Cancel </MDBBtn></Link> 
      <Link to='/addquiz2'> <MDBBtn color="warning" type="button" onClick={()=>clearquiz()}><MDBIcon icon="trash-alt" /> Clear</MDBBtn></Link>

  { updateflag==1
    ? <Link to='/'> <MDBBtn color="success" type="button" onClick={()=>{setupdatequiz();clearquiz()}}><MDBIcon far icon="times-circle" />    Save </MDBBtn></Link>
    :  <Link to='/'> <MDBBtn color="success" type="button" onClick={()=>{createquiz();clearquiz()}}><MDBIcon far icon="times-circle" />    Save </MDBBtn></Link>
  }
      
      </Form>

      </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </MDBAnimation>
      </div>
      </div>
    );
  }
export {AddQuiz}


// constructor(props){
//     super(props)
//        this.state={}
//        this.state={
//          name:"",numq:"",hr:"",min:"",sec:"",typeq:"",
//          list:[]
//        }
             
//        this.getname=this.getname.bind(this)
//        this.getnum=this.getnum.bind(this)
//        this.gethr=this.gethr.bind(this)
//        this.getmin=this.getmin.bind(this)
//        this.getsec=this.getsec.bind(this)
//        this.getselect=this.getselect.bind(this)
 
//      }
   
//     getname(e){
//       console.log(e.target.value)
//        this.setState({
//          name:e.target.value
//        })
//      }
 
//      getnum(e){
//        console.log(e.target.value)
//         this.setState({
//           numq:e.target.value
//         })
//       }
//       gethr(e){
//        console.log(e.target.value)
//         this.setState({
//           hr:e.target.value
//         })
//       }
//       getmin(e){
//        console.log(e.target.value)
//         this.setState({
//           min:e.target.value
//         })
//       }
//       getsec(e){
//        console.log(e.target.value)
//         this.setState({
//           sec:e.target.value
//         })
//       }
//       getselect(e){
//        console.log(e.target.value)
//         this.setState({
//           typeq:e.target.value
//         })
//       }
 
//       setValue(e){
//        var l=this.state.list;
//        var obj={name:this.state.name,numq:this.state.numq,hr:this.state.hr,min:this.state.min,sec:this.state.sec,typeq:this.state.typeq}
//            l.push(obj)
//            console.log(l)
//            this.setState({
//              list:l
//            })
//       }

      

//        <Button color="secondary"  type="submit">secondary</Button>{' '}
// import { TimePicker } from 'antd';
// import moment from 'moment';

// function onChange(time, timeString) {
//   console.log(time, timeString);
// }

// ReactDOM.render(
//   <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
//   mountNode,
// );


        {/* <FormGroup>
          <Label for="exampleTime">Time Duration of Quiz</Label>
          <Input type="time" name="time"  id="exampleTime"  placeholder="time placeholder"  onChange={this.getValue}  value={this.state.newit} />
        </FormGroup> */}


        // <label>
        // Type of Quiz<br/>
        // <select value={this.state.value} onChange={this.getValue}>
        //     <option value="Single Choice MCQ">Single Choice MCQ</option>
        //     <option value="Single Choice MCQ">Single Choice MCQ</option>

        
        //   </select>
        // </label>


        //<Label for="exampleSelect">Type of Quiz</Label>