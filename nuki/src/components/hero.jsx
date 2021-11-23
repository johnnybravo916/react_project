import React from "react";
import Promo from "./promo";

export default function Hero(props) {
    let images = [1, 2, 3];
    images = images.sort(() => Math.random() - 0.5);

    return (
        <section id="hero" className="hero">
            <div className="container">
                <strong className="kicker">{props.data.kicker}</strong>
                <h1>{props.data.header}</h1>
                <h2>
                    {props.data.subheader}{" "}
                    <a
                        href={props.data.link}
                        title={props.data.link_content}
                        target="_blank"
                        rel="noreferrer"
                        className="hover"
                    >
                        {props.data.link_content}
                    </a>
                </h2>
                <Promo promo={props.promo} />
            </div>
            <img
                src={`./images/background-${images[0]}.jpg`}
                alt={props.data.header}
            />
        </section>
    );
}
