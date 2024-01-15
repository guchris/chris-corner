import React from "react";

const ClosetGrid = ({ items }) => {

    return (
        <div className="closet-grid">
            {items.map((item, index) => (
                <div key={index} className="closet-item">
                    <img src={item.image1} alt={item.name} />
                    <p className="item-brand">{item.brand}</p>
                    <p className="item-name">{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ClosetGrid;