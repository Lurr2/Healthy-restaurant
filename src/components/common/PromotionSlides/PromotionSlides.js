import React from 'react';
import classes from './PromotionSlides.module.scss';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';


const PromotionSlides = ({details, image, title, direction}) => {

if(direction === 'left') {
    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <img alt="something" src={image} />
            </div>
            <div className={classes.content}>
                <h2>{title}</h2>
                <p>{details}</p>
                <Link to="/promos">
                <Button buttonText={`Show More!!`} />
                </Link>
            </div>
        </div>
        
    );
    }else{
        return (
        <div className={classes.container}>
        <div className={classes.content}>
            <h2>{title}</h2>
            <p>{details}</p>
            <Link to="/promos">
            <Button buttonText={`Show More!!`} />
            </Link>
        </div>
        <div className={classes.picture}>
            <img alt="something" src={image} />
        </div>
    </div>
    
    );
    }
};

export default PromotionSlides;