
function showTest1() {
    $("#questionScreen1").show();
    $("#startScreen1").hide();   
}

let quiz1 = [
    {
        question: "¿A quién se le atribuye el inicio del estudio de los Rayos Cósmicos?",
        option: [
            "1. M.Faraday.",
            "2. C.A.Coulomb.",
            "3. Wilson.",
            "4. V.F.Hess.",
        ],
        answer: 2,
    },
    {
        question: "¿Qué hipótesis aventuró Wilson?",
        option: [
            "1. La ionización espóntanea del aire era debido a que la radiación procedía de la amtósfera o de un cuerpo celeste que no sea la tierra.",
            "2. La ionización espóntanea del aire era debido a radiación terrestres.",
            "3. La ionización espóntanea del aire era debido a radiación solar.",
            "4. La ionización espóntanea del aire era debido a radiación de la atmósfera.",
        ],
        answer: 1,
    },
    {
        question: "¿Que fue lo que postuló A.Gocktel?",
        option: [
            "1. La radiación debía proceder bien de la atmósfera o de un cuerpo celeste que no sea la tierra.",
            "2. La radiación debía proceder del Sol.",
            "3. La radiación debía proceder de la Atmósfera..",
            "4. La radiación debía porceder de la Luna.",
        ],
        answer: 1,
    },
    {
        question:
            "¿Quién fue el primero en relizar un gran avance en el estudio de los rayos cósmicos?",
        option: [
            "1. V.F Hess.",
            "2. W.Kolhorster.",
            "3. R.A.Milkan",
            "4. J.Clay",
        ],
        answer: 1,
    },
    {
        question: "¿Quién o quiénes confirmaron los resultados obtenidos por V.F Hess?",
        option: [
            "1. García Lorca",
            "2. W.Kolhorster.",
            "3. R.A.Milkan.",
            "4. 2 y 3.",
        ],
        answer: 4,
    },
    {
        question: "¿Que confirmó ,exactmente, R.A.Milkan sobre las medidas realizadas por V.F.Hess?",
        option: ["1. La dependencia de la ionización con la atmósfera.", "2. La intensiddad cambiaba con la altura. ", "3. La radiación observada no se encontraba dentro de nuestra atmósfera.", "4. La intensiddad cambiaba con la altura y que los rayos cósmicos eran partículas cargadas."],
        answer: 3,
    },
    {
        question: "¿Qué dos invenciones dieron lugar a un gran avance en el estudio de los rayos cósmicos en la década de los 20?",
        option: [
            "1. Los teléfonos móviles.",
            "2. Los coches eléctricos.",
            "3. Los contadores Geiger-müller y las mejoradas cámaras de niebla.",
            "4. Los aceleradores de partículas.",
        ],
        answer: 3,
    },
    {
        question: "¿Cuál es el valor de mayor energía que se ha detectado?",
        option: ["1. 10^10 eV", "2. 10^18eV", "3. 10^15eV ", "4. 2.5 x 10^20eV"],
        answer: 4,
    },
    {
        question: "¿Qué desarrolló el físico francés P.Auge?",
        option: ["1. Un algoritmo para determinar la energía de las cascadas de partículas.", "2. Un algoritmo para determinar la energía la energía de los rayos primordiales.",
        "3. Un algoritmo para determinar la energía de los rayos cósmicos primarios.",
        "4. No hizo nada importante."],
        answer: 3,
    },
    {
        question: "¿Cuál ha sido el evento de mayor energía detectado hasta el momento en la medición de rayos cósmicos?",
        option: ["1. La caída del muro de Berlín.", "2. La bomba atómica de Hiroshima", "3. AGASA", "4. Volcano Roach"],
        answer: 3,
    }
];

let index1 = 0;

let attempt1 = 0;
let score1 = 0;
let wrong1 = 0;

// Declaramos asís la variable "questions" pra que el orden de las preguntas sea aleatorio.
let questions1 = quiz1.sort();

let totalQuestion1 = questions1.length; // Estamo tomando el número total de preguntas.

function printQuestion(i) {
    let contador = i + 1 
    $(".title2").text("Pregunta " +  contador  + " de " + totalQuestion1 );
    $(".questionBox1").text(questions1[i].question);
    $(".optionBox1 p").eq(0).text(questions1[i].option[0]);
    $(".optionBox1 p").eq(1).text(questions1[i].option[1]);
    $(".optionBox1 p").eq(2).text(questions1[i].option[2]);
    $(".optionBox1 p").eq(3).text(questions1[i].option[3]);

}
// Función para chequeara la respuesta dada.
function checkAnswer(option) {
    attempt1++;

    let optionClicked = $(option).data("opt");

    if (optionClicked == questions1[index1].answer) {
        $(option).addClass("right");
        score1++;
    } else {
        $(option).addClass("wrong");
        wrong1++;
    }

    $(".scoreBox1 span").text(score1);
    $(".timerBox1 span").text(wrong1);
    $(".optionBox1 p").attr("onclick" , ""); // COn esta línea evitamos que se pueen señalara más de dos opciones.
}

// Función para pasar a la función siguiente.
function showNext() {
    if(index1 >= questions1.length -1 ) {
        showResult(0);
        return;

    }

    index1++; // Este incremento es muy importante para que aumente el índice de la pregunta

    $(".optionBox1 p").removeClass();
    $(".optionBox1 p").attr("onclick" , "checkAnswer(this)");

    printQuestion(index1); // Llamamis a la pregunta siguiente a la actual.

// Funcion para saltarse las preguntas.
}
function showResult(j) {
    if(j == 1 && index1 < questions1.length -1 && !confirm("No ha terminado el test. Presione ok si quiere ir a los resultados.")){

        return;
    }
    result();
}

// Función que nos da el resultado.
function result() {
    $("#resultScreen1").show();
    $("#questionScreen1").hide();
    $("#totalQuestion1").text(totalQuestion1);
    $("#attemptlQuestion1").text(attempt1);
    $("#correctAnswers1").text(score1);
    $("#wrongAnswers1").text(wrong1);
}


