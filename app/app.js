import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const Header = require('./components/bootstrap/header');
const Footer = require('./components/bootstrap/footer');
const Index = require('./components/index');
const PortfolioDetail = require('./components/portfolioDetail');
const NotFound = require('./components/notFound');

const Container = (props) => <div>
    <Header />
    {props.children}
    <Footer />
</div>

class App extends React.Component {
    render() {
        return (
            <div>
                <Index />
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <IndexRoute component={App} />
            <Route path="work/:itemName" component={PortfolioDetail} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
), document.getElementById('app'));
