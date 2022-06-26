import classes from './Promo.module.scss';
import promo_1 from '../../img/promo_1.jpg';
import promo_2 from '../../img/promo_2.jpg';
import Button from "../Button/Button";
const Promo = () => {
    return (
        <section>
            <div className={classes.container}>
                <div className={classes.imgSide}>
                    <img className={classes.imgs} src={promo_1} alt="promo" />
                </div>
                <div className={classes.textSide}>
                    <div className={classes.textSide_box}>
                        <h1 className={classes.textSide_box_h}>Discount up to 50% All Menu</h1>
                        <p className={classes.textSide_box_p}>Some dummy text for future important information
                            .Some dummy text for future important information.
                            Some dummy text for future important information.
                        </p>
                        <Button buttonText={`Show More!!`} />
                    </div>
                </div>
            </div>
            <div className={classes.container}>

                <div className={classes.textSide}>
                    <div className={classes.textSide_box}>
                        <h1 className={classes.textSide_box_h}>January's promo: Buy 1 Get 1 Free!!</h1>
                        <p className={classes.textSide_box_p}>Some dummy text for future important information
                            .Some dummy text for future important information.
                            Some dummy text for future important information.
                        </p>
                        <Button buttonText={`Show More!!`} />
                    </div>
                </div>
                <div className={classes.imgSide}>
                    <img className={classes.imgs} src={promo_2} alt="promo" />
                </div>
            </div>
        </section>
    )
};

export default Promo;