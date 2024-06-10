import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import FashionStats from '@/components/FashionStats';
import closetData from './closet/closet-data.json';

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
                    Fashion and sustainability.<br/>
                    Additional content in this page coming soon.<br/>
                    Check out <Link href="/fashion/closet" className="link"><b>CLOSET</b></Link> for the moment.<br/>
                </p>

                <h4 className="section-title">Fashion Stats</h4>
                <FashionStats closetData={closetData} />
            </div>
        </>
    );
};

export default FashionPage;