import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Services.css';

interface Slide {
    image: string;
    title: string;
    text: string;
}

interface Product {
    image: string;
    title: string;
    description: string;
}

interface ServicesProps {
    slides: Slide[];
    products: Product[];
}

const Services: React.FC<ServicesProps> = ({ slides, products }) => {
    const items = slides.map((slide, index) => (
        <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-text">{slide.text}</p>
            </div>
        </div>
    ));

    return (
        <div className="services" id="services">
            {/*<div className="slider-section">*/}
            {/*    <AliceCarousel*/}
            {/*        items={items}*/}
            {/*        autoPlay*/}
            {/*        autoPlayInterval={10000}*/}
            {/*        infinite*/}
            {/*        disableDotsControls={false}*/}
            {/*        disableButtonsControls={true}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="products-section">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-content">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-description">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
