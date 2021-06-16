// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "¿Cuál de las siguientes palabras NO se puede formar concatenando elementos del alfabeto Σ = {a, b}?",
    answer: "abc",
    options: [
      "aa",
      "a",
      "ab",
      "abc"
    ],
    retro: [
      "<b>Retroalimentación:</b> Una palabra generada a partir de un alfabeto es una secuencia finita de símbolos de dicho alfabeto.",
    ]
  },
    {
    numb: 2,
    question: "¿Cuál es una lista de palabras que se pueden formar concatenando elementos del alfabeto Σ = { 0, 1 }?",
    answer: "0, 1, 00, 01, 11, 10, 10101010101, 0101000",
    options: [
      "0x0, 0o1, 1m1, 111, 000, 10ª",
      "a, b, bb, abc, aaaaa, bbb, cccccc, abcabc",
      "0, 1, 00, 01, 11, 10, 10101010101, 0101000",
      "a1, b2, c3, d4, e5, f6"
    ],
    retro: [
      "<b>Retroalimentación:</b> La concatenación se realiza escribiendo consecutivamente uno o más símbolos del alfabeto, dando lugar a palabras de diferente longitud.",
    ]
  },
    {
    numb: 3,
    question: "¿Cuál es el conjunto de palabras representado por la notación a* (a estrella)?",
    answer: "{ε, a, aa, aaa, aaaa, …}",
    options: [
      "{a}",
      "{ε, a, aa, aaa, aaaa, …}",
      "{a}, {aa}",
      "{a, aa, aaa, aaaa, … }"
    ],
    retro: [
      "<b>Retroalimentación:</b> La cerradura de kleen (*) se realiza escribiendo consecutivamente cero o más veces los símbolos afectados por el operador *, dando lugar a palabras de diferente longitud.",
    ]
  },
    {
    numb: 4,
    question: "¿Cuál es el conjunto de palabras representado por la notación (a+b)?",
    answer: "{a, b}",
    options: [
      "{a, b}",
      "{ab}",
      "{ab, a, b}",
      "{ab, ba}"
    ],
    retro: [
      "<b>Retroalimentación:</b> La unión (+) denota una disyunción, es decir, se toma un camino o bien el otro, por lo que el conjunto resultante se forma con palabras generadas considerando cada uno de los caminos posibles.",
    ]
  },
    {
    numb: 5,
    question: "¿Qué lenguaje (conjunto de palabras) se obtiene al concatenar {a} y {b}, en ese orden?",
    answer: "{ab}",
    options: [
      "ab",
      "{a, b}",
      "{ba}",
      "{ab}"
    ],
    retro: [
      "<b>Retroalimentación:</b>: La concatenación se obtiene escribiendo un elemento después del otro, dando lugar a una nueva palabra (en este caso).",
    ]
  },





  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];