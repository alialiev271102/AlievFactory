import React from "react";
import "./Catalog.css";

export interface ICart {
    image: string,
    text: string,
    price: number,
}

interface CatalogProps {
    items: ICart[];
}

const Catalog: React.FC<CatalogProps> = ({ items }) => {
    return (
        <div className="catalog-container">
            {items.map((item: ICart) => (
                <div className="catalog-cart" key={item.text}>
                    <div className="catalog-img-container">
                        <img src={item.image} alt={item.text} />
                    </div>
                    <div className="catalog-info">
                        <p className="catalog-info-text">{item.text}</p>
                        <span className="catalog-info-price">{item.price} сом.</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Catalog;
