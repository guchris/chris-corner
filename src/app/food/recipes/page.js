import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import RecipesGrid from '@/components/RecipesGrid';

import recipesData from './recipes-data.json';

const RecipesPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Recipes</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/food" className="link">Food</Link> | Recipes
                </h2>
                <p className="intro">
                    Some of my favorite recipes I've curated and modified over the years.
                </p>

                <h4 className="section-title">Chris' Recipes</h4>
                <RecipesGrid recipes={recipesData} />
            </div>
        </>
    );
};

export default RecipesPage;