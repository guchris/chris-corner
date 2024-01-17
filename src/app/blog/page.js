import React from 'react';
import Head from 'next/head';

const BlogPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Blog</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">Blog</h2>
                <p className="intro">
                    Blog content coming soon.
                </p>
            </div>
        </>
    );
};

export default BlogPage;