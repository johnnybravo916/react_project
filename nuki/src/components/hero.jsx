import React from "react";
import background from "../assets/images/background.jpg";

export default function Hero(props) {
    return (
        <section id="hero" className="hero"  style={{ backgroundImage: `url(${background})` }}>
            <div>
                <h1>{props.data.header}</h1>
                <h2>{props.data.subheader}</h2>
            </div>
        </section>
    );
}
