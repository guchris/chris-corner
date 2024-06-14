import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import cardsData from './cards-data.json';

const HighsLowsAndRainbowsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Highs Lows & Rainbows</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/founder" className="link">Founder</Link> | Highs Lows & Rainbows
                </h2>
                <p className="intro">
                    An aritistic outlet for card making and giving - with my partner in crime, Anjuli.<br/>
                    <Link href="https://highslowsandrainbows.etsy.com/" className="body-lower">Highs Lows & Rainbows - Etsy Storefront</Link>
                </p>

                <div className="card-grid">
                    {cardsData.map((card, i) => (
                        <Link key={i} href={card.url} className="link" target="_blank">
                            <div className="card-item">
                                <Image
                                    src={"/founder/highs-lows-rainbows/" + card.image}
                                    alt={card.name}
                                    width={200}
                                    height={200}
                                />
                                <div className="section-skinny">
                                    <p className="caption-upper-bold">{card.name}</p>
                                    <p className="caption-upper">{card.collection}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HighsLowsAndRainbowsPage;