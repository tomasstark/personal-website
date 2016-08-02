import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./bootstrap/header');
const Footer = require('./bootstrap/footer');

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header />

                <section className="contact">
                    <div className="container">
                        <header>
                            <h1>Let's talk</h1>

                            <p>My hourly rate is $80. Minimum hire is 5 hours.</p>
                        </header>

                        <form method="post" className="contact__form">

                        </form>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

module.exports = Contact;
