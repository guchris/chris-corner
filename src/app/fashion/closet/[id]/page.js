import React from 'react';
import Head from 'next/head';

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
                <h2 className="directory">Fashion / Closet / {item.name}</h2>
                <section>
                    <div className="item-details">
                        <div className="item-details-images">
                            <img src={item.image1} alt="Clothing Item Image 1"/>
                            <img src={item.image2} alt="Clothing Item Image 2"/>
                        </div>
                        <div className="item-details-text">
                            <div className="item-details-main">
                                <div className="item-details-brand">{item.brand}</div>
                                <div className="item-details-name">{item.name}</div>
                                <div className="item-details-description">{item.description}</div>
                            </div>
                            <div className="item-details-meta">
                                <div className="item-details-attribute"><b>Size</b>: {item.size}</div>
                                <div className="item-details-attribute"><b>Material</b>: {item.material}</div>
                                <div className="item-details-attribute"><b>Color</b>: {item.color}</div>
                                <div className="item-details-attribute"><b>Made In</b>: {item.made}</div>
                                <div className="item-details-attribute"><b>Category</b>: {item.category}</div>
                            </div>
                            <div className="item-details-meta">
                                <div className="item-details-attribute"><b>Condition</b>: {item.condition}</div>
                                <div className="item-details-attribute"><b>Carbon Emissions</b>: {item.carbon}</div>
                                <div className="item-details-attribute"><b>Water Emissions</b>: {item.water}</div>
                            </div>
                            <div className="item-details-meta">
                                <div className="item-details-attribute"><b>Purchase Cost</b>: {item.cost}</div>
                                <div className="item-details-attribute"><b>Purchase Date</b>: {item.date}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

// export async function getStaticPaths() {
//     const paths = closetData.map((item) => ({
//         params: { id: item.id.toString() },
//     }));

//     return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//     const itemId = parseInt(params.id);
//     const item = closetData.find((item) => item.id === itemId);

//     return {
//         props: {
//             item,
//         },
//     };
// }


export default ClosetItemPage;