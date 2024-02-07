import React from "react"
import Link from 'next/link'

const ReviewsSection = ({ reviews }) => {

    const restaurantReviews = reviews.filter(review => review.type === "Restaurant");
    const cafeReviews = reviews.filter(review => review.type === "Cafe");
    const barReviews = reviews.filter(review => review.type === "Bar");
    const dessertReviews = reviews.filter(review => review.type === "Dessert");
    const pikePlaceReviews = reviews.filter(review => review.tags.includes("Pike Place"));

    // Sort reviews alphabetically by name
    const sortedRestaurantReviews = [...restaurantReviews].sort((a, b) => a.name.localeCompare(b.name));
    const sortedCafeReviews = [...cafeReviews].sort((a, b) => a.name.localeCompare(b.name));
    const sortedBarReviews = [...barReviews].sort((a, b) => a.name.localeCompare(b.name));
    const sortedDessertReviews = [...dessertReviews].sort((a, b) => a.name.localeCompare(b.name));
    const sortedPikePlaceReviews = [...pikePlaceReviews].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <>
            <div className="section">
                <h4 className="section-title">Seattle Restaurants</h4>
                <div className="section-small">
                    <div className="row-skinny">
                        <p className="body-upper-bold row-width-250">Name</p>
                        <p className="body-upper-bold row-width-150">Cuisine</p>
                        <p className="body-upper-bold row-width-100">Price</p>
                        <p className="body-upper-bold row-width-100">Rating</p>
                    </div>
                </div>
                <div className="section-skinny">
                    {sortedRestaurantReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
                            <p className="body-upper row-width-150">{review.cuisine}</p>
                            <p className="body-upper row-width-100">{review.price}</p>
                            <p className="body-upper row-width-100">{review.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Seattle Cafes</h4>
                <div className="section-small">
                    <div className="row-skinny">
                        <p className="body-upper-bold row-width-250">Name</p>
                        <p className="body-upper-bold row-width-150">Cuisine</p>
                        <p className="body-upper-bold row-width-100">Price</p>
                        <p className="body-upper-bold row-width-100">Rating</p>
                    </div>
                </div>
                <div className="section-skinny">
                    {sortedCafeReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
                            <p className="body-upper row-width-150">{review.cuisine}</p>
                            <p className="body-upper row-width-100">{review.price}</p>
                            <p className="body-upper row-width-100">{review.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Seattle Bars</h4>
                <div className="section-small">
                    <div className="row-skinny">
                        <p className="body-upper-bold row-width-250">Name</p>
                        <p className="body-upper-bold row-width-150">Cuisine</p>
                        <p className="body-upper-bold row-width-100">Price</p>
                        <p className="body-upper-bold row-width-100">Rating</p>
                    </div>
                </div>
                <div className="section-skinny">
                    {sortedBarReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
                            <p className="body-upper row-width-150">{review.cuisine}</p>
                            <p className="body-upper row-width-100">{review.price}</p>
                            <p className="body-upper row-width-100">{review.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Seattle Desserts</h4>
                <div className="section-small">
                    <div className="row-skinny">
                        <p className="body-upper-bold row-width-250">Name</p>
                        <p className="body-upper-bold row-width-150">Cuisine</p>
                        <p className="body-upper-bold row-width-100">Price</p>
                        <p className="body-upper-bold row-width-100">Rating</p>
                    </div>
                </div>
                <div className="section-skinny">
                    {sortedDessertReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
                            <p className="body-upper row-width-150">{review.cuisine}</p>
                            <p className="body-upper row-width-100">{review.price}</p>
                            <p className="body-upper row-width-100">{review.rating}</p>
                        </div>
                    ))}
                </div>
            </div>r
            <div className="section">
                <h4 className="section-title">Seattle Pike Place</h4>
                <div className="section-small">
                    <div className="row-skinny">
                        <p className="body-upper-bold row-width-250">Name</p>
                        <p className="body-upper-bold row-width-150">Cuisine</p>
                        <p className="body-upper-bold row-width-100">Price</p>
                        <p className="body-upper-bold row-width-100">Rating</p>
                    </div>
                </div>
                <div className="section-skinny">
                    {sortedPikePlaceReviews.map((review, index) => (
                        <div key={review.id} className="row-skinny">
                            <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
                            <p className="body-upper row-width-150">{review.cuisine}</p>
                            <p className="body-upper row-width-100">{review.price}</p>
                            <p className="body-upper row-width-100">{review.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ReviewsSection;