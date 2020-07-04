import React, {Component} from 'react'; 
import {Modal, Button, Row, Col,Form} from 'react-bootstrap';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';
import './AppCSS.css';
import { AiOutlineCheck } from "react-icons/ai";


class FormSubmitted extends React.Component {  

    constructor(props){

        super(props);
    }

  render() {  
        return (  
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                
                <Modal.Header closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter" >
                        
                            
                    </Modal.Title> */}
                </Modal.Header>
                
                <Modal.Body>
                    <div style={{textAlign:"center" , backgroundColor:"#2F4F4F"}}>
                            <h1 style={{backgroundColor:"white"}}><AiOutlineCheck/></h1>  
                            <div className='container'>
                                <h1 style={{color:"white"}} >Thank You</h1>
                                <p style={{color:"white"}}>The Form was Submitted Successfully</p>
                            </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{backgroundColor:"#2F4F4F"}} onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
          
        );
    }  
}  
export default withRouter(FormSubmitted);

