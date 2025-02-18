let countdown;
let seconds;
let isPaused = false;

document.querySelector('#startBtn').addEventListener('click', startCountdown);
document.querySelector('#pauseBtn').addEventListener('click', pause);
document.querySelector('#resetBtn').addEventListener('click', reset);

function startCountdown() {
    if (!isPaused) {
        clearInterval(countdown); // Reset se il timer è avviato
        seconds = parseInt(document.querySelector('#secondsInput').value);
        if (isNaN(seconds) || seconds <= 0) {
            alert("Inserisci un numero valido di secondi.");
            return;
        }
    }

    isPaused = false;
    let timerDisplay = document.querySelector('#timer');

    function updateTimer() {
        if (seconds >= 0) {
            timerDisplay.textContent = seconds;
            seconds--;
        } else {
            clearInterval(countdown);
            timerDisplay.textContent = "Tempo scaduto!";
        }
    }

    updateTimer(); // Mostra il tempo iniziale
    countdown = setInterval(updateTimer, 1000);
}

function pause() {
    clearInterval(countdown);
    isPaused = true;
}

function reset() {
    clearInterval(countdown);
    document.querySelector('#timer').textContent = "";
    document.querySelector('#secondsInput').value = "";
    isPaused = false;
    seconds = 0;
}
