import React from "react";
import logo from "../assets/icons/branding-large.png";
import Fade from "react-reveal/Fade";

export default function Contact(props) {
    return (
        <section id={props.link} className="contact">
            <div className="contact__branding">
                <Fade left>
                    <h2 className="header--bullet">{props.data.title}</h2>
                    <a href="/" className="branding" title={props.title}>
                        <img src={logo} alt={props.title} title={props.title} />
                        {props.title}
                    </a>
                </Fade>
            </div>
            <div className="contact__address">
                <Fade bottom>
                    <h3>{props.data.address_header}</h3>
                    <address>
                        <a
                            href={props.data.phone_link}
                            title={props.data.phone}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {props.data.phone}
                        </a>
                        <a
                            href={props.data.email_link}
                            title={props.data.email}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {props.data.email}
                        </a>
                        <a
                            href={props.data.address_link}
                            title={props.data.address}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {props.data.address}
                        </a>
                    </address>
                </Fade>
            </div>
            <div className="contact__hours">
                <Fade right>
                    <h3>{props.data.hours_header}</h3>
                    <ul>
                        {Object.entries(props.data.hours).map(([v, i]) => {
                            return (
                                <li key={i}>
                                    {i.day} - {i.time}
                                </li>
                            );
                        })}
                    </ul>
                </Fade>
            </div>
        </section>
    );
}
