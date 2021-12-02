import React, {useState, useEffect} from "react";
import Promo from "./promo";
import {Transition} from "react-transition-group";

export default function Hero(props) {
    const [images, setImages] = useState();
    let imagesArray = [1, 2, 3];

    useEffect(() => {
        setImages(imagesArray.sort(() => Math.random() - 0.5));
    }, []);

    return (
        <section id={props.link} className="hero">
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
