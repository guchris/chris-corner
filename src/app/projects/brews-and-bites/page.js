import React from 'react';
import Head from 'next/head';

const BrewsAndBitesPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Brews & Bites</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Projects | Brews & Bites</h2>

                <p className="intro">
                    Building community is important to me. Maintaining and deepning friendships is too.
                    And with my appreciate and love for coffee, I knew that hosting my own pop-up coffee shop in my apartment would be the most perfect blend. Hence, Brews & Bites.<br/><br/>
                    
                    Not only is this a space for me to form more meaningful connections, it's also an opportunity for me to improve my barista skills, pursue my passion for baking, flex my design skills with each menu, and even get more use out of my space!
                    Would 100% reccomend.
                </p>

                <section>
                    <h4 className="section-title">Iterations</h4>
                    <div className="menu-grid">
                        <img src="brews-and-bites/temp.png" alt="Temp Menu"/>
                        <div className="menu-wrapper">
                            <img src="brews-and-bites/v3-front.png" alt="Brews & Bites v3 Menu - Front"/>
                            <img className="hover-image" src="brews-and-bites/v3-back.png" alt="Brews & Bites v3 Menu - Back"/>
                        </div>
                        <div className="menu-wrapper">
                            <img src="brews-and-bites/v2-front.png" alt="Brews & Bites v2 Menu - Front"/>
                            <img className="hover-image" src="brews-and-bites/v2-back.png" alt="Brews & Bites v2 Menu - Back"/>
                        </div>
                        <div className="menu-wrapper">
                            <img src="brews-and-bites/v1-front.png" alt="Brews & Bites v1 Menu - Front"/>
                            <img className="hover-image" src="brews-and-bites/v1-back.png" alt="Brews & Bites v1 Menu - Back"/>
                        </div>
                        <div className="menu-wrapper">
                            <img src="brews-and-bites/v0-front.png" alt="Brews & Bites v0 Menu - Front"/>
                            <img className="hover-image" src="brews-and-bites/v0-back.png" alt="Brews & Bites v0 Menu - Back"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BrewsAndBitesPage;