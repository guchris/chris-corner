import React from "react"
import Link from 'next/link'
import Image from 'next/image';

const RecipesGrid = ({ recipes }) => {

    return (
        <div className="general-grid">
            {recipes.map((recipe, index) => (
                <Link key={recipe.id} href={`/food/recipes/${recipe.slug}`} className="link">
                    <div key={index} className="grid-item">
                        <Image
                            src={"/food/recipes/" + recipe.image1}
                            alt={recipe.name}
                            width={200}
                            height={150}
                        />
                        <div className="section-skinny">
                            <p className="caption-upper-bold">{recipe.name}</p>
                            <p className="caption-upper">{recipe.time.total}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
};

export default RecipesGrid;