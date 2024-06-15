import React from 'react';
import './Hero.css';

interface HeroProps {
    image: string;
    title: string;
    subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle }) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${image})` }}>
            <div className="overlay">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default Hero;
