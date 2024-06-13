import React from "react"
import Link from 'next/link'
import Image from 'next/image';

const ClosetGrid = ({ items, sortOption, categoryOption, brandOption }) => {

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

    const filterItems = (items, categoryOption, brandOption) => {
        let filteredItems = items;
        if (categoryOption !== 'All') {
            filteredItems = filteredItems.filter(item => item.category.includes(categoryOption));
        }
        if (brandOption !== 'All') {
            filteredItems = filteredItems.filter(item => item.brand === brandOption);
        }
        return filteredItems;
    };

    const sortedAndFilteredItems = sortItems(filterItems(items, categoryOption, brandOption), sortOption);

    return (
        <div className="general-grid">
            {sortedAndFilteredItems.map((item, index) => (
                <Link key={item.id} href={`/fashion/closet/${item.id}`} className="link">
                    <div key={index} className="grid-item">
                        <Image
                            src={"/fashion/closet/" + item.image1}
                            alt={item.name}
                            width={200}
                            height={150}
                            layout="responsive"
                            objectFit="cover"
                        />
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