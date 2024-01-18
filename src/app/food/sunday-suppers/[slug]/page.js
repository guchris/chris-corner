import React from 'react';
import Head from 'next/head';

import suppersData from '../suppers-data.json';

const SupperPage = ({ params }) => {
    const supper = suppersData.find(item => item.slug === params.slug);
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Sunday Supper</title>
                <meta name="description" content="Lorem ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Food | Sunday Suppers | {supper.name}</h2>

                <div className="section">
                    <div className="row-skinny">
                        <img src={supper.image1} alt="Image 1" className="image-small"/>
                        <img src={supper.image2} alt="Image 2" className="image-small"/>
                    </div>
                </div>

                <h4 className="section-title">The Story</h4>
                <div className="section-gap">
                    <p className="caption-upper">{supper.date}</p>
                    <p className="body-lower">{supper.story}</p>
                </div>

                <div className="section">
                    <h4 className="section-title">The Scores</h4>
                    <div className="section-skinny">
                        <div className="row-skinny">
                            <p className="ranking-category">Taste</p>
                            <p className="body-lower">{supper.catgory1score1}</p>
                            <p className="body-lower">{supper.catgory1score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="ranking-category">Appearance</p>
                            <p className="body-lower">{supper.catgory2score1}</p>
                            <p className="body-lower">{supper.catgory2score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="ranking-category">Effort</p>
                            <p className="body-lower">{supper.catgory3score1}</p>
                            <p className="body-lower">{supper.catgory3score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="ranking-category">Misc</p>
                            <p className="body-lower">{supper.catgory4score1}</p>
                            <p className="body-lower">{supper.catgory4score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="ranking-category"><b>Total</b></p>
                            <p className="body-lower"><b>{supper.totalScore}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupperPage;