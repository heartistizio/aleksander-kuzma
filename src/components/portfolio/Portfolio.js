import React, {Component} from 'react';
import PortfolioElement from '../portfolio-element/PortfolioElement';

import './portfolio.scss';

const portfolioItems = [
    {
        id: 0,
        title: 'First item',
        img: '/assets/logo.jpg',
        description: 'I did something'
    },
    {
        id: 1,
        title: 'Second item',
        img: '/assets/logo.jpg',
        description: 'I did something again'
    },
    {
        id: 2,
        title: 'FS Ranking',
        img: '/assets/logo.jpg',
        description: 'I am gonna do something'
    }
]



class Portfolio extends Component {

    displayPortfolioElement(data) {
        return (
            <PortfolioElement key={data.id} data={data}/>
        )
    }

    render (){
        return(
            <section id="portfolio">
                <div className="portfolio">
                {portfolioItems.map( e => this.displayPortfolioElement(e))}
                </div>
            </section>
        )
    }
}

export default Portfolio;