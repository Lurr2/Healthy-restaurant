import { Fragment } from "react";
import classes from './PopularMenu.module.scss';
import card_1 from '../../img/card_1.jpg';
import card_2 from '../../img/card_2.jpg';
import card_3 from '../../img/card_3.jpg';

const PopularMenu = () => {

    return (
<Fragment>
    <section className={classes.PopularMenu}>
        <div>
            <h1 className={classes.PopularMenu_heading}>Most popular choices</h1>
        </div>
    <div className={classes.PopularMenu_cardSpace}>
        <div className={classes.PopularMenu_card_content}>
            <img className={classes.PopularMenu_card_img} src={card_1} alt="noodle"/>
            <h2 className={classes.PopularMenu_card_title}>Noodle</h2>
            <p className={classes.PopularMenu_card_text}>pitu pitu na patiku tekst</p>
            <h4 className={classes.PopularMenu_card_text}>$ 14</h4>
        </div>
        <div className={classes.PopularMenu_card_content}>
            <img className={classes.PopularMenu_card_img} src={card_2} alt="noodle"/>
            <h2 className={classes.PopularMenu_card_title}>Noodle</h2>
            <p className={classes.PopularMenu_card_text}>pitu pitu na patiku tekst</p>
            <h4 className={classes.PopularMenu_card_text}>$ 14</h4>
        </div>
        <div className={classes.PopularMenu_card_content}>
            <img className={classes.PopularMenu_card_img} src={card_3} alt="noodle"/>
            <h2 className={classes.PopularMenu_card_title}>Noodle</h2>
            <p className={classes.PopularMenu_card_text}>pitu pitu na patiku tekst</p>
            <h4 className={classes.PopularMenu_card_text}>$ 14</h4>
        </div>
    </div>
    </section>
</Fragment>
    );

};



export default PopularMenu;