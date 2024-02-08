import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReviewsSection from '@/components/ReviewsSection';
import ReviewsMap from '@/components/ReviewsMap';

import reviewsData from './reviews-data.json';


const ReviewsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Reviews</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/food" className="link">Food</Link> | Reviews
                </h2>
                <p className="intro">
                    Restaurant Reviews & Reccomendations still in progress. Lots of placeholder ratings and reviews at the moment.
                </p>

                <ReviewsMap reviews={reviewsData} />
                <ReviewsSection reviews={reviewsData} />

            </div>
        </>
    );
};

export default ReviewsPage;