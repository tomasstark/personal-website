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

                <section className="static-page">
                    <div className="container">
                        <section className="static-page__section">
                            <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/12801474_852235878218699_1465856764035217813_n.jpg?oh=8382f84768705a98133616063f80251f&oe=58204D0D" alt="Tomas Stark" className="static-page__image--circle static-page__image--center" />

                            <h1>{copy.about.about_me.title}</h1>

                            <div dangerouslySetInnerHTML={{__html:copy.about.about_me.text}}></div>
                        </section>

                        <section className="static-page__section">
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
