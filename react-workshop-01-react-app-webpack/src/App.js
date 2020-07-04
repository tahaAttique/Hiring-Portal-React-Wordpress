import React from 'react';
import './components/AppCSS.css';
import DomainSelection from './components/DomainSelection'
import UploadResume from './components/UploadResume'
import ApplicantForm from './components/ApplicantForm'
import FormSubmitted from "./components/FormSubmitted";
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
				

		   <div>
				<DomainSelection setDomain={this.setDomain} domain={this.state.domain} />
				<UploadResume setDomain={this.setDomain} domain={this.state.domain} />
				<ApplicantForm setDomain={this.setDomain} domain={this.state.domain} />
				{/* <FormSubmitted/> */}
		  </div>
					
		);
	}
}

export default App;
