import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import closetData from '../closet-data.json';

const ClosetItemPage = ({ params }) => {
    const item = closetData[params.id - 1];
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{item.name}</title>
                <meta name="description" content={item.description}/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/fashion" className="link">Fashion</Link> | <Link href="/fashion/closet" className="link">Closet</Link> | {item.name}
                </h2>
                <section>
                    <div className="item">
                        <div className="item-images">
                            <img src={item.image1} alt="Clothing Item Image 1"/>
                            <img src={item.image2} alt="Clothing Item Image 2"/>
                        </div>
                        <div className="item-details">
                            <div className="section-skinny">
                                <div className="item-details-brand">{item.brand}</div>
                                <div className="item-details-name">{item.name}</div>
                            </div>
                            <div className="body-lower">{item.description}</div>
                            <div className="section-skinny">
                                <div className="body-upper"><b>Size</b>: {item.size}</div>
                                <div className="body-upper"><b>Material</b>: {item.material}</div>
                                <div className="body-upper"><b>Color</b>: {item.color}</div>
                                <div className="body-upper"><b>Made In</b>: {item.made}</div>
                                <div className="body-upper"><b>Category</b>: {item.category}</div>
                            </div>
                            <div className="section-skinny">
                                <div className="body-upper"><b>Condition</b>: {item.condition}</div>
                                <div className="body-upper"><b>Carbon Emissions</b>: {item.carbon}</div>
                                <div className="body-upper"><b>Water Emissions</b>: {item.water}</div>
                            </div>
                            <div className="section-skinny">
                                <div className="body-upper"><b>Purchase Cost</b>: {item.cost}</div>
                                <div className="body-upper"><b>Purchase Date</b>: {item.date}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ClosetItemPage;