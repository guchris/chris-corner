"use client";
import { useEffect, useRef } from "react"

const ReviewsMap = ({ reviews }) => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const initializeMap = () => {
            // Initialize Google Maps
            const map = new google.maps.Map(mapContainerRef.current, {
                center: { lat: 47.6062, lng: -122.3321 }, // Default center (Seattle)
                zoom: 12, // Default zoom level
            });

            // Geocode addresses and add markers
            const geocoder = new google.maps.Geocoder();
            reviews.forEach(review => {
                geocoder.geocode({ address: review.address }, (results, status) => {
                    if (status === 'OK' && results[0]) {
                        const location = results[0].geometry.location;
                        const marker = new google.maps.Marker({
                            position: location,
                            map: map,
                            title: review.name,
                        });

                        // Add info window for each marker
                        const infoWindow = new google.maps.InfoWindow({
                            content: `<div><h3>${review.name}</h3><p>${review.address}</p></div>`
                        });

                        marker.addListener('click', () => {
                            infoWindow.open(map, marker);
                        });
                    } else {
                        console.error('Geocode was not successful for the following reason:', status);
                    }
                });
            });

            // Add markers for each review address
            reviews.forEach(review => {
                const marker = new google.maps.Marker({
                    position: { lat: parseFloat(review.latitude), lng: parseFloat(review.longitude) },
                    map: map,
                    title: review.name,
                });

                // Add info window for each marker
                const infoWindow = new google.maps.InfoWindow({
                    content: `<div><h3>${review.name}</h3><p>${review.address}</p></div>`
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
            });
        };

        // Load Google Maps API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initializeMap`;
        script.defer = true;
        script.async = true;
        window.initializeMap = initializeMap;
        document.head.appendChild(script);

        // Clean up function
        return () => {
            document.head.removeChild(script);
            delete window.initializeMap;
        };
    }, [reviews]);

    return (
        <div className="section">
            <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />
        </div>
    )
};

export default ReviewsMap;
