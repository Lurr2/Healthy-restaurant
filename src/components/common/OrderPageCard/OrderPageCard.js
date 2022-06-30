import React from 'react';
import classes from './OrderPageCard.module.scss';

const OrderPageCard = ({ title, titleNum }) => {
    return (
        <div className={classes.container}>
            <div className={classes.titleNumber}>
                <p>{titleNum}</p>
            </div>
            <h2>{title}</h2>

        </div>
    );
};

export default OrderPageCard;