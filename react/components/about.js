import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./bootstrap/header');
const Footer = require('./bootstrap/footer');

let copy = require('../data/copy.json');

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // to fix the weird bug with animation on mobiles
        window.scroll(0, 0);
    }

    render() {
        return(
            <div>
                <Header />

                <main className="main">
                    <section className="static-page animated slideInUp">
                        <div className="container">
                            <section className="static-page__section">
                                <img src="/images/tomas-stark.jpg" alt="Tomas Stark" className="static-page__image--circle static-page__image--center" />

                                <h1>About me</h1>

                                <p>My name is Tomas Stark. People usually <em>call me Tom</em>. I’m freelance developer specializing in WordPress and front-end. I’ve been working with digital agencies for many years before turning full-time freelance, gaining experience working for clients worldwide.</p>

                                <p>Having worked with UX teams very closely, I have strong attention to detail and I’m always struggling on providing the best experience possible for every product I make.</p>

                                <p>I’m currently WordPress Engineer at <a href="http://thethemefoundry.com" target="_blank">The Theme Foundry</a>, working hard and shipping new features for <a href="https://thethemefoundry.com/wordpress-themes/make/" target="_blank">Make</a>.</p>

                                <p><Link to="/contact">Get in touch</Link> if any of the above interests you in any way.</p>
                            </section>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        )
    }
}

module.exports = About;
