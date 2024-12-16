// Select elements
const shuffleBtn = document.getElementById('shuffleBtn');
const playerNamesInput = document.getElementById('playerNames');
const resultDiv = document.getElementById('result');
const playerList = document.getElementById('playerList');

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Handle shuffle button click
shuffleBtn.addEventListener('click', () => {
  const input = playerNamesInput.value.trim();
  if (input === '') {
    alert('Please enter at least one name!');
    return;
  }

  const players = input.split(',').map(name => name.trim()).filter(name => name);
  if (players.length < 2) {
    alert('Please enter at least two players!');
    return;
  }

  const shuffledPlayers = shuffleArray(players);

  // Update the result list
  playerList.innerHTML = '';
  shuffledPlayers.forEach((player, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = player;
    playerList.appendChild(listItem);
  });

  // Show the result section
  resultDiv.classList.remove('hidden');
});
