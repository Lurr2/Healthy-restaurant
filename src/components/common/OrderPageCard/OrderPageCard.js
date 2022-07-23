import React from 'react';
import classes from './OrderPageCard.module.scss';

const OrderPageCard = ({ id, func, title, titleNum }) => {
    const tableClick = () => {
        func(id)
    }

    return (
        <div onClick={tableClick} className={classes.container}>
            <div className={classes.titleNumber}>
                <p>{titleNum}</p>
            </div>
            <h2>{title}</h2>

        </div>
    );
};

export default OrderPageCard;