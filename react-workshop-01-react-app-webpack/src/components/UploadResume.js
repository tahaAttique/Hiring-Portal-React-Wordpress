import React from 'react';
import './AppCSS.css';
import {BrowserRouter , Route, withRouter} from 'react-router-dom';

class UploadResume extends React.Component {


	constructor(props){
		super(props);
		this.state={image:'',temp:""};
	
    }
    onChange=(e)=>{
        let files=e.target.files;
        let reader =new FileReader();   
        reader.readAsDataURL(files[0]);

        reader.onload=(e)=>{
            console.warn('img data', e.target.result)

            // here you have to send this to server (e.traget.result)
            //const url="http://127.0.0.1:8000/api/something";
            // const formData={file:e.target.result}
            // return post(url,formData)
            //     .then(response=>console.warn("result",response))
        }
        
    }
    onDelete=(e)=>{

    }
    nextBtnHandler=()=>{
        this.props.history.push('/applicationform');
    }

    goBack=()=>{
        this.props.history.goBack();
    }

	render() {
		return (
				

		   <div className="form-group">
               <div style={{ backgroundColor:"white", height:"55px"}}>

                    <div className="row" >
                        <div className="col-sm-2" >
                            <button type="button" className="btn btn-secondary" 
                            style={{marginRight: "20px", backgroundColor:"#2F4F4F", color:"white", marginLeft:"20px" ,marginTop:"5px"}} 
                            onClick={this.goBack}
                            >Back</button>
                        </div>
                        <div className="col-sm-10">
                            <h3 style={{ color:"#2F4F4F", textAlign:"center", marginTop:"10px"}} >Selected Domain: {this.props.domain}</h3>
                        </div>
                    </div>
               </div>
               
               <h1 style={{fontSize: "100px", textAlign: "center", opacity: "0.1", marginTop: "20px"}}> UPLOAD YOUR RESUME</h1>
               <h1 id="idH1UploadResume">Upload Your Resume</h1>
               <div style={{textAlign: "center"}}>
                    <div className="row" >
                            <div className="col-sm">
                                
                            </div>
                            <div className="col-sm">
                                <input 
                                style={{marginBottom: "20px"}}
                                className="form-control" type="file" name="file"  onChange={(e)=>this.onChange(e)} />
                            </div>
                            <div className="col-sm">
                                
                            </div>
                    </div>
                    <div className="row" >
                            <div className="col-sm">
                                
                            </div>
                            <div className="col-sm" style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-secondary"
                                    style={{marginRight: "20px", backgroundColor:"white", color:"#2F4F4F"}} onClick={(e)=>this.onDelete(e)}
                                >Delete</button>    
                                <button type="button" className="btn btn-secondary"
                                    style={{marginRight: "20px", backgroundColor:"white", color:"#2F4F4F"}} 
                                    onClick={this.nextBtnHandler}
                                >Next</button>
                            </div>
                            <div className="col-sm">
                                
                            </div>
                    </div>
                  
               </div>
  
		  </div>
					
		);
	}
}

export default withRouter(UploadResume);
