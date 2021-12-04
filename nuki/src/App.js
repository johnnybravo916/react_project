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
import Cursor from "./components/cursor";
import branding from "./assets/icons/branding-large.png";

function App() {
    const [isloading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const [images, setImages] = useState();
    let imagesArray = [1, 2, 3];

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
        setImages(imagesArray.sort(() => Math.random() - 0.5));
    }, []);

    return (
        <>
            {isloading ? (
                <div className="loading">
                    <div>
                        <strong>Loading...</strong>
                        <img src={branding} alt="Nuki Sushi Restaurant"></img>
                    </div>
                </div>
            ) : (
                <main>
                    <Header data={data.meta} nav={data.navigation} />
                    <Hero
                        data={data.hero}
                        promo={data.promo}
                        link={data.navigation.menu[0].link}
                        image={images}
                    />
                    <div class="container">
                        <About
                            data={data.about}
                            title={data.meta.title}
                            link={data.navigation.menu[1].link}
                        />
                        <Menu
                            data={data.menu}
                            title={data.menu_title}
                            link={data.navigation.menu[2].link}
                        />
                        <Delivery
                            data={data.delivery}
                            link={data.navigation.menu[3].link}
                        />
                        <Contact
                            data={data.contact}
                            title={data.meta.title}
                            link={data.navigation.menu[4].link}
                        />
                    </div>
                    <Footer data={data.meta} social={data.social} />
                    <Cursor />
                </main>
            )}
        </>
    );
}

export default App;
