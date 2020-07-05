import React from 'react';
import './components/AppCSS.css';
import DomainSelection from './components/DomainSelection'
import UploadResume from './components/UploadResume'
import ApplicantForm from './components/ApplicantForm'
import AdminDashboard from './components/AdminDashboard'
import FormSubmitted from "./components/FormSubmitted";
import {BrowserRouter , Route} from 'react-router-dom';
class App extends React.Component {


	constructor(props){

		super(props);
		this.state={domain:'',applications:[],resume:''};
	
	}

	setResume=(data)=>{
		this.setState({
			resume:data
		})
	}
	
	addNewApplication=(obj)=>{
		console.log("It run")
		this.state.applications.push(obj);
		console.log(this.state.applications)
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
						<Route exact path='/' component={(props)=> <DomainSelection  setDomain={this.setDomain}
						 domain={this.state.domain} />} />
						<Route path='/uploadresume'  render={(props)=> <UploadResume  setResume={this.setResume} 
						setDomain={this.setDomain} domain={this.state.domain} /> } /> 
						<Route path='/applicationform'  render={(props)=> <ApplicantForm 
						resume={this.state.resume} 
						domain={this.state.domain} addNewApplication={this.addNewApplication}/> } />
						<Route path='/admin'  render={(props)=> <AdminDashboard  applications={this.state.applications} /> } />					
					</div>
				</BrowserRouter> 
			</div>	
		);
	}
}
export default App;
