/* ===========================
   1. BANCO DE PERGUNTAS
   =========================== */
const PERGUNTAS = [
  {
    pergunta: 'O que é, o que é? Quanto mais você tira dela, maior ela fica.',
    alternativas: ["Buraco", "Bolo", "Balão", "Sombra"],
    resposta: "Buraco",
    dica: "Pense no que fica no chão quando alguém cava a terra."
  },
  {
    pergunta: 'O que é, o que é? Tem muitas teclas, mas não abre nenhuma porta, e serve para escrever no computador.',
    alternativas: ["Teclado", "Piano", "Armário", "Escada"],
    resposta: "Teclado",
    dica: "Você usa os dedos para digitar letras e números."
  },
  {
    pergunta: 'O que é, o que é? Acompanha você por todo lado, mas só aparece quando há luz. Se você corre, ela corre junto.',
    alternativas: ["Sombra", "Eco", "Nuvem", "Espelho"],
    resposta: "Sombra",
    dica: "Olhe para o chão quando estiver ao sol."
  },
  {
    pergunta: 'O que é, o que é? Tem folhas em forma de agulha, fica verdinha o ano todo e cresce em lugares frios.',
    alternativas: ["Pinheiro", "Cacto", "Girassol", "Bambu"],
    resposta: "Pinheiro",
    dica: "Pense em uma árvore que costuma enfeitar o Natal."
  },
  {
    pergunta: 'O que é, o que é? Quanto mais você a usa para secar, mais molhada ela fica.',
    alternativas: ["Toalha", "Esponja", "Sabonete", "Chuveiro"],
    resposta: "Toalha",
    dica: "Você a usa logo depois do banho."
  },
  {
    pergunta: 'O que é, o que é? Tem muitas rodas, leva muita gente pela cidade e para em pontos na rua.',
    alternativas: ["Ônibus", "Ponte", "Navio", "Avião"],
    resposta: "Ônibus",
    dica: "Ele anda pelas ruas, não pelo mar nem pelo céu."
  },
  {
    pergunta: 'O que é, o que é? Tem cidades, rios e montanhas, mas não tem casas nem árvores de verdade.',
    alternativas: ["Mapa", "Livro", "Caderno", "Relógio"],
    resposta: "Mapa",
    dica: "Você olha para ele para descobrir caminhos e lugares."
  },
  {
    pergunta: 'O que é, o que é? É leve como o ar, é colorida, sobe no céu e voa quando alguém segura o fio em dia de vento.',
    alternativas: ["Pipa", "Nuvem", "Pássaro", "Bolha de sabão"],
    resposta: "Pipa",
    dica: "Crianças gostam de empinar essa brincadeira no parque."
  },
  {
    pergunta: 'O que é, o que é? Vive dentro da mochila, é feito de madeira e grafite, e precisa ser apontado para escrever.',
    alternativas: ["Lápis", "Régua", "Tesoura", "Borracha"],
    resposta: "Lápis",
    dica: "Você usa para escrever e desenhar na escola."
  },
  {
    pergunta: 'O que é, o que é? Corre sem pernas, tem margens e segue até desaguar no mar.',
    alternativas: ["Rio", "Vento", "Montanha", "Nuvem"],
    resposta: "Rio",
    dica: "É uma água que corre sempre na mesma direção."
  },
  {
    pergunta: 'O que é, o que é? Tem quatro pernas, mas nunca anda. Você coloca comida em cima dela na hora do almoço.',
    alternativas: ["Mesa", "Cama", "Sofá", "Armário"],
    resposta: "Mesa",
    dica: "Ela costuma ficar no meio da sala ou da cozinha."
  },
  {
    pergunta: 'O que é, o que é? Aparece de madrugada, como pequenas gotinhas nas folhas, e desaparece quando o sol esquenta.',
    alternativas: ["Orvalho", "Neve", "Granizo", "Chuva"],
    resposta: "Orvalho",
    dica: "Ele não cai com força do céu; surge quando faz frio à noite."
  },
  {
    pergunta: 'O que é, o que é? Tem muitos dentes, mas não morde. Passa pelos cabelos e deixa tudo arrumado.',
    alternativas: ["Pente", "Serra", "Garfo", "Zíper"],
    resposta: "Pente",
    dica: "Você usa essa ferramenta de manhã, antes de ir à escola."
  },
  {
    pergunta: 'O que é, o que é? Tem tinta dentro de si e um bico fininho. Escreve sem precisar ser apontada.',
    alternativas: ["Caneta", "Lápis", "Giz", "Pincel"],
    resposta: "Caneta",
    dica: "Sua escrita não some quando você passa a borracha comum."
  },
  {
    pergunta: 'O que é, o que é? Tem ponteiros, mas não tem pés. Mostra as horas e nunca para de contar.',
    alternativas: ["Relógio", "Calendário", "Termômetro", "Bússola"],
    resposta: "Relógio",
    dica: "Ele pode ficar na parede, na mesa ou no pulso."
  },
  {
    pergunta: 'O que é, o que é? Fica cheio de ar, sobe para o céu quando é solto e enfeita festas de aniversário.',
    alternativas: ["Balão", "Avião", "Foguete", "Nuvem"],
    resposta: "Balão",
    dica: "Ele costuma ser feito de borracha e vem em muitas cores."
  },
  {
    pergunta: 'O que é, o que é? É feita de cordas, e você pula por cima dela para se divertir com os amigos no recreio.',
    alternativas: ["Corda", "Bola", "Peteca", "Bambolê"],
    resposta: "Corda",
    dica: "Essa brincadeira ajuda a deixar o corpo em movimento."
  },
  {
    pergunta: 'O que é, o que é? Acompanha a Terra, aparece à noite e muda de tamanho: às vezes é cheia, às vezes é fininha como uma unha.',
    alternativas: ["Lua", "Sol", "Estrela", "Nuvem"],
    resposta: "Lua",
    dica: "Ela brilha no céu quando o sol vai embora."
  },
  {
    pergunta: 'O que é, o que é? Cresce escondida debaixo da terra, tem cor laranja e ajuda a deixar os olhos saudáveis.',
    alternativas: ["Cenoura", "Batata", "Beterraba", "Abóbora"],
    resposta: "Cenoura",
    dica: "Os coelhos adoram essa raiz crocante."
  },
  {
    pergunta: 'O que é, o que é? Tem muitas páginas com desenhos e balões de fala, e você vira cada página para acompanhar uma história.',
    alternativas: ["Gibi", "Dicionário", "Jornal", "Agenda"],
    resposta: "Gibi",
    dica: "É uma leitura cheia de quadrinhos e personagens."
  }
];

const TOTAL = PERGUNTAS.length;

const INFO_MEDALHAS = {
  ouro:   { titulo: "Medalha de Ouro",   emoji: "🥇", cor: "#f5b400" },
  prata:  { titulo: "Medalha de Prata",  emoji: "🥈", cor: "#9aa3b2" },
  bronze: { titulo: "Medalha de Bronze", emoji: "🥉", cor: "#cd7f32" }
};

/* ===========================
   2. ESTADO E UTILITÁRIOS
   =========================== */
const estado = {
  nome: "",
  atual: 0,              // índice da pergunta atual (0 a 19)
  acertos: 0,            // total de respostas certas
  dicasUsadas: 0,        // total de perguntas em que a dica foi usada
  dicaUsadaNaPergunta: false,
  respondida: false
};

const $ = (id) => document.getElementById(id);

function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach((t) => t.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===========================
   3. SONS (opcionais, desligados por padrão)
   =========================== */
let somAtivo = false;
let contextoAudio = null;

function tocarSom(tipo) {
  if (!somAtivo) return;
  if (!contextoAudio) {
    contextoAudio = new (window.AudioContext || window.webkitAudioContext)();
  }
  const osc = contextoAudio.createOscillator();
  const ganho = contextoAudio.createGain();
  osc.frequency.value = tipo === "certo" ? 880 : tipo === "errado" ? 220 : 520;
  ganho.gain.value = 0.08;
  osc.connect(ganho).connect(contextoAudio.destination);
  osc.start();
  osc.stop(contextoAudio.currentTime + 0.15);
}

$("btn-som").addEventListener("click", () => {
  somAtivo = !somAtivo;
  $("btn-som").textContent = somAtivo ? "🔊 Som: ligado" : "🔇 Som: desligado";
  $("btn-som").setAttribute("aria-pressed", String(somAtivo));
  tocarSom("clique");
});

/* ===========================
   4. TELA INICIAL E NAVEGAÇÃO
   =========================== */
$("btn-comecar").addEventListener("click", iniciarQuiz);

$("nome").addEventListener("keydown", (e) => {
  if (e.key === "Enter") iniciarQuiz();
});

$("btn-pais").addEventListener("click", () => mostrarTela("tela-pais"));
$("btn-voltar-pais").addEventListener("click", () => mostrarTela("tela-inicio"));

function iniciarQuiz() {
  const nome = $("nome").value.trim();
  if (!nome) {
    $("erro-nome").hidden = false;
    $("nome").focus();
    return;
  }
  $("erro-nome").hidden = true;

  estado.nome = nome;
  estado.atual = 0;
  estado.acertos = 0;
  estado.dicasUsadas = 0;

  mostrarTela("tela-quiz");
  mostrarPergunta();
}

/* ===========================
   5. QUIZ
   =========================== */
function mostrarPergunta() {
  const p = PERGUNTAS[estado.atual];
  estado.dicaUsadaNaPergunta = false;
  estado.respondida = false;

  $("contador").textContent = `Pergunta ${estado.atual + 1} de ${TOTAL}`;
  $("pontos-info").textContent = `Acertos: ${estado.acertos}`;
  $("barra-preenchida").style.width = `${(estado.atual / TOTAL) * 100}%`;
  $("pergunta").textContent = p.pergunta;

  $("btn-dica").disabled = false;
  $("texto-dica").hidden = true;
  $("retorno").hidden = true;
  $("btn-proxima").disabled = true;
  $("btn-proxima").textContent = estado.atual === TOTAL - 1 ? "Ver resultado 🏆" : "Próxima ➡️";

  const area = $("alternativas");
  area.innerHTML = "";
  embaralhar([...p.alternativas]).forEach((texto) => {
    const botao = document.createElement("button");
    botao.className = "alternativa";
    botao.textContent = texto;
    botao.addEventListener("click", () => responder(botao, texto));
    area.appendChild(botao);
  });
}

$("btn-dica").addEventListener("click", () => {
  const p = PERGUNTAS[estado.atual];
  // A dica conta apenas uma vez por pergunta
  if (!estado.dicaUsadaNaPergunta) {
    estado.dicaUsadaNaPergunta = true;
    estado.dicasUsadas++;
  }
  $("texto-dica").textContent = `💡 Dica: ${p.dica}`;
  $("texto-dica").hidden = false;
  $("btn-dica").disabled = true;
});

function responder(botao, escolhida) {
  if (estado.respondida) return;
  estado.respondida = true;

  const p = PERGUNTAS[estado.atual];
  const correta = escolhida === p.resposta;

  document.querySelectorAll(".alternativa").forEach((b) => {
    b.disabled = true;
    if (b.textContent === p.resposta) b.classList.add("certa");
  });

  const retorno = $("retorno");
  if (correta) {
    estado.acertos++;
    retorno.className = "retorno acerto";
    retorno.textContent = `Isso mesmo, ${estado.nome}! Você é um gênio das adivinhas! 🌟`;
    tocarSom("certo");
  } else {
    botao.classList.add("errada");
    retorno.className = "retorno erro-suave";
    retorno.textContent =
      `Quase lá, ${estado.nome}! A resposta certa é "${p.resposta}". ` +
      `Não desanime: cada tentativa ajuda você a pensar melhor! 💪`;
    tocarSom("errado");
  }

  retorno.hidden = false;
  $("btn-dica").disabled = true;
  $("btn-proxima").disabled = false;
  $("pontos-info").textContent = `Acertos: ${estado.acertos}`;
}

$("btn-proxima").addEventListener("click", () => {
  estado.atual++;
  if (estado.atual < TOTAL) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

/* ===========================
   6. PONTUAÇÃO E MEDALHAS
   =========================== */
function calcularMedalha(acertos, dicas) {
  if (acertos === 20 && dicas === 0) return "ouro";
  if ((acertos === 18 || acertos === 19) && dicas >= 1) return "prata";
  if (acertos >= 15 && acertos <= 17) return "bronze";
  return null;
}

const MENSAGENS_MEDALHA = {
  ouro: "Perfeito! Você respondeu tudo sem nenhuma dica. Seu raciocínio está incrível!",
  prata: "Ótimo trabalho! Você acertou quase tudo e usou as dicas com inteligência.",
  bronze: "Muito bem! Você está no caminho certo. Continue praticando para subir de medalha!"
};

function mostrarResultado() {
  const medalha = calcularMedalha(estado.acertos, estado.dicasUsadas);

  $("barra-preenchida").style.width = "100%";
  $("pontuacao").textContent =
    `Você acertou ${estado.acertos} de ${TOTAL} perguntas e usou ${estado.dicasUsadas} dica(s).`;

  if (medalha) {
    const info = INFO_MEDALHAS[medalha];
    $("medalha").textContent = info.emoji;
    $("titulo-resultado").textContent = `Parabéns, ${estado.nome}! Você ganhou a ${info.titulo.toLowerCase()}!`;
    $("mensagem").textContent = MENSAGENS_MEDALHA[medalha];
    $("area-certificado").hidden = false;
    desenharCertificado(medalha, estado.nome, estado.acertos, estado.dicasUsadas);
  } else {
    $("medalha").textContent = "🌱";
    $("titulo-resultado").textContent = `Muito bem, ${estado.nome}, você se esforçou!`;
    $("mensagem").textContent =
      "Continue treinando seu raciocínio. Que tal tentar de novo e usar as dicas para pensar com calma? Você vai conseguir!";
    $("area-certificado").hidden = true;
  }

  mostrarTela("tela-resultado");
}

/* ===========================
   7. CERTIFICADO (canvas)
   =========================== */
function desenharCertificado(medalha, nome, acertos, dicas) {
  const canvas = $("canvas-certificado");
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const cor = INFO_MEDALHAS[medalha].cor;
  const fonte = (tamanho, peso = "normal") => {
    ctx.font = `${peso} ${tamanho}px Arial, sans-serif`;
  };

  // Fundo
  const fundo = ctx.createLinearGradient(0, 0, W, H);
  fundo.addColorStop(0, "#fffbea");
  fundo.addColorStop(1, "#e8f4ff");
  ctx.fillStyle = fundo;
  ctx.fillRect(0, 0, W, H);

  // Bordas
  ctx.strokeStyle = cor;
  ctx.lineWidth = 18;
  ctx.strokeRect(30, 30, W - 60, H - 60);
  ctx.lineWidth = 4;
  ctx.strokeRect(58, 58, W - 116, H - 116);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Títulos
  ctx.fillStyle = "#2d2a4a";
  fonte(54, "bold");
  ctx.fillText("Certificado de Mérito", W / 2, 125);
  fonte(28);
  ctx.fillText("Quiz das Adivinhas", W / 2, 175);
  fonte(30);
  ctx.fillText("Certificamos que", W / 2, 245);

  // Nome (reduz a fonte se for muito longo)
  let tamanhoNome = 70;
  fonte(tamanhoNome, "bold");
  while (ctx.measureText(nome).width > W - 220 && tamanhoNome > 28) {
    tamanhoNome -= 2;
    fonte(tamanhoNome, "bold");
  }
  ctx.fillStyle = "#6c4cf1";
  ctx.fillText(nome, W / 2, 315);

  // Texto da medalha
  ctx.fillStyle = "#2d2a4a";
  fonte(30);
  ctx.fillText("conquistou a", W / 2, 375);

  // Medalha
  ctx.beginPath();
  ctx.arc(W / 2, 440, 50, 0, Math.PI * 2);
  ctx.fillStyle = cor;
  ctx.fill();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  fonte(40, "bold");
  ctx.fillText("★", W / 2, 442);

  // Nome da medalha, pontuação e data
  ctx.fillStyle = "#2d2a4a";
  fonte(40, "bold");
  ctx.fillText(INFO_MEDALHAS[medalha].titulo, W / 2, 530);
  fonte(26);
  ctx.fillText(
    `Pontuação: ${acertos} de ${TOTAL} perguntas • Dicas usadas: ${dicas}`,
    W / 2,
    585
  );
  fonte(22);
  ctx.fillText(`Data: ${new Date().toLocaleDateString("pt-BR")}`, W / 2, 625);
}

$("btn-baixar").addEventListener("click", () => {
  const nomeArquivo = estado.nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  const link = document.createElement("a");
  link.download = `certificado-${nomeArquivo}.png`;
  link.href = $("canvas-certificado").toDataURL("image/png");
  link.click();
});

/* ===========================
   8. REINICIAR
   =========================== */
$("btn-reiniciar").addEventListener("click", () => {
  estado.nome = "";
  $("nome").value = "";
  $("erro-nome").hidden = true;
  mostrarTela("tela-inicio");
  $("nome").focus();
});
