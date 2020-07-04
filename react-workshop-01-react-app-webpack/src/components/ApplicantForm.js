import React from 'react';
import './AppCSS.css';
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
import FormSubmitted from "./FormSubmitted";

class ApplicantForm extends React.Component {


	constructor(props){
		super(props);
        this.state={workedLanguages:[],  addModalShow: false  
        };
	
    }



    deleteworkedLanguages = (id) =>{
        
        const newLangs = this.state.workedLanguages.filter(lang => {
            return  lang.id !== id
          });
         
          this.setState({
            workedLanguages: newLangs
          })
    }

    addworkedLanguages = (e) =>{
        
        this.setState({
            value: e.target.value
        }, () => {
           // console.log(this.state.value);
            let obj={id:Math.random() , name:this.state.value};
            this.state.workedLanguages.push(obj);
            //console.log(this.state.workedLanguages);
            this.forceUpdate();
        })
      } 

    nextBtnHandeler=()=>{
        
    }

	render() {

        let addModalClose=()=> this.setState({addModalShow:false});
		return (
				
        
           <div style={{marginBottom:"20px", marginRight:"130px", marginLeft:"100px"}}>
              
		   <div className="container" style={{ border:"3px solid  lightgrey" , marginTop:"40px"}}>
               <Form>
                   <h1 style={{color: "white"}}>Personal Info</h1>
                    <div style={{marginRight:"20px", marginLeft:"40px"}}> 
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'white'}}>Name:<span style={{color:'red'}} >*</span>  </Form.Label>
                            <Form.Control required type="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'white'}}>Contact No:<span style={{color:'red'}} >*</span></Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'white'}}>Email":<span style={{color:'red'}} >*</span></Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{color:'white'}}>Current Address:</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </div>
                    <h1 style={{color: "white"}}>Educational Background</h1>
                    <div style={{marginRight:"20px", marginLeft:"40px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'white'}}>Discipline:<span style={{color:'red'}} >*</span>  </Form.Label>
                            <Form.Control required type="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'white'}}>Gratuation Year:<span style={{color:'red'}} >*</span>  </Form.Label>
                            <Form.Control required type="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'white'}}>University</Form.Label>
                            <Form.Control type="textarea" placeholder="" />
                        </Form.Group>
                    </div>
                    <h1 style={{color: "white"}}>Technical Background</h1>
                    <p style={{color: "white"}}>Give us a little background about yourself and your experience</p>
                    
                    <div style={{marginRight:"20px", marginLeft:"40px"}}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        
                                {this.state.workedLanguages.map(item  => (
                                    
                            <div key={item.id}>     
                                <div style={{backgroundColor:"grey",textAlign:"center", width:"250px",height:"48px"
                            }}>
                                        
                                    <div className="row" >
                                        <div className="col-sm-9" style={{textAlign:"center", marginTop:"10px"}}>
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="col-sm">
                                            <Button style={{backgroundColor:"#2F4F4F"}} onClick={() => {this.deleteworkedLanguages(item.id)}} >
                                                <AiOutlineClose />
                                            </Button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div style={{marginTop:"20px"}}></div>
                            </div>
                                    
                                ))}
                             
                             </Card.Body>
                
                        </Card>

                        <Form.Group  controlId="formGridState">
                            <Form.Label  style={{color: "white"}}>Choose the Languages You Have Worked With</Form.Label>
                            <Form.Control as="select" value={this.state.value} onChange={this.addworkedLanguages} defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Java</option>
                                <option>JavaScript</option>
                                <option>Angular</option>
                                <option>React</option>
                                <option>C++</option>
                                <option>C#</option>
                                <option>Python</option>
                                <option>Golang</option>
                            </Form.Control>
                      </Form.Group>   

                    </div>

                    <div className="row" >
                            <div className="col-sm">
                                
                            </div>
                            <div className="col-sm">
                            </div>
                            <div className="col-sm" style={{marginBottom:"20px"}}>
                            <button type="button" className="btn btn-secondary"
                                    style={{marginRight: "20px" ,backgroundColor:"white", color:"#2F4F4F"}}
                                >Back</button>    
                                <button 
                                style={{marginRight: "20px" ,backgroundColor:"white", color:"#2F4F4F", }}
                                type="button" className="btn btn-primary" onClick={()=>this.setState({addModalShow:true})}>Next </button>
                                
                                <FormSubmitted
                                    show={this.state.addModalShow}
                                    onHide={addModalClose}
                                />
                                
                            </div>
                    </div>
                </Form>
            </div>
        </div>
					
		);
	}
}

export default ApplicantForm;
