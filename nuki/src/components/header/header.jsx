import React from "react";

import Navigation from "../navigation/navigation";

export default function Header(props) {

    return (
        <header>
            <div> {props.loading}</div>
           {props.data.title}
            {/* <div>{props.children.map((item)=>{
                return (
                    <div>
                        {item.title}
                        </div>
                )
            })}</div> */}
            <Navigation />
        </header>
    );
}
