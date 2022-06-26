import React from 'react';
import classes from './OrderCard.module.scss';

const OrderCard = OrderList => {
    const OrderItem = OrderList.OrderList;
    return (
        <div className={classes.container}>
            <div className={classes.numberId}>
                {OrderItem.id}
            </div>
            <div className={classes.text}>
                <h2>{OrderItem.title}</h2>
                <p className={classes.space}>{OrderItem.text}</p>
            </div>
        </div>
    );
};

export default OrderCard;