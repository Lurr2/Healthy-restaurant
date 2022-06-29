import React from 'react';
import PromosCard from '../../common/PromosCard/PromosCard';
import classes from './Promos.module.scss';
import data from '../../../data.json';

const Promos = () => {
    return (
        <section className={classes.promosContainer}>
            <div className={classes.left}>
            {data.promos.map(promo => (
                <PromosCard
                key={promo.id}
                price={promo.price}
                details={promo.details}
                title={promo.title}
                image={promo.image}
                />
            ))}
            
            </div>
            <div className={classes.right}>
            Tutaj bedzie potem tekstus
            
            </div>
        </section>
    );
};

export default Promos;