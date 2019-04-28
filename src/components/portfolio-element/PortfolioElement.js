import React, { Component } from 'react';

import './portfolio-element.scss';


class PortfolioElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }

    render() {
        const data = this.props.data;
        return(
            <li>
                <div className="portfolio-element">
                    <div className="titlecard">
                        <h3>{data.title}</h3>
                        <span>{data.description}</span>
                    </div>
                    <div className="photo" style={{backgroundImage: `url(${data.img})`}}></div>
                </div>
            </li>
        )
    }
}

export default PortfolioElement;