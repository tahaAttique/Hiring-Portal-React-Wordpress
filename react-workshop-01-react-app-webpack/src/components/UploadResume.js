import React from 'react';
import './AppCSS.css';


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

	render() {
		return (
				

		   <div className="form-group">
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

export default UploadResume;
