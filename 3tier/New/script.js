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
