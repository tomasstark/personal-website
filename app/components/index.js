import React from 'react';

const Portfolio = require('./portfolio');
const copy = require('../data/copy.json');

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <main className="main">
                        <h3 className="intro">{copy.intro}</h3>
                        
                        <Portfolio />
                    </main>
                </div>
            </div>
        )
    }
}

module.exports = Index;
