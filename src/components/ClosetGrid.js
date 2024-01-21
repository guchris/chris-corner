import React from "react"
import Link from 'next/link'

const ClosetGrid = ({ items }) => {

    return (
        <div className="closet-grid">
            {items.map((item, index) => (
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