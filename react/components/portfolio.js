import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

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
            backgroundImage: 'url(/images/portfolio/'+ data.bg.image +')',
            backgroundSize: data.bg.size,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: data.bg.position
        }

        var extraClass = '';

        if (!data.wide) {
            extraClass = ' narrow';
        }

        let logoStyle = {
            width: data.logo._width,
            height: data.logo._height,
            backgroundImage: 'url(/images/portfolio/'+ data.logo.file +')',
            backgroundSize: ''+data.logo._width+' '+data.logo._height,
            top: data.logo._top
        };

        return(
            <div className={"col-"+this.props.cols+" portfolio__item portfolio-item "+data.class_name+""+extraClass} style={style}>
                <div className="portfolio-item__logo-wrap">
                    <div className={data.logo.effect +" portfolio-item__logo animated"} style={logoStyle}></div>
                </div>
                <div className="portfolio-item__stripe">
                    <h1 className="portfolio-item__title animated fadeIn">{data.title}</h1>

                    <ul className="portfolio-item__details">
                        <li>Client: {data.client}</li>
                        <li>Technologies: {data.technologies}</li>
                    </ul>

                    <p className="portfolio-item__description" dangerouslySetInnerHTML={{__html: data.stripe_description}}></p>

                    <Link to={data.link} className="portfolio-item__button" target="_blank">Go to website</Link>
                </div>
            </div>
        );
    }
}

module.exports = Portfolio;
