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
                <h2 className="directory">
                    <Link href="/founder" className="link">Founder</Link> | Worn
                </h2>

                <p className="intro">
                    Your digital closet. Landing page still under construction.<br/>
                    <Link href="https://wearworn.com" className="body-lower">Worn Website</Link>
                </p>
                
            </div>
        </>
    );
};

export default WornPage;