import React from "react";

export default function Contact(props) {
    return (
        <section id="contact" className="border-top">
            <h2>{props.data.title}</h2>
            <div className="contact">
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
                <div className="contact__hours">
                    <h3>{props.data.subheader}</h3>
                    <ul>
                        {Object.entries(props.data.hours).map(([v, i]) => {
                            return (
                                <li>
                                    {i.day} - {i.time}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
