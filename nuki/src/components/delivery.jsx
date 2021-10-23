import React from "react";

export default function Delivery(props) {
    return (
        <section
            id="delivery"
            className="border-top border-bottom center-content"
        >
            <div class="delivery">
                <h2>{props.data.title}</h2>
                <h3>{props.data.subheader}</h3>
            </div>
        </section>
    );
}
