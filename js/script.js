let words;
let score = 0;
let current_word = 0;

// Run the initialize function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);

document.getElementById('score-1').addEventListener('click', function() {
    updateWords();
    score--;
    document.getElementById('score').textContent = `Score: ${score}`;
});

document.getElementById('score+1').addEventListener('click', function() {
    updateWords();
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
});

document.getElementById('score+3').addEventListener('click', function() {
    updateWords();
    score+=3;
    document.getElementById('score').textContent = `Score: ${score}`;
});

document.getElementById('reset-score').addEventListener('click', function() {
    updateWords();
    score=0;
    document.getElementById('score').textContent = `Score: ${score}`;
});

function updateWords() {
  document.getElementById('word1').textContent = words[current_word % words.length]["1"];
  document.getElementById('word3').textContent = words[current_word % words.length]["3"];
  current_word++;
}

document.getElementById('resetScore').addEventListener('click', function() {
  score = 0;
  document.getElementById('score').textContent = `Words Seen: ${score}`;
});

async function initialize() {
    words = await loadAndCombineJSON();
    shuffle(words);
    document.getElementById('word1').textContent = words[current_word % words.length]["1"];
    document.getElementById('word3').textContent = words[current_word % words.length]["3"];
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
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
