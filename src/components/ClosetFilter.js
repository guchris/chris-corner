"use client"
import React, { useState, useEffect } from 'react';

const ClosetFilter = ({ sortOption, categoryOption, onSortChange, onCategoryChange }) => {

    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on initial load and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);


    return (
        <div className="closet-filters">
            {isMobile ? (
                <>
                    <div className="closet-filter-section">
                        <h3>SORT</h3>
                        <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                            <option value="$$$ - $">$$$ - $</option>
                            <option value="$ - $$$">$ - $$$</option>
                        </select>
                    </div>
                    <div className="closet-filter-section">
                        <h3>Category</h3>
                        <select value={categoryOption} onChange={(e) => onCategoryChange(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Tops">Tops</option>
                            <option value="Bottoms">Bottoms</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>
                </>
            ) : (
                <>
                    <div className="closet-filter-section">
                        <h3>SORT</h3>
                        <span className={sortOption === 'Newest' ? 'selected' : ''} onClick={() => onSortChange('Newest')}>Newest</span>
                        <span className={sortOption === 'Oldest' ? 'selected' : ''} onClick={() => onSortChange('Oldest')}>Oldest</span>
                        <span className={sortOption === '$$$ - $' ? 'selected' : ''} onClick={() => onSortChange('$$$ - $')}>$$$ - $</span>
                        <span className={sortOption === '$ - $$$' ? 'selected' : ''} onClick={() => onSortChange('$ - $$$')}>$ - $$$</span>
                    </div>
                    <div className="closet-filter-section">
                        <h3>Category</h3>
                        <span className={categoryOption === 'All' ? 'selected' : ''} onClick={() => onCategoryChange('All')}>All</span>
                        <span className={categoryOption === 'Tops' ? 'selected' : ''} onClick={() => onCategoryChange('Tops')}>Tops</span>
                        <span className={categoryOption === 'Bottoms' ? 'selected' : ''} onClick={() => onCategoryChange('Bottoms')}>Bottoms</span>
                        <span className={categoryOption === 'Accessories' ? 'selected' : ''} onClick={() => onCategoryChange('Accessories')}>Accessories</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default ClosetFilter;
