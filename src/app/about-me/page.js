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

                <img className="main-image" src="/about-me-image.jpg"/>

                <p className="paragraph-text">
                    Hi there - my name is Chris (he/him)!<br/>
                    I'm all about staying active, embracing spontaneity, and finding joy in the little things.<br/>
                    Living my best pedestrian life and fully immersed in my self-love era.<br/><br/>
                    Here are a few mottos I'm living by:
                </p>
                <ul className='small-bullets'>
                    <li>Happiness lives in the present</li>
                    <li>Be brave and bold for future you</li>
                    <li>How lucky we are to be alive right now</li>
                    <li>You are always on time for your own life</li>
                    <li>Fulfill your curiosity</li>
                </ul>
            </div>
        </>
    );
};

export default AboutMePage;