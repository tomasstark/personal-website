import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navOpened: false,
            headerClass: 'header',
            hamburgerClass: ''
        };
    }

    openNavigation() {
        if (!this.state.navOpened) {
            this.setState({
                navOpened: true,
                headerClass: 'header opened',
                hamburgerClass: 'opened'
            });
        } else {
            this.setState({
                navOpened: false,
                headerClass: 'header',
                hamburgerClass: ''
            });
        }
    }

    render() {
        return (
            <header className={this.state.headerClass}>
                <div className="container">
                    <div className="grid">
                        <div className="col-2">
                            <h1 className="header__logo"><Link to="/">Tomas<span className="easteregg-reverse"> </span>Stark<span className="easteregg">.rocks</span></Link></h1>
                        </div>

                        <div className="col-3 push-right">
                            <Navigation />

                            <a className={this.state.hamburgerClass + " hamburger"} href="#" onClick={() => this.openNavigation()}></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

module.exports = Header;

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

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

/* module.exports = Navigation;*/
