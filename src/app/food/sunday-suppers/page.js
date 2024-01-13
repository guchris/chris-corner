import React from 'react';
import Head from 'next/head';

const SundaySuppersPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Sunday Suppers</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">Food / Sunday Suppers</h2>

                <p className="intro">
                    Sunday Suppers is my cherished weekly tradition with my dear friend Anjuli. It's our way of blending the joy of cooking with genuine connection every weekend.
                    Throughout the week, we find and choose a recipe, split the ingredients, and cook together at my place. It's more than just a meal; it's an opportunity for deep conversations and laughter as we savor the process.<br/><br/>
                    We capture our culinary creations in photos, indulge in the delicious results, and then add a unique touch — scoring and ranking each dish against previous ones.
                    This ritual combines my love for cooking and quality time, making memories and forming deeper connections.
                </p>

                <div className="section">
                    <h4 className="section-title">Scoring System</h4>
                    <p className="section-description">A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.</p>
                    <div className="categories">
                        <div className="category">
                            <p className="category-title">Taste (10 points)</p>
                            <p className="category-description">The overall flavor profile and how enjoyable the dish is.</p>
                            <p className="category-question">Does the food taste good? Does the dish come together?</p>
                        </div>
                        <div className="category">
                            <p className="category-title">Appearance (5 points)</p>
                            <p className="category-description">The visual appeal and arrangement of the dish.</p>
                            <p className="category-question">Is the food Instagram-worthy? Does the dish come together?</p>
                        </div>
                        <div className="category">
                            <p className="category-title">Effort (5 points)</p>
                            <p className="category-description">The dedication and skill required in preparing the dish.</p>
                            <p className="category-question">How long did the dish demand? How labor-intensive or intricate was the process?</p>
                        </div>
                        <div className="category">
                            <p className="category-title">Misc (5 points)</p>
                            <p className="category-description">The memorability and creativity of the dish.</p>
                            <p className="category-question">Is the food made in a creative way? Is it a unique cooking experience?</p>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">Current Rankings</h4>
                    <div className="rankings">
                        <div className="ranking">
                            <p className="ranking-score">45</p>
                            <a href="#" className="ranking-dish">Sweet Potato Balls</a>
                        </div>
                        <div className="ranking">
                            <p className="ranking-score">40</p>
                            <a href="#" className="ranking-dish">Squash Gnocchi Soup</a>
                        </div>
                        <div className="ranking">
                            <p className="ranking-score">35</p>
                            <a href="#" className="ranking-dish">Crispy Gochujang Tofu</a>
                        </div>
                        <div className="ranking">
                            <p className="ranking-score">30</p>
                            <a href="#" className="ranking-dish">Scissor Cut Noodles</a>
                        </div>
                        <div className="ranking">
                            <p className="ranking-score">25</p>
                            <a href="#" className="ranking-dish">Fried Spring Rolls</a>
                        </div>
                        <div className="ranking">
                            <p className="ranking-score">20</p>
                            <a href="#" className="ranking-dish">Thiccc Potato Noodles</a>
                        </div>
                        <div className="ranking">
                            <p className="ranking-score">15</p>
                            <a href="#" className="ranking-dish">Cabbage Dumplings</a>
                        </div>
                        <div className="ranking">
                            <p className="ranking-score">10</p>
                            <a href="#" className="ranking-dish">Cauliflower Steaks</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SundaySuppersPage;