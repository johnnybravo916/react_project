import React, {useState} from "react";

export default function Menu(props) {
    const [currentTab, setCurrentTab] = useState("Starters");

    return (
        <section>
            <div id="menu" className="menu">
                <h2>{props.title}</h2>
                <div className="menu__content">
                    <div className="menu__nav">
                        {Object.entries(props.data).map(([key, value]) => {
                            return (
                                <button
                                    key={key}
                                    onClick={() => setCurrentTab(value.title)}
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
                    </div>
                    <div className="menu__food">
                        {Object.entries(props.data).map(([key, value]) => {
                            return (
                                <div key={key} className="tab-content">
                                    <ul>
                                        {Object.values(value.content).map(
                                            (v, i) => {
                                                if (
                                                    value.title === currentTab
                                                ) {
                                                    return (
                                                        <li key={i}>
                                                            <strong>
                                                                {v.title}
                                                            </strong>
                                                            <span className="description">
                                                                {v.description}
                                                            </span>
                                                            <span className="price">
                                                                ${v.price}
                                                            </span>
                                                        </li>
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
