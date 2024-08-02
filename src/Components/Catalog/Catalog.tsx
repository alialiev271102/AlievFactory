import React from "react";
import "./Catalog.css";

export interface ICart {
    image: string,
    hoverImage: string, // добавляем свойство для изображения при наведении
    text: string,
    price: number,
}

interface CatalogProps {
    items: ICart[];
}

const Catalog: React.FC<CatalogProps> = ({ items }) => {
    return (
        <div>
            <h2 className="catalog-title">Каталог</h2>
            <div className="catalog-container">
                {items.map((item: ICart, index) => (
                    <div className="catalog-cart" key={index}>
                        <div className="catalog-img-container">
                            <img src={item.image} alt={item.text} className="catalog-img"/>
                            <img src={item.hoverImage} alt={item.text} className="hover-img"/>
                        </div>
                        <div className="catalog-info">
                            <p className="catalog-info-text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
