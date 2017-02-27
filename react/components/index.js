import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Portfolio = require('./portfolio');

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <main className="main">
                        <h3 className="intro animated slideInDown delay--1">Hello! My name is <span className="my-name">Tomas Stark</span> and I'm a freelance developer. My primary focus is WordPress and front-end.</h3>

                        <Portfolio />

                        <div className="cta-container">
                            <p><span>Like this?</span><Link to="/contact">I am available for hire!</Link></p>
                        </div>
                    </main>
                </div>
            </div>
        );
        }
}

module.exports = Index;
