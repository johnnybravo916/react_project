import "./App.css";

import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Contact from "./components/contact/contact";

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <About />
            <Menu />
            <Contact />
        </>
    );
}

export default App;
