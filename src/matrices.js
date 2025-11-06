// src/matrices.js
// 28 matrices del Método Janulus — versiones revisadas con traducciones naturales.
// Cada matriz: title, level, sentences (4 filas x 4 columnas).
// Nota: la PRIMERA fila contiene sujeto+verbo ya conjugado (en + es) para evitar errores de concordancia.
export const matrices = [
  // Semana 1 — Básico (Rutinas y presente simple)
  {
    title: "Día 1 – Rutinas (Present Simple)",
    level: "Beginner",
    sentences: [
      [
        { en: "I work", es: "Yo trabajo" },
        { en: "You work", es: "Tú trabajas" },
        { en: "He works", es: "Él trabaja" },
        { en: "They work", es: "Ellos trabajan" }
      ],
      [
        { en: "at home", es: "en casa" },
        { en: "at the office", es: "en la oficina" },
        { en: "in the morning", es: "por la mañana" },
        { en: "every day", es: "todos los días" }
      ],
      [
        { en: "with a computer", es: "con una computadora" },
        { en: "with colleagues", es: "con colegas" },
        { en: "remotely", es: "a distancia" },
        { en: "full time", es: "a tiempo completo" }
      ],
      [
        { en: "usually", es: "generalmente" },
        { en: "sometimes", es: "a veces" },
        { en: "never", es: "nunca" },
        { en: "often", es: "a menudo" }
      ]
    ]
  },

  {
    title: "Día 2 – Gustos y preferencias",
    level: "Beginner",
    sentences: [
      [
        { en: "I like", es: "Me gusta" },
        { en: "You like", es: "Te gusta" },
        { en: "She loves", es: "A ella le encanta" },
        { en: "They prefer", es: "Ellos prefieren" }
      ],
      [
        { en: "music", es: "la música" },
        { en: "coffee", es: "el café" },
        { en: "pizza", es: "la pizza" },
        { en: "reading", es: "leer" }
      ],
      [
        { en: "a lot", es: "mucho" },
        { en: "a little", es: "un poco" },
        { en: "every weekend", es: "cada fin de semana" },
        { en: "in the evening", es: "por la tarde" }
      ],
      [
        { en: "because...", es: "porque..." },
        { en: "but sometimes...", es: "pero a veces..." },
        { en: "and usually...", es: "y normalmente..." },
        { en: "so...", es: "así que..." }
      ]
    ]
  },

  {
    title: "Día 3 – Querer / Necesitar",
    level: "Beginner",
    sentences: [
      [
        { en: "I want to", es: "Quiero" },
        { en: "You need to", es: "Necesitas" },
        { en: "He hopes to", es: "Él espera" },
        { en: "We plan to", es: "Planeamos" }
      ],
      [
        { en: "travel", es: "viajar" },
        { en: "study", es: "estudiar" },
        { en: "buy a ticket", es: "comprar un billete" },
        { en: "learn English", es: "aprender inglés" }
      ],
      [
        { en: "next month", es: "el próximo mes" },
        { en: "tomorrow", es: "mañana" },
        { en: "this year", es: "este año" },
        { en: "soon", es: "pronto" }
      ],
      [
        { en: "because it's important", es: "porque es importante" },
        { en: "for work", es: "por trabajo" },
        { en: "for fun", es: "por diversión" },
        { en: "to improve", es: "para mejorar" }
      ]
    ]
  },

  {
    title: "Día 4 – Habilidades (Can)",
    level: "Beginner",
    sentences: [
      [
        { en: "I can", es: "Puedo" },
        { en: "You can", es: "Puedes" },
        { en: "She can", es: "Ella puede" },
        { en: "They can't", es: "Ellos no pueden" }
      ],
      [
        { en: "swim", es: "nadar" },
        { en: "speak English", es: "hablar inglés" },
        { en: "cook", es: "cocinar" },
        { en: "drive", es: "conducir" }
      ],
      [
        { en: "very well", es: "muy bien" },
        { en: "a little", es: "un poco" },
        { en: "every day", es: "todos los días" },
        { en: "sometimes", es: "a veces" }
      ],
      [
        { en: "but I'm learning", es: "pero estoy aprendiendo" },
        { en: "since last year", es: "desde el año pasado" },
        { en: "now", es: "ahora" },
        { en: "when needed", es: "cuando hace falta" }
      ]
    ]
  },

  {
    title: "Día 5 – There is / There are",
    level: "Beginner",
    sentences: [
      [
        { en: "There is", es: "Hay (singular)" },
        { en: "There are", es: "Hay (plural)" },
        { en: "Is there", es: "¿Hay...?" },
        { en: "Are there", es: "¿Hay... (pl.)?" }
      ],
      [
        { en: "a store", es: "una tienda" },
        { en: "two chairs", es: "dos sillas" },
        { en: "a park", es: "un parque" },
        { en: "many people", es: "muchas personas" }
      ],
      [
        { en: "near my house", es: "cerca de mi casa" },
        { en: "in the center", es: "en el centro" },
        { en: "on the corner", es: "en la esquina" },
        { en: "in the city", es: "en la ciudad" }
      ],
      [
        { en: "for sale", es: "en venta" },
        { en: "open now", es: "abierto ahora" },
        { en: "closed today", es: "cerrado hoy" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 6 – Preguntas básicas (WH)",
    level: "Beginner",
    sentences: [
      [
        { en: "What do you do", es: "¿Qué haces?" },
        { en: "Where is it", es: "¿Dónde está?" },
        { en: "When did you go", es: "¿Cuándo fuiste?" },
        { en: "Why do you study", es: "¿Por qué estudias?" }
      ],
      [
        { en: "today?", es: "hoy?" },
        { en: "near my house?", es: "cerca de mi casa?" },
        { en: "yesterday?", es: "ayer?" },
        { en: "every day?", es: "todos los días?" }
      ],
      [
        { en: "for work", es: "por trabajo" },
        { en: "for school", es: "por la escuela" },
        { en: "with friends", es: "con amigos" },
        { en: "by bus", es: "en autobús" }
      ],
      [
        { en: "Can you tell me?", es: "¿Puedes decirme?" },
        { en: "Please", es: "Por favor" },
        { en: "Of course", es: "Claro" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 7 – Repaso básico (Frases cortas)",
    level: "Beginner",
    sentences: [
      [
        { en: "I have", es: "Yo tengo" },
        { en: "I am", es: "Yo estoy" },
        { en: "I don't", es: "Yo no" },
        { en: "I want", es: "Yo quiero" }
      ],
      [
        { en: "a book", es: "un libro" },
        { en: "coffee", es: "un café" },
        { en: "time", es: "tiempo" },
        { en: "help", es: "ayuda" }
      ],
      [
        { en: "now", es: "ahora" },
        { en: "today", es: "hoy" },
        { en: "tomorrow", es: "mañana" },
        { en: "again", es: "otra vez" }
      ],
      [
        { en: "please", es: "por favor" },
        { en: "thanks", es: "gracias" },
        { en: "no problem", es: "no hay problema" },
        { en: "", es: "" }
      ]
    ]
  },

  // Semana 2 — Intermedio (Continuos, pasado, futuro)
  {
    title: "Día 8 – Present Continuous",
    level: "Intermediate",
    sentences: [
      [
        { en: "I am reading", es: "Estoy leyendo" },
        { en: "You are working", es: "Estás trabajando" },
        { en: "He is watching", es: "Él está viendo" },
        { en: "They are studying", es: "Ellos están estudiando" }
      ],
      [
        { en: "a book", es: "un libro" },
        { en: "a movie", es: "una película" },
        { en: "the news", es: "las noticias" },
        { en: "English", es: "inglés" }
      ],
      [
        { en: "right now", es: "en este momento" },
        { en: "today", es: "hoy" },
        { en: "at the moment", es: "ahora mismo" },
        { en: "this week", es: "esta semana" }
      ],
      [
        { en: "because I enjoy it", es: "porque lo disfruto" },
        { en: "to improve", es: "para mejorar" },
        { en: "for an exam", es: "para un examen" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 9 – Past Simple (Acciones completas)",
    level: "Intermediate",
    sentences: [
      [
        { en: "I went", es: "Fui" },
        { en: "You saw", es: "Viste" },
        { en: "She did", es: "Ella hizo" },
        { en: "We ate", es: "Comimos" }
      ],
      [
        { en: "to the park", es: "al parque" },
        { en: "yesterday", es: "ayer" },
        { en: "last week", es: "la semana pasada" },
        { en: "on Sunday", es: "el domingo" }
      ],
      [
        { en: "with friends", es: "con amigos" },
        { en: "at home", es: "en casa" },
        { en: "for dinner", es: "para cenar" },
        { en: "after work", es: "después del trabajo" }
      ],
      [
        { en: "and it was fun", es: "y fue divertido" },
        { en: "but it rained", es: "pero llovió" },
        { en: "so we left early", es: "así que nos fuimos temprano" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 10 – Future (will / going to)",
    level: "Intermediate",
    sentences: [
      [
        { en: "I will travel", es: "Viajaré" },
        { en: "I am going to study", es: "Voy a estudiar" },
        { en: "She will call", es: "Ella llamará" },
        { en: "They are going to buy", es: "Ellos van a comprar" }
      ],
      [
        { en: "tomorrow", es: "mañana" },
        { en: "next week", es: "la próxima semana" },
        { en: "soon", es: "pronto" },
        { en: "later", es: "más tarde" }
      ],
      [
        { en: "for work", es: "por trabajo" },
        { en: "for fun", es: "por diversión" },
        { en: "to improve", es: "para mejorar" },
        { en: "", es: "" }
      ],
      [
        { en: "if possible", es: "si es posible" },
        { en: "I hope so", es: "eso espero" },
        { en: "I think so", es: "creo que sí" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 11 – Present Perfect",
    level: "Intermediate",
    sentences: [
      [
        { en: "I have seen", es: "He visto" },
        { en: "You have been", es: "Has estado" },
        { en: "He has tried", es: "Él ha intentado" },
        { en: "We have done", es: "Hemos hecho" }
      ],
      [
        { en: "that movie", es: "esa película" },
        { en: "this book", es: "este libro" },
        { en: "the exam", es: "el examen" },
        { en: "London", es: "Londres" }
      ],
      [
        { en: "already", es: "ya" },
        { en: "recently", es: "recientemente" },
        { en: "never", es: "nunca" },
        { en: "yet", es: "todavía" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 12 – Modal verbs (Consejos)",
    level: "Intermediate",
    sentences: [
      [
        { en: "You should", es: "Deberías" },
        { en: "You must", es: "Debes" },
        { en: "You could", es: "Podrías" },
        { en: "You might", es: "Podrías (tal vez)" }
      ],
      [
        { en: "study more", es: "estudiar más" },
        { en: "rest", es: "descansar" },
        { en: "see a doctor", es: "ir al médico" },
        { en: "ask for help", es: "pedir ayuda" }
      ],
      [
        { en: "today", es: "hoy" },
        { en: "this week", es: "esta semana" },
        { en: "if needed", es: "si hace falta" },
        { en: "", es: "" }
      ],
      [
        { en: "to feel better", es: "para sentirte mejor" },
        { en: "to improve", es: "para mejorar" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 13 – Comparativos y superlativos",
    level: "Intermediate",
    sentences: [
      [
        { en: "My car is", es: "Mi coche es" },
        { en: "This house is", es: "Esta casa es" },
        { en: "Her phone is", es: "Su teléfono es" },
        { en: "This city is", es: "Esta ciudad es" }
      ],
      [
        { en: "bigger than", es: "más grande que" },
        { en: "smaller than", es: "más pequeño que" },
        { en: "the best", es: "el mejor" },
        { en: "worse than", es: "peor que" }
      ],
      [
        { en: "mine", es: "el mío" },
        { en: "yours", es: "el tuyo" },
        { en: "in the world", es: "en el mundo" },
        { en: "in the area", es: "en la zona" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 14 – Repaso intermedio",
    level: "Intermediate",
    sentences: [
      [
        { en: "I have been", es: "He estado" },
        { en: "I was", es: "Yo estaba" },
        { en: "I will", es: "Yo lo haré" },
        { en: "I went", es: "Yo fui" }
      ],
      [
        { en: "studying", es: "estudiando" },
        { en: "working", es: "trabajando" },
        { en: "traveling", es: "viajando" },
        { en: "reading", es: "leyendo" }
      ],
      [
        { en: "recently", es: "recientemente" },
        { en: "yesterday", es: "ayer" },
        { en: "tomorrow", es: "mañana" },
        { en: "every day", es: "todos los días" }
      ],
      [
        { en: "with friends", es: "con amigos" },
        { en: "for work", es: "por trabajo" },
        { en: "at home", es: "en casa" },
        { en: "on weekends", es: "los fines de semana" }
      ]
    ]
  },

  // Semana 3 — Upper-Intermediate (Perfectos, conditionals, passive...)
  {
    title: "Día 15 – Past Continuous",
    level: "Upper-Intermediate",
    sentences: [
      [
        { en: "I was reading", es: "Estaba leyendo" },
        { en: "You were sleeping", es: "Estabas durmiendo" },
        { en: "He was working", es: "Él estaba trabajando" },
        { en: "They were talking", es: "Ellos estaban hablando" }
      ],
      [
        { en: "when", es: "cuando" },
        { en: "while", es: "mientras" },
        { en: "at 8 pm", es: "a las 8pm" },
        { en: "yesterday", es: "ayer" }
      ],
      [
        { en: "at home", es: "en casa" },
        { en: "in class", es: "en clase" },
        { en: "on the phone", es: "por teléfono" },
        { en: "with him", es: "con él" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 16 – Past Perfect",
    level: "Upper-Intermediate",
    sentences: [
      [
        { en: "I had finished", es: "Yo había terminado" },
        { en: "She had left", es: "Ella había salido" },
        { en: "They had seen", es: "Ellos habían visto" },
        { en: "We had already eaten", es: "Ya habíamos comido" }
      ],
      [
        { en: "before", es: "antes de" },
        { en: "by the time", es: "para cuando" },
        { en: "that day", es: "ese día" },
        { en: "the meeting", es: "la reunión" }
      ],
      [
        { en: "started", es: "comenzara" },
        { en: "ended", es: "terminara" },
        { en: "arrived", es: "llegara" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 17 – Conditionals (Type 1 & 2)",
    level: "Upper-Intermediate",
    sentences: [
      [
        { en: "If I study", es: "Si estudio" },
        { en: "If you work", es: "Si trabajas" },
        { en: "If she had time", es: "Si ella tuviera tiempo" },
        { en: "If we try", es: "Si intentamos" }
      ],
      [
        { en: "I will pass", es: "aprobaré" },
        { en: "I would help", es: "ayudaría" },
        { en: "she would come", es: "ella vendría" },
        { en: "we can succeed", es: "podemos tener éxito" }
      ],
      [
        { en: "tomorrow", es: "mañana" },
        { en: "next week", es: "la próxima semana" },
        { en: "if possible", es: "si es posible" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 18 – Passive Voice (Simple)",
    level: "Upper-Intermediate",
    sentences: [
      [
        { en: "The book was written", es: "El libro fue escrito" },
        { en: "The letter is signed", es: "La carta está firmada" },
        { en: "The house was built", es: "La casa fue construida" },
        { en: "The cake was eaten", es: "El pastel fue comido" }
      ],
      [
        { en: "by John", es: "por John" },
        { en: "by the chef", es: "por el chef" },
        { en: "last year", es: "el año pasado" },
        { en: "yesterday", es: "ayer" }
      ],
      [
        { en: "in the city", es: "en la ciudad" },
        { en: "at school", es: "en la escuela" },
        { en: "", es: "" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 19 – Reported Speech (Intro)",
    level: "Upper-Intermediate",
    sentences: [
      [
        { en: 'She said "I am tired"', es: 'Ella dijo "Estoy cansada"' },
        { en: 'He said "I will come"', es: 'Él dijo "Vendré"' },
        { en: 'They said "We are busy"', es: 'Ellos dijeron "Estamos ocupados"' },
        { en: 'She said "I like it"', es: 'Ella dijo "Me gusta"' }
      ],
      [
        { en: "She said that", es: "Ella dijo que" },
        { en: "He told me that", es: "Él me dijo que" },
        { en: "They explained that", es: "Ellos explicaron que" },
        { en: "She mentioned that", es: "Ella mencionó que" }
      ],
      [
        { en: "she was tired", es: "ella estaba cansada" },
        { en: "he would come", es: "él vendría" },
        { en: "they were busy", es: "ellos estaban ocupados" },
        { en: "she liked it", es: "a ella le gustaba" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 20 – Gerunds & Infinitives",
    level: "Upper-Intermediate",
    sentences: [
      [
        { en: "I enjoy", es: "Disfruto" },
        { en: "I avoid", es: "Evito" },
        { en: "I want to", es: "Quiero" },
        { en: "I hope to", es: "Espero" }
      ],
      [
        { en: "reading", es: "leer" },
        { en: "playing", es: "jugar" },
        { en: "to travel", es: "viajar" },
        { en: "to learn", es: "aprender" }
      ],
      [
        { en: "every day", es: "todos los días" },
        { en: "in the evening", es: "por la tarde" },
        { en: "with friends", es: "con amigos" },
        { en: "", es: "" }
      ],
      [
        { en: "because it's relaxing", es: "porque es relajante" },
        { en: "to improve skills", es: "para mejorar habilidades" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  // Semana 4 — Avanzado (Modales, nominalización, estructuras complejas)
  {
    title: "Día 21 – Mixed Tenses (Práctica)",
    level: "Advanced",
    sentences: [
      [
        { en: "I have been working", es: "He estado trabajando" },
        { en: "I had finished", es: "Yo había terminado" },
        { en: "I will have completed", es: "Habré completado" },
        { en: "If I had known", es: "Si hubiera sabido" }
      ],
      [
        { en: "for two years", es: "por dos años" },
        { en: "before the meeting", es: "antes de la reunión" },
        { en: "by next month", es: "para el próximo mes" },
        { en: "yesterday", es: "ayer" }
      ],
      [
        { en: "at my job", es: "en mi trabajo" },
        { en: "already", es: "ya" },
        { en: "recently", es: "recientemente" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 22 – Modales (Probabilidad / obligación)",
    level: "Advanced",
    sentences: [
      [
        { en: "He must", es: "Él debe" },
        { en: "She might", es: "Ella podría" },
        { en: "They could", es: "Ellos podrían" },
        { en: "You should", es: "Deberías" }
      ],
      [
        { en: "be late", es: "llegar tarde" },
        { en: "have left", es: "haber salido" },
        { en: "know the answer", es: "saber la respuesta" },
        { en: "help us", es: "ayudarnos" }
      ],
      [
        { en: "by now", es: "para ahora" },
        { en: "soon", es: "pronto" },
        { en: "maybe", es: "tal vez" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 23 – Causa y efecto (Linkers)",
    level: "Advanced",
    sentences: [
      [
        { en: "Because", es: "Porque" },
        { en: "So", es: "Así que" },
        { en: "Therefore", es: "Por lo tanto" },
        { en: "Although", es: "Aunque" }
      ],
      [
        { en: "it rained", es: "llovió" },
        { en: "I was late", es: "llegué tarde" },
        { en: "we passed the test", es: "aprobamos el examen" },
        { en: "he didn't come", es: "él no vino" }
      ],
      [
        { en: "we missed the bus", es: "perdimos el autobús" },
        { en: "we had time", es: "tuvimos tiempo" },
        { en: "we did our best", es: "hicimos lo mejor" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 24 – Inversión y estructura formal",
    level: "Advanced",
    sentences: [
      [
        { en: "Not only did he", es: "No solo hizo él" },
        { en: "Rarely do we", es: "Raramente hacemos" },
        { en: "Seldom have I", es: "Rara vez he" },
        { en: "Hardly ever had they", es: "Casi nunca habían" }
      ],
      [
        { en: "expect this", es: "esperado esto" },
        { en: "seen such things", es: "visto tales cosas" },
        { en: "done that", es: "hecho eso" },
        { en: "met anyone", es: "conocido a nadie" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 25 – Conditionals (Type 3)",
    level: "Advanced",
    sentences: [
      [
        { en: "If I had known", es: "Si hubiera sabido" },
        { en: "If she had studied", es: "Si ella hubiera estudiado" },
        { en: "If we had left", es: "Si hubiéramos salido" },
        { en: "If he had told me", es: "Si él me lo hubiera dicho" }
      ],
      [
        { en: "I would have called", es: "Habría llamado" },
        { en: "she would have passed", es: "ella habría aprobado" },
        { en: "we would have arrived", es: "habríamos llegado" },
        { en: "he would have helped", es: "él habría ayudado" }
      ],
      [
        { en: "earlier", es: "antes" },
        { en: "in time", es: "a tiempo" },
        { en: "if possible", es: "si fuera posible" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 26 – Nominalisation & Academic English",
    level: "Advanced",
    sentences: [
      [
        { en: "The development", es: "El desarrollo" },
        { en: "The analysis", es: "El análisis" },
        { en: "The improvement", es: "La mejora" },
        { en: "The reduction", es: "La reducción" }
      ],
      [
        { en: "of the system", es: "del sistema" },
        { en: "in costs", es: "en costos" },
        { en: "in performance", es: "en rendimiento" },
        { en: "of errors", es: "de errores" }
      ],
      [
        { en: "was significant", es: "fue significativo" },
        { en: "is ongoing", es: "está en curso" },
        { en: "has increased", es: "ha aumentado" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 27 – Reported Speech avanzado & verb patterns",
    level: "Advanced",
    sentences: [
      [
        { en: "He said that he had seen", es: "Él dijo que había visto" },
        { en: "She said that she would come", es: "Ella dijo que vendría" },
        { en: "They told me that they were leaving", es: "Ellos me dijeron que se iban" },
        { en: "He promised that he would help", es: "Él prometió que ayudaría" }
      ],
      [
        { en: "the film", es: "la película" },
        { en: "her message", es: "su mensaje" },
        { en: "the results", es: "los resultados" },
        { en: "the project", es: "el proyecto" }
      ],
      [
        { en: "yesterday", es: "ayer" },
        { en: "soon", es: "pronto" },
        { en: "next week", es: "la próxima semana" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  },

  {
    title: "Día 28 – Repaso final (Mezcla completa)",
    level: "Advanced",
    sentences: [
      [
        { en: "I have been working", es: "He estado trabajando" },
        { en: "I had finished", es: "Yo había terminado" },
        { en: "I will have completed", es: "Habré completado" },
        { en: "If I had", es: "Si yo hubiera" }
      ],
      [
        { en: "for years", es: "por años" },
        { en: "before", es: "antes" },
        { en: "already", es: "ya" },
        { en: "recently", es: "recientemente" }
      ],
      [
        { en: "with effort", es: "con esfuerzo" },
        { en: "very well", es: "muy bien" },
        { en: "in time", es: "a tiempo" },
        { en: "", es: "" }
      ],
      [
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" },
        { en: "", es: "" }
      ]
    ]
  }
];

export default matrices;

