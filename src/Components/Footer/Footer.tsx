import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faMailchimp } from '@fortawesome/free-brands-svg-icons';

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

    return (
        <footer className="footer" id='contact'>
            <div className="footer-info">
                <div className="footer-column">
                    <p>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </p>
                    <p>
                        <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </p>
                    <p>
                        <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faMailchimp} />
                        </a>
                    </p>
                </div>
                <div className="footer-column">
                    <p><strong>Адрес:</strong> <a href="https://maps.app.goo.gl/wo8JoYi3jkDEQMwq9" target="_blank" rel="noopener noreferrer">{address}</a></p>
                    <p>{city}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
