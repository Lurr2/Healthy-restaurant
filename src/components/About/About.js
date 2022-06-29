import React from 'react';
import data from '../../data.json';
import AboutCard from '../common/card/AboutCard/AboutCard';
import classes from './About.module.scss';

const About = () => {

    return (
        <section className={classes.container}>
            <div className={classes.left}>
                <h4>Naglowek</h4>
                <p>Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future. Some dummy text for obtaining space in the future.</p>
            </div>
            <div className={classes.right}>
               {data.about.map(element => (
                <AboutCard 
                key={element.id}
                title={element.title}
                team={element.team}
                joinus={element.joinus}
                ethic={element.ethic}
                goals={element.goals}
                />
               ))}
            </div>
            
        </section>
    );
};

export default About;