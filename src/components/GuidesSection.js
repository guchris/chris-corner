import React from "react"
import Link from 'next/link'

const GuidesSection = ({ guides }) => {

    return (
        <div className="section-skinny">
            {guides.map((guide, index) => (
                <Link key={guide.id} href={`/travel/guides/${guide.slug}`} className="body-upper">{guide.destination}</Link>
            ))}
        </div>
    )
}

export default GuidesSection;