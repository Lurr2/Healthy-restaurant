import React from 'react';
import classes from './AboutCard.module.scss';

const AboutCard = ({  title, team, joinus, ethic, goals }) => {
    return (
        <div className={classes.container}>
            <h4>{title}</h4>
            <ul>
            <li>{team}</li>
            <li>{joinus}</li>
            <li>{ethic}</li>
            <li>{goals}</li>
            </ul>
        
        </div>
    );
};

export default AboutCard;