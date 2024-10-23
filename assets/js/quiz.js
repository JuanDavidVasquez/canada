const questions = [
    {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is Canada’s national animal?",
        options: ["Beaver", "Moose", "Lynx", "Eagle"],
        answer: "Beaver"
    },
    {
        question: "Which province is the largest by area?",
        options: ["Ontario", "Quebec", "British Columbia", "Alberta"],
        answer: "Quebec"
    },
    {
        question: "What is the official language of Canada?",
        options: ["English", "French", "Both", "Spanish"],
        answer: "Both"
    },
    {
        question: "Which city is known as the cultural capital of Canada?",
        options: ["Toronto", "Montreal", "Calgary", "Ottawa"],
        answer: "Montreal"
    },
    {
        question: "What is Canada’s national sport?",
        options: ["Ice Hockey", "Lacrosse", "Football", "Basketball"],
        answer: "Lacrosse"
    },
    {
        question: "Which famous waterfall is located on the border between Canada and the USA?",
        options: ["Victoria Falls", "Niagara Falls", "Angel Falls", "Iguazu Falls"],
        answer: "Niagara Falls"
    },
    {
        question: "What is the currency used in Canada?",
        options: ["Dollar", "Euro", "Pound", "Yen"],
        answer: "Dollar"
    },
    {
        question: "Which Canadian city hosted the Winter Olympics in 2010?",
        options: ["Toronto", "Montreal", "Calgary", "Vancouver"],
        answer: "Vancouver"
    },
    {
        question: "What is the name of the Canadian flag's red maple leaf?",
        options: ["Maple Leaf", "Oak Leaf", "Birch Leaf", "Pine Leaf"],
        answer: "Maple Leaf"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const scoreContainer = document.querySelector('.score-container');
const scoreDisplay = document.querySelector('.score');
const nextButton = document.querySelector('.next-btn');
const restartButton = document.querySelector('.restart-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, option));
        optionsElement.appendChild(button);
    });
    
    nextButton.style.display = 'none'; // Hide the Next button at the start of each question
}

function selectOption(button, option) {
    const currentQuestion = questions[currentQuestionIndex];

    // Reset all option button styles
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });

    // Add 'selected' class to the clicked button
    button.classList.add('selected');

    // Check if the selected option is correct
    if (option === currentQuestion.answer) {
        score++;
        button.classList.add('correct'); // Add correct class for styling
    } else {
        button.classList.add('incorrect'); // Add incorrect class for styling
        // No feedback on the correct answer, just indicate the selected one
    }

    nextButton.style.display = 'block'; // Show the Next button after an option is selected
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;
    nextButton.style.display = 'none'; // Hide the Next button
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = 'none';
    questionElement.style.display = 'block';
    optionsElement.style.display = 'flex';
    loadQuestion();
});

loadQuestion(); // Load the first question
