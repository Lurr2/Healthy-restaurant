import React from 'react';
import classes from './Card.module.scss';

const Card = ({PopularDishes}) => {
    
    return (
        <div className={classes.container}>
            <div>
                <img className={classes.picture} src={PopularDishes.image} alt='salad'/>
            </div>
            <div className={classes.text + ' ' + classes.testRed}>
                <h2>{PopularDishes.title}</h2>
                <p className={classes.space}>{PopularDishes.details}</p>
                <h4>{PopularDishes.price}</h4>
            </div>
        </div>
    );
};

export default Card;