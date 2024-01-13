/* INITIAL PAGE LOAD */
window.onload = function() {
    initializePage();
};

function initializePage() {
    updateDate();
    setInterval(updateDate, 60000);
    setRandomHeroImage();
    returnHome();
}

/* RANDOM HERO IMAGE SELECTION */
function setRandomHeroImage() {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    const randomImage = heroImages[randomIndex];

    const heroImageElement = document.getElementById("hero-image");
    const heroImageCaptionElement = document.getElementById("hero-image-caption");

    if (heroImageElement) {
        heroImageElement.src = randomImage.src;
        heroImageCaptionElement.innerHTML = randomImage.caption;
    } else {
        // Handle the case when hero-image is not present
        console.error("Hero image element not found.");
    }
}

/* DYNAMICALLY UPDATE DATE */
function updateDate() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'PST'
    };

    const dateString = now.toLocaleString('en-US', options);
    const formattedDate = dateString.replace(/ /g, '<br>');

    const locationNode = document.createTextNode('SEATTLE, WA');
    const dateComponents = formattedDate.split('<br>');
    const dateNode = document.createTextNode(`${dateComponents[0]} ${dateComponents[1]} ${dateComponents[2]} ${dateComponents[3]}`);
    const timeNode = document.createTextNode(`${dateComponents[5]} ${dateComponents[6]} PST`);

    const dateElement = document.querySelector('.location-date');
    dateElement.innerHTML = '';
    dateElement.appendChild(locationNode);
    dateElement.appendChild(document.createElement('br'));
    dateElement.appendChild(dateNode);
    dateElement.appendChild(document.createElement('br'));
    dateElement.appendChild(timeNode);
}

/* HERO IMAGES */
const heroImages = [
    {
        src: "hero-images/hero-image-1.jpg",
        caption: "Friday, September 8, 2023<br>Orsières, Switzerland<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/18519 6.86mm ISO80"
    },
    {
        src: "hero-images/hero-image-2.jpg",
        caption: "Sunday, September 10, 2023<br>Chamonix, France<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/1019 6.86mm ISO64"
    },
    {
        src: "hero-images/hero-image-3.jpg",
        caption: "Sunday, September 10, 2023<br>Trient, Switzerland<br>Apple iPhone 14 Pro<br>ƒ/2.2 1/1575 2.22mm ISO40"
    },
    {
        src: "hero-images/hero-image-4.jpg",
        caption: "Saturday, September 9, 2023<br>Orsières, Switzerland<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/3058 6.86mm ISO64"
    },
    {
        src: "hero-images/hero-image-5.jpg",
        caption: "Saturday, September 9, 2023<br>Trient, Switzerland<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/2525 6.86mm ISO80"
    },
    {
        src: "hero-images/hero-image-6.jpg",
        caption: "Friday, September 8, 2023<br>Aosta Valley, Italy<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/5882 6.86mm ISO64"
    },
    {
        src: "hero-images/hero-image-7.jpg",
        caption: "Thursday, September 7, 2023<br>Aosta Valley, Italy<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/1157 6.86mm ISO80"
    },
    {
        src: "hero-images/hero-image-8.jpg",
        caption: "Thursday, September 7, 2023<br>Aosta Valley, Italy<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/2203 6.86mm ISO64"
    },
    {
        src: "hero-images/hero-image-9.jpg",
        caption: "Thursday, September 7, 2023<br>Bourg-Saint-Maurice, France<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/3155 6.86mm ISO64"
    },
    {
        src: "hero-images/hero-image-10.jpg",
        caption: "Wednesday, September 6, 2023<br>Saint-Gervais-les-Bains, France<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/9709 6.86mm ISO80"
    },
    {
        src: "hero-images/hero-image-11.jpg",
        caption: "Wednesday, September 6, 2023<br>Saint-Gervais-les-Bains, France<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/5000 6.86mm ISO80"
    },
    {
        src: "hero-images/hero-image-12.jpg",
        caption: "Wednesday, September 6, 2023<br>Les Houches, France<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/7576 6.86mm ISO80"
    },
    {
        src: "hero-images/hero-image-13.jpg",
        caption: "Wednesday, September 6, 2023<br>Les Houches, France<br>Apple iPhone 14 Pro<br>ƒ/2.8 1/494 9mm ISO32"
    },
    {
        src: "hero-images/hero-image-14.jpg",
        caption: "Wednesday, September 6, 2023<br>Les Houches, France<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/3876 6.86mm ISO64"
    },
    {
        src: "hero-images/hero-image-15.jpg",
        caption: "Wednesday, September 6, 2023<br>Chamonix, France<br>Apple iPhone 14 Pro<br>ƒ/1.78 1/1664 6.86mm ISO80"
    }
];


/* NAV EVENT LISTENERS */
/* NAV EVENT LISTENERS */
/* NAV EVENT LISTENERS */

let activeTabId = null;
let activeSubTabId = null;
let activeSubSubTabId = null;

/* BACK/FORWARD BUTTON CLICKS */
window.addEventListener('popstate', function (event) {
    console.log('Popstate Event:', event);
    const state = event.state;

    // Check if there is state information
    if (state) {
        // Reinitialize the page with the content URL
        showContent(state.contentUrl);

        // Update the UI based on the hash (fragment identifier) in the URL
        updateUIFromHash();
    } else {
        // If no state information, reinitialize the page without content URL
        initializePage();
    }
});

/* LOGO CLICK */
document.querySelector('.logo').addEventListener('click', function() {

    returnHome();
});

/* TAB CLICK */
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function (event) {
        event.preventDefault();

        // Reset styles for all tabs
        resetTabStyles();

        // Set the clicked tab as active
        this.classList.add('active');
        activeTabId = this.id;

        // Hide sub-tabs of the previously clicked tab
        hideSubTabs();
        resetSubTabStyles();

        // Check if the tab has associated content
        if (this.dataset.contentUrl) {
            // Show/hide content based on data-content-url
            showContent(this.dataset.contentUrl);
            console.log("Content URL:", this.dataset.contentUrl);

            // Update URL
            const absoluteUrl = new URL(this.dataset.contentUrl, window.location.origin).href;
            console.log("Absolute URL: " + absoluteUrl);
            updateURL(absoluteUrl);
        }

        // Handle sub-tabs
        const subTabs = this.nextElementSibling;
        if (subTabs && subTabs.classList.contains('sub-tabs')) {
            showSubTabs(subTabs);
        }
    });
});

/* SUB-TAB CLICK */
document.querySelectorAll('.sub-tab').forEach(subTab => {
    subTab.addEventListener('click', function (event) {
        event.preventDefault();

        // Reset styles for all sub-tabs
        resetSubTabStyles();

        // Set the clicked sub-tab as active
        this.classList.add('active');
        console.log("activeSubTabId: " + this.id)
        activeSubTabId = this.id;

        // Show/hide content based on data-content-url
        showContent(this.dataset.contentUrl);

        // Update URL
        const absoluteUrl = new URL(this.dataset.contentUrl, window.location.origin).href;
        updateURL(absoluteUrl);

        // Handle sub-sub-tabs
        const subSubTabs = this.nextElementSibling;
        if (subSubTabs && subSubTabs.classList.contains('sub-sub-tabs')) {
            showSubTabs(subSubTabs);
        }
    });
});

/* SUB-SUB-TAB CLICK */
document.querySelectorAll('.sub-sub-tab').forEach(subSubTab => {
    subSubTab.addEventListener('click', function (event) {
        event.preventDefault();

        // Reset styles for all sub-sub-tabs
        resetSubSubTabStyles();

        // Set the clicked sub-sub-tab as active
        this.classList.add('active');
        activeSubSubTabId = this.id;

        // Show/hide content based on data-content-url
        showContent(this.dataset.contentUrl);

        // Update URL
        const absoluteUrl = new URL(this.dataset.contentUrl, window.location.origin).href;
        updateURL(absoluteUrl);
    });
});

function returnHome() {

    // Collapse and reset all tab types
    resetTabStyles();
    resetSubTabStyles();
    resetSubSubTabStyles();
    hideSubTabs();

    // Hide tab-content
    document.getElementById('tab-content').style.display = 'none';

    // Show hero image and hero-image-caption
    document.getElementById('hero-image').style.display = 'flex';
    document.getElementById('hero-image-caption').style.display = 'block';

    // Reset active tab IDs
    activeTabId = null;
    activeSubTabId = null;
    activeSubSubTabId = null;
}

// Function to reset styles for all tabs
function resetTabStyles() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
}

// Function to reset styles for all sub-tabs
function resetSubTabStyles() {
    document.querySelectorAll('.sub-tab').forEach(subTab => {
        subTab.classList.remove('active');
    });
}

// Function to reset styles for all sub-sub-tabs
function resetSubSubTabStyles() {
    document.querySelectorAll('.sub-sub-tab').forEach(subSubTab => {
        subSubTab.classList.remove('active');
    });
}

// Function to show sub-tabs or sub-sub-tabs
function showSubTabs(subTabs) {
    subTabs.style.display = 'flex';
}

// Function to hide sub-tabs of the previously clicked tab
function hideSubTabs() {
    document.querySelectorAll('.sub-tabs').forEach(subTabs => {
        subTabs.style.display = 'none';
    });
}

// Function to show/hide content based on data-content-url
function showContent(contentUrl) {

    console.log("Content URL: " + contentUrl);

    // Code for closet.js injection
    if (contentUrl == "fashion/closet.html") {
        console.log("Closet JS Injection Success")
        const injectedScript = document.createElement('script');
        injectedScript.src = 'fashion/closet.js';
        document.body.appendChild(injectedScript);
    }

    if (contentUrl) {
        
        // Hide hero-image and hero-image-caption
        document.getElementById('hero-image').style.display = 'none';
        document.getElementById('hero-image-caption').style.display = 'none';

        // Show tab-content
        const tabContent = document.getElementById('tab-content');
        tabContent.style.display = 'block';

        // Use absolute path for fetching content
        const absoluteUrl = new URL(contentUrl, window.location.origin).href;
        
        fetchContent(absoluteUrl, tabContent);
    }
}

// Function to fetch content and update tab-content section
function fetchContent(url, targetElement) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            targetElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

// Function to update URL using history.pushState
function updateURL(url) {
    console.log("Update URL: "+ url);
    history.pushState({
        contentUrl: url,
        activeTab: activeTabId, // Replace with the ID of the active tab
        activeSubTab: activeSubTabId, // Replace with the ID of the active sub-tab
        activeSubSubTab: activeSubSubTabId // Replace with the ID of the active sub-sub-tab or null if none
    }, null, url);
}

// Function to update the UI based on the hash (fragment identifier) in the URL
function updateUIFromHash() {

    // Get the current URL pathname
    const pathname = new URL(window.location.href).pathname;

    // Assuming the pathname format is like "/about-me/career.html"
    // You can modify this parsing based on your actual pathname format
    const parts = pathname.split('/');
    const tabUrl = parts[1] ? parts[1] + '/' + parts[2] : parts[1];
    console.log("Tab URL: " + tabUrl);

    // Reset styles for all tabs, sub-tabs, and sub-sub-tabs
    resetTabStyles();
    resetSubTabStyles();
    resetSubSubTabStyles();

    // Find the element by href using the extracted tabUrl
    const activeElement = document.querySelector(`[data-content-url="${tabUrl}"]`);

    if (activeElement) {
        // Determine if the active element is a tab, sub-tab, or sub-sub-tab
        if (activeElement.classList.contains('tab')) {
            console.log('Active Tab:', activeElement);
            activeElement.classList.add('active');
        } else if (activeElement.classList.contains('sub-tab')) {
            console.log('Active Sub-Tab:', activeElement);
            activeElement.classList.add('active');
            const parentTab = activeElement.closest('.tab');
            parentTab.classList.add('active');
        } else if (activeElement.classList.contains('sub-sub-tab')) {
            console.log('Active Sub-Sub-Tab:', activeElement);
            activeElement.classList.add('active');
            const parentSubTab = activeElement.closest('.sub-tab');
            parentSubTab.classList.add('active');
            const parentTab = parentSubTab.closest('.tab');
            parentTab.classList.add('active');
        }
    } else {
        console.log('Active Element not found');
    }

}

