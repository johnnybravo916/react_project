import React, {useEffect, useState} from "react";
import Fade from "react-reveal/Fade";

function Promo(props) {
    const [promo, setPromo] = useState(false);

    useEffect(() => {
        setPromo(props.promo.isActive);
    }, [props.promo.isActive]);

    return promo ? (
        <Fade>
            <h3>{props.promo.slogan}</h3>
        </Fade>
    ) : null;
}

export default Promo;
