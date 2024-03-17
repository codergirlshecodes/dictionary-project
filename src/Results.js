import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);
    if (props.results && props.results.meanings) {
        return (
            <div className="Results">
                <section>
                    <h2>{props.results.word}</h2>
                    {props.results.phonetics && props.results.phonetics.map((phonetic, index) => (
                        <Phonetic key={index} phonetic={phonetic} />
                    ))}
                </section>
                <div className="Meanings">
                    {props.results.meanings.map((meaning, index) => (
                        <section key={index} className="MeaningSection">
                            <Meaning meaning={meaning} />
                        </section>
                    ))}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

