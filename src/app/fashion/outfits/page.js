import React from 'react';
import Head from 'next/head';

const OutfitsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Outfits</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">Fashion / Outfits</h2>
            </div>
        </>
    );
};

export default OutfitsPage;