import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import FormExercise from './FormExercise';
import Pics from './Pics';
import ImageList from './ImageList';

class App extends React.Component{
    state={images:[]};
    onSearchSubmit=async(term)=>{
        //unplash API
        // axios.get('http://api.unplash.com/search/photos',{
        //     params:{query:term},
        //     headers:{
        //         Authorization:'Client-ID API-key'
        //     }
        // });

        const response=await axios
        .get(`https://pixabay.com/api/?key=27945779-95dc9c264e82732909c90c48a&q=${term}`,{});

        this.setState({images:response.data.hits});

    }

    render(){

        return(
            <div className='ui container' style={{marginTop:'30px'}}>
              <SearchBar onSubmit={this.onSearchSubmit}/> 
            
             {/* <FormExercise/> */}
             {/* <Pics /> */}
             Found:{this.state.images.length} images
             <ImageList images={this.state.images}/>
            </div>
        )
    }
}


export default App;