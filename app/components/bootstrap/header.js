import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="grid">
                        <div className="col-2">
                            <h1 className="header__logo"><a href="/">Tomas<span className="easteregg-reverse"> </span>Stark<span className="easteregg">.rocks</span></a></h1>
                        </div>

                        <div className="col-3 push-right">
                            <Navigation />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

module.exports = Header;

class Navigation extends React.Component {
    render() {
        return (
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to={`/`} activeClassName="current">Work</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`about`} activeClassName="current">About</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`contact`} activeClassName="current">Contact</Link>
                </li>
            </ul>
        )
    }
}
