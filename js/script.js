document.getElementById('startGame').addEventListener('click', function() {
    // Example word list (you can expand this)
    const words = ["banana", "mountain", "dog", "tree", "river"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    // Show the word display and update the word
    document.getElementById('wordDisplay').classList.remove('hidden');
    document.getElementById('word').textContent = randomWord;
  
    // Update score (as a placeholder, you can expand this later)
    document.getElementById('score').textContent = "Score: 1";
  });
  