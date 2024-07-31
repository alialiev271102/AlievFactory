import React from 'react';
import './Hero.css';

interface HeroProps {
    image: string;
    title: string;
    subtitle: string;
    text: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, text }) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${image})` }}>
            <div className="overlay">
                <div className="hero-info-block">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-subtitle">{subtitle}</p>
                </div>
                <p className="hero-text">{text}</p>
            </div>
        </div>
    );
};

export default Hero;
