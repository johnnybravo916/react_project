import React, {useEffect, useState} from "react";
import "./styles/app.scss";
import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Delivery from "./components/delivery";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
    const [isloading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        const navmenu = document.querySelector("nav");
        if (currentScrollPos > 100) {
            navmenu.style.display = "none";
        } else {
            navmenu.style.display = "block";
        }
    }

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
                    <Hero data={data.hero} />
                    <div class="container">
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
