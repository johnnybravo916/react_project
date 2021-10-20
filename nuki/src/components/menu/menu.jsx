import React from "react";

export default function Menu(props) {
    return (
        <section>
            <div id="menu" className="menu">
                {Object.entries(props.data).map(([key, value]) => {
                    return (
                        <div className="menu__block">
                            <h3>{value.title}</h3>
                            <ul>
                                {Object.values(value.content).map((v, i) => {
                                    return (
                                        <li>
                                            <strong>{v.title}</strong>
                                            <span className="description">
                                                {v.description}
                                            </span>
                                            <span className="price">
                                                ${v.price}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
