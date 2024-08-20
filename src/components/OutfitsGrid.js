import React from "react"
import Link from 'next/link'
import Image from 'next/image';

const OutfitsGrid = ({ outfits, closetItems }) => {

    // Function to find item details from the closetItems array by item ID
    const getItemDetails = (itemId) => {
        return closetItems.find(item => item.id === itemId);
    };

    return (
        <div className="general-grid">
            {outfits.map((outfit, index) => (
                <div key={index} className="grid-item">
                    <Image
                        src={"/fashion/outfits/" + outfit.image}
                        alt={"Outfit " + outfit.id}
                        width={200}
                        height={150}
                    />
                    <div className="small-images-row">
                        {outfit.items.map((itemId) => {
                            const itemDetails = getItemDetails(itemId);
                            return (
                                itemDetails && (
                                    <Link key={itemDetails.id} href={`/fashion/closet/${itemDetails.id}`} className="link">
                                        <Image
                                            src={"/fashion/closet/" + itemDetails.image1}
                                            alt={itemDetails.name}
                                            width={20}
                                            height={15}
                                        />
                                    </Link>
                                )
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )

}

export default OutfitsGrid;