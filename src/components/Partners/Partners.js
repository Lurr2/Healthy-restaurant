import React from 'react';
import classes from './Partners.module.scss';
import { ImQuotesLeft } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Partners = () => {
    return (
        <section className={classes.container}>
            <div className={classes.icon}>< ImQuotesLeft /></div>
            <div className={classes.textbox}>
                
                <p className={classes.text}>Some dummy text for obtaining space in the future.
                    Some dummy text for obtaining space in the future.
                    Some dummy text for obtaining space in the future.
                    Some dummy text for obtaining space in the future.</p>
                    <h2 className={classes.title}>Partners</h2>
                    <div className={classes.icons}><BsFacebook/><AiFillTwitterCircle/><AiFillInstagram/></div>
            </div>
        </section>
    );
};

export default Partners;