import React from "react";

export default function Contact(props) {
    return (
        <section className="contact">
            <h2>Get in Touch</h2>
            <p>{props.data.address}</p>
        </section>
    );
}
