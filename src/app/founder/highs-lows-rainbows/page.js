import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
                <h2 className="directory">Founder / Highs Lows Rainbows</h2>

                <p className="intro">An artistic expression of our love of card making and giving.</p>
                <Link href="https://highslowsandrainbows.etsy.com/" className="link">Highs Lows & Rainbows Etsy Storefront</Link>
            </div>
        </>
    );
};

export default HighsLowsRainbowsPage;