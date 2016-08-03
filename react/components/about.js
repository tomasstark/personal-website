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

                                <p>My name is Tomas Stark and people usually <em>call me Tom</em>. I am a freelance developer who specializes in turning beautifully designed user interfaces into working product. I have been working with UI designers very closely during my career and I am applying knowledge gained through years of this collaboration to clients projects every day.</p>

                    <p>My primary focus is doing front end development using the most popular technologies such as <em>React, Redux, Node.js</em>, or making crazy (or normal) <em>CSS stuff</em>. That is it for the buzz words section :-). <em>WordPress</em> is my passion too and you can find some examples to prove it in <Link to="/">Work</Link> section of this website. I developed a lot of custom themes and plugins, and I have been working with the WordPress platform from <em>version 2.0</em>.</p>

                                <p>Writing the code isn't always the difficult part of the job. But writing the code that is both beautiful and efficient can be really challenging. If you are an individual or a company looking for a new pair of eyes to go through your code and highlight those weak spots of your application, <Link to="/contact">let's talk about it</Link>. I did a lot of reviews in past and was working as a consultant too.</p>

                                <p>I did not always freelance. I worked couple of agency jobs before, the most recent one being Tribal Worldwide where I was a senior front end developer and a leader of local development team for almost 2 years.</p>

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
