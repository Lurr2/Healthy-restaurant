import React, { useState } from 'react';
import PromosCard from '../../common/PromosCard/PromosCard';
import classes from './Promos.module.scss';
import data from '../../../data.json';

const Promos = () => {
    const [activePromo, setUpPromo] = useState({
       promo: {0: data.promos[1]},
    })

    const handlePromoClick = (id) => {
        setUpPromo({promo: data.promos.filter(function (e)
            {
                return e.id === id
            })})

    }
   
    return (
        <section className={classes.promosContainer}>
            <div className={classes.left}>
            {data.promos.map(promo => (
                <PromosCard
                key={promo.id}
                id={promo.id}
                details={promo.details}
                title={promo.title}
                image={promo.image}
                eventClickFunction={handlePromoClick}
                />
            ))}
            
            </div>
            <div className={classes.right}>
            {activePromo.promo[0].title}
            
            </div>
        </section>
    );
};

export default Promos;