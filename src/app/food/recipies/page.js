import React from 'react';
import Head from 'next/head';

const RecipiesPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Recipies</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Food | Recipies</h2>
                <p className="intro">
                    Delicious, asian-fusion recipies coming soon.
                </p>
            </div>
        </>
    );
};

export default RecipiesPage;