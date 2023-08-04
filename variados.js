function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML = "E-mail válido";
        alert("E-mail válido");
    } else {
        document.getElementById("msgemail").innerHTML = "<font color='red'>E-mail inválido </font>";
        alert("E-mail inválido");
    }
}



///Questoes
const questions = [
    {
      question: "Qual a criatura mítica mais conhecida do mundo?",
      options: ["Dragão", "Fada", "Pegaso", "Chupa Cu"],
      answer: 0
    },
    {
      question: "Qual é o videogame mais vendido no mundo?",
      options: ["Nintendo Switch", "Xbox One", " PlayStation 2", "PlayStation 3"],
      answer: 2
    },
    {
      question: "Qual é o maior mamífero terrestre do mundo?",
      options: ["Hipopótamo", "Pericles", "Thais Carla", "Elefante Africano"],
      answer: 3  },
      {

      question: "Qual é o animal terrestre mais rápido do mundo? ",
      options: ["Chita", "Guepardo", "Tartaruga", "O Que Fugiu Do Furry"],
      answer: 1  },
      {

      question: "Qual a religião mais conhecida do mundo?",
      options: ["Maradoniana", "Aghori", "Nuwaubian", " Cristianismo"],
      answer: 3  },
      {
      question: "Qual o lugar mais longe onde um humano já foi?",
      options: ["Lua", "Júpiter", "Titanic", "Marte"],
      answer: 0  },

      {
        question: "Qual o QI mais alto registrado? ",
        options: ["10-50", "100-150", "250-300", "300-350"],
        answer: 2  },
        {
            question: "Qual foi o último país a ganhar a Copa do Mundo? ",
            options: ["Argentina", "Brazil", "EUA", "México"],
            answer: 0  },
            {
                question: "Qual o maior campeao do brasileirao?",
                options: [" Náutico ", "Sport", "Palmeiras", "São paulo"],
                answer: 2  },
      
        {
            question: "Para quem a Ashley pede ajuda em RE4? ",
            options: [" Ozwell ", "Leon", "Michael Jackson", "Batman"],
            answer: 1  }

  ];
  
  ///placar
  let currentQuestion = 0;
  let score = 0;
  
  // Função para exibir a próxima questão do quiz
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
  
    // Limpa o resultado da pergunta anterior
    resultElement.textContent = "";
  
    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      questionElement.textContent = question.question;
  
      // Limpa as opções anteriores
      optionsElement.innerHTML = "";
  
      // Adiciona as opções como botões
      for (let i = 0; i < question.options.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = question.options[i];
        button.setAttribute("onclick", "checkAnswer(" + i + ")");
        li.appendChild(button);
        optionsElement.appendChild(li);
      }
    } else {
      // Fim do quiz
      questionElement.textContent = "Fim do Quiz!";
      optionsElement.innerHTML = "";
      resultElement.textContent = "Você acertou " + score + " de " + questions.length + " perguntas.";
    }
  }
  
  // Função para verificar a resposta selecionada
  function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
  
    if (selectedOption === question.answer) {
      score++;
      document.getElementById("result").textContent = "Resposta correta!";
    } else {
      document.getElementById("result").textContent = "Resposta incorreta!";
    }
  
    // Avança para a próxima pergunta
    currentQuestion++;
    // Exibe a próxima pergunta ou o resultado final
    displayQuestion();
  }
  
  // Inicia o quiz
  displayQuestion();