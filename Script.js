const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Quem é considerado o maior vencedor de Grand Slams no tênis masculino?",
    alternativas: [
      { texto: "Roger Federer", afirmacao: "Você lembrou do clássico Federer." },
      { texto: "Novak Djokovic", afirmacao: "Correto! Djokovic é o recordista de Slams." }
    ]
  },
  {
    enunciado: "Em qual superfície Roland Garros é jogado?",
    alternativas: [
      { texto: "Saibro", afirmacao: "Exatamente, Roland Garros é no saibro vermelho." },
      { texto: "Grama", afirmacao: "Não, grama é Wimbledon." }
    ]
  },
  {
    enunciado: "Qual jogadora brasileira já foi número 1 do mundo no tênis?",
    alternativas: [
      { texto: "Maria Esther Bueno", afirmacao: "Acertou! Uma lenda do tênis brasileiro." },
      { texto: "Bia Haddad Maia", afirmacao: "Ela é destaque hoje, mas nunca foi nº1." }
    ]
  },
  {
    enunciado: "Como se chama o placar especial de 40 iguais?",
    alternativas: [
      { texto: "Deuce", afirmacao: "Correto! No deuce é preciso 2 pontos seguidos pra fechar." },
      { texto: "Tie-break", afirmacao: "Não, tie-break é o desempate do set." }
    ]
  },
  {
    enunciado: "Qual torneio é jogado na grama?",
    alternativas: [
      { texto: "Wimbledon", afirmacao: "Acertou, o torneio mais tradicional." },
      { texto: "US Open", afirmacao: "Não, o US Open é em quadra dura." }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(pergunta) {
  for (const alternativa of pergunta.alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botao);
  }
}

function respostaSelecionada(opcao) {
  historiaFinal += opcao.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Fim do Quiz 🎾";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";

  // Botão de reinício
  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.textContent = "Voltar para o início";
  botaoReiniciar.addEventListener("click", reiniciaQuiz);
  caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciaQuiz() {
  atual = 0;
  historiaFinal = "";
  textoResultado.textContent = "";
  mostraPergunta();
}

mostraPergunta();
