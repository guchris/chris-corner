import React from 'react';
import Head from 'next/head';
import MenuGrid from '@/components/MenuGrid';

import brewsData from './brews-data.json';

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
                    <MenuGrid brews={brewsData} />
                </section>
            </div>
        </>
    );
};

export default BrewsAndBitesPage;