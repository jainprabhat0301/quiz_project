import React from 'react';
import '../App.css'
import { Button, Form, FormGroup, Label, Input, FormText , InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { MDBContainer,MDBAnimation, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBIcon } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AddQues({db,newitem,getquestion,setquestion,clearquestion,quesname,op1,op2,op3,op4,correctop}){
  return (
      <div className="back">
        
        <div >
          <MDBAnimation type="fadeInDown">
           <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard className="container offset-3 mt-2 mb-4 questioncard ">
            <MDBCardBody>
            <h1 style={{textAlign:'center'}}><MDBIcon icon="file-alt" /> {db.cquiz.qname}</h1>

      <Form >
      <FormGroup>
        <h4>  <Label for="exampleText"><i class="far fa-file-alt"></i> Question {db.cquiz.total+1}</Label></h4>
          <Input type="text" name="ques" id="exampleText" placeholder="Question here" required onChange={(e)=>getquestion(e,"quesname")} value={quesname}  />
        </FormGroup>

        <FormGroup>
        <h4>  <Label for="exampleText"><i class="fas fa-clipboard-list"></i> Options</Label></h4>
          <Input type="text" name="op1" id="exampleoption" placeholder="Option 1"required onChange={(e)=>getquestion(e,"op1")} value={op1}/> 
        </FormGroup>

        <FormGroup>
          <Input type="text" name="op2" id="exampleoption" placeholder="Option 2"required onChange={(e)=>getquestion(e,"op2")}  value={op2}/>
        </FormGroup>

        <FormGroup>
          <Input type="text" name="op3" id="exampleoption" placeholder="Option 3" required onChange={(e)=>getquestion(e,"op3")}  value={op3}/>
        </FormGroup>
        
        <FormGroup>
          <Input type="text" name="op4" id="exampleoption" placeholder="Option 4" required onChange={(e)=>getquestion(e,"op4")}  value={op4}/>
        </FormGroup>
        <FormGroup>
     <h4>  <Label for="exampleSelect"> <i class="fas fa-check-square"></i> Choose Correct Option</Label></h4>
          <Input type="select" name="correct" id="exampleSelect" required onChange={(e)=>getquestion(e,"correctop")}  value={correctop}>
          <option > Choose Option</option>
            <option value={op1} > Option 1</option>
            <option value={op2}> Option 2</option>
            <option value={op3}> Option 3</option>
            <option value={op4}> Option 4</option>
          </Input>
        </FormGroup>
      
        <Link to="/"><MDBBtn color="blue-grey" type="button"><MDBIcon icon="times-circle" />  Cancel </MDBBtn> </Link>

         <Link to="/addques2"> <MDBBtn class="btn btn-warning"type="button" onClick={()=>clearquestion()}><MDBIcon icon="trash-alt" /> Clear</MDBBtn> </Link>
         <Link to="/"> <MDBBtn color="success" type="button" onClick={()=>setquestion()} ><MDBIcon icon="folder-open" /> Save</MDBBtn></Link>
         <Link to="/addques2"> <MDBBtn  color="success" type="button" onClick={()=>setquestion()} ><MDBIcon icon="folder-open" /> Save & add Another</MDBBtn></Link>
       
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

export {AddQues}

//        <Button color="secondary"  type="submit">secondary</Button>{' '}


// constructor(props){
//   super(props)
//      this.state={}
//      this.state={
//        qname:"",point:"",op1:"",op2:"",op3:"",op4:"",correctop:""
//        ,list:[]
//      }
//    }

//    getqname(e){
//     console.log(e.target.value)
//      this.setState({
//        qname:e.target.value
//      })
//    }
   
//    getpoint(e){
//     console.log(e.target.value)
//      this.setState({
//        point:e.target.value
//      })
//    }
//    getop1(e){
//     console.log(e.target.value)
//      this.setState({
//        op1:e.target.value
//      })
//    }
//    getop2(e){
//     console.log(e.target.value)
//      this.setState({
//        op2:e.target.value
//      })
//    }
//    getop3(e){
//     console.log(e.target.value)
//      this.setState({
//        op3:e.target.value
//      })
//    }

//    getop4(e){
//     console.log(e.target.value)
//      this.setState({
//        op4:e.target.value
//      })
//    }
   
//    getcorrect(e){
//     console.log(e.target.value)
//      this.setState({
//        correctop:e.target.value
//      })
//    }
//    setValue(e){
//     var l=this.state.list;
//     var obj={qname:this.state.qname,point:this.state.point,op1:this.state.op1,op2:this.state.op2,op3:this.state.op3,op4:this.state.op4,correctop:this.state.correctop}
//         l.push(obj)
//         console.log(l)
//         this.setState({
//           list:l
//         })
//    }

// render