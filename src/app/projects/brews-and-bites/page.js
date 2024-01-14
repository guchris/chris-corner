import React from 'react';
import Head from 'next/head';

const BrewsAndBitesPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Brews & Bites</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Projects / Brews & Bites</h2>

                <p className="intro">
                    Coffee and friends.
                </p>
            </div>
        </>
    );
};

export default BrewsAndBitesPage;