// logic.js

let score = 0;
let timer;
let game_running = false;
let max_timer;

function startGame(duration) {
    updateWords();
    game_running = true;
    timer = duration;
    max_timer = duration;
    score = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
    
    const timer_menu = document.getElementById('timer-menu');
    timer_menu.classList.add('hidden');
    const game_screen = document.getElementById('game-screen');
    game_screen.classList.remove('hidden');
    
    // Start the countdown
    startCountdown();
}

function resetGame() {
    updateWords();
    game_running = true;
    timer = max_timer;
    score = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
    startCountdown();
}

function startCountdown() {
    document.getElementById('timer-display').textContent = `Time: ${timer}s`;
    countdownInterval = setInterval(() => {
        timer--;
        document.getElementById('timer-display').textContent = `Time: ${timer}s`;

        if (timer <= 0) {
            clearInterval(countdownInterval);
            game_running = false;
        }
    }, 1000);
}
