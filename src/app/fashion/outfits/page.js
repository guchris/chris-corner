import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import OutfitsGrid from '@/components/OutfitsGrid';

import outfitsData from './outfits-data.json';
import closetData from '../closet/closet-data.json';

const OutfitsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Outfits</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">
                    <Link href="/fashion" className="link">Fashion</Link> | Outfits
                </h2>
                <p className="intro">
                    Outfits coming soon. Page still in progress.
                </p>

                <OutfitsGrid
                    outfits={outfitsData}
                    closetItems={closetData}
                />
            </div>
        </>
    );
};

export default OutfitsPage;