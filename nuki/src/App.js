import React, {useEffect, useState} from "react";
import "./styles/app.scss";
import "./App.css";

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Menu from "./components/menu/menu";
import Delivery from "./components/delivery/delivery";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

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
            {isloading ? (
                "loading"
            ) : (
                <main>
                    <Header data={data.meta} />
                    <div class="container">
                        <Hero data={data.hero} />
                        <About data={data.about} />
                        <Menu data={data.menu} />
                        <Delivery data={data.delivery} />
                        <Contact data={data.contact} />
                    </div>
                    <Footer data={data.meta} social={data.social} />
                </main>
            )}
        </>
    );
}

export default App;
