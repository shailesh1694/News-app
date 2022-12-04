import React, { Component } from "react";


export default class Profile extends Component{
    constructor(){
        super();
        this.state = {
            show:0
        }
        console.log();
    }
   

       

    render() {
        
        return(
        <div>
            
            <h1>{this.state.show}</h1>
           
            <button style={{margin:"20px"}} onClick={()=>{this.setState({
                show:this.state.show+1
            })}}>changestate</button>
        </div>
        );
    }
}
