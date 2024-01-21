import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
                <h2 className="directory">
                    <Link href="/fashion" className="link">Fashion</Link> | Outfits
                </h2>
                <p className="intro">
                    Dope outfits coming soon.
                </p>
            </div>
        </>
    );
};

export default OutfitsPage;