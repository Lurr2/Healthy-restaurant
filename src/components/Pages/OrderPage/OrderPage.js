import React, { useState } from 'react';
import OrderPageCard from '../../common/OrderPageCard/OrderPageCard';
import classes from './OrderPage.module.scss';
import data from '../../../data.json';


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
                    <div key={order.id} onClick={() => {
                        handleOrderClick(order.id)
                    }}>
                        <OrderPageCard

                            details={order.details}
                            titleNum={order.titleNum}
                            title={order.title}
                        />
                    </div>
    ))}
            </div>
            <div className={classes.rightSide}>
                <h2 className={classes.title}>{activeOrder.order[0].title}</h2>
                <p className={classes.details}>{activeOrder.order[0].details}</p>

            </div>

        </section>
    );
};

export default OrderPage;