// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: 'Organizo mis tareas para conseguir ciertas metas.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'J,Brown,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #2
  {
    question: 'Me aburro facilmente cuando discuto sobre conceptos abstractos.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'N,Green,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #3
  {
    question: 'Me gusta probar cosas por mi.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'S,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #4
  {
    question: "Me gusta saber a donde voy antes de salir de casa.",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'J,Brown,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #5
  {
    question: 'Creo que hay una explicación lógica para todo.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'T,Brown,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #6
  {
    question: 'Tiendo a mantener mi circulo social pequeño.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'I,Green,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #7
  {
    question: 'Me gusta compartir mis ideas con otras personas.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'E,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #8
  {
    question: 'Disfruto usar las redes sociales.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'E,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #9
  {
    question: 'Siempre expreso preocupación por los demás cuando tomo decisiones.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'F,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #10
  {
    question: 'Me gusta probar nuevas cosas.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'P,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #11
  {
    question: 'Puedo adaptarme fácilmente a un cambio de decisión.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'P,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #12
  {
    question: 'Resuelvo problemas trabajando con hechos hasta que entiendo el problema.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'S,Brown,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #13
  {
    question: 'Confío en la lógica en lugar de la intuición al tomar una decisión.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'T,Green,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #14
  {
    question: 'Tomo decisiones con mi corazón.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'F,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #15
  {
    question: 'Aprendo mejor observando paso a paso las instrucciones.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'S,Brown,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #16
  {
    question: 'A veces paso a otra tarea antes de completar la actual.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'P,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #17
  {
    question: 'Prefiero una forma de vida flexible y espontánea.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'P,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #18
  {
    question: 'Me gusta mantener abiertas mis opciones al tomar decisiones.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Green,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'P,Green,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #19
  {
    question: 'No me incomodan las multitudes.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'E,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #20
  {
    question: 'Me gusta compartir mis sentimientos con los demás.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'E,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #21
  {
    question: 'Prefiero trabajar/hacerlo de inmediato en lugar de dedicar tiempo a hacer un plan.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'S,Brown,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #22
  {
    question: 'Conozco mis prioridades.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'S,Brown,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #23
  {
    question: 'Tiendo a trabajar en soledad.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'I,Green,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #24
  {
    question: "No me gusta ir a fiestas.",
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'I,Green,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #25
  {
    question: 'Estoy en sintonía con mis propias emociones y dejo que me guíen en la vida.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'F,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #26
  {
    question: 'Confío en mi intuición y experiencia más que en hechos.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'N,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #27
  {
    question: 'Me gusta pensar las cosas bien.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'T,Green,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #28
  {
    question: 'Soy un aprendiz visual.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'S,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #29
  {
    question: 'Pienso cuidadosamente antes de tomar una decisión.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'J,Brown,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #30
  {
    question: 'Siento incomodidad si mis acciones interrumpen la armonía en mi círculo social.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'F,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #31
  {
    question: 'Dejo mis opiniones personales a un lado en pos de la equidad y la justicia.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'T,Brown,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #32
  {
    question: 'Tiendo a sentarme en la parte de atrás o en la esquina de la habitación.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'I,Green,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #33
  {
    question: 'Me gusta ser el centro de atención.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Red,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'E,Red,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #34
  {
    question: 'Resuelvo problemas saltando entre diferentes ideas y posibilidades.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'N,Green,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #35
  {
    question: 'Me gusta terminar mi trabajo antes de jugar.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Red,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'J,Red,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #36
  {
    question: "No dejo que otras personas influyan en mis pensamientos o acciones.",
    answers: [
      {
        // briggs, color, letter
        type: 'T,Red,A',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'T,Red,A,No',
        content: "¡No!"
      }
    ]
  },
  // question #37
  {
    question: 'Uso mi sentido del olfato para ayudarme a recordar.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Blue,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'N,Blue,D,No',
        content: "¡No!"
      }
    ]
  },
  // question #38
  {
    question: 'Tomo decisiones basándome en mis emociones.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'F,Blue,B,No',
        content: "¡No!"
      }
    ]
  },
  // question #39
  {
    question: 'Necesito tiempo a solas para recargarme.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'I,Green,C,No',
        content: "¡No!"
      }
    ]
  },
  // question #40
  {
    question: 'Me gusta mantener mi cuarto limpio y organizado.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '¡Si!'
      },
      {
        type: ' ',
        content: '¡No tengo idea!'
      },
      {
        type: 'J,Brown,D,No',
        content: "¡No!"
      }
    ]
  }
]

export default quizQuestions
