import React from 'react';

import "./about.scss";

const About = (props) => {
    return (
        <section id="about">
             <div className="about">
                <div className="description">
                    <h2>About me</h2>
                    <img src="../../../assets/pablo.png" alt="portrait"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. </p>
                </div>
          </div>
        </section>
    )
}

export default About;