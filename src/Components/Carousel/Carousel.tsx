import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';
import AliceCarousel from "react-alice-carousel";

interface Slide {
    image: string;
    title: string;
    text: string;
}

interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const items = slides.map((slide, index) => (
        <div key={index} className="slide">
            <div
                className="blur-background"
                style={{ backgroundImage: `url(${slide.image})` }}
            />
            <img src={slide.image} alt={slide.title} className="slide-image" />
        </div>
    ));

    return (
        <div>
            <h2 className="carousel-title">ХИТ ПРОДАЖ</h2>
            <div className="carousel" id="carousel">
                <div className="slider-section">
                    <AliceCarousel
                        items={items}
                        autoPlay
                        autoPlayInterval={10000}
                        infinite
                        disableDotsControls={false}
                        disableButtonsControls={true}
                        mouseTracking
                    />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
