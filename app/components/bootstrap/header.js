import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header grid">
                <div className="col-2">
                    <h1 className="header__logo"><a href="/">Tomas<span className="easteregg-reverse"> </span>Stark<span className="easteregg">.rocks</span></a></h1>
                </div>

                <div className="col-3 push-right">
                    <Navigation />
                </div>
            </header>
        )
    }
}

module.exports = Header;

class NavigationLink extends React.Component {
    render() {
        return (
            <li className="navigation__item"><a href={this.props.path}>{this.props.wording}</a></li>
        )
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <ul className="navigation">
                <NavigationLink path="/" wording="Work" />
                <NavigationLink path="/about" wording="About" />
                <NavigationLink path="/contact" wording="Contact" />
            </ul>
        )
    }
}
