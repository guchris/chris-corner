import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const FoodPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Food</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Food</h2>

                <p className="intro">
                    Food is one of the joys in life. Here is a collection of culinary experiences.<br/>
                    Page content coming soon.<br/>
                    Check out <Link href="/food/sunday-suppers" className="link"><b>SUNDAY SUPPERS</b></Link> in the meantime.
                </p>
            </div>
        </>
    );
};

export default FoodPage;