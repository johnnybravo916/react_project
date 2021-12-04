import React, {useState} from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import {v4 as uuid_v4} from "uuid";

export default function Menu(props) {
    const [currentTab, setCurrentTab] = useState("Starters");

    return (
        <section>
            <div id={props.link} className="menu">
                <Fade top>
                    <h2>{props.title}</h2>
                </Fade>
                <div className="menu__content grid-layout">
                    <div className="menu__nav">
                        <Slide left>
                            {Object.entries(props.data).map(([key, value]) => {
                                return (
                                    <button
                                        key={uuid_v4()}
                                        onClick={() =>
                                            setCurrentTab(value.title)
                                        }
                                        className={
                                            value.title === currentTab
                                                ? "active"
                                                : null
                                        }
                                    >
                                        <h3>{value.title}</h3>
                                    </button>
                                );
                            })}
                        </Slide>
                    </div>
                    <div className="menu__food">
                        {Object.entries(props.data).map(([key, value]) => {
                            return (
                                <div key={uuid_v4()} className="tab-content">
                                    <ul>
                                        {Object.values(value.content).map(
                                            (v, i) => {
                                                if (
                                                    value.title === currentTab
                                                ) {
                                                    return (
                                                        <Slide right>
                                                            <li key={uuid_v4()}>
                                                                <strong>
                                                                    {v.title}
                                                                </strong>
                                                                <span className="description">
                                                                    {
                                                                        v.description
                                                                    }
                                                                </span>
                                                                <span className="price">
                                                                    ${v.price}
                                                                </span>
                                                            </li>
                                                        </Slide>
                                                    );
                                                } else {
                                                    return null;
                                                }
                                            }
                                        )}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
