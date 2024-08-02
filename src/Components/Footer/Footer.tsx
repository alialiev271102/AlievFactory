import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {FaMapMarkerAlt} from "react-icons/fa";

interface FooterProps {
    phoneNumberWhatsapp: string;
    phoneNumberTelegram: string;
    email: string;
    city: string;
    address: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumberWhatsapp, phoneNumberTelegram, email, city, address }) => {
    const whatsappLink = `https://wa.me/${phoneNumberWhatsapp}`;
    const telegramLink = `https://t.me/${phoneNumberTelegram}`;
    const mailtoLink = `mailto:${email}`;
    const mapsLink = `https://maps.app.goo.gl/wo8JoYi3jkDEQMwq9`;

    return (
        <footer className="footer" id='contact'>
            <div className="footer-info">
                <div className="footer-column">
                    <p>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-link">
                            <button className="contact-button whatsapp-button">
                                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                                <span>{phoneNumberWhatsapp}</span>
                            </button>
                        </a>
                    </p>
                    <p>
                        <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="social-link">
                            <button className="contact-button telegram-button">
                                <FontAwesomeIcon icon={faTelegram} className="icon" />
                                <span>{phoneNumberTelegram}</span>
                            </button>
                        </a>
                    </p>
                    <p>
                        <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="social-link">
                            <button className="contact-button gmail-button">
                                <FontAwesomeIcon icon={faGoogle} className="icon" />
                                <span>{email}</span>
                            </button>
                        </a>
                    </p>
                    <p>
                        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="social-link">
                            <button className="contact-button maps-button">
                                <FaMapMarkerAlt className="icon" />
                                <span>{address}, {city}</span>
                            </button>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
