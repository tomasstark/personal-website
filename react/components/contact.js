import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./bootstrap/header');
const Footer = require('./bootstrap/footer');

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailSent: false,
            emailSending: false
        }
    }

    sendMail(e) {
        e.preventDefault();

        var submitButton = document.getElementById('submit');

        if (submitButton) {
            submitButton.setAttribute('disabled', '');
            submitButton.value = 'Sending...';

            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var message = document.getElementById('message');

            if (name && email && message) {
                var http = new XMLHttpRequest();
                var params = 'name='+name.value+'&email='+email.value+'&message='+message.value;

                http.open('POST', '/contactme', true);
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                http.onreadystatechange = function() {
                    if (http.readyState === 4 && http.status === 200) {
                        submitButton.removeAttribute('disabled');
                        submitButton.className += ' sent';
                        submitButton.value = 'Sent! I will be in touch shortly :-)';

                        email.value = '';
                        name.value = '';
                        message.value = '';

                        setTimeout(function() {
                            submitButton.className = '';
                            submitButton.value = 'Send message';
                        }, 3500);
                    }
                };

                http.send(params);
            }
        }

        return false;
    }

    render() {
        return(
            <div>
                <Header />

                <main className="main">
                    <section className="contact animated slideInRight">
                        <div className="container">
                            <header>
                                <h1 className="contact__title">Let's talk about your project</h1>

                                <p className="contact__disclaimer">My hourly rate is $100. Please note minimum project rate $500.</p>
                            </header>

                            <form method="post" action="/contactme" className="contact__form contact-form" onSubmit={this.sendMail}>
                                <div className="grid">
                                    <div className="col-6 contact-form__item">
                                        <label htmlFor="name">Your name</label>
                                        <input type="text" name="name" id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="col-6 contact-form__item">
                                        <label htmlFor="email">E-mail address</label>
                                        <input type="email" name="email" id="email" placeholder="johndoe@example.com" required />
                                    </div>
                                </div>
                                <div className="contact-form__item">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" placeholder="Click here to start typing..." required></textarea>
                                </div>
                                <div className="contact-form__item">
                                    <input type="submit" id="submit" value="Send message" />
                                </div>
                            </form>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        )
    }
}

module.exports = Contact;
