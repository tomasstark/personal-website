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

                <main className="main">
                    <section className="static-page animated slideInUp">
                        <div className="container">
                            <section className="static-page__section">
                                <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/12801474_852235878218699_1465856764035217813_n.jpg?oh=8382f84768705a98133616063f80251f&oe=58204D0D" alt="Tomas Stark" className="static-page__image--circle static-page__image--center" />

                                <h1>About me</h1>

                                <p>My name is Tomas Stark and people usually <em>call me Tom</em>. I am a freelance developer who specializes in front-end, turning designs into final product using cutting edge technologies. I have been working with teams of UX and UI designers very closely during my career and I am applying knowledge gained through years of this collaboration to clients’ projects every day.</p>

                                <p>My primary focus is front end development using the most popular technologies such as <em>React, Redux, Node.js</em>, making crazy (or normal) <em>CSS stuff</em>, or developing complex <em>WordPress</em> themes and plugins. I have been working with the WordPress platform since <em>version 2.0</em>. So much for the buzz words section :-)</p>

                                <p>Writing the code that is both beautiful and efficient can be really challenging most of the time and it is very clever to have a fresh pair of eyes look into your code. If you are an individual or a company looking for somebody to highlight those weak spots of your application, <Link to="/contact">let's talk about it</Link>. I did a lot of reviews in the past and was working as a consultant for both startups and corporations.</p>

                                <p>I was not always a freelancer. I worked couple of agency jobs before for years, the most recent one being Tribal Worldwide where I was a senior front end developer and a leader of local development team for almost 2 years.</p>

                                <p>Sounds convincing? I am currently available for new projects. <Link to="/contact">Hire me!</Link></p>
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
