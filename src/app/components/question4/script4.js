function showTest4() {
    $("#questionScreen4").show();
    $("#startScreen4").hide();   
}
let quiz4 = [
    {
        question: "¿Cuál es la definición correcta para los detectores de rayos cósmicos?",
        option: [
            "1. Son dispositivos que presentan sensores sensibles exclusivos de radiaciones electromagnéticas.",
            "2. Son dispositivos que presentan sensores sensibles a partículas cargadas.",
            "3. Son dispositivos que presentan sensores sensibles a hadrones exclusivamente.",
            "4. Son dispositivos que presentan sensores sensibles a la radiación solar.",
        ],
        answer: 2,
    },
    {
        question: "¿Qué tenenmos que tener en cuenta en la fabricación de un detector?",
        option: [
            "1.  Necesitan una calibración y tener siempre presente la existencia de campos magnéticos.",
            "2.  El lugar de operación es clave para decidir las prestaciones de estos dispositvos.",
            "3.  Deben protegerse de la radiación directa.",
            "4. Todas las respuestas son correctas.",
        ],
        answer: 4,
    },
    {
        question: "¿Qué son los detectores pasivos?",
        option: [
            "1. Son detectores de rayos cósmicos que necesitan de una fuente de alimentación para su funcionamiento. ",
            "2. Son detectores que no  necesitan de una fuente de alimentación para su funcionamiento.",
            "3. Son detectores que pueden funcionar con fuente y sun fuente de alimentación.",
            "4. Ninguan opción es correcta.",
        ],
        answer: 2,
    },
    {
        question:
            "¿Cuáles son detectores pasivos?",
        option: [
            "1. Las emulsiones nucleares.",
            "2. Detectores de ionización.",
            "3. Decterores de plástico.",
            "4. 1 y 3.",
        ],
        answer: 4,
    },
    {
        question: "¿Qué es una emulsión nuclear?",
        option: [
            "1. Son detectores de rayos cósmicos formados por hierro.",
            "2. Son detectores de rayos cósmicos formados por un halógeno de plata.",
            "3. Son detectores de rayos cósmicos formados por iiones de cobre.",
            "4. Ninguna opción es correcto.",
        ],
        answer: 2,
    },
    {
        question: "¿Qué es un detector de plástico?",
        option: ["1. Son detectores activos formados por láminas de plástico.  ", "2. Son detectores pasivos formados por láminas de plástico. ", "3. Son detectores activos formados por láminas de aluminio.", "4. Son detectores pasivos formados por láminas de aluminio."],
        answer: 1,
    },
    {
        question: "¿Qué son los detectores activos ?",
        option: [
            "1. Son detectores de rayos cósmicos que necesitan de una fuente de alimentación para su funcionamiento. ",
            "2. Son detecores que no  necesitan de una fuentes de alimentación para su funcionamiento.",
            "3. Son detectores que puden funcionar con fuente y sin fuente de alimentación.",
            "4. Ninguan opción es correcta.",
        ],
        answer: 1,
    },
    {
        question: "¿Qué ventajas presentan los detectores activos?.",
        option: ["1. Solamente registran partículas a la tensión adecuada.", "2. Son los detectores adecuados para embarcar en stélites.", "3. Todas son correctas.","4. Presentan la correlación temporal de sicesos."],
        answer: 3,
    },
    {
        question: "¿Cuáles de estos detectores son activos ?.",
        option: ["1. Ionización de gases.", "2. Detectores de centelleo.", "3. Ninguna es correcta.","4. 1 y 2 son correctas."],
        answer: 4,
    },
    {
        question: "¿En qué regiones trabajan las cámaras de niebla?",
        option: ["1. Región 1.", "2. Región 3.", "3. Región 4.","4. Región 2."],
        answer: 4,
    },
    {
        question: "¿En qué regiones trabajan los contadores Geiger-Müller?",
        option: ["1. Región 5.", "2. Región 1.", "3. Región 3.","4. Región 4."],
        answer: 1,
    },
    {
        question: "¿Qué es un detector de centelleo?",
        option: [
            "1. Estos detectores están formados por un material sólido que es capa de emitir destellos luminosos cuando los atraviesa uan radiación.", 
            "2. Estso detectores están formados por un material que reacciona y suelta un líquido de un determinado color le atraviesa una partícula.", 
            "3. Ninguna es correcta.",
            "4. Estos detectores están formados por un material que suelta un compoenente corrosivo cuando lo atraviesa una partícula."],
        answer: 1,
    },
    {
        question: "¿Comó pueden ser los detectores semiconductores?",
        option: [
            "1. Portadores de carga.", 
            "2. Aportación de carga.", 
            "3. 1 y 2.",
            "4. Son detectores que no presentan un gap de energía entre sus bandas."],
        answer: 3,
    },
    {
        question: "¿Qué estructura presentan los detectores de ionización de gases?",
        option: [
            "1. Contenedor de puertas paralelas.", 
            "2. Presentan un gans en su interiory un hilo conductor en su interior.", 
            "3. Todas son correctas.",
            "4. El contenedor y el hilo forman los dos electrodos inmersos en el gas noble."],
        answer: 3,
    },
    {
        question: "¿Qué estructura presentan los detectores semiconductores?",
        option: [
            "1. El cristal semiconductor se encuentra situado los electrodos.", 
            "2. Todas correctas.",
            "3. Presentan fuente de alimentación.", 
            "4. El cristal y las fuentes se encuentran conectados por una resistencia."],
        answer: 2,
    },

];

let index4 = 0;

let attempt4 = 0;
let score4 = 0;
let wrong4 = 0;

// Declaramos asís la variable "questions" pra que el orden de las preguntas sea aleatorio.
let questions4 = quiz4.sort();

let totalQuestion4 = questions4.length; // Estamo tomando el número total de preguntas.

function printQuestion4(i) {
    let contador = i + 1 
    $(".title5").text("Pregunta " +  contador  + " de " + totalQuestion4 );
    $(".questionBox4").text(questions4[i].question);
    $(".optionBox4 p").eq(0).text(questions4[i].option[0]);
    $(".optionBox4 p").eq(1).text(questions4[i].option[1]);
    $(".optionBox4 p").eq(2).text(questions4[i].option[2]);
    $(".optionBox4 p").eq(3).text(questions4[i].option[3]);

}
// Función para chequeara la respuesta dada.
function checkAnswer3(option) {
    attempt4++;

    let optionClicked = $(option).data("opt");

    if (optionClicked == questions4[index4].answer) {
        $(option).addClass("right");
        score4++;
    } else {
        $(option).addClass("wrong");
        wrong4++;
    }

    $(".scoreBox4 span").text(score4);
    $(".timerBox4 span").text(wrong4);
    $(".optionBox4 p").attr("onclick" , ""); // COn esta línea evitamos que se pueen señalara más de dos opciones.
}

// Función para pasar a la función siguiente.
function showNext4() {
    if(index4 >= questions4.length -1 ) {
        showResult4(0);
        return;

    }
    index4++; // Este incremento es muy importante para que aumente el índice de la pregunta

    $(".optionBox4 p").removeClass();
    $(".optionBox4 p").attr("onclick" , "checkAnswer3(this)");

    printQuestion4(index4); // Llamamis a la pregunta siguiente a la actual.

// Funcion para saltarse las preguntas.
}
function showResult4(j) {
    if(j == 1 && index4 < questions4.length -1 && !confirm("No ha terminado el test. Presione ok si quiere ir a los resultados.")){

        return;
    }
    result4();
}

// Función que nos da el resultado.
function result4() {
    $("#resultScreen4").show();
    $("#questionScreen4").hide();
    $("#totalQuestion4").text(totalQuestion4);
    $("#attemptlQuestion4").text(attempt4);
    $("#correctAnswers4").text(score4);
    $("#wrongAnswers4").text(wrong4);
}


