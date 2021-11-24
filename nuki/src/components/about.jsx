import React from "react";

export default function About(props) {
    return (
        <section id={props.link}>
            <div className="about">
                <strong className="kicker">{props.title}</strong>
                <div className="about__content grid-layout">
                    <h2 className="header--bullet">{props.data.title}</h2>
                    <p>{props.data.content}</p>
                </div>
            </div>
        </section>
    );
}
