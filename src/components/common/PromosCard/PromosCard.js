import React from 'react';
import classes from './PromosCard.module.scss'

const PromosCard = ({ price, title, details, image }) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="some" />

            <div className={classes.content}>
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default PromosCard;