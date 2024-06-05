import React from "react"
import Link from 'next/link'

const ClosetGrid = ({ items, sortOption, categoryOption }) => {

    const sortItems = (items, sortOption) => {
        switch (sortOption) {
            case 'Newest':
                return items.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'Oldest':
                return items.sort((a, b) => new Date(a.date) - new Date(b.date));
            case '$$$ - $':
                return items.sort((a, b) => parseFloat(b.cost.replace(/[^0-9.-]+/g,"")) - parseFloat(a.cost.replace(/[^0-9.-]+/g,"")));
            case '$ - $$$':
                return items.sort((a, b) => parseFloat(a.cost.replace(/[^0-9.-]+/g,"")) - parseFloat(b.cost.replace(/[^0-9.-]+/g,"")));
            default:
                return items;
        }
    };

    const filterItems = (items, categoryOption) => {
        if (categoryOption === 'All') return items;
        return items.filter(item => item.category.includes(categoryOption));
    };

    const sortedAndFilteredItems = sortItems(filterItems(items, categoryOption), sortOption);

    return (
        <div className="closet-grid">
            {sortedAndFilteredItems.map((item, index) => (
                <Link key={item.id} href={`/fashion/closet/${item.id}`} className="link">
                    <div key={index} className="closet-item">
                        <img src={"/fashion/closet/" + item.image1} alt={item.name}/>
                        <div className="section-skinny">
                            <p className="caption-upper-bold">{item.brand}</p>
                            <p className="caption-upper">{item.name}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ClosetGrid;