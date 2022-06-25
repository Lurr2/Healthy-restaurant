import { Fragment } from 'react';
import classes from './Header.module.scss';

const Header = () => {
    

    return (
        <Fragment>
        <div className={classes.header}>
            <h1>Restaurant with healthy food</h1>
            <p>The only food that boost your health</p>
         </div>
        </Fragment>
    );

};

export default Header;