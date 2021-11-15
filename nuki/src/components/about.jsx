import React from "react";

export default function About(props) {
    return (
        <section id="hello" className="border-bottom center-content">
            <div class="about">
                <h2>{props.data.title}</h2>
                <p>{props.data.content}</p>
            </div>
        </section>
    );
}
