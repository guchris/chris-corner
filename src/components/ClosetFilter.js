import React from 'react';

const FilterComponent = ({ sortOption, categoryOption, onSortChange, onCategoryChange }) => {
    return (
        <div className="closet-filters">
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
        </div>
    );
};

export default FilterComponent;
