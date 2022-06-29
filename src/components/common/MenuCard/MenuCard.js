import React from 'react';
import classes from './MenuCard.module.scss';


const MenuCard = ({price, image, title, details}) => {
    console.log({price});
    return (
        
        <div className={classes.container}>
            <img src={image} alt={title} />
            <div className={classes.details}>
            <h2>{title}</h2>
            <p>{details}</p>
            <h4>{price}$</h4>
            </div>
            
        </div>
    );
};

export default MenuCard;