import React from 'react';
// import _ from 'lodash';

import myhead from '../../static/images/myhead.png'

export default class HeroHome extends React.Component {
    render() {
        return (
            <section id="hero" className="hero-home">
                <div className="box">
                    <div className="myhead">
                        <img src={myhead} alt="Illustration of the Ruan Aragão's head"/>
                    </div>
                    <div className="mydata">
                        <h1>Ruan Aragão</h1>
                        <h2>Full Metal Develop</h2>
                    </div>
                </div>
                <button className="btn-hero-down">
                    <svg width="248" height="50" viewBox="0 0 248 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M124.17 49.2423L1.66997 0L0.773254 0.442608L123.773 49.8859L124.17 49.6901L124.567 49.8859L247.567 0.442608L246.67 0L124.17 49.2423Z" fill="white"/>
                    </svg>
                    <span className="sr-only">Go to down</span>
                </button>

            </section>
        );
    }
}
