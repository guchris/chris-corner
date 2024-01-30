import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const RecommendationsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Recommendations</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/food" className="link">Food</Link> | Recommendations
                </h2>
                <p className="intro">
                    Restaurant Reviews & Reccomendations. Coming soon.
                </p>
            </div>
        </>
    );
};

export default RecommendationsPage;