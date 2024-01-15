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
                <h2 className="directory">Founder / Worn</h2>

                <p className="intro">Your digital closet.</p>
                <Link href="https://wearworn.com" className="link">Worn Website (UNDER CONSTRUCTION)</Link>
            </div>
        </>
    );
};

export default WornPage;