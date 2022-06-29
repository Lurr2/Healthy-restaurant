import React from 'react';
import classes from './PromosCard.module.scss';

const PromosCard = ({id, eventClickFunction, title, details, image }) => {
    const CardClick = () => {
        return eventClickFunction(id)
    }
    return (
        <div onClick={CardClick} className={classes.container}>
            <img src={image} alt="some" />

            <div className={classes.content}>
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default PromosCard;