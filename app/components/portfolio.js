import React from 'react';

const PortfolioItems = require('../data/portfolio.json');

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(function() {
            document.getElementsByClassName('portfolio')[0].className += ' animated fadeInUp';
        }, 500);
    }

    render() {
        return(
            <section className="portfolio">
                <div className="grid">
                    <PortfolioItem item="vw" cols="8" />
                    <PortfolioItem item="esso" cols="4" />
                </div>
                <div className="grid">
                    <PortfolioItem item="freelanceri" cols="4" />
                    <PortfolioItem item="friedman" cols="8" />
                </div>
                <div className="grid">
                    <PortfolioItem item="sachse" cols="8" />
                    <PortfolioItem item="lmb" cols="4" />
                </div>
            </section>
        )
    }
}

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }

    getItemInfo(item) {
        let data = PortfolioItems[item][0];

        return data;
    }

    render() {
        const data = this.getItemInfo(this.props.item);

        let style = {
            backgroundColor: data.bg.color,
            backgroundImage: 'url(img/portfolio/'+ data.bg.image +')',
            backgroundSize: data.bg.size,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: data.bg.position
        }

        return(
            <div className={"col-"+this.props.cols+" portfolio__item"} style={style}>
                <h1>{data.title}</h1>
            </div>
        )
    }
}

module.exports = Portfolio;
