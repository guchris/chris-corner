import React from "react"
import Link from 'next/link'
import Image from 'next/image';

const MenuGrid = ({ brews }) => {

    // Sort the brews array by date in descending order
    const sortedBrews = [...brews].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="menu-grid">
            {sortedBrews.map((brew, index) => (
                <Link key={brew.id} href={`/projects/brews-and-bites/${brew.iteration}`} className="link">
                    <div key={index} className="menu-wrapper">
                        <Image
                            src={"/projects/brews-and-bites/" + brew.menuFront}
                            alt="Brews & Bites Menu - Front"
                            width={200}
                            height={150}
                            layout="responsive"
                            objectFit="cover"
                        />
                        <img className="hover-image" src={"/projects/brews-and-bites/" + brew.menuBack} alt="Brews & Bites Menu - Back"/>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuGrid;