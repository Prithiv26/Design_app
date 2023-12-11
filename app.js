// To-Do List
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Timer
let timerInterval;
let timerValue = 0;

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(timerValue / 60);
    const seconds = timerValue % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    stopTimer(); // Stop existing timer before starting a new one
    timerInterval = setInterval(() => {
        timerValue++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerValue = 0;
    updateTimerDisplay();
}

// Notes
function addNote() {
    const noteInput = document.getElementById('noteInput');
    const notesApp = document.getElementById('notesApp');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        const note = document.createElement('p');
        note.textContent = noteText;
        notesApp.appendChild(note);
        noteInput.value = '';
    }
}

// Motivational Quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "It always seems impossible until it's done. -Nelson Mandela",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
];

function getRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');

    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the random quote
    quoteDisplay.textContent = quotes[randomIndex];
}

let isDarkTheme = false;

function toggleTheme() {
    const body = document.body;
    isDarkTheme = !isDarkTheme;
    body.classList.toggle('dark', isDarkTheme);
}

 

