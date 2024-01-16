import React from "react";
import Link from 'next/link';

const ClosetGrid = ({ items }) => {

    return (
        <div className="closet-grid">
            {items.map((item, index) => (
                <Link key={item.id} href={`/fashion/closet/${item.id}`} className="dynamic-page-link">
                    <div key={index} className="closet-item">
                        <img src={"closet/" + item.image1} alt={item.name} />
                        <p className="item-brand">{item.brand}</p>
                        <p className="item-name">{item.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ClosetGrid;