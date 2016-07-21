import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <header className="header grid">
                    <div className="col-2">
                        <h1 className="header__logo"><a href="/">Tomas<span className="easteregg-reverse"> </span>Stark<span className="easteregg">.rocks</span></a></h1>
                    </div>

                    <div className="col-3 push-right">
                        <Navigation />
                    </div>
                </header>
            </div>
        )
    }
}

module.exports = Header;

class Navigation extends React.Component {
    render() {
        return (
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to={`/`}>Work</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`/`}>About</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`/`}>Contact</Link>
                </li>
            </ul>
        )
    }
}
