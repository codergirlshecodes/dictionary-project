import React from "react";
import "./Photos.css";

export default function Photos(props) {
    console.log(props.photos);

    const selectedPhotos = props.photos && props.photos.length > 0 ? props.photos.slice(0, 6) : [];

    if (selectedPhotos.length > 0) {
        return (
            <section className="Photos">
                <div className="row justify-content-center">
                    {selectedPhotos.map((photo, index) => (
                        <div className="col-auto mb-4" key={index}>
                            <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
                                <img src={photo.src.landscape} className="img-fluid smaller-photo" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        );
    } else {
        return null;
    }
}
