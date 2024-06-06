window.onload = function() {
  fetch('https://your-bucket-name.s3.amazonaws.com/games.json')
    .then(response => response.json())
    .then(data => {
      const gameButtons = document.getElementById('gameButtons');
      data.games.forEach(game => {
        const button = document.createElement('a');
        button.href = game.link;
        button.textContent = game.name;
        button.classList.add('game-button');
        gameButtons.appendChild(button);
      });
    })
    .catch(error => {
      console.error('Error fetching game links:', error);
    });
};
// Function to handle form submission and store review in the database
function submitReview() {
    var username = document.getElementById("username").value;
    var game = document.getElementById("game").value;
    var review = document.getElementById("review").value;

    // Create a JSON object with review data
    var reviewData = {
        username: username,
        game: game,
        review: review
    };

    // Send a POST request to your server to store the review in the database
    // Example using XMLHttpRequest (you may use a library like axios for easier handling)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-review", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Review submitted successfully, display a message or update UI
            alert("Review submitted successfully!");
            // Optionally, update reviews displayed on the page
            fetchReviews();
        }
    };
    xhr.send(JSON.stringify(reviewData));
}

// Function to fetch reviews from the database and display them on the page
function fetchReviews() {
    // Send a GET request to your server to fetch reviews from the database
    // Example using XMLHttpRequest (you may use a library like axios for easier handling)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/fetch-reviews", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Reviews fetched successfully, update UI with reviews
            var reviews = JSON.parse(xhr.responseText);
            var reviewsList = document.getElementById("reviews-list");
            // Clear existing reviews
            reviewsList.innerHTML = "";
            // Iterate over fetched reviews and append them to the list
            reviews.forEach(function (review) {
                var listItem = document.createElement("li");
                listItem.textContent = review.username + " - " + review.game + ": " + review.review;
                reviewsList.appendChild(listItem);
            });
        }
    };
    xhr.send();
}

// Fetch reviews when the page loads
window.onload = function () {
    fetchReviews();
};
