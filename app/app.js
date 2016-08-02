import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./components/bootstrap/header');
const Footer = require('./components/bootstrap/footer');
const Index = require('./components/index');
const About = require('./components/about');
const Contact = require('./components/contact');
/* const NotFound = require('./components/notFound');*/

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Index />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App} />
        </Route>
        <Route path="about" component={About}>
            <IndexRoute component={About} />
        </Route>
        <Route path="contact" component={Contact}>
            <IndexRoute component={Contact} />
        </Route>
    </Router>
), document.getElementById('app'));
