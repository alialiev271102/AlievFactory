import React from 'react';
import './Footer.css';

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
                    <p><strong>Whatsapp:</strong> <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{phoneNumberWhatsapp}</a></p>
                    <p><strong>Telegram:</strong> <a href={telegramLink} target="_blank" rel="noopener noreferrer">{phoneNumberTelegram}</a></p>
                    <p><strong>Почта:</strong> <a href={mailtoLink} target="_blank" rel="noopener noreferrer">{email}</a></p>
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
