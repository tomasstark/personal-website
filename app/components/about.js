import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./bootstrap/header');
const Footer = require('./bootstrap/footer');

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header />

                <section className="static">
                    <div className="container">
                        <div className="grid"></div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

module.exports = About;
