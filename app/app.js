import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./components/bootstrap/header');
const Portfolio = require('./components/portfolio');
const Footer = require('./components/bootstrap/footer');

const copy = require('./data/copy.json');

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header />

                    <main className="main">
                        <h3 className="intro">{copy.intro}</h3>
                        <Portfolio />
                    </main>
                </div>

                <Footer />
            </div>
        )
    }
}

const Container = (props) => <div>
    {props.children}
</div>

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <IndexRoute component={App} />
        </Route>
    </Router>
), document.getElementById('app'));
