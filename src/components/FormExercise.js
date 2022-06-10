import React from "react";

class FormExercise extends React.Component{
    constructor(props){
        super(props);
        this.state={
        password:''
    }
    }
   
   
    render(){
        return(
<div className='ui segment'>
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className='ui field'>
                       <label>Enter PassWord:</label>
                       <input type="password"
                       value={this.state.password}
                       onChange={(e)=>this.setState({password:e.target.value})}/>
                    </div>
                    {this.state.password.length<4 ? 'password must be in at least 4 characters': ''}
                </form>

            </div>        )
    }
}

export default FormExercise;