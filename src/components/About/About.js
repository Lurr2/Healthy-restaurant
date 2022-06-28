import React from 'react';
import data from '../../data.json';
import AboutCard from '../common/card/AboutCard/AboutCard';

const About = () => {

    return (
        <section>
            {data.map(AboutData => (
                <AboutCard 
                key={AboutData.id}
                text={AboutData.text}
                title={AboutData.title}
                team={AboutData.team}
                join={AboutData.join}
                ethic={AboutData.ethic}
                goals={AboutData.goals}
                />
            ))}
            
            
        </section>
    );
};

export default About;