import { Fragment } from 'react';
import classes from './Header.module.scss';

const Header = () => {


    return (
        <Fragment>
            <div className={classes.header}>
                <div className={classes.header_text_box}>
                    <h1 className={classes.heading_primary}>
                        <span className={classes.heading_primary_main}>Healthy Food </span>
                        <span className={classes.heading_primary_sub}>Restaurant</span>
                    </h1>
                    <p className={classes.par}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce lacinia tellus sed tellus sollicitudin, et auctor neque sodales. 
                    </p>
                </div>
            </div>
        </Fragment>
    );

};

export default Header;