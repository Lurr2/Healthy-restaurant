
import promo_1 from '../../img/promo_1.jpg';
import promo_2 from '../../img/promo_2.jpg';
import PromotionSlides from '../common/PromotionSlides/PromotionSlides';
const Promo = () => {
    const PROMODETAILS = [
        {id: '1', direction: 'left', title: 'Discount up to 50% All Menu', details: "Some dummy text for future important information.", image: promo_1},
        {id: '2', direction: 'right', title: "January's promo: Buy 1 Get 1 Free!!", details: "Some dummy text for future important information.", image: promo_2},
    ]
    return (
        <section> 
        {PROMODETAILS.map(promo => (
            <PromotionSlides 
                key={promo.id} 
                details={promo.details} 
                image={promo.image} 
                title={promo.title}
                direction={promo.direction}
                />
        ))}
            
            
        </section>
    )
};

export default Promo;