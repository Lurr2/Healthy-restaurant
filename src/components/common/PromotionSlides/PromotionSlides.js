import React from 'react';
import classes from './PromotionSlides.module.scss';
import Button from '../../Button/Button';


const PromotionSlides = ({details, image, title, direction}) => {

if(direction === 'left') {
    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <img alt="gowno" src={image} />
            </div>
            <div className={classes.content}>
                <h2>{title}</h2>
                <p>{details}</p>
                <Button buttonText={`Show More!!`} />
            </div>
        </div>
        
    );
    }else{
        return (
        <div className={classes.container}>
        <div className={classes.content}>
            <h2>{title}</h2>
            <p>{details}</p>
            <Button buttonText={`Show More!!`} />
        </div>
        <div className={classes.picture}>
            <img alt="gowno" src={image} />
        </div>
    </div>
    
    );
    }
};

export default PromotionSlides;