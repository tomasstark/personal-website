import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./bootstrap/header');
const Footer = require('./bootstrap/footer');

let copy = require('../data/copy.json');

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
                        <section>
                            <h1>{copy.about.about_me.title}</h1>

                            <div dangerouslySetInnerHTML={{__html:copy.about.about_me.text}}></div>
                        </section>

                        <section>
                            <h1>{copy.about.tools.title}</h1>

                            <div dangerouslySetInnerHTML={{__html: copy.about.tools.text}}></div>
                        </section>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

module.exports = About;
