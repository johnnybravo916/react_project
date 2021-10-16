import React, {useEffect, useState} from "react";

import Navigation from "../navigation/navigation";

export default function Header() {
    const [data, setData] = useState([]);

    function getData() {
        fetch("./data/data.json")
            .then((response) => {
                if (response.status !== 200) {
                    console.log(response.status);
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setData(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <header>
            {Object.entries(data).map(([key, value]) => {
                return (
                    <>
                        {value.map((d) => (
                            <a href="#" title={d.title}>
                                {d.title}
                            </a>
                        ))}
                    </>
                );
            })}
            <Navigation />
        </header>
    );
}
