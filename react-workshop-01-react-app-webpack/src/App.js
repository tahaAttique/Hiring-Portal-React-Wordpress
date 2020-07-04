import React from 'react';
import './components/AppCSS.css';
import DomainSelection from './components/DomainSelection'
import UploadResume from './components/UploadResume'
import ApplicantForm from './components/ApplicantForm'
import FormSubmitted from "./components/FormSubmitted";
import {BrowserRouter , Route} from 'react-router-dom';
class App extends React.Component {


	constructor(props){

		super(props);
		this.state={domain:''};
	
	}

	setDomain=(_domain)=>{

		this.setState({
			domain:_domain
		})
	}

	render() {
		return (
				
			<div className="App">
				<BrowserRouter>
					<div className="App">
				
						<Route exact path='/' component={(props)=> <DomainSelection  setDomain={this.setDomain} domain={this.state.domain} />} />
						<Route path='/uploadresume'  render={(props)=> <UploadResume  setDomain={this.setDomain} domain={this.state.domain} /> } /> 
						<Route path='/applicationform'  render={(props)=> <ApplicantForm setDomain={this.setDomain} domain={this.state.domain}/> } />				
					</div>
				</BrowserRouter> 
			</div>	
		);
	}
}

export default App;
