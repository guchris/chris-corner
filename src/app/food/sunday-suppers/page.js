import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
                    Sunday Suppers is my cherished weekly tradition with my best friend Anjuli. It's our way of blending the joy of cooking with genuine connection every weekend.
                    Throughout the week, we find and choose a recipe, split the ingredients, and cook together at my place. It's more than just a meal; it's an opportunity for deep conversations and laughter as we savor the process.<br/><br/>
                    We capture our culinary creations in photos, indulge in the delicious results, and then add a unique touch — scoring and ranking each dish against previous ones.
                    This ritual combines my love for cooking and quality time, making memories and forming deeper connections.
                </p>

                <h4 className="section-title">Scoring System</h4>
                <div className="section-gap">
                    <p className="body-lower">A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.</p>
                    <div className="section-skinny">
                        <p className="body-upper-bold">Taste (10 points)</p>
                        <p className="body-lower">The overall flavor profile and how enjoyable the dish is.<br/>Does the food taste good? Does the dish come together?</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">Appearance (5 points)</p>
                        <p className="body-lower">The visual appeal and arrangement of the dish.<br/>Is the food Instagram-worthy? Does the dish come together?</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">Effort (5 points)</p>
                        <p className="body-lower">The dedication and skill required in preparing the dish.<br/>How long did the dish demand? How labor-intensive or intricate was the process?</p>
                    </div>
                    <div className="section-skinny">
                        <p className="body-upper-bold">Misc (5 points)</p>
                        <p className="body-lower">The memorability and creativity of the dish.<br/>Is the food made in a creative way? Is it a unique cooking experience?</p>
                    </div>
                </div>

                <h4 className="section-title">Current Rankings</h4>
                <div className="section-skinny">
                    <div className="row-skinny">
                        <p className="body-lower">39.5</p>
                        <Link href="sunday-suppers/sweet-potato-balls" className="body-upper">Sweet Potato Balls</Link>
                    </div>
                    <div className="row-skinny">
                        <p className="body-lower">39.0</p>
                        <a href="#" className="body-upper">Squash Gnocchi Soup</a>
                    </div>
                    <div className="row-skinny">
                        <p className="body-lower">XX</p>
                        <a href="#" className="body-upper">Crispy Gochujang Tofu</a>
                    </div>
                    <div className="row-skinny">
                        <p className="body-lower">XX</p>
                        <a href="#" className="body-upper">Scissor Cut Noodles</a>
                    </div>
                    <div className="row-skinny">
                        <p className="body-lower">XX</p>
                        <a href="#" className="body-upper">Fried Spring Rolls</a>
                    </div>
                    <div className="row-skinny">
                        <p className="body-lower">XX</p>
                        <a href="#" className="body-upper">Thiccc Potato Noodles</a>
                    </div>
                    <div className="row-skinny">
                        <p className="body-lower">XX</p>
                        <a href="#" className="body-upper">Cabbage Dumplings</a>
                    </div>
                    <div className="row-skinny">
                        <p className="body-lower">XX</p>
                        <a href="#" className="body-upper">Cauliflower Steaks</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SundaySuppersPage;