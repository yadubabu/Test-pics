import React from 'react';

class SearchBar extends React.Component{
    // onInputChange(event){
    //     console.log(event.target.value);
    // }
  state={
      term:'Hi There!'
  }

//   onFormSubmit(event){
//         event.preventDefault();
//         console.log(this.state.term);
//   }

  //Using Arrow fuction to avoid the problem
 onFormSubmit=(event)=>{
     event.preventDefault();

     this.props.onSubmit(this.state.term);
 }
    render(){
        return(
            <div className='ui segment'>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className='ui field'>
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={(e)=>this.setState({term:e.target.value})}/>
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar;