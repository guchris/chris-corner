/* Closet Item Clicks */
const closetGridItems = document.querySelectorAll('.closet-grid-item');
console.log("TEST");
let closetData = []; // Global variable to store JSON data

// Fetch JSON data before handling item clicks
fetch('closet-data.json')
    .then(response => response.json())
    .then(data => {
        closetData = data; // Store JSON data in the global variable
        
        // Attach click event listeners after fetching JSON data
        closetGridItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const itemId = item.getAttribute('data-item-id');
                console.log("Item Clicked ID: " + itemId);
                fetchClothingDetails(itemId);
                // Update the URL to reflect the selected item
                updateURL(itemId);
            });
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));

async function fetchClothingDetails(itemId) {
    try {
        const response = await fetch(`item-details.html?id=${itemId}`);
        const data = await response.text();
        // Insert the received HTML into right-column - aka, 'tab-content'
        document.getElementById('tab-content').innerHTML = data;

        // Update the item details using JSON data
        updateItemDetails(itemId);
    } catch (error) {
        console.error('Error fetching details:', error);
    }
}

function updateItemDetails(itemId) {
    const selectedItem = closetData.find(item => item.id === parseInt(itemId));

    if (selectedItem) {
        // Update the item details in the item-details.html
        console.log(selectedItem['item-image-1']);
        console.log(selectedItem['item-image-2']);
        document.getElementById('item-image-1').src = selectedItem['item-image-1'];
        document.getElementById('item-image-2').src = selectedItem['item-image-2'];
        document.getElementById('item-id').innerText = selectedItem['id'];
        document.getElementById('item-brand').innerText = selectedItem['item-brand'];
        document.getElementById('item-name').innerText = selectedItem['item-name'];
        document.getElementById('item-description').innerText = selectedItem['item-description'];
        document.getElementById('item-size').innerText = selectedItem['item-size'];
        document.getElementById('item-fabric').innerText = selectedItem['item-fabric'];
        document.getElementById('item-color').innerText = selectedItem['item-color'];
        document.getElementById('item-made-in').innerText = selectedItem['item-made-in'];
        document.getElementById('item-name').innerText = selectedItem['item-name'];
        document.getElementById('item-category').innerText = selectedItem['item-category'];
        document.getElementById('item-condition').innerText = selectedItem['item-condition'];
        document.getElementById('item-carbon').innerText = selectedItem['item-carbon'];
        document.getElementById('item-water').innerText = selectedItem['item-water'];
        document.getElementById('item-purchase-amount').innerText = selectedItem['item-purchase-amount'];
        document.getElementById('item-purchase-date').innerText = selectedItem['item-purchase-date'];
    }
}

function updateURL(itemId) {
    // Update the hash part of the URL without triggering a page reload
    window.location.hash = `item-details?id=${itemId}`;
}
