import React, {useState, useEffect} from "react";

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hidden, setHidden] = useState(false);
    const [linkHover, setLinkHover] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove);
            document.addEventListener("mouseenter", mEnter);
            document.addEventListener("mouseleave", mLeave);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove);
            document.removeEventListener("mouseenter", mEnter);
            document.removeEventListener("mouseleave", mLeave);
        };

        const mMove = (el) => {
            setPosition({x: el.clientX, y: el.clientY});
        };

        const mLeave = () => {
            setHidden(true);
        };

        const mEnter = () => {
            setHidden(false);
        };

        const addLinkEvents = () => {
            document.querySelectorAll("a").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHover(true));
                el.addEventListener("mouseout", () => setLinkHover(false));
            });
            document.querySelectorAll("button").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHover(true));
                el.addEventListener("mouseout", () => setLinkHover(false));
            });
        };

        addEventListeners();
        addLinkEvents();
        return () => removeEventListeners();
    }, []);

    return (
        <div
            className={`cursor ${hidden ? "cursor--hidden " : null} ${
                linkHover ? "cursor--hover " : null
            }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default Cursor;
