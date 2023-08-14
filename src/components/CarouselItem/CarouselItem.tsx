import { PlantProduct } from '../../types/plant-product.type';
import './CarouselItem.css';

import { CSSProperties, FC, MouseEventHandler } from 'react';

interface CarouselItemProps {
    plant: PlantProduct;
    style?: CSSProperties;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const CarouselItem: FC<CarouselItemProps> = ({plant, style, onClick}) => {
    const { name, imagePath, price, rating, favourite, hint } = plant;

    // const [isCentered, setIsFavourite] = useState<boolean>(favourite);

    // function switchFavourite() {
    //     setIsFavourite(!isFavourite);
    //     plant.favourite = !plant.favourite;
    // }
 
    return (
        <li className='content-carousel-item' style={{...style}}>
            <div className="carousel-item-card" onClick={onClick}>
                <button 
                    className="carousel-item-save"><img 
                        src={favourite ? "/heart-filled-icon.svg" : "/heart-empty-icon.svg"}
                        style={!favourite ? {transform: `rotate(-5deg)`} : {transform: `translate(0, 0.05rem)`}}
                        alt="" />
                </button>
                <div className="carousel-item-image">
                    <img src={`/plants/${imagePath}`} alt={name} />
                </div>
                <p className="carousel-item-price">{`${price}`}</p>
                <p className="carousel-item-rating">
                    <img src="/star-icon.svg" alt="star" className="rating-image" />{rating}
                </p>
            </div>
            <div className="card-description">
                <h3 className="description-plant-name">{name}</h3>
                <p className="description-plant-hint">{hint}</p>
            </div>
        </li>
    );
};

export default CarouselItem;