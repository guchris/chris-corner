import React from "react"
import Link from 'next/link'

const RankingSection = ({ suppers }) => {

    // Sort the suppers array by totalScore in descending order
    const sortedSuppers = [...suppers].sort((a, b) => b.totalScore - a.totalScore);

    return (
        <div className="section-skinny">
            {sortedSuppers.map((supper, index) => (
                <div key={supper.id} className="row-skinny">
                    <p className="body-lower">{supper.totalScore}</p>
                    <Link key={supper.id} href={`/food/sunday-suppers/${supper.slug}`} className="body-upper">{supper.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default RankingSection;