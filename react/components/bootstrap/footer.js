import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="grid">
                        <div className="col-1">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

class SocialIcons extends React.Component {
    render() {
        return (
            <ul className="social-icons">
                <li className="social-icons__icon social-icons__icon--github"><a href="https://github.com/tomasstark" target="_blank">Github</a></li>
                <li className="social-icons__icon social-icons__icon--twitter"><a href="https://twitter.com/tomasstark" target="_blank">Twitter</a></li>
                <li className="social-icons__icon social-icons__icon--fb"><a href="https://www.facebook.com/stark.tomas" target="_blank">Facebook</a></li>
            </ul>
        )
    }
}

module.exports = Footer;
