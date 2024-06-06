document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('itinerary-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const days = document.getElementById('days').value;

        // Here you can make an API call to your backend to fetch itinerary based on user inputs
        // Example: fetchItinerary(origin, destination, days);
        // After fetching, display the results in #itinerary-results section
        displayItineraryResults(); // Dummy function for demonstration
        
        // Change background image dynamically
        changeBackgroundImage();
    });
});

function displayItineraryResults() {
    const resultsSection = document.getElementById('itinerary-results');
    resultsSection.innerHTML = `
        <h2>Itinerary</h2>
        <p>Sample itinerary will be displayed here...</p>
    `;
    resultsSection.style.display = 'block';
}

function changeBackgroundImage() {
    const images = [
        'image1.jpg', // replace with actual image filenames in your 'images' folder
        'image2.jpg',
        'image3.jpg'
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.body.style.backgroundImage = `url('images/${randomImage}')`;
}
