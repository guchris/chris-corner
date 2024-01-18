import React from "react";
import Link from 'next/link';

const MenuGrid = ({ brews }) => {

    // Sort the brews array by date in descending order
    const sortedBrews = [...brews].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="menu-grid">
            {sortedBrews.map((brew, index) => (
                <Link key={brew.id} href={`/projects/brews-and-bites/${brew.iteration}`} className="dynamic-page-link">
                    <div key={index} className="menu-wrapper">
                        <img src={"brews-and-bites/" + brew.menuFront} alt="Brews & Bites Menu - Front"/>
                        <img className="hover-image" src={"brews-and-bites/" + brew.menuBack} alt="Brews & Bites Menu - Back"/>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuGrid;