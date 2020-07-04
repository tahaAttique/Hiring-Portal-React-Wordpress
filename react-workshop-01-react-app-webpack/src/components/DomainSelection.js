import React from 'react';
import './AppCSS.css';
import fe from '../fe.png';
import fs from '../fs.png';
import ios from '../ios.png';
import UI from '../UI.png';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';
class DomainSelection extends React.Component {


	constructor(props){
		super(props);
		this.state={};
        
	}

	UIImageClicked=()=>{
		this.props.setDomain("UI");
		this.props.history.push('/uploadresume');
	}
	FEImageClicked=()=>{
		this.props.setDomain("Front-End");
		this.props.history.push('/uploadresume');
	}
	FSImageClicked=()=>{
		this.props.setDomain("Full Stack");
		this.props.history.push('/uploadresume');
	}
	IOSImageClicked=()=>{
		this.props.setDomain("IOS");
		this.props.history.push('/uploadresume');
        
	}

	render() {
		return (
				
			<div className="container" >
				<h1 style={{fontSize: "100px", textAlign: "center", opacity: "0.1", marginTop: "20px"}} >WE ARE HIRING</h1>
				<div className="row" >
					<div className="col-sm">
						
					</div>
					<div className="col-sm">
						<h1 id="idRow">WE ARE HIRING</h1>
					</div>
					<div className="col-sm">
						
					</div>
				</div>
				
				<div className="row" >
					<div className="col-sm" >
						<div className="card"  style={{width: "150px", border: "3px solid  lightgrey" }} >
	
							<img src={UI} onClick={this.UIImageClicked} ></img>
						</div>
					</div>
					<div className="col-sm">
						<div className="card"   style={{width: "150px", border: "3px solid  lightgrey" }} >
							<img src={fe} onClick={this.FEImageClicked}></img>
						</div>
					</div>
					<div className="col-sm">
						<div className="card"  style={{width: "150px", border: "3px solid  lightgrey" }} >
							<img src={fs} onClick={this.FSImageClicked} ></img>
						</div>
					</div>
					<div className="col-sm">
						<div className="card"   style={{width: "150px", border: "3px solid  lightgrey" }} >
							<img src={ios} onClick={this.IOSImageClicked} ></img>
						</div>
					</div>
				</div>
		  </div>
					
		);
	}
}

export default withRouter(DomainSelection);
