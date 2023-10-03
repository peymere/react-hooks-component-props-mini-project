import React from "react";

function PropsImage(props) {
    return (
        <img src={props.image} alt="blog logo"></img>
    )
}

function NoImage(props) {
    return (
        <img src="https://via.placeholder.com/215" alt="blog logo"></img>
    )
}

function About(props) {
    return (
        <aside>
            {props.image ? <PropsImage image={props.image} /> : <NoImage />}
            <p>{props.about}</p>
        </aside>
    )
}

export default About;