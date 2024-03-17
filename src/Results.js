import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    console.log(props.results);
    if (props.results && props.results.meanings) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                {props.results.meanings.map((meaning, index) => (
                    <Meaning key={index} meaning={meaning} />
                ))}
            </div>
        );
    } else {
        return null;
    }
}
