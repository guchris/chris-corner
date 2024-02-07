import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
                <h2 className="directory">
                    <Link href="/food" className="link">Food</Link> | <Link href="/food/sunday-suppers" className="link">Sunday Suppers</Link> | {supper.name}
                </h2>

                <div className="section">
                    <div className="image-grid-large">
                        <img src={"/food/sunday-suppers/" + supper.image1} alt="Image 1"/>
                        <img src={"/food/sunday-suppers/" + supper.image2} alt="Image 2"/>
                    </div>
                </div>

                <h4 className="section-title">The Story</h4>
                <div className="section-gap">
                    <p className="caption-upper">{supper.date}</p>
                    <div className="body-lower" dangerouslySetInnerHTML={{ __html: supper.story }} />
                </div>

                <div className="section">
                    <h4 className="section-title">The Scores</h4>
                    <div className="section-skinny">
                        <div className="row-skinny">
                            <p className="body-upper row-width-100">Taste</p>
                            <p className="body-lower">{supper.catgory1score1}</p>
                            <p className="body-lower">{supper.catgory1score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper row-width-100">Appearance</p>
                            <p className="body-lower">{supper.catgory2score1}</p>
                            <p className="body-lower">{supper.catgory2score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper row-width-100">Effort</p>
                            <p className="body-lower">{supper.catgory3score1}</p>
                            <p className="body-lower">{supper.catgory3score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper row-width-100">Misc</p>
                            <p className="body-lower">{supper.catgory4score1}</p>
                            <p className="body-lower">{supper.catgory4score2}</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper row-width-100"><b>Total</b></p>
                            <p className="body-lower"><b>{supper.totalScore}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupperPage;