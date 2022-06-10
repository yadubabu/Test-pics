import React from 'react';

class Pics extends React.Component{
    state={
        id:0
    }
    getImage(id){
        return id=1 ? '../img/pic1.jpg' : '../img/pic2.jpg';
    }
    render(){
    return(
        
        <div>
            <input value={this.state.id} type='number' onChange={e=>this.setState({id:parseInt(e.target.value)})}/>
            {this.state.id===1 ? 'picture1 selected' : 'picture two is selected'}
                  <img src={require('../img/pic1.jpg')}/>
         
        </div>
        // <div><button onClick={<img src={require(`..components/img/${this.getImage(1)}`)}/>}>1</button><button onClick={<img src={require(`..components/img/${this.getImage(1)}`)}/>}>2</button></div>
    )
}
}
export default Pics;