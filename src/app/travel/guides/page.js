import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GuidesSection from '@/components/GuidesSection';

import guidesData from './guides-data.json';

const GuidesPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Guides</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/travel" className="link">Travel</Link> | Guides
                </h2>

                <p className="intro">
                    Learnings and itineraries from my travels.<br/>
                    Guides coming soon. Below guides are placeholders with random text.
                </p>

                <h4 className="section-title">Recent Trip Guides</h4>
                <GuidesSection guides={guidesData} />
            </div>
        </>
    );
};

export default GuidesPage;