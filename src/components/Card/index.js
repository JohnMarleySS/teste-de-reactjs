import React from 'react';
import './style.css'

const Card = (props) => {
    return(
        <div id="card-style">
            <img src={props.fotos}/>
            <h1>{props.titulo}</h1>
        </div>
    )
} 
export default Card;