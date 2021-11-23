import React from "react";

export default function Delivery(props) {
    return (
        <section id="delivery" className="center-content">
            <div class="delivery">
                <h2>{props.data.title}</h2>
                <h3>{props.data.subheader}</h3>
                <div>
                    <div>
                        {props.data.reservation_copy}
                        <a
                            href={props.data.opentable_link}
                            title={props.data.opentable}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {props.data.reservation_link_copy}
                        </a>
                    </div>
                    <div>
                        {props.data.delivery_copy}
                        <a
                            href={props.data.delivery_link}
                            title={props.data.delivery}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {props.data.delivery_link_copy}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
