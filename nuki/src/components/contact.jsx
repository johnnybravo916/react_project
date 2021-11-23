import React from "react";
import logo from "../assets/icons/branding-large.png";

export default function Contact(props) {
    return (
        <section id="contact" className="contact">
            <div className="contact__branding">
                <h2 className="header--bullet">{props.data.title}</h2>
                <a href="/" className="branding" title={props.title}>
                    <img src={logo} alt={props.title} title={props.title} />
                    {props.title}
                </a>
            </div>
            <div className="contact__address">
                <h3>{props.data.address_header}</h3>
                <address>
                    <a href={props.data.phone_link} title={props.data.phone}>
                        {props.data.phone}
                    </a>
                    <a href={props.data.email_link} title={props.data.email}>
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
            </div>
            <div className="contact__hours">
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
            </div>
        </section>
    );
}
