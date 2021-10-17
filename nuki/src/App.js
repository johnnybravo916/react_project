import React, {useEffect, useState} from "react";
import "./App.css";

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Menu from "./components/menu/menu";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
    const [isloading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

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
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <Header data={data.meta} loading={isloading}/>
            <Hero />
            <Menu />
            <About />
            <Contact />
        </>
    );
}

export default App;
