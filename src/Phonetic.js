import React from "react";

export default function Phonetic(props) {
    console.log(props.Phonetics);

    // Check if props.Phonetics is defined and is an array
    if (props.Phonetics && Array.isArray(props.Phonetics)) {
        return (
            <div className="Phonetic">
                {props.Phonetics.map((phonetic, index) => (
                    <div key={index}>
                        <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
                            Listen
                        </a>
                        <br />
                        {phonetic.text}
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
}
