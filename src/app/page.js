"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  // State to hold the selected image number
  const [selectedImageNumber, setSelectedImageNumber] = useState(1);

  // Function to generate a random image number
  const generateRandomImageNumber = () => {
    return Math.floor(Math.random() * 25) + 1;
  }

  useEffect(() => {
    // Generate a random image number when the component mounts
    const randomImageNumber = generateRandomImageNumber();
    setSelectedImageNumber(randomImageNumber);
  }, []);

  return (
    <main className="hero-image">
      {/* <!-- Hero Image --> */}
      {/* <HeroImage src={selectedImage.src}/> */}
      <img id="hero-image" src={`home/hero-images/hero-image-${selectedImageNumber}.jpg`} alt={`Hero Image ${selectedImageNumber}`}/>
    </main>
  )
}
