
function showTest() {
    $("#questionScreen").show();
    $("#startScreen").hide();   
}


let quiz = [
    {
        question: "¿De donde proceden los rayos cósmicos menos energéticos que llegan a la superficie atmosférica?",
        option: [
            "1. De la luna.",
            "2. De planetas como Venus.",
            "3. Del Sol.",
            "4. De la materia estelar.",
        ],
        answer: 3,
    },
    {
        question: "¿Qué fenónemos crean los rayos cósmicos?",
        option: [
            "1. Reacciones nucleares o procesos castastróficos.",
            "2. Procesos de ionización de la materia.",
            "3. Agujeros Negros.",
            "4. Las grandes nevadas de las montañas más altas.",
        ],
        answer: 1,
    },
    {
        question: "¿Por donde se desplazan los rayos cósmicos antes de llegar a la atmósfera terrestre?",
        option: [
            "1. Las capas inferiores de la atmósfera.",
            "2. Nuestra galaxia.",
            "3. El espacio intelestelar.",
            "4. Fuera de nuestra galaxia.",
        ],
        answer: 3,
    },
    {
        question:
            "¿Que hecho provoca que estos rayos lleguen a la atmósfera terrestre?",
        option: [
            "1. Colisionar con cuerpos celestes.",
            "2. Colisonar con los campos magnéticos y materia estelar.",
            "3. Colisonar con el sol.",
            "4. Colisionar con la luna",
        ],
        answer: 2,
    },
    {
        question: "¿Cómo se denomninan los rayos cósmicos que viajan a lo largo del espacio intergaláctico?",
        option: [
            "1. Rayos cósmicos primarios.",
            "2. Rayos cósmicos primordiales.",
            "3. Rayos cósmicos terciarios.",
            "4. Rayos cósmicos secundarios.",
        ],
        answer: 1,
    },
    {
        question: "¿En sus inicios donde se encuadró el estudio de los rayos cósmicos?",
        option: ["1. La física de la tierra.", "2. Astrofísica. ", "3. Termodinámica.", "4. Física nuclear."],
        answer: 4,
    },
    {
        question: "¿En donde se encuentra encuadrado actualmente el estudio de los rayos cósmicos?",
        option: [
            "1. Física nuclear.",
            "2. Mecánica cuántica.",
            "3. Astrofísica.",
            "4. Mecánica de fluidos.",
        ],
        answer: 3,
    },
    {
        question:
            "¿A qué velocidad  son acelerados los rayos cósmicos ?",
        option: ["1.Velocidad del sonido.", "2. La velocidad del renault de F.Alonso.", "3. Velocidades superiores a las de la luz.", "4. Velocidades cercanas a la luz."],
        answer: 4,
    },
    {
        question: "Al llegar estas partículas a la atmósfera,¿qué ocurre?",
        option: ["1. Muchas de ellas son absorbidas por la atmósfera", "2. No sudece nada.", "3. Al traspasarla se forma cascadas extensas de partículas. ", "4. 1 y 3. "],
        answer: 4,
    },
    {
        question: "¿De donde proceden los rayos cósmicos más energéticos?",
        option: ["1. Nuestra galaxia", "2. Materiales estelares", "3. Fuera de nuestra galaxia", "4. Explosiones de supernovas."],
        answer: 3,
    },
];

let index = 0;

let attempt = 0;
let score = 0;
let wrong = 0;

// Declaramos asís la variable "questions" pra que el orden de las preguntas sea aleatorio.
let questions = quiz.sort();

let totalQuestion = questions.length; // Estamo tomando el número total de preguntas.

function printQuestion0(i) {
    let contador = i + 1 
    $(".title1").text("Pregunta " +  contador  + " de " + totalQuestion );
    $(".questionBox").text(questions[i].question);
    $(".optionBox p").eq(0).text(questions[i].option[0]);
    $(".optionBox p").eq(1).text(questions[i].option[1]);
    $(".optionBox p").eq(2).text(questions[i].option[2]);
    $(".optionBox p").eq(3).text(questions[i].option[3]);

}
// Función para chequeara la respuesta dada.
function checkAnswer0(option) {
    attempt++;

    let optionClicked = $(option).data("opt");

    if (optionClicked == questions[index].answer) {
        $(option).addClass("right");
        score++;
    } else {
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox0 span").text(score);
    $(".timerBox0 span").text(wrong);
    $(".optionBox p").attr("onclick" , ""); // COn esta línea evitamos que se pueen señalara más de dos opciones.
}

// Función para pasar a la función siguiente.
function showNext0() {
    if(index >= questions.length -1 ) {
        showResult0(0);
        return;

    }

    index++; // Este incremento es muy importante para que aumente el índice de la pregunta

    $(".optionBox p").removeClass();
    $(".optionBox p").attr("onclick" , "checkAnswer0(this)");

    printQuestion0(index); // Llamamis a la pregunta siguiente a la actual.

// Funcion para saltarse las preguntas.
}
function showResult0(j) {
    if(j == 1 && index < questions.length -1 && !confirm("No ha terminado el test. Presione ok si quiere ir a los resultados.")){

        return;
    }
    result0();
}

// Función que nos da el resultado.
function result0() {
    $("#resultScreen").show();
    $("#questionScreen").hide();
    $("#totalQuestion").text(totalQuestion);
    $("#attemptlQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}



