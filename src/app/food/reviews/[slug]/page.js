import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import reviewsData from '../reviews-data.json';

const ReviewPage = ({ params }) => {
    const review = reviewsData.find(item => item.slug === params.slug);
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Review</title>
                <meta name="description" content="Lorem ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/food" className="link">Food</Link> | <Link href="/food/reviews" className="link">Reviews</Link> | {review.name}
                </h2>

                <div className="section">
                    <p className="body-upper"><b>Name:</b> {review.name}</p>
                    <p className="body-upper"><b>Cuisine:</b> {review.cuisine}</p>
                    <p className="body-upper"><b>Meals:</b> {review.meals}</p>
                    <p className="body-upper"><b>Type:</b> {review.type}</p>
                    <p className="body-upper"><b>Tags:</b> {review.tags}</p>
                    <p className="body-upper"><b>Review:</b> {review.review}</p>
                    <p className="body-upper"><b>Rating:</b> {review.rating}</p>
                    <p className="body-upper"><b>Google Maps:</b> {review.url}</p>
                </div>
            </div>
        </>
    );
};

export default ReviewPage;