import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    const scrollToSection = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="headContainer">
                <div className="logo">Лого</div>
                <nav className={`nav ${isMobile ? 'nav-mobile' : ''}`}>
                    <a href="#" target='_blank' onClick={(e) => scrollToSection('services', e)} className="nav-link">Услуги</a>
                    <a href="#" target='_blank' onClick={(e) => scrollToSection('about', e)} className="nav-link">О нас</a>
                    <a href="#" target='_blank' onClick={(e) => scrollToSection('pricing', e)} className="nav-link">Прайс</a>
                    <a href="#" target='_blank' onClick={(e) => scrollToSection('contact', e)} className="nav-link">Контакты</a>
                </nav>
                <div className="menu-icon" onClick={handleToggle}>
                    {isMobile ? <FaTimes/> : <FaBars/>}
                </div>
            </div>
        </header>
    )
        ;
};

export default Header;
