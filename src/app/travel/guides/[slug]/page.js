import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import guidesData from '../guides-data.json';

const GuidePage = ({ params }) => {
    const guide = guidesData.find(item => item.slug === params.slug);
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Guide</title>
                <meta name="description" content="Lorem ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/travel" className="link">Travel</Link> | <Link href="/travel/guides" className="link">Guides</Link> | {guide.location}
                </h2>

                <h4 className="section-title">The Story</h4>
                <div className="section-gap">
                    <p className="body-lower">{guide.section1}</p>
                    <p className="body-lower">{guide.section2}</p>
                    <p className="body-lower">{guide.section3}</p>
                </div>
            </div>
        </>
    );
};

export default GuidePage;