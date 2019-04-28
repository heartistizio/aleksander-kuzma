import React, { Component } from 'react';

import './portfolio-element.scss';


class PortfolioElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }

    flipElement() {
        console.log("HERE");
    }
    render() {
        const data = this.props.data;
        return(
            <li>
                <div className="portfolio-element" onClick={() => this.flipElement()}>
                    {
                        this.state.clicked ?                         
                        <h3>{data.title}</h3> && <span>{data.description}</span>
                        :   
                        <img src={data.img} alt={data.title}/>
                    }
                </div>
            </li>
        )
    }
}

export default PortfolioElement;