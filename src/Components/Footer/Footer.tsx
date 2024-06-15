import React from 'react';
import './Footer.css';

interface FooterProps {
    phoneNumber: string;
    email: string;
    city: string;
    address: string;
    postalCode: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber, email, city, address, postalCode }) => {
    return (
        <footer className="footer" id='contact'>
            <div className="footer-info">
                <div className="footer-column">
                    <p><strong>Номер:</strong> {phoneNumber}</p>
                    <p><strong>Почта:</strong> {email}</p>
                    <p><strong>Город:</strong> {city}</p>
                </div>
                <div className="footer-column">
                    <p><strong>Адрес:</strong> {address}</p>
                    <p><strong>Почтовый индекс:</strong> {postalCode}</p>
                </div>
            </div>
            <div className="footer-social">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
