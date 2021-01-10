function showTest5() {
    $("#questionScreen5").show();
    $("#startScreen5").hide();   
}
let quiz5 = [
    {
        question: "¿Cuáles de la siguintes medidas son medidas de seguridad?",
        option: [
            "1. El alcohol no puede echarse encima del fieltro.Provocaría una explosión.",
            "2. EL alcohol no es apto para beber.",
            "3. EL hielo seco no puede tocarse con las manos. Riesgo de quemadura.",
            "4. 1 y 3.",
        ],
        answer: 4,
    },
    {
        question: "¿Cuál es el uso de la caja de madera/plástico en la cámara de niebla?",
        option: [
            "1.  Mantiene el hielo seco a una temperatura ambiente.",
            "2.  Contenedor del hielo seco y de la placa metálica.",
            "3.  No sirve para nada es simple estética.",
            "4. Ninguna respuesta es correcta.",
        ],
        answer: 2,
    },
    {
        question: "¿Por qué es aconsejable que la placa metálica sea negra?",
        option: [
            "1. Dicho color mantine mejor el calor que otros. ",
            "2. Llegan más partículas a dicho color.",
            "3. Aumenta la visibilidad de las posibles trazas.",
            "4. Disminuye las posibles colisiones entre partículas detectadas.",
        ],
        answer: 3,
    },
    {
        question:
            "¿Cuáles son los principales erroes y fallos en el desarrollo del experimento?",
        option: [
            "1. No se detectan las trazas y no se ven nubes en las esquinas.",
            "2. Todas son correctas.",
            "3. No se detecan las trazas, solamente se ve una neblina y la presencia de nubes en las esquinas.",
            "4. 1 y 3.",
        ],
        answer: 3,
    },
    {
        question: "¿Por qué la cámara de niebla detecta muones y neutrinos?",
        option: [
            "1. Por son las partículas más abundates en el universo.",
            "2. Son las partículas más abundantes a nivel del mar.",
            "3. Son las partíulas más energéticas a nivel del mar.",
            "4. Son las partículas menos energéticas a nuvel del mar.",
        ],
        answer: 2,
    },
    {
        question: "¿Quién fue el inventor de la cámara de niebla ?",
        option: [
            "1. C.T.Wilson. ",
            "2. Ramón García.",
            "3. José Ortega y Gasset.",
            "4. Enrico Fermi.",
        ],
        answer: 1,
    },
    {
        question: "¿Por qué se produce una traza retorcida?.",
        option: ["1. Dispersión múltiple de rayos cósmicos.", "2. Llegada masiva de partículas que no colisionan .", "3. Colisiones de protones y neutrones.","4. Colisones de núcleos super-pesados."],
        answer: 1,
    },
    {
        question: "¿Que partícula o antipartícula fue detectada por este detector ?.",
        option: ["1. Los fotoes.", "2. Los electrones .", "3. Los hdrones.","4. Los positrones."],
        answer: 1,
    },
    {
        question: "¿Qué es un traza?",
        option: ["1. Una imagen en negativo dejada por la partícula al atravesar la cámara de niebla.", 
                 "2. El camino recorrido por la partícula hasta llegar al detector.", 
                 "3. La energía que lleva la partócula al incidir sobre el detector."
                 ,"4. El rastro que deja la partćiula al atravesar el detector."],
        answer: 4,
    },
    {
        question: "¿Por qué isopropanol y no alcohol normal?",
        option: [
            "1.Resulta más económico.",
            "2.Presenta una gran energía de ionización.",
            "3.Pesenta un baja presión de vapor y de energía de ionización.",
            "4.Se congela al entrar en contacto con la placa metálica.",
            ],
        answer: 3,
    },
    

];

let index5 = 0;

let attempt5 = 0;
let score5 = 0;
let wrong5 = 0;

// Declaramos asís la variable "questions" pra que el orden de las preguntas sea aleatorio.
let questions5 = quiz5.sort();

let totalQuestion5 = questions5.length; // Estamo tomando el número total de preguntas.

function printQuestion5(i) {
    let contador = i + 1 
    $(".title6").text("Pregunta " +  contador  + " de " + totalQuestion5 );
    $(".questionBox5").text(questions5[i].question);
    $(".optionBox5 p").eq(0).text(questions5[i].option[0]);
    $(".optionBox5 p").eq(1).text(questions5[i].option[1]);
    $(".optionBox5 p").eq(2).text(questions5[i].option[2]);
    $(".optionBox5 p").eq(3).text(questions5[i].option[3]);

}
// Función para chequeara la respuesta dada.
function checkAnswer4(option) {
    attempt5++;

    let optionClicked = $(option).data("opt");

    if (optionClicked == questions5[index5].answer) {
        $(option).addClass("right");
        score5++;
    } else {
        $(option).addClass("wrong");
        wrong5++;
    }

    $(".scoreBox5 span").text(score5);
    $(".timerBox5 span").text(wrong5);
    $(".optionBox5 p").attr("onclick" , ""); // COn esta línea evitamos que se pueen señalara más de dos opciones.
}

// Función para pasar a la función siguiente.
function showNext5() {
    if(index5 >= questions5.length -1 ) {
        showResult5(0);
        return;

    }
    index5++; // Este incremento es muy importante para que aumente el índice de la pregunta

    $(".optionBox5 p").removeClass();
    $(".optionBox5 p").attr("onclick" , "checkAnswer4(this)");

    printQuestion5(index5); // Llamamis a la pregunta siguiente a la actual.

// Funcion para saltarse las preguntas.
}
function showResult5(j) {
    if(j == 1 && index5 < questions5.length -1 && !confirm("No ha terminado el test. Presione ok si quiere ir a los resultados.")){

        return;
    }
    result5();
}

// Función que nos da el resultado.
function result5() {
    $("#resultScreen5").show();
    $("#questionScreen5").hide();
    $("#totalQuestion5").text(totalQuestion5);
    $("#attemptlQuestion5").text(attempt5);
    $("#correctAnswers5").text(score5);
    $("#wrongAnswers5").text(wrong5);
}


