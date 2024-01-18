import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import cardsData from './cards-data.json';

const HighsLowsRainbowsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Highs Lows Rainbows</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Founder | Highs Lows Rainbows</h2>
                <p className="intro">
                    An aritistic outlet for card making and giving - with my partner in crime, Anjuli.<br/>
                    <Link href="https://highslowsandrainbows.etsy.com/" className="body-lower">Highs Lows Rainbows Etsy Storefront</Link>
                </p>

                <div className="card-grid">
                    {cardsData.map((card, i) => (
                        <Link href={card.url} className="dynamic-page-link">
                            <div className="card-item">
                                <img src={"highs-lows-rainbows/" + card.image} alt={card.name} />
                                <div className="section-skinny">
                                    <p className="caption-upper-bold">{card.collection + " - " + card.type}</p>
                                    <p className="caption-upper">{card.name}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HighsLowsRainbowsPage;