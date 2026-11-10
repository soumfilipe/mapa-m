/* ------------------------------------------------------------------
   CONTRAPONTO ANARQUISTA: BAKUNIN
   Estende MAPA (carregue depois de data.js e data-marx.js).

   Escopo deliberadamente enxuto: o foco do mapa é a linha teórica
   marxista. Estes pontos existem para marcar onde e por que o
   anarquismo de Bakunin diverge de Marx, Engels e Lenin.
------------------------------------------------------------------- */
(function () {
  "use strict";
  const M = MAPA;

  const NOVOS = [
    /* análise */
    ["c-estadodomina","concept","Estado como dominação em si",1870,"Para Bakunin, o poder estatal corrompe quem o exerce e reproduz dominação mesmo nas mãos de trabalhadores. A opressão política não se reduz à econômica.",0],
    ["c-novaclasse","concept","Previsão da “nova classe” dirigente",1873,"Bakunin prevê (1873) que um Estado transitório dirigido por intelectuais e dirigentes “científicos” formaria uma nova camada privilegiada. Citada nos debates sobre a URSS; marxistas respondem de modos distintos (Trotsky fala em casta burocrática, não em nova classe).",0],

    /* estratégia / ponte */
    ["c-antiestatismo","concept","Abolição imediata do Estado",1871,"Fim do Estado e da propriedade sem fase estatal de transição. Marxistas e anarquistas concordam no fim do Estado; divergem sobre o caminho.",0],
    ["c-abstencao","concept","Abstencionismo e antiparlamentarismo",1871,"Recusa da participação eleitoral e parlamentar, vista como armadilha que integra o movimento operário à ordem. Marx defendeu a ação política (resolução de 1871 da Internacional); Lenin criticou o antiparlamentarismo em Esquerdismo.",0],
    ["c-federalismo","concept","Federalismo e autogestão de baixo para cima",1868,"Organização por federação livre de comunas e associações de produtores, em vez de centralismo estatal ou partidário.",0],
    ["c-campesinato","concept","Camponeses e marginalizados como sujeito",1870,"Bakunin via camponeses e setores marginalizados como força revolucionária, e não apenas o operariado industrial. Marx desconfiava do campesinato e do lumpemproletariado; Lenin e Mao depois dão ao campo papel maior, em outras bases.",0],

    /* obra, eventos e Brasil */
    ["w-estatismo","work","Estatismo e Anarquia",1873,"Bakunin critica o “socialismo de Estado” e prevê uma nova classe dirigente. Marx escreveu notas críticas sobre o livro (1874–75).",0],
    ["e-haia","event","Congresso de Haia (1872)",1872,"Marx e Engels vencem a disputa na Internacional: Bakunin é expulso e o Conselho Geral vai para Nova York. Os anti-autoritários formam uma Internacional própria.",0],
    ["e-kronstadt","event","Revolta de Kronstadt",1921,"Marinheiros e operários reivindicam sovietes livres; a revolta é reprimida pelo governo bolchevique. Episódio ainda disputado entre marxistas e anarquistas.",0],
    ["g-anarbr","group","Anarcossindicalismo no Brasil",1906,"Corrente dominante no movimento operário brasileiro nas primeiras décadas do século XX; Confederação Operária Brasileira (1906) e greves gerais como a de 1917. Parte dos fundadores do PCB veio dessa tradição.",1]
  ];
  NOVOS.forEach((n) => M.nodes.push(n));

  Object.assign(M.eixos, {
    "c-estadodomina": "a", "c-novaclasse": "a",
    "c-antiestatismo": "e", "c-abstencao": "e", "c-federalismo": "e",
    "c-campesinato": "m", "w-estatismo": "m"
  });

  const E = [
    /* autoria e obra */
    ["p-bakunin","w-estatismo","autor"],
    ["w-estatismo","c-novaclasse","trata"],["w-estatismo","c-antiestatismo","trata"],
    ["p-bakunin","c-estadodomina","trata"],["p-bakunin","c-antiestatismo","trata"],
    ["p-bakunin","c-federalismo","trata"],["p-bakunin","c-campesinato","trata"],["p-bakunin","c-novaclasse","trata"],
    ["p-bakunin","c-abstencao","trata"],

    /* o contraste direto com Marx */
    ["p-marx","p-bakunin","critica","Marx anota e rebate Estatismo e Anarquia (1874–75): vê na ideia de revolução sem condições materiais maduras um voluntarismo."],
    ["p-bakunin","p-marx","critica","Acusa Marx de autoritarismo e de apostar na tomada do Estado por uma elite “científica”."],
    ["e-haia","p-bakunin","contexto","Expulsão em 1872."],
    ["e-haia","g-ait","contexto","Divisão da Internacional entre marxistas e anti-autoritários."],

    /* análise do Estado: Marx x Bakunin */
    ["c-estadodomina","c-estadoclasse","critica","Para Bakunin, o Estado é opressor por natureza, e não só instrumento de uma classe. Para Marx, o Estado expressa a dominação de classe."],
    ["c-estadodomina","c-antiestatismo","fundamenta","Se o Estado reproduz dominação em si, uma fase estatal de transição é armadilha."],
    ["c-novaclasse","c-antiestatismo","fundamenta","Se a elite estatal vira nova classe, o Estado transitório consolida a dominação."],
    ["c-novaclasse","c-vanguarda","critica","Alerta que o partido de vanguarda se tornaria a nova elite dirigente."],

    /* estratégia: transição, partido, política */
    ["c-antiestatismo","c-extincao","critica","Ambos querem uma sociedade sem Estado. Engels: ele definha com o fim das classes. Bakunin: deve ser abolido de imediato."],
    ["c-antiestatismo","c-dit","critica","Rejeita qualquer ditadura transitória, inclusive a do proletariado."],
    ["w-estado","c-antiestatismo","critica","Lenin concorda em quebrar o Estado burguês, mas rejeita a abolição imediata: o proletariado precisa de um poder transitório."],
    ["w-esq","c-abstencao","critica","Lenin defende atuar em parlamentos e sindicatos contra o antiparlamentarismo de esquerdistas e anarquistas."],
    ["c-abstencao","c-reforma","critica","Compartilha com marxistas revolucionários a crítica à via parlamentar, mas rejeita também a ação política partidária."],
    ["c-federalismo","c-cent","critica","Opõe-se ao centralismo, inclusive ao democrático."],
    ["c-federalismo","c-soviet","complementa","Leitura interpretativa: conselhos de base têm afinidade com o federalismo, embora o poder dos sovietes tenha acabado centralizado."],
    ["c-federalismo","c-autoemanc","complementa","Reforça a ideia de que a organização deve vir da própria classe, de baixo para cima."],
    ["c-campesinato","c-aliança","complementa","Lenin e Mao dão ao campesinato papel que Marx não centrou; Bakunin já o destacava, mas sem direção partidária."],
    ["c-campesinato","c-prec","contexto","Leitura interpretativa: o debate sobre informais e precarizados retoma a pergunta sobre o sujeito além do operariado industrial."],

    /* prova histórica e Brasil */
    ["e-kronstadt","c-novaclasse","contexto","Anarquistas veem confirmação da previsão de Bakunin. Bolcheviques viram ameaça contrarrevolucionária em plena guerra civil e crise."],
    ["p-bakunin","g-anarbr","infl","Influência do anarquismo europeu no sindicalismo operário brasileiro."],
    ["g-anarbr","g-pcb","contexto","Parte dos fundadores do PCB vinha do anarcossindicalismo."],
    ["p-astro","g-anarbr","contexto","Ex-anarquista, fundador do PCB."]
  ];
  E.forEach((e) => M.edges.push(e));

  M.debates.push({
    id: "d-bakunin",
    titulo: "Marxismo e anarquismo: o que separa?",
    pergunta: "Ambos querem uma sociedade sem Estado e sem classes. A divergência está no diagnóstico do Estado, na transição e no papel do partido.",
    nos: ["p-bakunin","p-marx","c-estadoclasse","c-estadodomina","c-antiestatismo","c-extincao","c-dit","c-novaclasse","c-vanguarda","c-abstencao","c-federalismo","e-haia","e-kronstadt","w-estatismo","w-estado","g-anarbr"],
    posicoes: [
      { quem: "Bakunin", ids: ["p-bakunin"], texto: "O Estado é dominação em si. Abolição imediata, federalismo de baixo para cima e risco de nova classe dirigente." },
      { quem: "Marx e Engels", ids: ["p-marx"], texto: "O Estado expressa dominação de classe. É preciso poder operário transitório e ação política, e o Estado se extingue com o fim das classes." },
      { quem: "Lenin", ids: ["p-lenin"], texto: "Concorda em quebrar o Estado burguês, mas defende poder transitório dos sovietes e critica o antiparlamentarismo." },
      { quem: "Kronstadt", ids: ["e-kronstadt"], texto: "Anarquistas veem confirmação do alerta de Bakunin; bolcheviques viram risco contrarrevolucionário em plena guerra civil." },
      { quem: "Brasil", ids: ["g-anarbr"], texto: "O anarcossindicalismo foi força dominante no movimento operário das primeiras décadas e origem de parte dos quadros do PCB." },
      { quem: "Ponto de método", ids: ["c-estadodomina"], texto: "Parte da divergência é analítica (o Estado é de classe ou dominação em si?) e parte é estratégica (transição estatal ou abolição imediata). A segunda depende da primeira, mas não só dela." }
    ]
  });
})();
