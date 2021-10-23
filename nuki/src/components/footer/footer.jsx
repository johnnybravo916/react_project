import React from "react";

function Footer(props) {
    const y = new Date();
    let year = y.getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="copyright">
                    &copy; {year}
                    <a href="/" title={props.data.title}>
                        {props.data.title}
                    </a>
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <a
                                href={props.social.facebook}
                                title="Like us on Facebook"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href={props.social.instagram}
                                title="Follow us on Instagram"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
