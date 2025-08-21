const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: `Assim que saiu da escola você se depara com uma nova tecnologia, 
    um chat que consegue responder todas as dúvidas que uma pessoa pode ter, 
    ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?`,
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: "Quis saber como usar IA no seu dia a dia."
      }
    ]
  },
  {
    enunciado: `Com a descoberta desta tecnologia, chamada Inteligência Artificial, 
    uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. 
    No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?`,
    alternativas: [
      {
        texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para encontrar informações relevantes.",
        afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
      },
      {
        texto: "Escreve o trabalho com base nas conversas que teve com colegas e pesquisas próprias.",
        afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
      }
    ]
  },
  {
    enunciado: `Após a elaboração do trabalho escrito, a professora realizou um debate sobre como a IA impacta o trabalho do futuro. 
    Nesse debate, como você se posiciona?`,
    alternativas: [
      {
        texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
      },
      {
        texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas.",
        afirmacao: "Sua preocupação motivou a criar um grupo de estudos sobre uso ético da IA."
      }
    ]
  },
  {
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      {
        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao: "Decidiu compartilhar conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
      },
      {
        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao: "Acelerou o processo de criação de trabalhos com geradores de imagem e agora ensina outras pessoas a usarem também."
      }
    ]
  },
  {
    enunciado: `Você tem um trabalho em grupo de biologia e uma pessoa do grupo fez tudo com IA, ficando igual ao texto do chat. O que você faz?`,
    alternativas: [
      {
        texto: "Aceita o texto gerado pela IA sem alterar.",
        afirmacao: "Infelizmente passou a utilizar a IA para tudo e agora se sente dependente dela."
      },
      {
        texto: "Revê o texto e adiciona suas próprias ideias para que reflita a visão do grupo.",
        afirmacao: "Percebeu que os textos gerados pela IA devem servir como auxílio e não resultado final."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () =>
      respostaSelecionada(alternativa)
    );
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
