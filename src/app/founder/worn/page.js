import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const WornPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Worn</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Founder | Worn</h2>

                <p className="intro">Your digital closet. Landing page still under construction.</p>
                <Link href="https://wearworn.com" className="body-lower">Worn Website</Link>
            </div>
        </>
    );
};

export default WornPage;