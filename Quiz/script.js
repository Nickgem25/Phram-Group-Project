const questions = [
    { question: "academic", 
    answers: [
        { text: "theoretical", correct: true },
        { text: "aggregate", correct: false },
        { text: "haberdasher", correct: false },
    ]},
    { question: "accelerate", 
    answers: [
        { text: "expedite", correct: true },
        { text: "collegiate", correct: false },
        { text: "comical", correct: false },
    ]},
    { question: "adversity", 
    answers: [
        { text: "trouble", correct: true },
        { text: "adaptable", correct: false },
        { text: "authentic", correct: false },
    ]},
    { question: "ambiguous", 
    answers: [
        { text: "dubious", correct: true },
        { text: "appropriate", correct: false },
        { text: "debarment", correct: false },
    ]},
    { question: "apprehensive", 
    answers: [
        { text: "concerned", correct: true },
        { text: "principle", correct: false },
        { text: "lurking", correct: false },
    ]},
    { question: "attribute", 
    answers: [
        { text: "characteristic", correct: true },
        { text: "decrease", correct: false },
        { text: "omission", correct: false },
    ]},
    { question: "authentic", 
    answers: [
        { text: "continuing", correct: true },
        { text: "misfortune", correct: false },
        { text: "facet", correct: false },
    ]},
    { question: "bias", 
    answers: [
        { text: "favoritism", correct: true },
        { text: "disposable", correct: false },
        { text: "comical", correct: false },
    ]},
    { question: "bizarre", 
    answers: [
        { text: "extraordinary", correct: true },
        { text: "inclination", correct: false },
        { text: "apply", correct: false },
    ]},
    { question: "chronic", 
    answers: [
        { text: "constant", correct: true },
        { text: "blab", correct: false },
        { text: "archive", correct: false },
    ]},
    { question: "civil", 
    answers: [
        { text: "domestic", correct: true },
        { text: "curb", correct: false },
        { text: "conjecture", correct: false },
    ]},
    { question: "collusion", 
    answers: [
        { text: "complicity", correct: true },
        { text: "continual", correct: false },
        { text: "inclination", correct: false },
    ]},
    { question: "compatible", 
    answers: [
        { text: "appropriate", correct: true },
        { text: "aspect", correct: false },
        { text: "omission", correct: false },
    ]},
    { question: "credible", 
    answers: [
        { text: "conclusive", correct: true },
        { text: "conspiracy", correct: false },
        { text: "conjunction", correct: false },
    ]},
    { question: "demeanor", 
    answers: [
        { text: "mannner", correct: true },
        { text: "weird", correct: false },
        { text: "tilt", correct: false },
    ]},
    { question: "depreciate", 
    answers: [
        { text: "deteriorate", correct: true },
        { text: "distress", correct: false },
        { text: "dependable", correct: false },
    ]},
    { question: "divulge", 
    answers: [
        { text: "blab", correct: true },
        { text: "graft", correct: false },
        { text: "valid", correct: false },
    ]},
    { question: "dynamic", 
    answers: [
        { text: "aggressive", correct: true },
        { text: "conceivable", correct: false },
        { text: "congenial", correct: false },
    ]},
    { question: "exception", 
    answers: [
        { text: "debarment", correct: true },
        { text: "discourage", correct: false },
        { text: "durability", correct: false },
    ]},
    { question: "exploit", 
    answers: [
        { text: "apply", correct: true },
        { text: "prejudice", correct: false },
        { text: "ridiculous", correct: false },
    ]},
    { question: "extinct", 
    answers: [
        { text: "asleep", correct: true },
        { text: "practical", correct: false },
        { text: "accordant", correct: false },
    ]},
    { question: "feasible", 
    answers: [
        { text: "achievable", correct: true },
        { text: "dwindle", correct: false },
        { text: "freakish", correct: false },
    ]},
    { question: "fluctuate", 
    answers: [
        { text: "seesaw", correct: true },
        { text: "comprehendible", correct: false },
        { text: "hinder", correct: false },
    ]},
    { question: "frustrate", 
    answers: [
        { text: "baffle", correct: true },
        { text: "restrain", correct: false },
        { text: "sensible", correct: false },
    ]},
    { question: "gregarious", 
    answers: [
        { text: "clubby", correct: true },
        { text: "exterminated", correct: false },
        { text: "lutter", correct: false },
    ]},
    { question: "hypothesis", 
    answers: [
        { text: "axiom", correct: true },
        { text: "sincerity", correct: false },
        { text: "suitable", correct: false },
    ]},
    { question: "impeccable", 
    answers: [
        { text: "immaculate", correct: true },
        { text: "veer", correct: false },
        { text: "theorem", correct: false },
    ]},
    { question: "impervious", 
    answers: [
        { text: "impenetrable", correct: true },
        { text: "unreliable", correct: false },
        { text: "comprehensible", correct: false },
    ]},
    { question: "import", 
    answers: [
        { text: "account", correct: true },
        { text: "profitable", correct: false },
        { text: "resistant", correct: false },
    ]},
    // 30 //
    { question: "inference", 
    answers: [
        { text: "interpretation", correct: true },
        { text: "exquisite", correct: false },
        { text: "capitalize", correct: false },
    ]},
    { question: "inhibit", 
    answers: [
        { text: "forbid", correct: true },
        { text: "unblemished", correct: false },
        { text: "oscillate", correct: false },
    ]},
    { question: "integrity", 
    answers: [
        { text: "probity", correct: true },
        { text: "generous", correct: false },
        { text: "sober", correct: false },
    ]},
    { question: "judicious", 
    answers: [
        { text: "malevolent", correct: true },
        { text: "unrealized", correct: false },
        { text: "extraordinary", correct: false },
    ]},
    { question: "latent", 
    answers: [
        { text: "smoldering", correct: true },
        { text: "unfamiliar", correct: false },
        { text: "cantankerous", correct: false },
    ]},
    { question: "lavish", 
    answers: [
        { text: "excessive", correct: true },
        { text: "momentousness", correct: false },
        { text: "rational", correct: false },
    ]},
    { question: "longevity", 
    answers: [
        { text: "endurance", correct: true },
        { text: "omission", correct: false },
        { text: "spiteful", correct: false },
    ]},
    { question: "lucid", 
    answers: [
        { text: "clear", correct: true },
        { text: "fuzzy", correct: false },
        { text: "premise", correct: false },
    ]},
    { question: "malicious", 
    answers: [
        { text: "mischievous", correct: true },
        { text: "antiquated", correct: false },
        { text: "ill-famed", correct: false },
    ]},
    { question: "mediocre", 
    answers: [
        { text: "dull", correct: true },
        { text: "grand", correct: false },
        { text: "inclination", correct: false },
    ]},
    // 40 //
    { question: "murky", 
    answers: [
        { text: "dark", correct: true },
        { text: "ephemeral", correct: false },
        { text: "archive", correct: false },
    ]},
    { question: "mutable", 
    answers: [
        { text: "erratic", correct: true },
        { text: "lastingness", correct: false },
        { text: "exuberant", correct: false },
    ]},
    { question: "notorious", 
    answers: [
        { text: "flagrant", correct: true },
        { text: "antediluvian", correct: false },
        { text: "give away", correct: false },
    ]},
    { question: "oblivious", 
    answers: [
        { text: "inattentive", correct: true },
        { text: "mania", correct: false },
        { text: "unmoved", correct: false },
    ]},
    { question: "obsession", 
    answers: [
        { text: "enthusiasm", correct: true },
        { text: "solidify", correct: false },
        { text: "temporary", correct: false },
    ]},
    { question: "obsolete", 
    answers: [
        { text: "out-of-date", correct: true },
        { text: "blind", correct: false },
        { text: "well-known", correct: false },
    ]},
    { question: "obtrusive", 
    answers: [
        { text: "bulging", correct: true },
        { text: "wavering", correct: false },
        { text: "drag", correct: false },
    ]},
    { question: "perverse", 
    answers: [
        { text: "abnormal", correct: true },
        { text: "fascination", correct: false },
        { text: "jutting", correct: false },
    ]},
    { question: "petrify", 
    answers: [
        { text: "fossilize", correct: true },
        { text: "muddy", correct: false },
        { text: "luxurious", correct: false },
    ]},
    { question: "procrastinate", 
    answers: [
        { text: "dawdle", correct: true },
        { text: "interim", correct: false },
        { text: "turn", correct: false },
    ]},
    { question: "provisional", 
    answers: [
        { text: "tentative", correct: true },
        { text: "wanted", correct: false },
        { text: "capitalize", correct: false },
    ]},
            ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";        
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
});


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);


function shuffleAnswers(question) {
    for (let i = question.answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
    }
}

// Shuffle the answers for each question in the 'questions' array
questions.forEach(shuffleAnswers);

startQuiz();

        // Function to navigate to the homepage
        function goToHomepage() {
          // Replace 'index.html' with the actual URL of your homepage
          window.location.href = '../Hub.html';
      }