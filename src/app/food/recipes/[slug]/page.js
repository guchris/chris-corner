import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import recipesData from '../recipes-data.json';

const RecipePage = ({ params }) => {

    const recipe = recipesData.find(recipe => recipe.slug === params.slug);

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Recipes</title>
                <meta name="description" content="Lorem ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/food" className="link">Food</Link> | <Link href="/food/recipes" className="link">Recipes</Link> | {recipe.name}
                </h2>

                <div className="recipe-image">
                    <img src={"/food/recipes/" + recipe.image1} alt="Recipe Image"/>
                </div>

                <div className="recipe-content">
                    <h4 className="section-title">{recipe.name}</h4>
                    <div className="section-gap">
                        <div className="section-skinny">
                            <p className="body-upper">Servings: {recipe.servings}</p>
                            <p className="body-upper">Prep Time: {recipe.time.prep} | Bake Time: {recipe.time.bake} | Total Time: {recipe.time.total}</p>
                        </div>
                        <p className="body-lower">{recipe.description}</p>
                    </div>

                    {recipe.components.map((component, index) => (
                        <div key={index} className="section">
                            <h3 className="section-title">{component.name}</h3>

                            <div className="section-medium">
                                <h4 className="section-subtitle">Ingredients</h4>
                                <ul className="bullets">
                                    {component.ingredients.map((ingredient, idx) => (
                                        <li key={idx}>
                                            {ingredient.quantity} {ingredient.unit} {ingredient.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="section-medium">
                                <h4 className="section-subtitle">Method</h4>
                                <ul className="bullets">
                                    {component.method.map((step, idx) => (
                                        <li key={idx}>{step}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="section-medium">
                                <h4 className="section-subtitle">Tips:</h4>
                                <ul className="bullets">
                                    {component.tips.map((tip, idx) => (
                                        <li key={idx}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RecipePage;