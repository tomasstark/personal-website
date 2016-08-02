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

                <section className="contact animated slideInRight">
                    <div className="container">
                        <header>
                            <h1 className="contact__title">Let's talk about your project</h1>

                            <p className="contact__disclaimer">My hourly rate is $80. Please note minimum project rate $400.</p>
                        </header>

                        <form method="post" className="contact__form contact-form">
                            <div className="grid">
                                <div className="col-6 contact-form__item">
                                    <label htmlFor="name">Your name</label>
                                    <input type="text" name="name" id="name" placeholder="John Doe" />
                                </div>
                                <div className="col-6 contact-form__item">
                                    <label htmlFor="email">E-mail address</label>
                                    <input type="email" name="email" id="email" placeholder="johndoe@example.com" />
                                </div>
                            </div>
                            <div className="contact-form__item">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder="Click here to start typing..."></textarea>
                            </div>
                            <div className="contact-form__item">
                                <input type="submit" value="Send message" />
                            </div>
                        </form>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

module.exports = Contact;
