import React from "react";
import "./Services.css"

export interface IService {
    title: string,
    description: string,
}

interface IServicesProps {
    services: IService[];
}

const Services: React.FC<IServicesProps> = ({services}) => {
    return(
        <div>
            <h2 className="services-title">
                Наши услуги
            </h2>
            <div className="services">
                {services.map((service, index) => (
                    <div className="service-cart" key={index}>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-text">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Services;