import React from 'react';
import './AppCSS.css';
import {BrowserRouter , Route} from 'react-router-dom';
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

class AdminDashboard extends React.Component {


	constructor(props){

        super(props);
        //this.props.applications
        //console.log(this.state.applications);
        
        
        this.state={
            applications:this.props.applications
            
            //[
                // {id:"1",domain:"IOS",resume:"123123123", name:"Taha", contact:"316665"
                //     ,email:"taha.attique97@gmail.com" , currentAddress:"DHA", 
                //     discipline:"CS",
                //     gratuationYear:"2020", university:"FAST",
                //     workedLanguages:["JAVA","PYTHON"], status:"NOT" },

                //     {id:"2",domain:"IOS",resume:"123123123", name:"Zohaa", contact:"316665"
                //     ,email:"taha.attique97@gmail.com" , currentAddress:"DHA", 
                //     discipline:"CS",
                //     gratuationYear:"2020", university:"FAST",
                //     workedLanguages:["JAVA","PYTHON"], status:"NOT" },

                //     {id:"3",domain:"IOS",resume:"123123123", name:"Saqib", contact:"316665"
                //     ,email:"taha.attique97@gmail.com" , currentAddress:"DHA", 
                //     discipline:"CS",
                //     gratuationYear:"2020", university:"FAST",
                //     workedLanguages:["JAVA","PYTHON"], status:"NOT" },

                //     {id:"4",domain:"IOS",resume:"123123123", name:"Zak", contact:"316665"
                //     ,email:"taha.attique97@gmail.com" , currentAddress:"DHA", 
                //     discipline:"CS",
                //     gratuationYear:"2020", university:"FAST",
                //     workedLanguages:["JAVA","PYTHON"], status:"NOT" }


                
            //]
            
            ,shortlisted:[],isChecked:false};

            console.log("I am in Admin", this.state.applications);
    
    }
    
    checkedHandler=(id)=>{
        console.log("Zohaa " + id )
    }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });

        console.log(this.state.isChecked)
      }

	render() {
		return (
			<div>
                <div style={{backgroundColor:"#BAC4C4" }}>
                    <div className="row" >
                            <div className="col-sm-1" >
                                <p>Short List</p>
                            </div>
                            <div className="col-sm-2">
                                <p>Name</p>
                            </div>
                            <div className="col-sm-3" >
                                <p>Email</p>
                            </div>
                            <div className="col-sm-2">
                                <p>Contact</p>
                            </div>
                            <div className="col-sm-1" >
                                <p>Domain</p>
                            </div>
                            <div className="col-sm-1">
                                <p> Resume </p>
                            </div>
                            <div className="col-sm-1" >
                                <p>Information</p>
                            </div>
                            <div className="col-sm-1">
                                <p>Delete</p>
                            </div>
                    </div>
                </div>
                
                <div style={{color:"white" }}>

                {this.state.applications.map(item  => (
                                    
                    <div key={item.id}>
                         <div className="row" >
                            <div className="col-sm-1" >
                                

                               
                            <div className="form-check" style={{textAlign:"center"}}>
                                <input  type="checkbox" checked={this.state.isChecked}
                                  onChange={this.toggleChange} className="form-check-input"
                                   id="exampleCheck1"/>
                            </div>
                                                        
                                

                                
                            </div>
                            <div className="col-sm-2">
                                <p>{item.name}</p>
                            </div>
                            <div className="col-sm-3" >
                                <p>{item.email}</p>
                            </div>
                            <div className="col-sm-2">
                                <p>{item.contact}</p>
                            </div>
                            <div className="col-sm-1" >
                                <p>{item.domain}</p>
                            </div>
                            <div className="col-sm-1">
                                <p><AiOutlineDownload/></p>
                            </div>
                            <div className="col-sm-1" >
                                <p style={{textDecoration: "underline"}}>Show Info</p>
                            </div>
                            <div className="col-sm-1">
                                <p><AiOutlineDelete/></p>
                            </div>
                        </div>
                    </div>

                ))}

                </div>


			</div>	
		);
	}
}
export default AdminDashboard;
