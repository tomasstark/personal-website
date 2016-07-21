import React from 'react';
import DocumentMeta from 'react-document-meta';

const PortfolioItems = require('../data/portfolio.json');
const NotFound = require('./notFound');

class PortfolioDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    getItemInfo(item) {
        let data = PortfolioItems[item][0];

        return data;
    }

    render() {
        if (typeof this.props.params.itemName !== 'undefined') {
            const data = this.getItemInfo(this.props.params.itemName);

            const meta = {
                title: data.title
            };

            let clientLogoStyle = {
                width: data.client_logo._width,
                height: data.client_logo._height
            }

            return(
                <div>
                    <DocumentMeta {...meta} />

                    <Hero src={data.hero} />

                    <section className="container portfolio-detail__intro portfolio-intro">
                        <div className="grid">
                            <div className="col-2 portfolio-intro__logo">
                                <img src={"/img/portfolio/"+ data.client_logo.file} alt="" style={clientLogoStyle} />
                            </div>

                            <div className="col-10 portfolio-intro__text">
                                <h1 className="portfolio-detail__title">{data.title}</h1>

                                <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                            </div>
                        </div>
                    </section>

                    <Showcase color={data.colors.color_1} screenshot={data.screenshots.mac} type="mac" />
                    <Showcase color={data.colors.color_2} screenshot={data.screenshots.tablet} type="tablet" />
                    <Showcase color={data.colors.color_3} screenshot={data.screenshots.phone} type="phone" />
                </div>
            )
        } else {
            return (
                <div>
                    <NotFound />
                </div>
            )
        }
    }
}

class Hero extends React.Component {
    render() {
        let style = {
            backgroundImage: 'url(/img/portfolio/'+ this.props.src +')'
        }

        return (
            <div className="portfolio-detail__hero" style={style}></div>
        )
    }
}

class Showcase extends React.Component {
    render() {
        let style = {
            backgroundColor: this.props.color
        }

        return (
            <section className={"portfolio-detail__showcase portfolio-showcase portfolio-showcase--"+this.props.type} style={style}>
                <img src={this.props.screenshot} alt="" />
            </section>
        )
    }
}

module.exports = PortfolioDetail;
