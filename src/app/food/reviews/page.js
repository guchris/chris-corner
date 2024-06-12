"use client"
import React, { useState, useEffect } from "react";

import Head from 'next/head';
import Link from 'next/link';

import ReviewsGrid from '@/components/ReviewsGrid';
import ReviewsFilter from '@/components/ReviewsFilter';

import reviewsData from './reviews-data.json';

const ReviewsPage = () => {

    const [typeOption, setTypeOption] = useState('All');
    const [cuisineOption, setCuisineOption] = useState('All');
    const [mealOption, setMealOption] = useState('All');
    const [priceOption, setPriceOption] = useState('All');
    const [ratingOption, setRatingOption] = useState('All');
    const [tagOption, setTagOption] = useState('All');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTypeChange = (option) => {
        setTypeOption(option);
    }
    const handleCuisineChange = (option) => {
        setCuisineOption(option);
    }
    const handleMealChange = (option) => {
        setMealOption(option);
    }
    const handlePriceChange = (option) => {
        setPriceOption(option);
    }
    const handleRatingChange = (option) => {
        setRatingOption(option);
    }
    const handleTagChange = (option) => {
        setTagOption(option);
    }

    const uniqueTypes = [...new Set(reviewsData.flatMap(review => review.type.split(", ").map(option => option.trim())))];
    const uniqueCuisines = [...new Set(reviewsData.flatMap(review => review.cuisine.split(", ").map(option => option.trim())))];
    const uniqueTags = [...new Set(reviewsData.flatMap(review => review.tags.split(", ").filter(tag => tag !== "").map(option => option.trim())))];
    
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
                    Restaurant Reviews & Reccomendations are still in progress.<br/>

                    Hey there, welcome to my Seattle foodie guide! Think of this as my personal rundown of the best spots in town.
                    Whether you're craving a hearty meal, a perfect cup of coffee, or some refreshing boba, this list has got you covered.
                </p>

                <div className={`grid-page ${isMobile ? 'mobile' : ''}`}>
                    {isMobile ? (
                        <>
                            <ReviewsFilter
                                typeOption={typeOption}
                                cuisineOption={cuisineOption}
                                mealOption={mealOption}
                                priceOption={priceOption}
                                ratingOption={ratingOption}
                                tagOption={tagOption}
                                uniqueTypes={uniqueTypes}
                                uniqueCuisines={uniqueCuisines}
                                uniqueTags={uniqueTags}
                                onTypeChange={handleTypeChange}
                                onCuisineChange={handleCuisineChange}
                                onMealChange={handleMealChange}
                                onPriceChange={handlePriceChange}
                                onRatingChange={handleRatingChange}
                                onTagChange={handleTagChange}
                            />
                            <ReviewsGrid
                                reviews={reviewsData}
                                typeOption={typeOption}
                                cuisineOption={cuisineOption}
                                mealOption={mealOption}
                                priceOption={priceOption}
                                ratingOption={ratingOption}
                                tagOption={tagOption}
                            />
                        </>
                    ) : (
                        <>
                            <ReviewsGrid
                                reviews={reviewsData}
                                typeOption={typeOption}
                                cuisineOption={cuisineOption}
                                mealOption={mealOption}
                                priceOption={priceOption}
                                ratingOption={ratingOption}
                                tagOption={tagOption}
                            />
                            <ReviewsFilter
                                typeOption={typeOption}
                                cuisineOption={cuisineOption}
                                mealOption={mealOption}
                                priceOption={priceOption}
                                ratingOption={ratingOption}
                                tagOption={tagOption}
                                uniqueTypes={uniqueTypes}
                                uniqueCuisines={uniqueCuisines}
                                uniqueTags={uniqueTags}
                                onTypeChange={handleTypeChange}
                                onCuisineChange={handleCuisineChange}
                                onMealChange={handleMealChange}
                                onPriceChange={handlePriceChange}
                                onRatingChange={handleRatingChange}
                                onTagChange={handleTagChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ReviewsPage;