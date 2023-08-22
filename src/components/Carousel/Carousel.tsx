import { Link } from 'react-router-dom';
import { PlantProduct } from '../../types/plant-product.type';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css';

import { FC, useState } from 'react';

const leftCardTransform = 'rotate(-10deg) translate(2rem, 0rem) scale(0.8)';
const rightCardTransform = 'rotate(10deg) translate(-2rem, 0rem) scale(0.8)';

const Carousel: FC<{ plants: PlantProduct[] }> = ({ plants }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    function slideLeft() {
        if (currentIndex === 0) {
            setCurrentIndex(plants.length-1);
            return;
        }
        setCurrentIndex(currentIndex-1);
    }

    function slideRight() {
        if (currentIndex === plants.length-1) {
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(currentIndex+1);
    }

    function openPreview() {
        console.log('preview opened');
    }

    return (
        <>
            <div className="content-carousel">
                <ul>
                    {currentIndex === 0
                        ? <>
                            <CarouselItem 
                                plant={plants[plants.length - 1]} 
                                style={{ transform: leftCardTransform}} 
                                onClick={slideLeft}/>
                            <Link to="/details">
                                <CarouselItem 
                                    plant={plants[currentIndex]} 
                                    onClick={openPreview}/>
                            </Link>
                            <CarouselItem 
                                plant={plants[currentIndex + 1]} 
                                style={{ transform: rightCardTransform }} 
                                onClick={slideRight}/>
                        </>
                        : currentIndex === plants.length-1
                            ? <>
                                <CarouselItem 
                                    plant={plants[currentIndex - 1]} 
                                    style={{ transform: leftCardTransform}} 
                                    onClick={slideLeft}/>
                                <Link to="/details">
                                    <CarouselItem 
                                        plant={plants[currentIndex]} 
                                        onClick={openPreview}/>
                                </Link>
                                <CarouselItem 
                                    plant={plants[0]} 
                                    style={{ transform: rightCardTransform}} 
                                    onClick={slideRight}/>

                            </>
                            : <>
                                <CarouselItem 
                                    plant={plants[currentIndex - 1]} 
                                    style={{ transform: leftCardTransform}} 
                                    onClick={slideLeft}/>
                                <Link to="/details">
                                    <CarouselItem 
                                        plant={plants[currentIndex]} 
                                        onClick={openPreview}/>
                                </Link>
                                <CarouselItem 
                                    plant={plants[currentIndex + 1]} 
                                    style={{ transform: rightCardTransform}} 
                                    onClick={slideRight}/>
                            </>
                    }
                    {/* {plants.map((plant, index) => {
                    return <CarouselItem {...plant} key={index + Date()} />
                })} */}
                </ul>

            </div>
            {/* <button onClick={slideLeft}>Prev</button>
            <button onClick={slideRight}>Next</button> */}
        </>

    );
};

export default Carousel;