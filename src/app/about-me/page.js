import React from 'react';
import Head from 'next/head';

const AboutMePage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>About Me</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">About Me</h2>

                <img className="image-main" src="/about-me/headshot.jpg"/>

                <p className="intro">
                    Hi there - my name is Chris (he/him)! I'm all about staying active, embracing spontaneity, and finding joy in the little things in life.<br/>
                    Below are a few mottos I'm living by.<br/>
                </p>
                <ul className="bullets">
                    <li>Happiness lives in the present</li>
                    <li>Be brave and bold for future you</li>
                    <li>How lucky we are to be alive right now</li>
                    <li>You are always on time for your own life</li>
                    <li>Life is coming from you, not at you</li>
                    <li>There are no rules to this life, do what makes you happy</li>
                    <li>Your grass is green already</li>
                    <li>How lucky am I to have something so special, that makes saying goodbye so hard</li>
                    <li>Fulfill your curiosity</li>
                    <li>Bias to action</li>
                </ul>
            </div>
        </>
    );
};

export default AboutMePage;