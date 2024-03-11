"use client"
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ImageModal from '@/components/ImageModal';

import brewsData from '../brews-data.json';

const BrewPage = ({ params }) => {

    const brew = brewsData.find(item => item.iteration === params.iteration);

    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Brews & Bites</title>
                <meta name="description" content="Lorem ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/projects" className="link">Projects</Link> | <Link href="/projects/brews-and-bites" className="link">Brews & Bites</Link> | {brew.iteration}
                </h2>

                <div className="section">
                    <div className="image-grid-large">
                        <img src={"/projects/brews-and-bites/" + brew.menuFront} alt="Menu Front"/>
                        <img src={"/projects/brews-and-bites/" + brew.menuBack} alt="Menu Back"/>
                    </div>
                </div>

                <h4 className="section-title">The Deets</h4>
                <div className="section-gap">
                    <p className="caption-upper">{brew.date}</p>
                    <p className="body-lower">Tagline: {brew.title}</p>
                    <div className="body-lower" dangerouslySetInnerHTML={{ __html: brew.story }} />
                </div>

                <h4 className="section-title">The Guest Checks</h4>
                <div className="section">
                    <div className="section-skinny">
                        {brew.guests.map((guest, i) => (
                            <div key={i} className="row-skinny">
                                <p className="body-upper-bold row-width-75">{guest.name}</p>
                                <p className="body-upper">{guest.order}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h4 className="section-title">The Photos</h4>
                <div className="section">
                    <div className="image-grid-small">
                        {brew.photos.map((photo, i) => (
                            <img key={i} src={"/projects/brews-and-bites/" + photo} alt={"Photo " + (i + 1)} onClick={() => handleImageClick("/projects/brews-and-bites/" + photo)} />
                        ))}
                    </div>
                </div>

                {selectedImage && <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />}
            </div>
        </>
    );
};

export default BrewPage;