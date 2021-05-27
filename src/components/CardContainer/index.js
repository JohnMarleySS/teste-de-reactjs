import React from 'react';
import './style.css'

import Card from '../Card';
import batima from '../../assets/batima.png';
import corridinha from '../../assets/corridinha.png';
import homepeixe from '../../assets/homepeixe.png';
import muiedelicia from '../../assets/muiedelicia.png';
import robocopgay from '../../assets/robocopgay.png';

const CardContainer = () => {
    return(
        <div id="container">
            <Card fotos={batima} titulo="Batima"/>
            <Card fotos={corridinha} titulo="Flasha mesmo"/>
            <Card fotos={homepeixe} titulo="Nemo"/>
            <Card fotos={muiedelicia} titulo="Maravilhosa"/>
            <Card fotos={robocopgay} titulo="Robocop"/>
        </div>
    )
} 
export default CardContainer;