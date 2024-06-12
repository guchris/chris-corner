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
    const [brandOption, setBrandOption] = useState('All');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const handleCategoryChange = (option) => {
        setCategoryOption(option);
    };

    const handleBrandChange = (option) => {
        setBrandOption(option);
    };

    const uniqueBrands = [...new Set(closetData.map(item => item.brand))];
    
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
                <div className={`grid-page ${isMobile ? 'mobile' : ''}`}>
                    {isMobile ? (
                        <>
                            <ClosetFilter
                                sortOption={sortOption}
                                categoryOption={categoryOption}
                                brandOption={brandOption}
                                uniqueBrands={uniqueBrands}
                                onSortChange={handleSortChange}
                                onCategoryChange={handleCategoryChange}
                                onBrandChange={handleBrandChange}
                            />
                            <ClosetGrid
                                items={closetData}
                                sortOption={sortOption}
                                categoryOption={categoryOption}
                                brandOption={brandOption}
                            />
                        </>
                    ) : (
                        <>  
                            <ClosetGrid
                                items={closetData}
                                sortOption={sortOption}
                                categoryOption={categoryOption}
                                brandOption={brandOption}
                            />
                            <ClosetFilter
                                sortOption={sortOption}
                                categoryOption={categoryOption}
                                brandOption={brandOption}
                                uniqueBrands={uniqueBrands}
                                onSortChange={handleSortChange}
                                onCategoryChange={handleCategoryChange}
                                onBrandChange={handleBrandChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ClosetPage;