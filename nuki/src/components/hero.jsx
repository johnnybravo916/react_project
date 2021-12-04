import React from "react";
import Promo from "./promo";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
    return (
        <section id={props.link} className="hero">
            <div className="container">
                <Slide left cascade>
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
                </Slide>
            </div>
            <Fade bottom>
                <img
                    src={`./images/background-${props.image[0]}.jpg`}
                    alt={props.data.header}
                />
            </Fade>
        </section>
    );
}
