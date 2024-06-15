import React from 'react';
import './NewsTicker.css';

interface NewsTickerProps {
    headlines: string[];
}

const NewsTicker: React.FC<NewsTickerProps> = ({ headlines }) => {
    return (
        <div className="news-ticker">
            <div className="ticker-wrap">
                <div className="ticker">
                    {headlines.concat(headlines).concat(headlines).map((headline, index) => (
                        <div key={index} className="ticker-item">{headline}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
