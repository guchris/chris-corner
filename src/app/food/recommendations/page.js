import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const RecommendationsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Recommendations</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/food" className="link">Food</Link> | Recommendations
                </h2>
                <p className="intro">
                    Restaurant Reviews & Reccomendations. Coming soon.
                </p>

                <div className="section">
                    <h4 className="section-title">Seattle Restaurants</h4>
                    <div className="section-skinny">
                        <p className="body-upper">Imo Pocha (이모포차)</p>
                        <p className="body-upper">Seoul Tofu & Jjim</p>
                        <p className="body-upper">Pho Than Brothers</p>
                        <p className="body-upper">Rondo Japanese Kitchen</p>
                        <p className="body-upper">Fogón Cocina Mexicana</p>
                        <p className="body-upper">Pelicana Chicken</p>
                        <p className="body-upper">Biang Biang Noodles</p>
                        <p className="body-upper">Ayutthaya Thai Restaurant</p>
                        <p className="body-upper">Kati Vegan Thai</p>
                        <p className="body-upper">Mendocino Farms</p>
                        <p className="body-upper">Vinason Pho Kitchen</p>
                        <p className="body-upper">Pagliacci Pizza</p>
                        <p className="body-upper">Poquitos</p>
                        <p className="body-upper">Bai Tong Thai Street Cafe</p>
                        <p className="body-upper">Plum Bistro</p>
                        <p className="body-upper">Tamari Bar</p>
                        <p className="body-upper">Mamnoon</p>
                        <p className="body-upper">Bangrak Market</p>
                        <p className="body-upper">Tilikum Place Cafe</p>
                        <p className="body-upper">Momiji</p>
                        <p className="body-upper">Lucky's Pho</p>
                        <p className="body-upper">Sizzle&Crunch</p>
                        <p className="body-upper">Ba Bar Green</p>
                        <p className="body-upper">Portage Bay Cafe</p>
                        <p className="body-upper">Li'l Woody's</p>
                        <p className="body-upper">Kizuki Ramen & Izakaya</p>
                        <p className="body-upper">Tavolàta Capitol Hill</p>
                        <p className="body-upper">Meet Korean BBQ</p>
                        <p className="body-upper">Menya Musashi Tsukemen & Ramen</p>
                        <p className="body-upper">Lost Lake Cafe & Lounge</p>
                        <p className="body-upper">HoneyHole Sandwiches</p>
                        <p className="body-upper">COMMUNION Restaurant & Bar</p>
                        <p className="body-upper">Cafe Flora</p>
                        <p className="body-upper">Westman's Bagel and Coffee</p>
                        <p className="body-upper">Osteria la Spiga</p>
                        <p className="body-upper">Di Fiora</p>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">Seattle Cafes</h4>
                    <div className="section-skinny">
                        <p className="body-upper">Oddfellows Café + Bar</p>
                        <p className="body-upper">Café Hagen</p>
                        <p className="body-upper">Espresso Vivace</p>
                        <p className="body-upper">Wunderground Cafe</p>
                        <p className="body-upper">NEKO Cat Cafe Seattle</p>
                        <p className="body-upper">Artly Coffee</p>
                        <p className="body-upper">Starbucks Reserve Roastery</p>
                        <p className="body-upper">Victrola Coffee Roasters</p>
                        <p className="body-upper">Tailwind Café at Good Weather</p>
                        <p className="body-upper"></p>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">Seattle Queer Bars</h4>
                    <div className="section-skinny">
                        <p className="body-upper">Queer Bar</p>
                        <p className="body-upper">Union</p>
                        <p className="body-upper">Massive</p>
                        <p className="body-upper">Pony</p>
                        <p className="body-upper">Kremwerk</p>
                        <p className="body-upper">The Cuff Complex</p>
                        <p className="body-upper">Diesel</p>
                        <p className="body-upper">Unicorn</p>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">Seattle Bars</h4>
                    <div className="section-skinny">
                        <p className="body-upper">Tavern Law</p>
                        <p className="body-upper">Inside Passage</p>
                        <p className="body-upper">Life On Mars</p>
                        <p className="body-upper">Cha Cha Lounge</p>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">Seattle Desserts</h4>
                    <div className="section-skinny">
                        <p className="body-upper">Molly Moon's Homemade Ice Cream</p>
                        <p className="body-upper">Salt & Straw</p>
                        <p className="body-upper">R+M Dessert Bar</p>
                        <p className="body-upper">Tea Addicts</p>
                        <p className="body-upper">Drip Tea</p>
                        <p className="body-upper">Dough Joy</p>
                        <p className="body-upper">Half and Half Doughnut Co.</p>
                        <p className="body-upper">Nana’s Green Tea</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecommendationsPage;