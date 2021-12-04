import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function About(props) {
    return (
        <section id={props.link}>
            <div className="about">
                <Fade top>
                    <strong className="kicker">{props.title}</strong>
                </Fade>
                <div className="about__content grid-layout">
                    <Slide left>
                        <h2 className="header--bullet">{props.data.title}</h2>
                    </Slide>
                    <Fade bottom>
                        <p>{props.data.content}</p>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
