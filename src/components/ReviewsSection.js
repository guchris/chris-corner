"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link'

const ReviewsSection = ({ reviews }) => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [selectedMeal, setSelectedMeal] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const [typeOptions, setTypeOptions] = useState([]);
    const [cuisineOptions, setCuisineOptions] = useState([]);
    const [mealOptions, setMealOptions] = useState([]);
    const [tagOptions, setTagOptions] = useState([]);
    const [priceOptions, setPriceOptions] = useState([]);
    const [ratingOptions, setRatingOptions] = useState([]);

    useEffect(() => {
        // Extract unique options for each filter category
        const getTypeOptions = [...new Set(reviews.flatMap(review => review.type.split(", ").map(option => option.trim())))];
        const getCuisineOptions = [...new Set(reviews.flatMap(review => review.cuisine.split(", ").map(option => option.trim())))];
        const getMealOptions = [...new Set(reviews.flatMap(review => review.meals.split(", ").map(option => option.trim())))];
        const getTagOptions = [...new Set(reviews.flatMap(review => review.tags.split(", ").filter(tag => tag !== "").map(option => option.trim())))];
        const getPriceOptions = [...new Set(reviews.map(review => review.price))];
        const getRatingOptions = [...new Set(reviews.map(review => parseFloat(review.rating)))];

        // Sort options alphabetically
        setTypeOptions(getTypeOptions.sort());
        setCuisineOptions(getCuisineOptions.sort());
        setMealOptions(getMealOptions.sort());
        setTagOptions(getTagOptions.sort());
        setPriceOptions(getPriceOptions.sort());
        setRatingOptions(getRatingOptions.sort());
    }, [reviews]);

    // Function to filter reviews based on selected filters
    const filteredReviews = reviews.filter(review => {
        // Apply filters based on selected options
        const typeMatch = selectedType ? review.type.includes(selectedType): true;
        const cuisineMatch = selectedCuisine ? review.cuisine === selectedCuisine : true;
        const mealMatch = selectedMeal ? review.meals.includes(selectedMeal) : true;
        const tagMatch = selectedTag ? review.tags.includes(selectedTag) : true;
        const priceMatch = selectedPrice ? review.price === selectedPrice : true;
        const ratingMatch = selectedRating ? parseFloat(review.rating) >= parseFloat(selectedRating) : true;

        // Apply search term filter
        const searchMatch = Object.values(review).some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()));

        // Return true if all filters match
        return typeMatch && cuisineMatch && mealMatch && tagMatch && priceMatch && ratingMatch && searchMatch;
    });

    // Sort filtered reviews by rating (descending) and then by name (ascending)
    const sortedFilteredReviews = [...filteredReviews].sort((a, b) => {
        // Sort by rating (descending)
        const ratingComparison = parseFloat(b.rating) - parseFloat(a.rating);
        if (ratingComparison !== 0) {
            return ratingComparison;
        }
        // If ratings are the same, sort by name (ascending)
        return a.name.localeCompare(b.name);
    });

    // Function to clear all filters
    const clearFilters = () => {
        setSelectedType("");
        setSelectedCuisine("");
        setSelectedMeal("");
        setSelectedTag("");
        setSelectedPrice("");
        setSelectedRating("");
        setSearchTerm("");
    };

    return (
        <>
            <div className="section">
                <div className="row-skinny">
                    {/* Search Bar */}
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                    />

                    {/* Clear Filters Button */}
                    <button onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>

            <div className="section-small">
                <div className="row-skinny">
                    <p className="body-upper-bold row-width-250">Name</p>

                    {/* Type Filter */}
                    <select className="body-upper-bold row-width-200" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="">Type</option>
                        {typeOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* Cuisine Filter */}
                    <select className="body-upper-bold row-width-150" value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}>
                        <option value="">Cuisine</option>
                        {cuisineOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* Meals Filter */}
                    <select className="body-upper-bold row-width-100" value={selectedMeal} onChange={(e) => setSelectedMeal(e.target.value)}>
                        <option value="">Meal</option>
                        {mealOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* Tag Filter */}
                    <select className="body-upper-bold row-width-150" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                        <option value="">Tag</option>
                        {tagOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* Price Filter */}
                    <select className="body-upper-bold row-width-100" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
                        <option value="">Price</option>
                        {priceOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* Rating Filter */}
                    <select className="body-upper-bold row-width-100" value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
                        <option value="">Rating</option>
                        {ratingOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="section-small">
                {/* Display sorted filtered reviews */}
                {sortedFilteredReviews.map((review, index) => (
                    <div key={review.id} className="row-skinny">
                        <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
                        <p className="body-upper row-width-200">{review.type}</p>
                        <p className="body-upper row-width-150">{review.cuisine}</p>
                        <p className="body-upper row-width-100">{review.meals}</p>
                        <p className="body-upper row-width-150">{review.tags}</p>
                        <p className="body-upper row-width-100">{review.price}</p>
                        <p className="body-upper row-width-100">{review.rating}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ReviewsSection;


// const ReviewsSection = ({ reviews }) => {

//     const restaurantReviews = reviews.filter(review => review.type.includes("Restaurant"));
//     const cafeReviews = reviews.filter(review => review.type.includes("Cafe"));
//     const barReviews = reviews.filter(review => review.type.includes("Bar"));
//     const dessertReviews = reviews.filter(review => review.type.includes("Dessert"));
//     const pikePlaceReviews = reviews.filter(review => review.type.includes("Pike Place"));

//     // Sort reviews by score, highest to lowest, then by name alphabetically
//     const sortByScoreAndName = (a, b) => {
//         if (a.rating === b.rating) {
//             return a.name.localeCompare(b.name);
//         }
//         return b.rating - a.rating;
//     };

//     // Sort reviews for each category
//     const sortedRestaurantReviews = [...restaurantReviews].sort(sortByScoreAndName);
//     const sortedCafeReviews = [...cafeReviews].sort(sortByScoreAndName);
//     const sortedBarReviews = [...barReviews].sort(sortByScoreAndName);
//     const sortedDessertReviews = [...dessertReviews].sort(sortByScoreAndName);
//     const sortedPikePlaceReviews = [...pikePlaceReviews].sort(sortByScoreAndName);

//     return (
//         <>
//             <div className="section-small">
//                 <div className="row-skinny">
//                     <p className="body-upper-bold row-width-250">Name</p>
//                     <p className="body-upper-bold row-width-150">Cuisine</p>
//                     <p className="body-upper-bold row-width-150">Tags</p>
//                     <p className="body-upper-bold row-width-100">Price</p>
//                     <p className="body-upper-bold row-width-100">Rating</p>
//                 </div>
//             </div>
//             <div className="section">
//                 <h4 className="section-title">Seattle Restaurants</h4>
//                 <div className="section-skinny">
//                     {sortedRestaurantReviews.map((review, index) => (
//                         <div key={review.id} className="row-skinny">
//                             <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
//                             <p className="body-upper row-width-150">{review.cuisine}</p>
//                             <p className="body-upper row-width-150">{review.tags}</p>
//                             <p className="body-upper row-width-100">{review.price}</p>
//                             <p className="body-upper row-width-100">{review.rating}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="section">
//                 <h4 className="section-title">Seattle Cafes</h4>
//                 <div className="section-skinny">
//                     {sortedCafeReviews.map((review, index) => (
//                         <div key={review.id} className="row-skinny">
//                             <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
//                             <p className="body-upper row-width-150">{review.cuisine}</p>
//                             <p className="body-upper row-width-150">{review.tags}</p>
//                             <p className="body-upper row-width-100">{review.price}</p>
//                             <p className="body-upper row-width-100">{review.rating}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="section">
//                 <h4 className="section-title">Seattle Bars</h4>
//                 <div className="section-skinny">
//                     {sortedBarReviews.map((review, index) => (
//                         <div key={review.id} className="row-skinny">
//                             <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
//                             <p className="body-upper row-width-150">{review.cuisine}</p>
//                             <p className="body-upper row-width-150">{review.tags}</p>
//                             <p className="body-upper row-width-100">{review.price}</p>
//                             <p className="body-upper row-width-100">{review.rating}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="section">
//                 <h4 className="section-title">Seattle Desserts</h4>
//                 <div className="section-skinny">
//                     {sortedDessertReviews.map((review, index) => (
//                         <div key={review.id} className="row-skinny">
//                             <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
//                             <p className="body-upper row-width-150">{review.cuisine}</p>
//                             <p className="body-upper row-width-150">{review.tags}</p>
//                             <p className="body-upper row-width-100">{review.price}</p>
//                             <p className="body-upper row-width-100">{review.rating}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="section">
//                 <h4 className="section-title">Seattle Pike Place</h4>
//                 <div className="section-skinny">
//                     {sortedPikePlaceReviews.map((review, index) => (
//                         <div key={review.id} className="row-skinny">
//                             <Link key={review.id} href={`/food/reviews/${review.slug}`} className="body-upper row-width-250">{review.name}</Link>
//                             <p className="body-upper row-width-150">{review.cuisine}</p>
//                             <p className="body-upper row-width-150">{review.tags}</p>
//                             <p className="body-upper row-width-100">{review.price}</p>
//                             <p className="body-upper row-width-100">{review.rating}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ReviewsSection;