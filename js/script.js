let words;
let score = 0;

// Run the initialize function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);

document.getElementById('nextWord').addEventListener('click', function() {
  // Example word list (you can expand this)
  const randomWord1 = words[Math.floor(Math.random() * words.length)]["1"];
  const randomWord3 = words[Math.floor(Math.random() * words.length)]["3"];
  
  // Show the word display and update the word
  document.getElementById('wordDisplay1').classList.remove('hidden');
  document.getElementById('word1').textContent = randomWord1;
  document.getElementById('wordDisplay3').classList.remove('hidden');
  document.getElementById('word3').textContent = randomWord3;

  // Update score (as a placeholder, you can expand this later)
  score++;
  document.getElementById('score').textContent = `Words Seen: ${score}`;
});

async function initialize() {
    words = await loadAndCombineJSON();
    console.log(words); // You can use the words variable here
}

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
    
        console.log('Data1:', data1);
        console.log('Data2:', data2);
    
        // Assuming both are arrays, combine them
        const combinedData = [...data1.game_data, ...data2.game_data];
    
        console.log(combinedData);
        return combinedData; // You can return or use combinedData as needed
    } catch (error) {
        console.error('Error:', error);
    }
}
