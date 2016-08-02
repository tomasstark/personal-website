import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Portfolio = require('./portfolio');
const copy = require('../data/copy.json');

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <main className="main">
                        <h3 className="intro animated slideInDown delay--1">Hello! My name is <span className="my-name">Tomas Stark</span> and I am front end developer with passion for WordPress. You are very welcome to view my work below, <Link to="/about">read few lines about me</Link>, or <Link to="/contact">send me a message</Link>.</h3>

                        <Portfolio />
                    </main>
                </div>
            </div>
        );
    }
}

module.exports = Index;
