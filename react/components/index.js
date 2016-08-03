import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Portfolio = require('./portfolio');

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <main className="main">
                <h3 className="intro animated slideInDown delay--1">Hello! My name is <span className="my-name">Tomas Stark</span> and I am a developer. I specialize in front end and can make your design come true or code review your app. Previously I did a lot of WordPress development.</h3>

                        <Portfolio />
                    </main>
                </div>
            </div>
        );
    }
}

module.exports = Index;
