
function showTest3() {
    $("#questionScreen3").show();
    $("#startScreen3").hide();   
}

let quiz3 = [
    {
        question: " Atendiendo a su origen  ,¿Cómo podemos clasificar los rayos cósmicos?",
        option: [
            "1. Origen atmosférico, terreste y submarino.",
            "2. Origen extragaláctico, galáctico y desconocido.",
            "3. Origen solar y galáctico.",
            "4. Origen extagláctico.",
        ],
        answer: 2,
    },
    {
        question: "¿Qué es la nucleosíntesis estelar?",
        option: [
            "1.  El proceso mediante el cuál se originan núcelos atómicos a partir de núcleos ya existentes.",
            "2.  El proceso mediante el cuál se originaba núcleos atómicos por bombardeo de neutrones.",
            "3.  La creación de núcleos atómicos en el interior de las estrellas.",
            "4.  La creación de núcleos atómicos en el interior de los mares.",
        ],
        answer: 3,
    },
    {
        question: "¿Cuáles son los procesos dominantes en la nucleosíntesis estelar? ",
        option: [
            "1. Combustión del helio. ",
            "2. Combustión del hidrógeno y de helio.",
            "3. Combustión del C al Si.",
            "4. Otros mecanismos.",
        ],
        answer: 2,
    },
    {
        question:
            "¿Que mecanismo es el responsable de la mayor parte de la energía creada en las estrellas?",
        option: [
            "1. La combustión deL helio.",
            "2. La combustión de hierro.",
            "3. La  combustión del hidrógeno.",
            "4. Las reacciones nucleares en el sol.",
        ],
        answer: 3,
    },
    {
        question: "¿Qué dos procesos forman la combustión del hidrógeno?",
        option: [
            "1. La cadena p-p y el ciclo CNO.",
            "2. Procesos de desintegración beta y alfa.",
            "3. Procesos de desintegración gamma.",
            "4. Proceso de desintegración alfa.",
        ],
        answer: 1,
    },
    {
        question: "¿Qué modelo es el considerado en la actualidad para los rayos de origen galáctico?",
        option: ["1. El modelo de disco.", "2. El modeo de halo.", "3. El modeo estelar.", "4. EL modelo de estrellas de baja energía."],
        answer: 2,
    },
    {
        question: "¿Qué es una supernova ?",
        option: [

            "1. Son todas las reaciones nucleares en las estrellas.",
            "2. Son las reacciones de combustión en las estrellas.",
            "3. Es el colapso violento de una estrella.",
            "4. Ninguna es correcta.",
        ],
        answer: 3,
    },
    {
        question: "¿Qué son los rayos cósmicos primarios y los secundarios?.",
        option: ["Toda la radiación que procede del sol.", "2. Los rayos primarios son los rayos que viajan a largo del espacio interestelar y los secundarios se forman por la incidencia de estos con la materia atmosférica.", "3. La radiación procedente de estrellas más masivas que el sol.", "4. La radiación creada en la explosión de una supernova."],
        answer: 2,
    },
    {
        question: "¿Qué son las denominadas cascadas extensas de partículas(EAS)?.",
        option: ["1. Una lluvia de rayos cósmicos de alta densidad que precipitan sobre las superficie terreste", "2. La llegada de los rayos cósmicos primarios sobre la atmósfera terrestre.", "3. La lluvia de nucleones sobre la superficie terrestre.","4.La lluvia de protones sobre la tierra."],
        answer: 1,
    },
    {
        question: "¿Qué componentes presentan las cascadas extensas de partículas?",
        option: ["1. Componente nucleónica.", "2. Componente electromagnética.", "3. Componente muón-neutrino.","4. Todas las respuesas son correctas."],
        answer: 4,
    },
    {
        question: "¿Cuáles son la partícula más abundante a la altura del mar.?",
        option: ["1. Piones y kaunos.", "2. Nucleones y electrones .", "3. Fotones","4. Muones y neutrinos."],
        answer: 4,
    },
    {
        question: "¿Qué propuso Enrico Fermi en 1954?",
        option: [
            "1. Propuso que la energía creada por las supernovas era suficiente como fuente aceleradora.", 
            "2. Supuso que las fuentes creadoras eran difusas y que las partícualas eran aceleradas por su interacción con el campo magnético.", 
            "3. La supernova crea una primera aceleración de los rayos cósmicos galácticos y la aceleración definitiva era debido a las interacciones porducidas por el campo magnético.",
            "4. Las fuentes creadoras de rayos galácticos eran desconocidas."],
        answer: 3,
    },
    {
        question: "¿Por qué los rayos cósmicos extragaláctios no pueden contenerse en nuestra galaxia?",
        option: [
            "1. EL campo eléctrico en nuestra galaxia es tan intenso que provoca la repulsión de estos rayos.", 
            "2. No existen cuerpos celestes con un tamaño suficiente.", 
            "3. Presentan una energía tan elevada que los campos magnéticos galácticos no pueden contenerlos.",
            "4. El sol provoca su extención antes de que lleguen a nuestra galaxia."],
        answer: 3,
    },
    {
        question: "¿Qué es un proceso de captura electrónica?",
        option: [
            "1. Es un mecanismo en el cuál un electrón atómico se combina con un neutrón del núcleo para dar piones. ", 
            "2. Es un mecanismo en el cuál un electrón atómico se combina con un protón del núcleo para formar un neutrón y un neutrino.", 
            "3. Ese tipo de mecanismo no existe.",
            "4. Es un mecanismo por el cuál se originan núcleos más pequeños que el Fe-NI."],
        answer: 2,
    },
    {
        question: "¿Qué es un isotopo?",
        option: [
            "1.Son átomos del mismo elemento pero con diferente número atómico.", 
            "2.Son átomos del mismo elemento que presentan diferete números de protones.", 
            "3.Son átomos del mimso elemento que presenta el mismo número de neutrones .",
            "4.Son átomos del mismo elemento que presentan igual número atómico."],
        answer: 4,
    },

];
let index3 = 0;

let attempt3 = 0;
let score3 = 0;
let wrong3 = 0;

// Declaramos asís la variable "questions" pra que el orden de las preguntas sea aleatorio.
let questions3 = quiz3.sort();

let totalQuestion3 = questions3.length; // Estamo tomando el número total de preguntas.

function printQuestion2(i) {
    let contador = i + 1 
    $(".title4").text("Pregunta " +  contador  + " de " + totalQuestion3 );
    $(".questionBox3").text(questions3[i].question);
    $(".optionBox3 p").eq(0).text(questions3[i].option[0]);
    $(".optionBox3 p").eq(1).text(questions3[i].option[1]);
    $(".optionBox3 p").eq(2).text(questions3[i].option[2]);
    $(".optionBox3 p").eq(3).text(questions3[i].option[3]);

}
// Función para chequeara la respuesta dada.
function checkAnswer2(option) {
    attempt3++;

    let optionClicked = $(option).data("opt");

    if (optionClicked == questions3[index3].answer) {
        $(option).addClass("right");
        score3++;
    } else {
        $(option).addClass("wrong");
        wrong3++;
    }

    $(".scoreBox3 span").text(score3);
    $(".timerBox3 span").text(wrong3);
    $(".optionBox3 p").attr("onclick" , ""); // COn esta línea evitamos que se pueen señalara más de dos opciones.
}

// Función para pasar a la función siguiente.
function showNext2() {
    if(index3 >= questions3.length -1 ) {
        showResult2(0);
        return;

    }

    index3++; // Este incremento es muy importante para que aumente el índice de la pregunta

    $(".optionBox3 p").removeClass();
    $(".optionBox3 p").attr("onclick" , "checkAnswer2(this)");

    printQuestion2(index3); // Llamamis a la pregunta siguiente a la actual.

// Funcion para saltarse las preguntas.
}
function showResult2(j) {
    if(j == 1 && index3 < questions3.length -1 && !confirm("No ha terminado el test. Presione ok si quiere ir a los resultados.")){

        return;
    }
    result2();
}

// Función que nos da el resultado.
function result2() {
    $("#resultScreen3").show();
    $("#questionScreen3").hide();
    $("#totalQuestion3").text(totalQuestion3);
    $("#attemptlQuestion3").text(attempt3);
    $("#correctAnswers3").text(score3);
    $("#wrongAnswers3").text(wrong3);
}


