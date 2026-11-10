/* ------------------------------------------------------------------
   PARTIDOS E CORRENTES NO BRASIL CONTEMPORÂNEO
   Estende MAPA (carregue depois dos demais arquivos de dados).

   Ideia central: o partido nem sempre é a unidade certa de análise.
   Muitos são partidos de correntes ou de frentes, e a contribuição
   à teoria marxista costuma estar em alas, não no partido inteiro.

   partidos: para cada partido ou ala, a "forma" e uma nota sobre onde
   está a elaboração teórica marxista.

   Fontes principais: Wikipédia (PSOL, PCR), Politize (UP),
   comunicado do PCBR (2024, autodescrição) e Voz Humana / Cedema
   (PCBR de 1968). Revise antes de usar publicamente: o quadro
   partidário muda e as próprias correntes podem discordar de
   classificações externas.
------------------------------------------------------------------- */
(function () {
  "use strict";
  const M = MAPA;

  M.formasPartido = {
    quadros: "Partido de quadros (centralismo democrático)",
    correntes: "Partido de correntes",
    frente: "Partido-frente de organizações",
    ala: "Ala (corrente interna)"
  };

  const NOVOS = [
    /* conceito */
    ["c-formapartido","concept","Forma partidária: quadros, correntes e frente",1980,"Três modelos no Brasil: partido de quadros com centralismo democrático (como PCB, PCdoB, PCR), partido de correntes com tendências organizadas (PT, PSOL) e partido-frente de organizações (UP). O X Congresso do partido bolchevique (1921) proibiu frações; partidos de correntes as admitem. Por isso a contribuição teórica marxista costuma estar nas alas, e não no partido como um todo.",1],

    /* partidos */
    ["g-psol","group","PSOL",2004,"Fundado em 2004 por parlamentares expulsos do PT após votarem contra a reforma da previdência. Define-se socialista e democrático, é um partido de correntes e integra a Federação PSOL Rede.",1],
    ["g-up","group","Unidade Popular (UP)",2019,"Registrada no TSE em 2019 (coleta de assinaturas desde 2016). Nasce de organizações como MLB, MLC, UJR, PCR e o Movimento de Mulheres Olga Benário. Declara-se defensora do socialismo; o nome vem da coalizão chilena de 1970.",1],
    ["g-pcr","group","PCR",1966,"Partido Comunista Revolucionário, fundado em 1966, em Recife, por cisão do PCdoB (Carta de 12 Pontos, de Manoel Lisboa). Marxista-leninista, reivindica o legado de Stalin e vê como revisionistas o PC soviético pós-Stalin e o chinês. Próximo do Partido do Trabalho da Albânia (Hoxha), embora não se diga hoxhaísta. Sobreviventes passaram pelo MR-8 e o reorganizaram em 1995. Edita A Verdade; é uma das organizações de origem da UP.",1],
    ["g-pcbr68","group","PCBR (1968)",1968,"Constituído em 1968 por dissidentes do PCB (Mário Alves, em oposição a Prestes; Gorender em São Paulo). Rejeitava a aliança com a burguesia e passou à ação armada urbana em 1969. Manteve a estrutura de partido contra organizações influenciadas pelo foco. Desarticulado em 1973; Mário Alves foi morto sob tortura.",1],
    ["g-pcbr","group","PCBR (atual)",2024,"Nome adotado em 2024 (XVII Congresso Extraordinário) pelo grupo antes chamado PCB-RR (Reconstrução Revolucionária), resultado de cisão recente do PCB. Segundo seu comunicado, reivindica a continuidade histórica do PCB de 1922 e declara ruptura com o reformismo; diz não refundar o PCBR de 1968. A outra fração mantém a sigla eleitoral do PCB, e as versões da disputa divergem.",1],

    /* alas e correntes internas */
    ["g-ds","group","Democracia Socialista (ala do PT)",1980,"Tendência marxista organizada dentro do PT, ligada à IV Internacional. Ano aproximado (o da fundação do PT). Exemplo de ala que produz teoria dentro de um partido de linha majoritariamente eleitoral.",1],
    ["g-mes","group","MES (ala do PSOL)",2004,"Movimento Esquerda Socialista. Corrente do PSOL com orientação trotskista e morenista; IV Internacional (reunificada), segundo a Wikipédia. Ano aproximado (o do partido).",1],
    ["g-insurg","group","Insurgência (ala do PSOL)",2004,"Corrente do PSOL: trotskismo, mandelismo, ecossocialismo; IV Internacional (reunificada), segundo a Wikipédia. Ano aproximado (o do partido).",1],
    ["g-resist","group","Resistência (ala do PSOL)",2004,"Corrente do PSOL de orientação trotskista, segundo a Wikipédia. Ano aproximado (o do partido).",1],
    ["g-lsr","group","LSR (ala do PSOL)",2004,"Liberdade, Socialismo e Revolução. Corrente do PSOL de orientação trotskista, ligada à Alternativa Socialista Internacional, segundo a Wikipédia. Ano aproximado (o do partido).",1],
    ["g-primavera","group","Primavera Socialista (ala do PSOL)",2004,"Corrente do PSOL classificada como de socialismo democrático (Wikipédia). Serve de contraste com as correntes trotskistas do mesmo partido. Ano aproximado (o do partido).",1]
  ];
  NOVOS.forEach((n) => M.nodes.push(n));
  M.eixos["c-formapartido"] = "e";

  /* forma partidária e onde está a teoria */
  M.partidos = {
    "g-pt": { forma: "correntes", nota: "Tendências organizadas convivem sob um programa comum. A elaboração marxista vem de alas, como a Democracia Socialista, enquanto a direção majoritária tem linha eleitoral e institucional. Falar do PT como bloco teórico engana." },
    "g-psol": { forma: "correntes", nota: "Reúne correntes de matriz trotskista (como MES, Insurgência, Resistência e LSR) e outras de socialismo democrático ou populismo de esquerda, segundo a classificação da Wikipédia. A contribuição à teoria marxista se concentra nas primeiras. As próprias correntes podem discordar da classificação." },
    "g-up": { forma: "frente", nota: "Nasce de uma frente de organizações e movimentos. A matriz marxista-leninista está no PCR, uma das organizações de origem; a UP, como partido, se define de modo mais amplo, como socialista." },
    "g-pcr": { forma: "quadros", nota: "Organização de matriz marxista-leninista que atua ao lado da UP e dentro dela. É a principal fonte da linha teórica marxista-leninista nesse campo." },
    "g-pcb": { forma: "quadros", nota: "Partido de matriz leninista que passou por várias cisões (1962, 1967–68, 1992 e, recentemente, a que originou o PCBR atual). A herança do PCB é disputada." },
    "g-pcdob": { forma: "quadros", nota: "Partido de matriz marxista-leninista, com tradição maoísta e albanesa na origem e atuação eleitoral hoje." },
    "g-pstu": { forma: "quadros", nota: "Partido de matriz trotskista, nascido da Convergência Socialista." },
    "g-pcbr": { forma: "quadros", nota: "Partido de matriz leninista que se apresenta como continuação histórica do PCB (1922). É um nome com a mesma sigla do PCBR de 1968, mas segundo seu comunicado de 2024 não é a mesma organização." },
    "g-pcbr68": { forma: "quadros", nota: "Combinou a concepção leninista de partido com a defesa da autonomia dos movimentos de massa, ideia associada a Luxemburgo (Della Vechia, 2005)." },
    "g-ds": { forma: "ala", nota: "Corrente interna do PT. A teoria marxista do partido está sobretudo em alas como esta, e não na direção majoritária." },
    "g-mes": { forma: "ala", nota: "Corrente interna do PSOL, de matriz trotskista." },
    "g-insurg": { forma: "ala", nota: "Corrente interna do PSOL, de matriz trotskista e ecossocialista." },
    "g-resist": { forma: "ala", nota: "Corrente interna do PSOL, de matriz trotskista." },
    "g-lsr": { forma: "ala", nota: "Corrente interna do PSOL, de matriz trotskista." },
    "g-primavera": { forma: "ala", nota: "Corrente interna do PSOL de socialismo democrático, fora da matriz trotskista do restante das alas citadas." }
  };
  M.partidoIds = Object.keys(M.partidos);

  /* resumo do PCB: acrescenta a cisão recente */
  const pcb = M.nodes.find((n) => n[0] === "g-pcb");
  if (pcb && pcb[4].indexOf("cisão recente") < 0) pcb[4] += " Uma cisão recente deu origem ao PCBR atual.";

  const E = [
    /* forma partidária */
    ["c-formapartido","c-cent","critica","O X Congresso do partido bolchevique (1921) proibiu frações; partidos de correntes admitem tendências organizadas."],
    ["c-formapartido","g-pt","contexto","Exemplo de partido de correntes."],
    ["c-formapartido","g-psol","contexto","Exemplo de partido de correntes."],
    ["c-formapartido","g-up","contexto","Exemplo de partido-frente de organizações."],
    ["c-vanguarda","c-formapartido","contexto","A vanguarda leninista se organiza como partido de quadros; o debate atual pergunta se ainda cabe."],

    /* PT e PSOL */
    ["g-pt","g-psol","contexto","Fundado em 2004 por parlamentares expulsos do PT após votarem contra a reforma da previdência."],
    ["g-trot","g-psol","infl","Várias correntes trotskistas atuam no PSOL."],
    ["g-pt","g-ds","contexto","Tendência interna do PT."],
    ["g-trot","g-ds","infl","Ligada à IV Internacional."],
    ["g-psol","g-mes","contexto"],["g-psol","g-insurg","contexto"],["g-psol","g-resist","contexto"],
    ["g-psol","g-lsr","contexto"],["g-psol","g-primavera","contexto"],
    ["g-trot","g-mes","infl"],["g-trot","g-insurg","infl"],["g-trot","g-resist","infl"],["g-trot","g-lsr","infl"],

    /* UP e PCR */
    ["g-pcr","g-up","infl","Uma das organizações de origem da UP, com MLB, MLC, UJR e outras."],
    ["g-up","g-pcr","contexto","Descrito pelo PCR como relação fraternal."],
    ["g-pcdob","g-pcr","contexto","Cisão do PCdoB em 1966 (Carta de 12 Pontos, de Manoel Lisboa)."],
    ["g-estal","g-pcr","infl","Reivindica o legado de Stalin e considera revisionistas o PC soviético pós-Stalin e o chinês."],
    ["c-gpp","g-pcr","infl","Estratégia histórica de guerra popular prolongada, nos moldes de Mao, com o Nordeste como região promissora."],

    /* PCBR de 1968 e atual */
    ["g-pcb","g-pcbr68","contexto","Ruptura após 1964: Mário Alves se opõe à linha de Prestes."],
    ["g-pcbr68","c-viapac","critica","Rejeita a aliança com a burguesia e a via pacífica do PCB."],
    ["g-pcbr68","c-foco","critica","Defendeu manter a estrutura de partido contra organizações que, influenciadas pelo foco, dispensavam a ação partidária (Della Vechia, 2005)."],
    ["g-pcbr68","g-aln","contexto","Estratégia armada próxima à da ALN, mas com estrutura partidária."],
    ["c-espont","g-pcbr68","infl","Combinou a concepção leninista de partido com a autonomia dos movimentos de massa, ideia associada a Luxemburgo (Della Vechia, 2005)."],
    ["p-gor","g-pcbr68","infl","Dirigiu o PCBR em São Paulo; depois escreveu O Escravismo Colonial (1978)."],
    ["g-pcb","g-pcbr","contexto","Cisão recente do PCB. Segundo o comunicado do PCBR (2024), nasce quando a maioria do Comitê Central descartou resoluções do XVI Congresso. A outra fração mantém a sigla eleitoral; as versões divergem."],
    ["g-pcbr","g-pcbr68","contexto","Mesma sigla, organizações distintas: o PCBR atual diz não refundar o de 1968 nem adotar suas teses."],
    ["g-pcbr","c-reforma","critica","Declara ruptura com o reformismo."]
  ];
  E.forEach((e) => M.edges.push(e));

  M.debates.push({
    id: "d-partidos",
    titulo: "Partidos de correntes: onde está a teoria marxista?",
    pergunta: "Em partidos de correntes ou de frente, a elaboração marxista costuma estar em alas, e não no partido inteiro. Qual é a unidade certa de análise?",
    nos: ["c-formapartido","c-cent","c-vanguarda","g-pt","g-ds","g-psol","g-mes","g-insurg","g-resist","g-lsr","g-primavera","g-up","g-pcr","g-pcb","g-pcbr","g-pcbr68","g-pcdob","g-pstu"],
    posicoes: [
      { quem: "PT", ids: ["g-pt","g-ds"], texto: "Partido de correntes. A elaboração marxista vem de alas, como a Democracia Socialista; a direção majoritária tem linha eleitoral e institucional." },
      { quem: "PSOL", ids: ["g-psol","g-mes"], texto: "Correntes de matriz trotskista (MES, Insurgência, Resistência, LSR) convivem com alas de socialismo democrático e populismo de esquerda." },
      { quem: "UP e PCR", ids: ["g-up","g-pcr"], texto: "A UP nasce de uma frente. A matriz marxista-leninista está no PCR, uma das organizações de origem." },
      { quem: "PCB e PCBR atual", ids: ["g-pcb","g-pcbr"], texto: "Disputa pela herança do PCB de 1922. O PCBR atual se apresenta como continuação histórica; a outra fração mantém a sigla eleitoral." },
      { quem: "PCBR de 1968", ids: ["g-pcbr68"], texto: "Outra organização, com a mesma sigla. Manteve estrutura de partido contra o foquismo." },
      { quem: "Ponto de método", ids: ["c-formapartido"], texto: "Ao mapear teoria, vale seguir a corrente e a produção intelectual, e não o rótulo partidário." }
    ]
  });
})();
