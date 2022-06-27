import React from 'react';
import classes from './OrderCard.module.scss';

const OrderCard = ({OrderList}) => {
    return (
        <div className={classes.container}>
            <div className={classes.numberId}>
                {OrderList.id}
            </div>
            <div className={classes.text}>
                <h2>{OrderList.title}</h2>
                <p className={classes.space}>{OrderList.text}</p>
            </div>
        </div>
    );
};

export default OrderCard;