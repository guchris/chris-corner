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
                    In my approach to setting and achieving goals, I prioritize consistency and acknowledge the possibility of failure.
                    I've categorized my goals into two main groups: those I track weekly and those that are one-time endeavors.
                    Within the weekly tracked goals, I further classify them into "ins" and "outs."
                    "Ins" represent what I aim to incorporate and sustain in my life, while "outs" denote habits or activities I aim to eliminate.<br/><br/>
                    
                    Every week, I assess each goal, marking them as either "true" with a black fill or "false" with a gray fill.
                    Success, in my system, is defined by achieving a rate of over 80% "true" by the end of a 13-week quarter.
                    This structured and measurable approach has evolved from experienting with various online goal-setting stratgies and templates over the years, and has proven to be a reliable method for assessing and achieving my life goals.
                </p>
                
                <div className="section">
                    <h4 className="section-title">2024 Q1 Long Term Goals</h4>
                    <h5 className="section-subtitle">Ins</h5>
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
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Build out Worn</p>
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
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Scale Highs Lows Rainbows</p>
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
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Facetime with friends/family</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
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
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Cook (more) at home</p>
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
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                    </div>
                    <h5 className="section-subtitle">Outs</h5>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <p className="checkbox-text">DoorDash-ing</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Eating late at night</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Impulse spending</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="false"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="true"/>
                                <input type="checkbox" className="empty"/>
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="section">
                    <h4 className="section-title">2024 Singular Goals</h4>
                    <div className="section-medium">
                        <div className="row-skinny">
                            <p className="checkbox-text">Secure a job</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Fall in love</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Run a 3:30 full marathon</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Run a 1:35 half marathon</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Complete a Backpacking Trek</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Summit Mount Baker</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Summit Mount Adams</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Purchase a home</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">Publish 1 YouTube video</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[CC] Publish MVP site</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[CC] Publish complete site</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[HLR] Sell 100 cards</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[HLR] Release new cards</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="true"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[HLR] Become an Etsy Star Seller</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[Worn] Complete Figma Design</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[Worn] Complete Figma Prototype</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[Worn] Release MVP on TestFlight</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                        <div className="row-skinny">
                            <p className="checkbox-text">[Worn] Release MVP on App Store</p>
                            <div className="checkboxes">
                                <input type="checkbox" className="empty"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GoalsPage;