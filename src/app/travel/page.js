import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TravelPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Travel</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Travel</h2>

                <p className="intro">
                    I love travel, I mean - who doesn't?<br/>
                    Page content coming soon.<br/>
                    Check out <Link href="/travel/checklist" className="link"><b>CHECKLIST</b></Link> in the meantime.
                </p>
            </div>
        </>
    );
};

export default TravelPage;