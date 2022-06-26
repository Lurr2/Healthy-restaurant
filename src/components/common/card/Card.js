import React from 'react';
import classes from './Card.module.scss';

const Card = PopularDishes => {
    const bestDish = PopularDishes.PopularDishes;
    return (
        <div className={classes.container}>
            <div>
                <img className={classes.picture} src={bestDish.image} alt='salad'/>
            </div>
            <div className={classes.text}>
                <h2>{bestDish.title}</h2>
                <p className={classes.space}>{bestDish.details}</p>
                <h4>{bestDish.price}</h4>
            </div>
        </div>
    );
};

export default Card;