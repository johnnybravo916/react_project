import "./App.css";

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Menu from "./components/menu/menu";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Menu />
            <About />
            <Contact />
        </>
    );
}

export default App;
