import React from 'react';
import classes from './Menu.module.scss';
import data from '../../../data.json';
import MenuCard from '../../common/MenuCard/MenuCard';

const Menu = () => {
    return (
        <section className={classes.MenuContainer}>
           {data.menu.map(something => (
            <MenuCard 
            key={something.id}
            price={something.price}
            details={something.details}
            title={something.title}
            image={something.image}
            />
           ))}
        </section>
    );
};

export default Menu;