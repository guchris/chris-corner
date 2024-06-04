import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProjectsPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Projects</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Projects</h2>

                <p className="intro">
                    Live. Laugh. Love. Projects.<br/>
                    Page content coming soon.<br/>
                    Check out <Link href="/projects/brews-and-bites" className="link"><b>BREWS & BITES</b></Link> in the meantime.
                </p>
            </div>
        </>
    );
};

export default ProjectsPage;