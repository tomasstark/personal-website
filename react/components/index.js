import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Portfolio = require('./portfolio');

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <main className="main">
                        <h3 className="intro animated slideInDown delay--1">Hello! My name is <span className="my-name">Tomas</span> and I'm WordPress developer.</h3>

                        <Portfolio />

                        <div className="cta-container">
                            <p><span>Like this?</span><Link to="/contact">Get in touch</Link></p>
                        </div>
                    </main>
                </div>
            </div>
        );
        }
}

module.exports = Index;
