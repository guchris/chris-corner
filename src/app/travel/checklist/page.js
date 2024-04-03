import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ChecklistPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Checklist</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/travel" className="link">Travel</Link> | Checklist
                </h2>

                <p className="intro">
                    Traveling brings me so much joy. Solo-traveling, even more so.<br/>
                    Below are places I've been and places I will be.
                </p>

                <div className="section">
                    <h4 className="section-title">Upcoming</h4>
                        <div className="row-skinny">
                            <p className="body-upper">[04/2024]</p>
                            <p className="body-upper">New York City, New York</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[04/2024]</p>
                            <p className="body-upper">Reykjavik, Iceland</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[05/2024]</p>
                            <p className="body-upper">Taipei, Taiwan</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[05/2024]</p>
                            <p className="body-upper">Seoul, South Korea</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[05/2024]</p>
                            <p className="body-upper">Tokyo, Japan</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[07/2024]</p>
                            <p className="body-upper">Morocco, Africa</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[08/2024]</p>
                            <p className="body-upper">Puerto Vallarta, Mexico</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[08/2024]</p>
                            <p className="body-upper">Guadalajara, Mexico</p>
                        </div>
                        <div className="row-skinny">
                            <p className="body-upper">[08/2024]</p>
                            <p className="body-upper">Mexico City, Mexico</p>
                        </div>
                </div>

                <div className="section">
                    <h4 className="section-title">Wishlist</h4>
                    <div className="section-skinny">
                        <p className="body-upper">Fairbanks, Alaska</p>
                        <p className="body-upper">Sydney, Australia</p>
                        <p className="body-upper">Christchurch, New Zealand</p>
                        <p className="body-upper">Auckland, New Zealand</p>
                        <p className="body-upper">Cape Town, South Africa</p>
                        <p className="body-upper">Milan, Italy</p>
                        <p className="body-upper">Rome, Italy</p>
                        <p className="body-upper">Florence, Italy</p>
                        <p className="body-upper">Sicily, Italy</p>
                        <p className="body-upper">Berlin, Germany</p>
                        <p className="body-upper">Vienna, Austria</p>
                        <p className="body-upper">Budapest, Hungary</p>
                        <p className="body-upper">Bangkok, Thailand</p>
                        <p className="body-upper">Chiang Mai, Thailand</p>
                        <p className="body-upper">Hanoi, Vietnam</p>
                        <p className="body-upper">Ho Chi Minh City, Vietnam</p>
                        <p className="body-upper">Helsinki, Finland</p>
                        <p className="body-upper">Cairo, Egypt</p>
                    </div>
                </div>

                <div className="section">
                    <h4 className="section-title">Trek TODOs</h4>
                    <div className="section-skinny">
                        <p className="body-upper">Torres Del Paine, Chile (80 miles)</p>
                        <p className="body-upper">Manaslu Circuit, Nepal (100 miles)</p>
                        <p className="body-upper">Dolomites Alta Via 1, Italy (75 miles)</p>
                        <p className="body-upper">Picos De Europa, Spain (90 miles)</p>
                        <p className="body-upper">West Highland Way, Scotland (100 miles)</p>
                        <p className="body-upper">Kepler Track, New Zealand (43 miles)</p>
                        <p className="body-upper">Routeburn Track, New Zealand (25 miles)</p>
                        <p className="body-upper">Milford Track, New Zealand (41 miles)</p>
                    </div>
                </div>


                <div className="section">
                    <h4 className="section-title">Traveled</h4>
                    <div className="row-skinny">
                        <p className="body-upper">[02/2024]</p>
                        <p className="body-upper">Manuel Antonio, Costa Rica</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[02/2024]</p>
                        <p className="body-upper">La Fortuna, Costa Rica</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[02/2024]</p>
                        <p className="body-upper">Lake Atitlán, Guatemala</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[02/2024]</p>
                        <p className="body-upper">Antigua, Guatemala</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[01/2024]</p>
                        <p className="body-upper">Los Angeles, CA, USA</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[11/2023]</p>
                        <p className="body-upper">St. Louis, MO, WA</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[11/2023]</p>
                        <p className="body-upper">Madrid, Spain</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[11/2023]</p>
                        <p className="body-upper">Barcelona, Spain</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[10/2023]</p>
                        <p className="body-upper">Oslo, Norway</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[10/2023]</p>
                        <p className="body-upper">Stockholm, Sweden</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[10/2023]</p>
                        <p className="body-upper">New York, NY, USA</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[09/2023]</p>
                        <p className="body-upper">Olympic, WA, USA</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[09/2023]</p>
                        <p className="body-upper">Trient, Switzerland</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[09/2023]</p>
                        <p className="body-upper">Courmayeur, Italy</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[09/2023]</p>
                        <p className="body-upper">Chamonix, France</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[07/2023]</p>
                        <p className="body-upper">San Francisco, CA, USA</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[07/2023]</p>
                        <p className="body-upper">Hayden, Idaho</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[07/2023]</p>
                        <p className="body-upper">Prague, Czech Republic</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[07/2023]</p>
                        <p className="body-upper">Munich, Germany</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[07/2023]</p>
                        <p className="body-upper">Luxembourg, Luxembourg</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[07/2023]</p>
                        <p className="body-upper">Brussels, Belgium</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[06/2023]</p>
                        <p className="body-upper">London, United Kingdom</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[06/2023]</p>
                        <p className="body-upper">San Jose, CA, USA</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[05/2023]</p>
                        <p className="body-upper">San Francisco, CA, USA</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[05/2023]</p>
                        <p className="body-upper">Tokyo, Japan</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[05/2023]</p>
                        <p className="body-upper">Vancouver, Canada</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[04/2023]</p>
                        <p className="body-upper">Porto, Portugal</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[03/2023]</p>
                        <p className="body-upper">Lisbon, Portugal</p>
                    </div>
                    <div className="row-skinny">
                        <p className="body-upper">[01/2023]</p>
                        <p className="body-upper">Los Angeles, CA, USA</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChecklistPage;