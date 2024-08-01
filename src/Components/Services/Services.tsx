import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Services.css';
import AliceCarousel from "react-alice-carousel";

interface Slide {
    image: string;
    title: string;
    text: string;
}

interface ServicesProps {
    slides: Slide[];
}

const Services: React.FC<ServicesProps> = ({ slides }) => {
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
            <h2 className="services-title">ХИТ ПРОДАЖ</h2>
            <div className="services" id="services">
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

export default Services;
