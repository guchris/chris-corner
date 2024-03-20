import React from "react"
import Link from 'next/link'

const PhotosGrid = ({ photos }) => {

    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div key={index} className="photo-item">
                    <img src={"/photography/" + photo.url}/>
                    <div className="section-skinny">
                        <p className="caption-upper-bold">{photo.camera}</p>
                        <p className="caption-upper-bold">{photo.metadata}</p>
                        <p className="caption-upper">{photo.location}</p>
                        <p className="caption-upper">{photo.date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PhotosGrid;