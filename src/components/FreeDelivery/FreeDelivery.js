import React from 'react';
import classes from './FreeDelivery.module.scss';
import Button from '../Button/Button';


const FreeDelivery = () => {

    return (
        <section className={classes.container}>
            <div className={classes.deliveryTextBox}>
                <h2 className={classes.title}>Free Delivery</h2>
                <p className={classes.text}>Some dummy text for obtaining space in the future.
                    Some dummy text for obtaining space in the future.
                    Some dummy text for obtaining space in the future.
                    Some dummy text for obtaining space in the future.</p>
                    <Button buttonText={`Show More!!`} />
            </div>
            
        </section>
    );
};

export default FreeDelivery;