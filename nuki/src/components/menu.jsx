import React, {useState} from "react";

export default function Menu(props) {
    const [currentTab, setCurrentTab] = useState("Starters");

    return (
        <section>
            <div id="menu" className="menu">
                {Object.entries(props.data).map(([key, value]) => {
                    return (
                        <>
                            <div className="menu__block">
                                <div className="tabs">
                                    <button
                                        onClick={() =>
                                            setCurrentTab(value.title)
                                        }
                                    >
                                        <h3
                                            className={
                                                value.title === currentTab
                                                    ? "test"
                                                    : null
                                            }
                                        >
                                            {value.title}
                                        </h3>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="tab-content">
                                    <ul>
                                        {Object.values(value.content).map(
                                            (v, i) => {
                                                if (
                                                    value.title === currentTab
                                                ) {
                                                    return (
                                                        <li>
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
                            </div>
                        </>
                    );
                })}
            </div>
        </section>
    );
}
