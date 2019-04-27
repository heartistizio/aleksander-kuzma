import React from 'react';

import './portfolio-element.scss';

const PortfolioElement = ({data}) => {
    return(
        <li>
            <div class="portfolio-element">
                <img src={data.img} alt={data.title}/>
                <h3>{data.title}</h3>
                <span>{data.description}</span>
            </div>
        </li>
    )
}

export default PortfolioElement;