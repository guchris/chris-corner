"use client"
import React, { useState, useEffect } from "react";

import Head from 'next/head';
import Link from 'next/link';
import ClosetGrid from '@/components/ClosetGrid';
import ClosetFilter from '@/components/ClosetFilter';

import closetData from './closet-data.json';

const ClosetPage = () => {

    const [sortOption, setSortOption] = useState('Newest');
    const [categoryOption, setCategoryOption] = useState('All');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const handleCategoryChange = (option) => {
        setCategoryOption(option);
    };
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Closet</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">
                    <Link href="/fashion" className="link">Fashion</Link> | Closet
                </h2>
                <div className={`closet-page ${isMobile ? 'mobile' : ''}`}>
                    {isMobile ? (
                        <>
                            <ClosetFilter
                                sortOption={sortOption}
                                categoryOption={categoryOption}
                                onSortChange={handleSortChange}
                                onCategoryChange={handleCategoryChange}
                            />
                            <ClosetGrid items={closetData} sortOption={sortOption} categoryOption={categoryOption} />
                        </>
                    ) : (
                        <>
                            <ClosetGrid items={closetData} sortOption={sortOption} categoryOption={categoryOption} />
                            <ClosetFilter
                                sortOption={sortOption}
                                categoryOption={categoryOption}
                                onSortChange={handleSortChange}
                                onCategoryChange={handleCategoryChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ClosetPage;