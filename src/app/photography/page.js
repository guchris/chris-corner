import React from 'react';
import Head from 'next/head';
import PhotosGrid from '@/components/PhotosGrid';

import photosData from './photos-data.json';

const PhotographyPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Photography</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">Photography</h2>
                <p className="intro">
                    Just a few shots.<br/>
                    This is a new tab - full content coming soon.
                </p>

                <PhotosGrid photos={photosData} />
            </div>
        </>
    );
};

export default PhotographyPage;