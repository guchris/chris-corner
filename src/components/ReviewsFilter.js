"use client"
import React, { useState, useEffect } from 'react';

const ReviewsFilter = ({ typeOption, cuisineOption, mealOption, priceOption, ratingOption, tagOption, uniqueTypes, uniqueCuisines, uniqueTags, onTypeChange, onCuisineChange, onMealChange, onPriceChange, onRatingChange, onTagChange }) => {

    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on initial load and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);


    return (
        <div className="filters">
            {isMobile ? (
                <>
                    {/* <div className="filter-section">
                        <h3>Type</h3>
                        <select value={typeOption} onChange={(e) => onTypeChange(e.target.value)}>
                            <option value="All">All</option>
                            {uniqueTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div> */}
                    <div className="filter-section">
                        <h3>Cuisine</h3>
                        <select value={cuisineOption} onChange={(e) => onCuisineChange(e.target.value)}>
                            <option value="All">All</option>
                            {uniqueCuisines.sort().map((cuisine, index) => (
                                <option key={index} value={cuisine}>{cuisine}</option>
                            ))}
                        </select>
                    </div>
                    {/* <div className="filter-section">
                        <h3>Meal</h3>
                        <select value={mealOption} onChange={(e) => onMealChange(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Brunch">Brunch</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                    </div> */}
                    <div className="filter-section">
                        <h3>Price</h3>
                        <select value={priceOption} onChange={(e) => onPriceChange(e.target.value)}>
                            <option value="All">All</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                        </select>
                    </div>
                    <div className="filter-section">
                        <h3>Rating</h3>
                        <select value={ratingOption} onChange={(e) => onRatingChange(e.target.value)}>
                            <option value="All">All</option>
                            <option value="S">S</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    {/* <div className="filter-section">
                        <h3>Tag</h3>
                        <select value={tagOption} onChange={(e) => onTagChange(e.target.value)}>
                            <option value="All">All</option>
                            {uniqueTags.sort().map((tag, index) => (
                                <option key={index} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div> */}
                </>
            ) : (
                <>
                    {/* <div className="filter-section">
                        <h3>Type</h3>
                        <span className={typeOption === 'All' ? 'selected' : ''} onClick={() => onTypeChange('All')}>All</span>
                        {uniqueTypes.map((type, index) => (
                            <span key={index} className={typeOption === type ? 'selected' : ''} onClick={() => onTypeChange(type)}>{type}</span>
                        ))}
                    </div> */}
                    <div className="filter-section">
                        <h3>Cuisine</h3>
                        <span className={cuisineOption === 'All' ? 'selected' : ''} onClick={() => onCuisineChange('All')}>All</span>
                        {uniqueCuisines.sort().map((cuisine, index) => (
                            <span key={index} className={cuisineOption === cuisine ? 'selected' : ''} onClick={() => onCuisineChange(cuisine)}>{cuisine}</span>
                        ))}
                    </div>
                    {/* <div className="filter-section">
                        <h3>Meal</h3>
                        <span className={mealOption === 'All' ? 'selected' : ''} onClick={() => onMealChange('All')}>All</span>
                        <span className={mealOption === 'Breakfast' ? 'selected' : ''} onClick={() => onMealChange('Breakfast')}>Breakfast</span>
                        <span className={mealOption === 'Brunch' ? 'selected' : ''} onClick={() => onMealChange('Brunch')}>Brunch</span>
                        <span className={mealOption === 'Lunch' ? 'selected' : ''} onClick={() => onMealChange('Lunch')}>Lunch</span>
                        <span className={mealOption === 'Dinner' ? 'selected' : ''} onClick={() => onMealChange('Dinner')}>Dinner</span>
                    </div> */}
                    <div className="filter-section">
                        <h3>Price</h3>
                        <span className={priceOption === 'All' ? 'selected' : ''} onClick={() => onPriceChange('All')}>All</span>
                        <span className={priceOption === '$' ? 'selected' : ''} onClick={() => onPriceChange('$')}>$</span>
                        <span className={priceOption === '$$' ? 'selected' : ''} onClick={() => onPriceChange('$$')}>$$</span>
                        <span className={priceOption === '$$$' ? 'selected' : ''} onClick={() => onPriceChange('$$$')}>$$$</span>
                    </div>
                    <div className="filter-section">
                        <h3>Rating</h3>
                        <span className={ratingOption === 'All' ? 'selected' : ''} onClick={() => onRatingChange('All')}>All</span>
                        <span className={ratingOption === 'S' ? 'selected' : ''} onClick={() => onRatingChange('S')}>S</span>
                        <span className={ratingOption === 'A' ? 'selected' : ''} onClick={() => onRatingChange('A')}>A</span>
                        <span className={ratingOption === 'B' ? 'selected' : ''} onClick={() => onRatingChange('B')}>B</span>
                        <span className={ratingOption === 'C' ? 'selected' : ''} onClick={() => onRatingChange('C')}>C</span>
                        <span className={ratingOption === 'D' ? 'selected' : ''} onClick={() => onRatingChange('D')}>D</span>
                        <span className={ratingOption === 'F' ? 'selected' : ''} onClick={() => onRatingChange('F')}>F</span>
                    </div>
                    {/* <div className="filter-section">
                        <h3>Tag</h3>
                        <span className={tagOption === 'All' ? 'selected' : ''} onClick={() => onTagChange('All')}>All</span>
                        {uniqueTags.sort().map((tag, index) => (
                            <span key={index} className={tagOption === tag ? 'selected' : ''} onClick={() => onTagChange(tag)}>{tag}</span>
                        ))}
                    </div> */}
                </>
            )}
        </div>
    );
};

export default ReviewsFilter;
