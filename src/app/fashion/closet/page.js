import React from 'react';
import Head from 'next/head';
import ClosetGrid from '@/components/ClosetGrid';

import closetData from './closet-data.json';

const ClosetPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Closet</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">Fashion | Closet</h2>
                <ClosetGrid items={closetData} />
            </div>
        </>
    );
};

export default ClosetPage;