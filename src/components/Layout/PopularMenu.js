
import classes from './PopularMenu.module.scss';
import Button from "../Button/Button";

import card_1 from '../../img/card_1.jpg';
import card_2 from '../../img/card_2.jpg';
import card_3 from '../../img/card_3.jpg';
import Card from '../common/card/Card';

const PopularMenu = () => {
    const popular = [
        {id: "1", title: `Salad`, details: `Some dummy text for obtaining space in the future`, price: '$14', image: card_1},
        {id: "2", title: `Salad`, details: `Some dummy text for obtaining space in the future`, price: '$8', image: card_2},
        {id: "3", title: `Salad`, details: `Some dummy text for obtaining space in the future`, price: '$10', image: card_3}
    ]

    return (

    <section className={classes.PopularMenu}>
        <div>
            <h1 className={classes.PopularMenu_heading}>Most popular choices</h1>
            <div className={classes.cardContainer}>
                {popular.map(someBestDish => (
                    <Card key={someBestDish.id} PopularDishes={someBestDish}/>
                ))}
            </div>

        </div>
        <Button buttonText ={`Show all menu`}/>
    </section>

    );

};



export default PopularMenu;