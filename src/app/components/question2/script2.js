
function showTest2() {
    $("#questionScreen2").show();
    $("#startScreen2").hide();   
}

let quiz2 = [
    {
        question: "¿Qué partícula o elemento fue considerado como la partícula fundamental durante mucho tiempo?",
        option: [
            "1. Los protones y neutrones.",
            "2. Los bosones.",
            "3. Los fermiones.",
            "4. El átomo.",
        ],
        answer: 4,
    },
    {
        question: "¿Qué significó que el átomo estuviera formado por protones y neutrones?",
        option: [
            "1. Una partícula fundamental esta formada por particulas más pequeñas.",
            "2. Los protones y neutrones son partículas fundamentales.",
            "3. Una partícula puede ser considerada elemental dependiendo de las distancias que seamos capaces de medir, o equivalentemente de las energías que se den en los procesos físicos.",
            "4. La ionización espóntanea del aire era debido a radiación de la atmósfera.",
        ],
        answer: 3,
    },
    {
        question: "En la actualidad, ¿Cuáles son las partículas fundamentales? ",
        option: [
            "1. Los quarks ",
            "2. Los leptones .",
            "3. Bosones de Gauge.",
            "4. Todas las anteriores.",
        ],
        answer: 4,
    },
    {
        question:
            "¿Que magnitud fue elegida como el valor absoluto de la carga eléctrica ?",
        option: [
            "1. La carga del protón.",
            "2. La carga del átomo.",
            "3. La carga de un esfera cargada.",
            "4. La carga de un electrón.",
        ],
        answer: 4,
    },
    {
        question: "¿Qué sistema de unidades se introdujo para trabajar con la masas y energía de estas partículas subatómicas?",
        option: [
            "1. El sistema internacional de unidades.",
            "2. Ninguna es correcta.",
            "3. El sistema de unidades naturales.",
            "4. 1 y 3.",
        ],
        answer: 3,
    },
    {
        question: "¿Que tres propiedades usamos para clasificar las partículas fundamentales?",
        option: ["1. Espín, tipo de interacción y estabilidad/inestabilidad", "2. Espín, momento angular y momento lineal", "3. Momento angular total, tipo de interacción e inestabilidad.", "4. Ninguna es correcta."],
        answer: 1,
    },
    {
        question: "¿Qué es la vida media de una partícula?",
        option: [

            "1. Es tiempo que tarda una partícula en desintegrarse.",
            "2. Es el promedio de vida de un núcleo o de una partícula subatómica libre antes de desintegrarse.",
            "3. El tiempo de todo el proceso de creación y desintegracion de la partícula.",
            "4. No es nada correcto.",
        ],
        answer: 2,
    },
    {
        question: "¿Cuáles de las siguientes son leyes absolutas?",
        option: ["1. Conservacion de la energía, conservación del momento lineal y CPT.", "2. EL isospín.", "3. Conservación del momento lineal", "4. CPT "],
        answer: 4,
    },
    {
        question: "¿Qué es la interacción fuerte?",
        option: ["1. Es el tipo de interacción que se da entre leptones.", "2. Es la interacción que se da entre bosones", "3. Es el tipo de interacción que se da entre quarks y la partícula mediadora es el gluón.","4. Es el tipo de interacción que se da entre los quarks y la partícula mediadora es fotón"],
        answer: 3,
    },
    {
        question: "¿Qué es la interacción débil?",
        option: ["1. Es el tipo de interacción que se da en procesos de desintegración leptónica.", "2. Es la interacción que se da en tre fotones.", "3. Es el tipo de interacción que se da entre quarks y la partícula mediadora es el gluón.","4. Es el tipo de interacción que se da entre los quarks y la partícula mediadora es fotón."],
        answer: 1,
    },
    {
        question: "¿Qué es la interacción electromagnética?",
        option: ["1. Es el tipo de interacción que se da entre leptones y las particulas maediadoras son bosones débiles.", "2. Es la interacción resposable de la existencia de átomos y moléculas, siendo la partícula mediadora el fotón.", "3. Es el tipo de interacción que se da entre quarks y la partícula mediadora es el gluón.","4. Es el tipo de interacción que se da entre los quarks y la partícula mediadora es fotón."],
        answer: 2,
    },
    {
        question: "¿Cuáles de las partículas elementales no pueden encontrarse en libertad?",
        option: [
            "1. Los leptones.", 
            "2. Los quarks.", 
            "3. Los bosones de gauge.",
            "4. Todas las anteriores."],
        answer: 2,
    },
    {
        question: "¿Qué números cuánticos aditivos deben conservaese en cualquier proceso físico conocido hasta el momento?",
        option: [
            "1. El número bariónico.", 
            "2. El número extrañeza.", 
            "3. El número leptónico.",
            "4. La hipercarga."],
        answer: 3,
    },
    {
        question: "¿Qué valor presenta el número bariónico de un solo quark?",
        option: [
            "1. 1/2.", 
            "2. 3.", 
            "3. 1/3.",
            "4. 2/3."],
        answer: 3,
    },
    {
        question: "¿Qué es un hadrón?",
        option: [
            "1. Es un tipo de quark perteneciente a la primera generación.", 
            "2. Es un tipo de quark perteneciene a la segunda generación.", 
            "3. Ninguna es correcta.",
            "4. Es el estado ligado de los quarks."],
        answer: 4,
    },
    {
        question: "¿Qué son los bariones?",
        option: [
            "1. Son hadrones que están formados por 3 quarks que pueden ser iguales o incluso diferenes entre sí.", 
            "2. Son los hadrones formados por dos quarks, obligatoriamente deben ser un quark y anti-quark.", 
            "3. Ninguna es correcta.",
            "4. 1 Y 2 son correctas."],
        answer: 1,
    },
    {
        question: "¿Qué son los mesones?",
        option: [
            "1. Son hadrones que están formados por 3 quarks que pueedn ser iguales o incluso diferentes entre sí.", 
            "2. Son los hadrones formados por dos quarks, obligatoriamente deben ser un quark y anti-quark.", 
            "3. Ninguna es correcta.",
            "4. Son los hadrones formados por dos quarks que puedn ser iguales o incluso diferentes entre sí."],
        answer: 2,
    },
    {
        question: "¿Qué son las antipartículas?",
        option: [
            "1. Son partículas que presentan igual carga y diferente masa que su partícula correspondiente.", 
            "2. Son partículas que presentan las mismas propiedades que su antipartícula a excepción de su isospín. .", 
            "3. Son partículas que presentan carga contraia a su partícula correspondiente. Un ejemplo, sería el electrón y el positrón.",
            "4. No es nada correcto."],
        answer: 3,
    },
    {
        question: "¿Qué son los fermiones y los bosones?",
        option: [
            "1. Los fermiones son partículas que presentan espín entero y los bosones partículas que presentan espin semi-entero.", 
            "2.  Los fermiones son partículas que presentan espín semi-entero y los bosones partículas que presentan espín entero.", 
            "3. Los fermiones obeceden  la estadísitica de F-D y los bosones obedecen la estadistica de B-E.",
            "4. 2 Y 3."],
        answer: 4,
    },
    {
        question: "¿Qué son los Bosones de Gauge?",
        option: [
            "1. Un bosón de gauge es un bosón que actúa como partícula de intercambio en los procesos de interacción fundamental de la materia.", 
            "2.  Un bosón de gauge es un bosón que no actúa como partícula de intercambio en los procesos de interacción fundamental de la materia.", 
            "3. Ninguna opción es correcta.",
            "4. Toodo es correcto."],
        answer: 1,
    },

    

];
let index2 = 0;

let attempt2 = 0;
let score2 = 0;
let wrong2 = 0;

// Declaramos asís la variable "questions" pra que el orden de las preguntas sea aleatorio.
let questions2 = quiz2.sort();

let totalQuestion2 = questions2.length; // Estamo tomando el número total de preguntas.

function printQuestion1(i) {
    let contador = i + 1 
    $(".title3").text("Pregunta " +  contador  + " de " + totalQuestion2 );
    $(".questionBox2").text(questions2[i].question);
    $(".optionBox2 p").eq(0).text(questions2[i].option[0]);
    $(".optionBox2 p").eq(1).text(questions2[i].option[1]);
    $(".optionBox2 p").eq(2).text(questions2[i].option[2]);
    $(".optionBox2 p").eq(3).text(questions2[i].option[3]);

}
// Función para chequeara la respuesta dada.
function checkAnswer1(option) {
    attempt2++;

    let optionClicked = $(option).data("opt");

    if (optionClicked == questions2[index2].answer) {
        $(option).addClass("right");
        score2++;
    } else {
        $(option).addClass("wrong");
        wrong2++;
    }

    $(".scoreBox2 span").text(score2);
    $(".timerBox2 span").text(wrong2);
    $(".optionBox2 p").attr("onclick" , ""); // COn esta línea evitamos que se pueen señalara más de dos opciones.
}

// Función para pasar a la función siguiente.
function showNext1() {
    if(index2 >= questions2.length -1 ) {
        showResult1(0);
        return;

    }

    index2++; // Este incremento es muy importante para que aumente el índice de la pregunta

    $(".optionBox2 p").removeClass();
    $(".optionBox2 p").attr("onclick" , "checkAnswer1(this)");

    printQuestion1(index2); // Llamamis a la pregunta siguiente a la actual.

// Funcion para saltarse las preguntas.
}
function showResult1(j) {
    if(j == 1 && index2 < questions2.length -1 && !confirm("No ha terminado el test. Presione ok si quiere ir a los resultados.")){

        return;
    }
    result1();
}

// Función que nos da el resultado.
function result1() {
    $("#resultScreen2").show();
    $("#questionScreen2").hide();
    $("#totalQuestion2").text(totalQuestion2);
    $("#attemptlQuestion2").text(attempt2);
    $("#correctAnswers2").text(score2);
    $("#wrongAnswers2").text(wrong2);
}


