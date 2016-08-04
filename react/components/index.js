import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Portfolio = require('./portfolio');

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <main className="main">
                <h3 className="intro animated slideInDown delay--1">Hello! My name is <span className="my-name">Tomas Stark</span> and I am a developer. I turn designs into final product using cutting edge technologies. I specialize in JavaScript, React, Node.js, and WordPress.</h3>

                        <Portfolio />
                    </main>
                </div>
            </div>
        );
    }
}

module.exports = Index;
