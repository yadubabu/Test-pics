import React from 'react';
import '../api/style.css';


const getImg=id=>{
    return id === 1 ? '../img/pic1.jpg' : '../img/pic2.jpg';
}

const Users = ()=>{
    const pic=getImg(1)
    console.log(pic);
    return(
        <div>       
            <img src={require('../img/pic2.jpg')} height={200} width={200}/>         
            <img src={require(` ${pic}` )} height={200} width={200}/>
        </div>
    )
}

export default Users;
