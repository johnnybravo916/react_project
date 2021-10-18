import React from "react";

export default function Menu(props) {
    return (
        <section>
            <div>{props.data.title_00}</div>
            {props.data.content_00.map((k, i) => {
                return (
                    <div>
                        {k.title} - {k.price}
                    </div>
                );
            })}
        </section>
    );
}
