import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import KanbanItinerary from '@/components/KanbanItinerary';

import guidesData from '../guides-data.json';

const GuidePage = ({ params }) => {
    const guide = guidesData.find(item => item.slug === params.slug);
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Guide</title>
                <meta name="description" content="Lorem ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/travel" className="link">Travel</Link> | <Link href="/travel/guides" className="link">Guides</Link> | {guide.destination}
                </h2>

                <h4 className="section-title">Summary</h4>
                <div className="section-gap">
                    <p className="body-lower">{guide.summary}</p>
                </div>

                <h4 className="section-title">Itinerary</h4>
                <KanbanItinerary itinerary={guide.itinerary} />

                {/* <div className="section-gap">
                    <ul className="bullets">
                        {guide.itinerary.map((day, index) => (
                            <li key={index}>
                                <strong>{day.day}</strong>
                                <ul>
                                    {day.activities.map((activity, idx) => (
                                        <li key={idx}>{activity}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* <h4 className="section-title">Recommendations</h4>
                <div className="section-gap">
                    <h3 className="section-subtitle">Places</h3>
                    <ul className="bullets">
                        {guide.recommendations.places.map((place, index) => (
                            <li key={index}>
                                <strong>{place.name}</strong>: {place.description}
                            </li>
                        ))}
                    </ul>
                    <h3 className="section-subtitle">Activities</h3>
                    <ul className="bullets">
                        {guide.recommendations.activities.map((activity, index) => (
                            <li key={index}>
                                <strong>{activity.name}</strong>: {activity.description}
                            </li>
                        ))}
                    </ul>
                    <h3 className="section-subtitle">Restaurants</h3>
                    <ul className="bullets">
                        {guide.recommendations.restaurants.map((restaurant, index) => (
                            <li key={index}>
                                <strong>{restaurant.name}</strong>: {restaurant.description}
                            </li>
                        ))}
                    </ul>
                </div> */}
                
                {/* <div className="section-gap">
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Transportation</h3>
                        <p className="body-lower">{guide.transportation}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Accommodation</h3>
                        <p className="body-lower">{guide.accommodation}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Tips</h3>
                        <p className="body-lower">{guide.tips}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Cost Estimate</h3>
                        <p className="body-lower">{guide.cost_estimate}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Language Spoken</h3>
                        <p className="body-lower">{guide.language_spoken}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Currency Used</h3>
                        <p className="body-lower">{guide.currency_used}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Weather Information</h3>
                        <p className="body-lower">{guide.weather_information}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Best Time to Visit</h3>
                        <p className="body-lower">{guide.best_time_to_visit}</p>
                    </div>
                    <div className="section-skinny">
                        <h3 className="section-subtitle">Local Customs</h3>
                        <p className="body-lower">{guide.local_customs}</p>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default GuidePage;