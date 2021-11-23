import React, {useEffect, useState} from "react";

function Promo(props) {
    const [promo, setPromo] = useState(false);

    useEffect(() => {
        setPromo(props.promo.isActive);
    }, []);

    return promo ? <h3>{props.promo.slogan}</h3> : null;
}

export default Promo;
