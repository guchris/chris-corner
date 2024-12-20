import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const GoalsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Goals</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">
                    <Link href="/about-me" className="link">About Me</Link> | Goals
                </h2>
    
                <p className="intro">
                    Setting clear, actionable goals is a powerful way to stay focused and motivated throughout the year. This page serves as a personal roadmap for 2024, outlining the key milestones I aim to achieve. From expanding my horizons through travel to pursuing professional growth, creative expression, and personal fitness, each goal reflects my commitment to continuous improvement and living life with intention. By tracking these goals publicly, I hold myself accountable and invite others to join me on this journey of growth and discovery.
                    {/* In my approach to setting and achieving goals, I prioritize consistency and acknowledge the possibility of failure.
                    I've categorized my goals into two main groups: those I track weekly and those that are north star endeavors.<br/><br/>
                    
                    For the weekly goals, I mark each as either "true" with a black fill or "false" with a gray fill.
                    Success, in my system, is defined by achieving a rate of over 70% "true" by the end of a 13-week quarter.
                    This structured and measurable approach has evolved from experienting with various online goal-setting stratgies and templates over the years, and has proven to be a reliable method for assessing and achieving my life goals. */}
                </p>
                
                {/* <div className="section">
                    <h3 className="section-title">2024 Long Term Goals</h3>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <p className="checkbox-text">Build out Chris' Corner</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Continue to adventure</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Engage with strangers</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Make new friendships</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Stay fit and active</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">3x strength training</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Cook at home</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>

                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Dress to impress</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>

                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                
                <div className="section">
                    <h3 className="section-title">2024 Goals</h3>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <p className="checkbox-text">Travel to 5 new countries</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Secure a PM job</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Fall in love</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Run a 3:30 full marathon</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Run a 1:40 half marathon</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Publish Chris' Corner beta</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Publish happns beta</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Publish worn beta</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Sell 100 HLR cards</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Release new HLR cards</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GoalsPage;