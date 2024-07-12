"use client"
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image';

const RankingSection = ({ suppers }) => {

    // State to track whether to sort by score or by date
    const [sortByScore, setSortByScore] = useState(false);

    // Sort the suppers array by totalScore in descending order
    const sortedByScore = [...suppers].sort((a, b) => b.totalScore - a.totalScore);

    // Sort the suppers array by date in descending order
    const sortedByDate = [...suppers].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Function to format date to MM/DD/YYYY
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Determine which list to display based on the checkbox state
    const displayedSuppers = sortByScore ? sortedByScore : sortedByDate;

    return (
        <div>
            <label className="checkbox-text">
                <input
                    type="checkbox"
                    checked={sortByScore}
                    onChange={() => setSortByScore(!sortByScore)}
                    className="checkbox"
                />
                Sort by score
            </label>

            {/* {displayedSuppers.map((supper) => (
                <div key={supper.id} className="row-skinny">
                    <p className="body-lower">{formatDate(supper.date)}</p>
                    <p className="body-lower">{supper.totalScore}</p>
                    <Link href={`/food/sunday-suppers/${supper.slug}`} className="body-upper">
                        {supper.name}
                    </Link>
                </div>
            ))} */}

            <div className="general-grid">
                {displayedSuppers.map((supper, index) => (
                    <Link key={supper.id} href={`/food/sunday-suppers/${supper.slug}`} className="link">
                        <div key={index} className="grid-item">
                            <Image
                                src={`/food/sunday-suppers/${supper.image1}`}
                                alt={supper.name}
                                width={200}
                                height={200}
                            />
                            <div className="section-skinny">
                                <p className="caption-upper-bold">{supper.name}</p>
                                <p className="caption-upper-bold">{supper.totalScore}</p>
                                <p className="caption-upper">{formatDate(supper.date)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RankingSection;