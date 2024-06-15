import React from 'react';
import './AboutUs.css';

interface AboutUsProps {
    image: string;
    title: string;
    text: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ image, title, text }) => {
    return (
        <div className="about-us" id="about">
            <img src={image} alt="About Us" className="about-us-image" />
            <div className="about-us-content">
                <h2 className="about-us-title">{title}</h2>
                <p className="about-us-text">{text}</p>
            </div>
        </div>
    );
};

export default AboutUs;
