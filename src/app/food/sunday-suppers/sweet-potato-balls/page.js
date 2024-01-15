import React from 'react';
import Head from 'next/head';

const SweetPotatoBallsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Sweet Potato Balls</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Food / Sunday Suppers / Sweet Potato Balls</h2>

                <div className="section">
                    <div className="food-images">
                        <img src="sweet-potato-balls-1.png" alt="Image 1" className="food-image"/>
                        <img src="sweet-potato-balls-2.png" alt="Image 2" className="food-image"/>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">The Story</h4>
                    <p className="date">Sunday, December 3, 2023</p>
                    <p className="story">
                        Doomscrolling on TikTok as a I usually do, I swiped across this mesmerizing dish by @littlefatboyfrankie - sweet potato mochi balls, looking like gnocchi, drenched in an Asian gochujang sauce. Totally screamed Korean tteobokki vibes. Naturally, I had to share this gem with Anjuli, and bam, it became our December 3rd mission.<br/><br/>
                        So, we gather all the goods, and jackpot - everything's in the pantry, except the sweet potato. Quick market run, and plot twist - the sweet potatoes we snagged were white, not the vibrant orange we envisioned. No biggie though, it still tasted like sweet potato, so we were in the clear.<br/><br/>
                        Following the recipe, we boiled the spuds, mixed in the dry ingredients, and dove into the dough-making journey. But hold up—more corn starch and rice flour than expected. Did it stop us? Nah. Rolling the dough into mini balls became a marathon. Fragile dough, endless rolling, and countless stories - some juicier than the dish itself. Hours later, an army of over a hundred dough babies stood triumphant.<br/><br/>
                        After their hot bath, these mochi balls were ready for a sauté dance with our special sauce. The sauce, though, had its quirks. Everything made sense, except the cheese part. Mozzarella stepped in for parmesan, and let me tell you, it took a detour. Instead of melting into the sauce, it turned into this delightful, candy-like chewiness.<br/><br/>
                        As mochi balls and sauce twirled in our saucepan, it was showtime. Bowls at the ready, white sesame seeds on standby—mission complete. Popped one in my mouth, and whoa, the chewy goodness made every ounce of effort worthwhile. The texture was like a dream. And that chewy cheese? A revelation. Anjuli took a bite, the reaction? Pure astonishment. We both nodded in agreement; this mishmash of ingredients was a winner. A top contender in our Sunday Suppers ranking, no doubt.
                    </p>
                </div>

                <div className="section">
                    <h4 className="section-title">The Scores</h4>
                    <div className="scores">
                        <div className="score">
                            <p className="score-category">Taste</p>
                            <p className="score-value">8/10</p>
                            <p className="score-value">8/10</p>
                        </div>
                        <div className="score">
                            <p className="score-category">Appearance</p>
                            <p className="score-value">3/5</p>
                            <p className="score-value">4/5</p>
                        </div>
                        <div className="score">
                            <p className="score-category">Effort</p>
                            <p className="score-value">2/5</p>
                            <p className="score-value">2/5</p>
                        </div>
                        <div className="score">
                            <p className="score-category">Misc</p>
                            <p className="score-value">3/5</p>
                            <p className="score-value">4/5</p>
                        </div>
                        <div className="score">
                            <p className="score-category"><b>Total</b></p>
                            <p className="score-value"><b>34</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SweetPotatoBallsPage;