import React, {Component} from 'react'; 
import {Modal, Button, Row, Col,Form} from 'react-bootstrap';

import './AppCSS.css';


class Popup extends React.Component {  

    constructor(props){
        super(props);
    }

  render() {  
        return (  
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add Department
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                     to add Form Fileds 
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            
        );
    }  
}  
export default Popup;

