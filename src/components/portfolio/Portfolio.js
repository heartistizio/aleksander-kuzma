import React, {Component} from 'react';
import PortfolioElement from '../portfolio-element/PortfolioElement';

import './portfolio.scss';

const portfolioItems = [
    {
        id: 0,
        title: 'First item',
        img: 'https://media.wired.com/photos/5b69f14e61743303b6869f09/master/w_582,c_limit/Stocks-642445090.jpg',
        description: 'I did something'
    },
    {
        id: 1,
        title: 'Second item',
        img: 'https://media.wired.com/photos/5b69f14e61743303b6869f09/master/w_582,c_limit/Stocks-642445090.jpg',
        description: 'I did something again'
    },
    {
        id: 2,
        title: 'FS Ranking',
        img: 'https://media.wired.com/photos/5b69f14e61743303b6869f09/master/w_582,c_limit/Stocks-642445090.jpg',
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
                <ul>
                    {portfolioItems.map( e => this.displayPortfolioElement(e))}
                </ul>
                </div>
            </section>
        )
    }
}

export default Portfolio;