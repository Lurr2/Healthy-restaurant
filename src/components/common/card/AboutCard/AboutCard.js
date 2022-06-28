import React from 'react';
import classes from './AboutCard.module.scss';

const AboutCard = ({ title, text, team, join, ethic, goals }) => {
    return (
        <section className={classes.container}>
            <div className={classes.left_side}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className={classes.right_side}>
                <div className={classes.column}>
                <h4>{title}</h4>
                <ul>
                    <li>{team}</li>
                    <li>{join}</li>
                    <li>{ethic}</li>
                    <li>{goals}</li>
                </ul>
                </div>
            
            </div>

        </section>
    );
};

export default AboutCard;