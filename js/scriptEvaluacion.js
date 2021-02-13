

/* Global variables */

let SCORE;
let RAND_QUES;
let NUMS;

/*************************** */

const scoreBoard = document.querySelector('.score-board');
const scoreVal = document.getElementById('score');
const questionBox = document.querySelector('.question-box');
const optionBox = document.querySelector('.option-wrapper');
const playBtn = document.querySelector('.play-btn');
const exitBtn = document.querySelector('.exit-btn');

/******************************* */

const optionsBtns = document.querySelectorAll('.option-text'); // para el texto de las 4 opciones

const optionsSelection = document.querySelectorAll('#opt-btn');

/********************************* */


function playSetup(){
    SCORE = 0;
    RAND_QUES = -1;
    playBtn.style.display = "block";
    questionBox.style.display = "none";
    optionBox.style.display = "none";
    exitBtn.style.display = "none";
    scoreBoard.style.display = "none";
    NUMS = numArray(0, 9); // para 10 preguntas en total
    
}


function startGame(){
    scoreVal.innerHTML = SCORE;
    questionBox.style.display = "block";
    optionBox.style.display = "flex";
    exitBtn.style.display = "block";
    scoreBoard.style.display = "block";
    question.quizPlay();
}

playBtn.addEventListener('click', function(){
    this.style.display = "none";
    startGame();
})

exitBtn.addEventListener('click', function(){
    playSetup();
})


/*********** Sección de Preguntas  */

let questionColl = [];
let optionColl = [];
const answerColl = [0, 3, 0, 2, 1, 0, 0, 3, 1, 2]; // respuesta correcta de las siguientes preguntas del cuestionario

/*************** questions ****** */

questionColl[0] = "1. ¿Cuál de las siguientes palabras es aceptada por la ER: ab*a?";
optionColl[0] = {
    options: ['aa', 'ababa', 'abab', 'abbaba']
};

questionColl[1] = "2. ¿Cuál de las siguientes palabras es aceptada por la ER: a(b*a)?";
optionColl[1] = {
    options: ['abbaba', 'abab','ababa', 'aa']
};

questionColl[2] = "3. ¿Cuál de las siguientes palabras es rechazada por la ER: a(ba*)?";
optionColl[2] = {
    options: ['aa', 'aba', 'ab', 'abaaa']
};

questionColl[3] = "4. ¿Cuál de las siguientes palabras es rechazada por la ER: a*(b*a)?";
optionColl[3] = {
    options: ['a', 'aba', 'abb', 'ba']
};

questionColl[4] = "5. ¿Cuál de estas ER representa al Lenguaje = {Palabras en ∑={a,b} que contienen la subcadena ab}?";
optionColl[4] = {
    options: ['ab', '(a+b)*ab(a*b)*', 'a*abb*', '(ab)*ab(ba)*']
};

questionColl[5] = "6. ¿Cuál de estas ER representa al Lenguaje = {Palabras en ∑={a,b} que contienen un número par de a’s}? ";
optionColl[5] = {
    options: ['b*(ab*a)*b*', '(aa)*', '(aba)*', 'aa*']
};

questionColl[6] = "7. ¿Cuál de estas ER representa al Lenguaje = {Palabras en ∑={a,b} que tienen longitud par}?";
optionColl[6] = {
    options: ['((a+b)(a+b))*', '(a+b)(a+b)', '(a+b)(a+b)*', 'aa+bb']
};

questionColl[7] = "8. ¿Cuál de estas ER representa al Lenguaje = {anbm|m, n ≥ 0} en ∑={a,b}?";
optionColl[7] = {
    options: ['(ab)*', 'ab', 'aa*bb*', 'a*b*']
};

questionColl[8] = "9. ¿Cuál de estas ER representa al Lenguaje = {anb2m| n,m ≥ 0} en ∑={a,b}?";
optionColl[8] = {
    options: ['abb', 'a*(bb)*', '(abb)*', 'aa*bb(bb)*']
};

questionColl[9] = "10. ¿Cuál de estas descripciones corresponde al Lenguaje Regular denotado por la ER a(a+b)*b?";
optionColl[9] = {
    options: ['{Palabras en ∑={a,b} que tienen prefijo b}', '{Palabras en ∑={a,b} que inician con a o terminan con b}', '{Palabras en ∑={a,b} que inician con a y terminan con b}', '{Palabras en ∑={a,b} que tienen sufijo a}']
};
/********** termina seccion de preguntas ***** */


let quizQuestion = function(question, optionList, correctAns){
    this.question = question;
    this.optionList = optionList;
    this.correctAns = correctAns;
}

let question = new quizQuestion(questionColl, optionColl, answerColl);

/****************************** */

/************ generate unique random numbers for unique questions */


function numArray(start, end){
    let numsList = [];
    for(let i = start; i <= end; i++){
        numsList.push(i);
    }
    return numsList;
}

function randValueGen(min, max){
    let temp = Math.random() * (max - min + 1);
    let result = Math.floor(temp) + min;
    return result;
}


/***************************** */

quizQuestion.prototype.quizPlay = function(){
    
    // Para comprobar si las preguntas están disponibles o no

    if(NUMS.length === 0){
        document.getElementById('question').innerHTML = "Has completado la evaluación";
        optionBox.style.display = "none";
        return;
    }
    
    
    let randIndex = randValueGen(0, NUMS.length - 1);
    RAND_QUES = NUMS[randIndex];

    NUMS.splice(randIndex, 1);

    // para mostrar preguntas al azar en el cuadro de preguntas
    document.getElementById('question').innerHTML = this.question[RAND_QUES];

    // para mostrar las opciones para la pregunta anterior
    this.optionList[RAND_QUES].options.forEach(function(option, idx){
        optionsBtns[idx].innerHTML = option;
    })
}

optionsSelection.forEach(function(optionSelected, index){
    /*
    optionSelected.addEventListener('click', function(){
        console.log(`${optionSelected} ${index}`);
    })
    */

    optionSelected.addEventListener('click', function(){

        // respuesta seleccionada por el usuario
        let userAns = parseInt(this.textContent) - 1; // ya que nuestra indexación comienza desde 0

        // para evitar que el usuario haga clic varias veces y en múltiples opciones

        optionsSelection.forEach(function(option){
            option.disabled = true;
        })

        question.checkAnswer(userAns);
    })

})

quizQuestion.prototype.checkAnswer = function(userAns){
    optionsSelection[userAns].style.background = "white";
    optionsSelection[userAns].style.color = "black";

    // correct answer from our data collection
    let correctAns = question.correctAns[RAND_QUES];
    if(userAns === correctAns){
        correctAnsUpdate();
    } else {
        incorrectAnsUpdate();
    }
} 

// para actualizar la respuesta correcta
function correctAnsUpdate(){
    document.getElementById('question').style.color = "green";
    document.getElementById('question').innerHTML = "Correcto!";
    SCORE++;
    scoreVal.innerHTML = SCORE;
    
    setTimeout(contdPlay, 1500);
}

// para actualización de respuesta incorrecta
function incorrectAnsUpdate(){
    document.getElementById('question').style.color = "red";
    document.getElementById('question').innerHTML = "Incorrecto!";

    setTimeout(contdPlay, 1500);
}

// para continuar jugando

function contdPlay(){
    
    optionsSelection.forEach(function(option){
        option.disabled = false; // volver a habilitar nuestros botones deshabilitados
        option.style.background = "black";
        option.style.color = "white";
    })

    document.getElementById('question').style.color = "black"; // para volver a hacer que el color de la pregunta sea blanco en caso de que la respuesta anterior haya sido respondida incorrectamente
    question.quizPlay();
}


playSetup();