import React from 'react';
import Head from 'next/head';

const FounderPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Founder</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Founder</h2>

                <p className="intro">
                    Ambitious.
                </p>
            </div>
        </>
    );
};

export default FounderPage;