import './styles.css';
import { ReactComponent as CarImage } from "assets/images/car-image.svg";
import ButtonBuy from 'components/BtnBuy';


function ProductCard() {
    return (
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <CarImage />
            </div>
            <div className='card-bottom-container'>
                <h6>Audi Supra TT</h6>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</i></p>
                <ButtonBuy />
            </div>
        </div>
    );
}

export default ProductCard;