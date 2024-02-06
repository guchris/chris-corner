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
                    <div className="row-skinny">
                        <p className="ranking-category">Name</p>
                        <p className="body-lower">{review.name}</p>
                    </div>
                    <div className="row-skinny">
                        <p className="ranking-category">Cuisine</p>
                        <p className="body-lower">{review.cuisine}</p>
                    </div>
                    <div className="row-skinny">
                        <p className="ranking-category">Type</p>
                        <p className="body-lower">{review.type}</p>
                    </div>
                    <div className="row-skinny">
                        <p className="ranking-category">Meals</p>
                        <p className="body-lower">{review.meals}</p>
                    </div>
                    <div className="row-skinny">
                        <p className="ranking-category">Tags</p>
                        <p className="body-lower">{review.tags}</p>
                    </div>
                    <div className="row-skinny">
                        <p className="ranking-category">Review</p>
                        <p className="body-lower">{review.review}</p>
                    </div>
                    <div className="row-skinny">
                        <p className="ranking-category">Rating</p>
                        <p className="body-lower">{review.raiting}</p>
                    </div>
                    <div className="row-skinny">
                        <p className="ranking-category">URL</p>
                        <a className="body-lower" href={review.url}>Google Maps</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewPage;