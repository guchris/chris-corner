import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PackingPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Packing</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/travel" className="link">Travel</Link> | Packing Essentials
                </h2>

                <p className="intro">
                    Based on my travel experience, I've compiled essential packing lists tailored to different types of trips. Whether you're heading for a weekend getaway, a hiking adventure, a beach escape, or backpacking journey, these lists will cover all of your needs.<br/><br/>
                    Italicized text indicates "if required" / "if applicable".<br/><br/>
                    Lists and content still in progress.
                </p>

                <div className="section">

                    <h4 className="section-title">Bags</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Carry-On (Luggage/Big Backpack)</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Personal Item (Backpack)</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Crossbody Bag</p>
                        </div>
                    </div>


                    <h4 className="section-title">Wallet and Documents</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Passport</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Visa</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">ID Card</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Credit Card (no foreign transaction fees)</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>   
                            <p className="body-upper-margin-top">Debit Card (no withdrawl fees)</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Emergency Cash</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Local Cash</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>   
                            <p className="body-upper-margin-top"><i>Airport Lounge Card</i></p>
                        </div>
                    </div>

                    <h4 className="section-title">Technology</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Phone + Charger</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Phone Data (if eSIM, use Airalo)</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Power Bank</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Laptop/Tablet + Charger</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Earbuds/Headphones + Charger</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Airtags</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Watch + Charger</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Travel Adapter</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Offline Google Maps</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Offline Google Translate</i></p>
                        </div>
                    </div>

                    <h4 className="section-title">Toiletries</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Toothbrush</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Toothpaste</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Floss</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Shampoo</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Conditioner</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>   
                            <p className="body-upper-margin-top">Body Wash</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Face Wash</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>   
                            <p className="body-upper-margin-top">Moisturizer</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Sunscreen</p>
                        </div>
                    </div>

                    <h4 className="section-title">Medical</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Pain Relief Pills</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Glasses/Contacts</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Prescription Medications</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Fiber Pills</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Motion Sickness Pills</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>PREP Pills</i></p>
                        </div>
                    </div>

                    <h4 className="section-title">Clothing Main</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Tops</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Bottoms</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Jacket</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Socks</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Underwear</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Swimwear</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Formalwear</i></p>
                        </div>
                    </div>

                    <h4 className="section-title">Clothing Accessories</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Hat</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Jewelry</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Belt</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Gloves</i></p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Scarf</i></p>
                        </div>
                    </div>

                    <h4 className="section-title">Footwear</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Walking Shoes</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Sandals</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top"><i>Hiking Shoes</i></p>
                        </div>
                    </div>

                    <h4 className="section-title">Other</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Reusuable Waterbottle</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Sunglasses</p>
                        </div>
                    </div>

                    <h4 className="section-title">Backpacking</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Backpacking Backpack</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>
                            <p className="body-upper-margin-top">Combination Lock</p>
                        </div>
                        <div className="row-skinny">
                            <input type="checkbox"/>   
                            <p className="body-upper-margin-top">Microfiber Towel</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackingPage;