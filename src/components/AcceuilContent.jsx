import React from 'react';
import img from './img.jpg'
function AcceuilContent(){
    return(
        <>
          <h1>Bienvenue au FULL STACK SHOP</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Earum harum eligendi cum, ipsam possimus dignissimos ut molestias 
            blanditiis voluptas esse, quos natus odio fugiat! Rerum ducimus soluta molestias nostrum unde!</p>
          <img src={img} />
        </>
    )
}
export default AcceuilContent;