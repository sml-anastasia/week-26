import React from 'react';
import './Hero.css';

function Hero(props) {
    return(
        <div className="hero-card">
            <h2>{props.name}</h2>
            <div className="hero-pic">
                <img src={props.pic} alt={props.alt} />
            </div>
            <div className="hero-info">
                <p><span className="sub-title">Вселенная: </span>{props.universe}</p>
                <p><span className="sub-title">Альтер-эго: </span>{props.alterEgo}</p>
                <p><span className="sub-title">Род деятельности: </span>{props.occupation}</p>
                <p><span className="sub-title">Друзья: </span>{props.friends}</p>
                <p><span className="sub-title">Суперсилы: </span>{props.powers}</p><br/><br/>
            </div>
            <div className="hero-descr">{props.description}</div>
        </div>
    );
}

export default Hero;