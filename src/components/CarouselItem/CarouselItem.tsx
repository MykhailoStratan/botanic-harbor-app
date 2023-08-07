import React from 'react';
import './CarouselItem.css';

interface PlantProduct {
    name: string;
    imagePath: string;
    price: string;
    rating: number;
    favourite: boolean;
    hint: string;
    type: string;
    preferences: {
        humidity: string;
        temperature: number;
        light: string;
        watering: string;
    };
}

const CarouselItem: React.FC<PlantProduct> = (props) => {
    const { name, imagePath, price, rating, favourite, hint } = props;
 
    return (
        <li className="content-carousel-item">
            <div className="carousel-item-card">
                <button className="carousel-item-save"><img src={favourite ? "/heart-filled-icon.svg" : "/heart-empty-icon.svg"} alt="" /></button>
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