import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    let [error, setError] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl)
            .then(handleDictionaryResponse)
            .catch(error => {
                setError("Failed to fetch dictionary data. Please try again later.");
                console.error("Error fetching dictionary data:", error);
            });

        const pexelsApiKey ="1at61ad039d332fc00c4boee9e4a24c4";
        const pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers })
            .then(handlePexelsResponse)
            .catch(error => {
                setError("Failed to fetch photos. Please try again later.");
                console.error("Error fetching photos:", error);
            });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section> 
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                    </form>
                    <div className="hint">
                        Suggested words: sunset, wine, yoga....
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
                {error && <div className="error">{error}</div>}
            </div>
        );
    } else {
        load();
        return "loading";
    }
}