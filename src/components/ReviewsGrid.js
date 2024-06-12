import React from "react"
import Link from 'next/link'

const ReviewsGrid = ({ reviews, typeOption, cuisineOption, mealOption, priceOption, ratingOption, tagOption }) => {

    const filterReviews = (reviews, typeOption, cuisineOption, mealOption, priceOption, ratingOption, tagOption) => {
        let filteredReviews = reviews;

        if (typeOption !== 'All') {
            filteredReviews = filteredReviews.filter(review => review.type === typeOption);
        }

        if (cuisineOption !== 'All') {
            filteredReviews = filteredReviews.filter(review => review.cuisine === cuisineOption);
        }

        if (mealOption !== 'All') {
            filteredReviews = filteredReviews.filter(review => review.meals.includes(mealOption));
        }

        if (priceOption !== 'All') {
            filteredReviews = filteredReviews.filter(review => review.price === priceOption);
        }

        if (ratingOption !== 'All') {
            filteredReviews = filteredReviews.filter(review => review.rating === ratingOption);
        }

        if (tagOption !== 'All') {
            filteredReviews = filteredReviews.filter(review => review.tags.includes(tagOption));
        }

        return filteredReviews;
    };

    const filteredReviews = filterReviews(reviews, typeOption, cuisineOption, mealOption, priceOption, ratingOption, tagOption);

    return (
        <>
            <div className="general-grid">
                {filteredReviews.map((review, index) => (
                    <Link key={review.id} href={`${review.url}`} className="link">
                        <div key={index} className="grid-item">
                            <img src={`/food/reviews/${review.cover}`} alt={review.name}/>
                            <div className="section-skinny">
                                <p className="caption-upper-bold">{review.name}</p>
                                <p className="caption-upper">{review.cuisine}</p>
                                <p className="caption-upper">{review.price}</p>
                                <p className="caption-upper">{review.rating}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ReviewsGrid;