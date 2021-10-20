import React from "react";

export default function About(props) {
    return (
        <section className="about">
            <h2>{props.data.title}</h2>
            <p>{props.data.content}</p>
        </section>
    );
}
