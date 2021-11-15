import React from "react";

export default function Hero(props) {
    let images = [1, 2, 3];
    images = images.sort(() => Math.random() - 0.5);

    return (
        <section id="hero" className="hero">
            <div className="container">
                <h1>{props.data.header}</h1>
                <h2>{props.data.subheader}</h2>
            </div>
            <img
                src={`./images/background-${images[0]}.jpg`}
                alt={props.data.header}
            />
        </section>
    );
}
