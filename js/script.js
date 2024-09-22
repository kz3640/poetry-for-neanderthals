document.getElementById('startGame').addEventListener('click', function() {
  // Example word list (you can expand this)
  const words = loadAndCombineJSON();
  const randomWord = words[Math.floor(Math.random() * words.length)];
  
  // Show the word display and update the word
  document.getElementById('wordDisplay').classList.remove('hidden');
  document.getElementById('word').textContent = randomWord;

  // Update score (as a placeholder, you can expand this later)
  document.getElementById('score').textContent = "Score: 1";
});


async function loadAndCombineJSON() {
try {
    const [response1, response2] = await Promise.all([
        fetch('data/base_game_gray.json'),
        fetch('data/base_game_red.json')
    ]);

    // Check if both responses are OK
    if (!response1.ok || !response2.ok) {
        throw new Error('Failed to load JSON files');
    }

    const data1 = await response1.json();
    const data2 = await response2.json();

    // Assuming both are arrays, combine them
    const combinedData = [...data1, ...data2];

    console.log(combinedData);
    return combinedData; // You can return or use combinedData as needed
} catch (error) {
    console.error('Error:', error);
}
}
