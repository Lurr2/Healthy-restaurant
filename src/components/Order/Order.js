import classes from './Order.module.scss';
import OrderCard from '../common/OrderCard/OrderCard';

const Order = () => {
    const OrderData = [
        {id: `01`, title: `Order`, text: `Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future.Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future.`},
        {id: `02`, title: `Choose Menu`, text: `Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future.Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future.`},
        {id: `03`, title: `Delivery`, text: `Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future.Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future.`}
    ]

    return (

    <section className={classes.container}>
        <div>
            <h1 className={classes.container_heading}>Most popular choices</h1>
            <div className={classes.OrdercardContainer}>
                {OrderData.map(someOrder => (
                    <OrderCard OrderList={someOrder}/>
                ))}
            </div>

        </div>

    </section>

    );

};



export default Order;