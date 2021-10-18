import React from "react";

export default function Hero(props) {
    return (
        <section id="hero" className="hero">
            <h1>{props.data.header}</h1>
            <h2>{props.data.subheader}</h2>
        </section>
    );
}
