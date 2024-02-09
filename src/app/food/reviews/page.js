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
                    Restaurant Reviews & Reccomendations still in progress.<br/>
                    Lots of placeholder ratings and reviews at the moment.<br/><br/>

                    Hey there, welcome to my Seattle foodie guide! Think of this as my personal rundown of the best spots in town, from cozy cafes to buzzing bars and everything in between.
                    I've rated each place on a scale from "Must Try" for those you absolutely can't miss to "Terrible" for the ones you might want to skip.
                    So if you're ever in need of a recommendation in Seattle, you're in the right place.
                    Whether you're craving a hearty meal, a perfect cup of coffee, or some refreshing boba, this list has got you covered.
                    So go ahead, explore and indulge – and don't forget to let me know what you think!
                </p>

                <h4 className="section-title">Score Designations</h4>
                <div className="section-gap">
                    <p className="body-lower">This rating system provides a clear indication of the quality of the dining experience, helping others make informed choices about where to eat.</p>
                    <div className="section-skinny">
                        <p className="body-upper-bold">10.0 - Must Try</p>
                        <p className="body-lower">An exceptional dining experience that you absolutely shouldn't miss. The food, service, ambiance, and overall experience are outstanding.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">9.0 - Highly Recommended</p>
                        <p className="body-lower">A restaurant that comes highly praised. It offers fantastic food, excellent service, and a great atmosphere that's worth checking out.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">8.0 - Recommended</p>
                        <p className="body-lower">A solid choice for a good meal. While it may not be extraordinary, it offers tasty food, decent service, and a pleasant atmosphere.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">7.0 - Worth Considering</p>
                        <p className="body-lower">A decent option if you're in the area. It provides satisfactory food and service, but there may be some room for improvement in terms of ambiance or value for money.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">6.0 - Average</p>
                        <p className="body-lower">A restaurant that's neither exceptional nor disappointing. It offers okay food and service but may lack in terms of ambiance or value for money.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">5.0 - Below Average</p>
                        <p className="body-lower">A restaurant that falls short of expectations. While it may have some redeeming qualities, there are noticeable shortcomings in food quality, service, or ambiance.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">4.0 - Not Recommended</p>
                        <p className="body-lower">A restaurant that you might want to skip. It fails to impress in multiple aspects, and there are better options available nearby.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">3.0 - Poor</p>
                        <p className="body-lower">A disappointing dining experience overall. The food, service, and ambiance are below par, and it's best to look elsewhere for a meal.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">2.0 - Avoid</p>
                        <p className="body-lower">A restaurant that should be avoided if possible. It offers little to no value in terms of food quality, service, or ambiance.</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">1.0 - Terrible</p>
                        <p className="body-lower">An absolute no-go. The dining experience is extremely poor, and there are serious concerns about food safety, hygiene, or customer service.</p>
                    </div>
                </div>

                <ReviewsMap reviews={reviewsData} />
                <ReviewsSection reviews={reviewsData} />

            </div>
        </>
    );
};

export default ReviewsPage;