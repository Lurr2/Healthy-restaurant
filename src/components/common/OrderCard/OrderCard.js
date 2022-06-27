import React from 'react';
import classes from './OrderCard.module.scss';

const OrderCard = ({id, title, text}) => {
    return (
        <div className={classes.container}>
            <div className={classes.numberId}>
               <span>{id}</span> 
            </div>
            <div className={classes.text}>
                <h2>{title}</h2>
                <p className={classes.space}>{text}</p>
            </div>
        </div>
    );
};

export default OrderCard;