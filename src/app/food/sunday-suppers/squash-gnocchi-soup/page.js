import React from 'react';
import Head from 'next/head';

const SquashGnocchiSoupPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Squash Gnocchi Soup</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Food / Sunday Suppers / Squash Gnocchi Soup</h2>

                <div className="section">
                    <div className="food-images">
                        <img src="squash-gnocchi-soup-1.png" alt="Image 1" className="food-image"/>
                        <img src="squash-gnocchi-soup-2.png" alt="Image 2" className="food-image"/>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">The Story</h4>
                    <p className="date">Sunday, October 3, 2023</p>
                    <p className="story">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend vulputate tincidunt. Cras quis facilisis sem. Sed nec commodo ante, quis molestie elit. Suspendisse quam felis, interdum ut scelerisque non, tristique a purus. Vestibulum dictum malesuada ante nec venenatis. Donec fermentum laoreet risus et cursus. Curabitur ac est sit amet arcu rutrum vestibulum.<br/><br/>
                        Nunc luctus dolor finibus lorem elementum posuere. Etiam lorem lectus, aliquam sed ultrices ut, venenatis vitae odio. Vestibulum sed viverra quam. Pellentesque eros diam, convallis cursus eros sed, consequat tristique mauris. Suspendisse bibendum risus sed purus tristique, consectetur posuere lectus pulvinar. Donec ultricies dignissim tortor, in efficitur quam elementum non. Nunc quis erat tortor. Etiam congue vitae diam porttitor auctor. Nulla facilisi. Praesent convallis blandit mauris nec porttitor. Praesent ut eleifend urna. Nunc vitae ex auctor, laoreet est et, suscipit tellus. Integer laoreet, ligula a commodo egestas, ipsum felis tincidunt arcu, vitae pellentesque urna leo eget nulla. Aenean vitae bibendum lacus.
                    </p>
                </div>

                <div className="section">
                    <h4 className="section-title">The Scores</h4>
                    <div className="scores">
                        <div className="score">
                            <p className="score-category">Taste</p>
                            <p className="score-value">X/10</p>
                            <p className="score-value">X/10</p>
                        </div>
                        <div className="score">
                            <p className="score-category">Appearance</p>
                            <p className="score-value">X/5</p>
                            <p className="score-value">X/5</p>
                        </div>
                        <div className="score">
                            <p className="score-category">Effort</p>
                            <p className="score-value">X/5</p>
                            <p className="score-value">X/5</p>
                        </div>
                        <div className="score">
                            <p className="score-category">Misc</p>
                            <p className="score-value">X/5</p>
                            <p className="score-value">X/5</p>
                        </div>
                        <div className="score">
                            <p className="score-category"><b>Total</b></p>
                            <p className="score-value"><b>XX</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SquashGnocchiSoupPage;