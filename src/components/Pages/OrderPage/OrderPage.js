import React, { useState } from 'react';
import OrderPageCard from '../../common/OrderPageCard/OrderPageCard';
import classes from './OrderPage.module.scss';
import data from '../../../data.json';
import Button from '../../Button/Button';


const OrderPage = () => {

    const [activeOrder, setUpOrder] = useState({
        order: { 0: data.orders[0] },
    })

    const handleOrderClick = (id) => {
        setUpOrder({
            order: data.orders.filter(function (a) {
                return a.id === id
            })
        })

    }

    return (
        <section className={classes.container}>
            <div className={classes.leftSide}>

                {data.orders.map(order => (
                    
                        <OrderPageCard
                            key={order.id}
                            id={order.id}
                            func={handleOrderClick}
                            titleNum={order.titleNum}
                            title={order.title}
                        />
                   
                ))}
            </div>
            <div className={classes.rightSide}>
                {activeOrder.order[0].id === "3" 
                    ? 
                    <Button buttonText={`Order Now!!!`} />
                    : <div><h2 className={classes.title}>{activeOrder.order[0].title}</h2>
                        <p className={classes.details}>{activeOrder.order[0].details}</p></div>
                }
            </div>

        </section>
    );
};

export default OrderPage;