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
                <div key={promo.id} onClick={() => {
                    handlePromoClick(promo.id)
                }}>
                <PromosCard
                
                details={promo.details}
                title={promo.title}
                image={promo.image}
                />
                </div>
            ))}
            
            </div>
            <div className={classes.right}>
            <h2>{activePromo.promo[0].title}</h2>
            <p>{activePromo.promo[0].details}</p>
            <p className={classes.line}>{activePromo.promo[0].price}$</p>
            <p>{Math.floor((activePromo.promo[0].price - (activePromo.promo[0].discount * activePromo.promo[0].price)) * 100) / 100}$</p>
            
            </div>
        </section>
    );
};

export default Promos;