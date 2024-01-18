import React from 'react';
import Head from 'next/head';

import brewsData from '../brews-data.json';

const BrewPage = ({ params }) => {
    const brew = brewsData.find(item => item.iteration === params.iteration);
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Brews & Bites</title>
                <meta name="description" content="Lorem ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Projects | Brews & Bites | {brew.iteration}</h2>

                <div className="section">
                    <div className="row-skinny">
                        <img src={brew.menuFront} alt="Menu Front" className="image-small"/>
                        <img src={brew.menuBack} alt="Menu Back" className="image-small"/>
                    </div>
                </div>

                <h4 className="section-title">The Deets</h4>
                <div className="section-gap">
                    <p className="caption-upper">{brew.date}</p>
                    <p className="body-lower">{brew.title}</p>
                    <p className="body-lower">{brew.story}</p>
                </div>

                <h4 className="section-title">The Guest Checks</h4>
                <div className="section">
                    <div className="section-skinny">
                        {brew.guests.map((guest, i) => (
                            <div key={i} className="row-skinny">
                                <p className="guest-name">{guest.name}</p>
                                <p className="body-upper">{guest.order}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrewPage;