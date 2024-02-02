import React from "react"
import Link from 'next/link'

const ReviewsSection = ({ reviews }) => {

    const restaurantReviews = reviews.filter(review => review.type === "Restaurant");
    const cafeReviews = reviews.filter(review => review.type === "Cafe");
    const barReviews = reviews.filter(review => review.type === "Bar");

    return (
        <>
            <div className="section">
                <h4 className="section-title">Seattle Restaurants</h4>
                <div className="section-skinny">
                    {restaurantReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper">{review.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Seattle Cafes</h4>
                <div className="section-skinny">
                    {cafeReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper">{review.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Seattle Bars</h4>
                <div className="section-skinny">
                    {barReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper">{review.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ReviewsSection;