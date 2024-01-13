import React from 'react';
import Head from 'next/head';

const FashionPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Fashion</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Fashion</h2>

                <p className="intro">
                    Fashion and sustainability.
                </p>
            </div>
        </>
    );
};

export default FashionPage;