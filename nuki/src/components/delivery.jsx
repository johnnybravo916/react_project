import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function Delivery(props) {
    return (
        <section
            id={props.link}
            className="delivery border-top border-bottom grid-layout"
        >
            <Slide left>
                <h2 className="header--bullet">
                    {props.data.first_title}
                    <br />
                    {props.data.second_title}
                </h2>
            </Slide>
            <div className="delivery__content">
                <Fade bottom>
                    <p>
                        {props.data.reservation_copy}{" "}
                        <a
                            href={props.data.opentable_link}
                            title={props.data.opentable}
                            target="_blank"
                            rel="noreferrer"
                            className="hover"
                        >
                            {props.data.reservation_link_copy}
                        </a>
                    </p>
                    <p>
                        {props.data.delivery_copy}{" "}
                        <a
                            href={props.data.delivery_link}
                            title={props.data.delivery}
                            target="_blank"
                            rel="noreferrer"
                            className="hover"
                        >
                            {props.data.delivery_link_copy}
                        </a>
                    </p>
                </Fade>
            </div>
        </section>
    );
}
