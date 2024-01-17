import React from 'react';
import Head from 'next/head';

const GuidesPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Guides</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Travel | Guides</h2>

                <p className="intro">
                    Learned a lot from my travels and am happy to share.<br/>
                    Guides coming soon.
                </p>
            </div>
        </>
    );
};

export default GuidesPage;