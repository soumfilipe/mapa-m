/* ------------------------------------------------------------------
   DOCUMENTOS OFICIAIS DOS PARTIDOS E O QUE ELES AFIRMAM
   Estende MAPA (carregue depois de data-partidos.js e data-correntes.js).

   Três blocos:
   1) documentos: catálogo com nível de fonte e status de coleta;
   2) posicoes: paráfrases curtas por partido, separadas em
      análise (a) e estratégia (e), cada uma com os documentos que a
      sustentam. Nenhum trecho longo é copiado;
   3) novos conceitos e ligações que têm base em documento.

   nivel:  primario  = documento do próprio partido
           tendencia = documento de corrente interna (não é do partido)
           secundario= imprensa, Wikipédia ou texto de adversário
   status: lido | parcial | coletar

   Base: relatório de pesquisa de nov./2026. Itens com status parcial
   ou coletar aparecem na aba Sobre como pendências.
------------------------------------------------------------------- */
(function () {
  "use strict";
  const M = MAPA;

  /* ---------- 1) catálogo de documentos ---------- */
  const U = "https://";
  const doc = (partido, titulo, data, tipo, url, nivel, status) => ({ partido, titulo, data, tipo, url, nivel, status });
  M.documentos = {
    /* PSOL */
    "d-psol-prog": doc("g-psol","Programa “Compromisso com o Futuro”","2025","programa",U+"psol50.org.br/programa/","primario","lido"),
    "d-psol-2004": doc("g-psol","Programa do Encontro Nacional de fundação","2004","programa",U+"psol50sp.org.br/programa/","primario","lido"),
    "d-psol-8c": doc("g-psol","8º Congresso: resoluções aprovadas","2023","resolução de congresso",U+"psol50.org.br/8o-congresso-nacional-do-psol-conheca-todas-as-resolucoes-aprovadas/","primario","parcial"),
    "d-psol-dn23": doc("g-psol","Resolução do Diretório Nacional sobre o programa de mudanças","2023","resolução de direção",U+"psol50.org.br/psol-reafirma-luta-para-garantir-implementacao-de-programa-de-mudancas-que-venceu-nas-urnas/","primario","lido"),
    "d-psol-dn24": doc("g-psol","Resolução “Por uma esquerda socialista e renovada…”","2024","resolução internacional",U+"psol50.org.br/resolucao-do-psol-por-uma-esquerda-socialista-e-renovada-para-o-seculo-xxi-para-lutar-contra-a-extrema-direita/","primario","lido"),
    "d-psol-resol": doc("g-psol","Página de resoluções do PSOL","—","índice",U+"psol50.org.br/resolucoes/","primario","coletar"),
    "d-mes-tese": doc("g-mes","Tese “Por um PSOL independente e anticapitalista”","2023","tese de tendência",U+"movimentorevista.com.br/2023/06/tese-militante-por-um-psol-independente-e-anticapitalista/","tendencia","lido"),
    "d-psol-correntes": doc("g-psol","Teses de Insurgência, Resistência, LSR, Primavera Socialista","2023","tese de tendência","a localizar nos sites das correntes","tendencia","coletar"),
    /* PT */
    "d-pt-17enc": doc("g-pt","Resolução do 17º Encontro Nacional","2025","resolução de encontro",U+"pt.org.br/wp-content/uploads/2025/10/resolucao-do-17-encontro-nacional-do-pt.pdf","primario","lido"),
    "d-pt-dn25": doc("g-pt","Resolução Política do Diretório Nacional","2025","resolução de direção",U+"pt.org.br/wp-content/uploads/2025/12/resolucao-politica-dn-06-12-2025-final.pdf","primario","lido"),
    "d-pt-8c": doc("g-pt","Manifesto do 8º Congresso","2026","manifesto",U+"pt.org.br/com-olhar-para-o-futuro-pt-defende-reformas-e-apresenta-saidas-para-crise-do-capitalismo/","primario","coletar"),
    "d-ae-tese": doc("g-pt","Articulação de Esquerda: projeto de resolução ao 9º Congresso da AE","2025","tese de tendência",U+"pagina13.org.br/projeto-de-resolucao-ao-nono-congresso-da-ae-2025/","tendencia","lido"),
    "d-ds-conf": doc("g-ds","Resolução da XIV Conferência da DS","2026","resolução de tendência",U+"democraciasocialista.org.br/modelo-pagina-inicial/","tendencia","coletar"),
    /* PCdoB */
    "d-pcdob-16c": doc("g-pcdob","Resolução Política do 16º Congresso","2025","resolução de congresso",U+"pcdob.org.br/wp-content/uploads/2025/11/Resolucao_PCdoB_Final_Internet.pdf","primario","lido"),
    "d-pcdob-prog": doc("g-pcdob","Programa Socialista para o Brasil","2009","programa",U+"pcdob.org.br/programa/","primario","lido"),
    "d-pcdob-cc26": doc("g-pcdob","Resolução do Comitê Central sobre 2026","2026","resolução de direção",U+"pcdob.org.br/noticias/pcdob-reeleger-lula-defender-o-brasil-e-derrotar-os-traidores-da-patria/","primario","lido"),
    "d-pcdob-68": doc("g-pcdob","Documento do PCdoB de 1968 sobre o PCBR (via Fundação Grabois)","1968","documento histórico",U+"grabois.org.br/2018/11/23/o-partido-comunista-do-brasil-em-1968/","secundario","coletar"),
    /* UP */
    "d-up-2019": doc("g-up","Resolução Política do 1º Congresso","2019","resolução de congresso",U+"www.marxists.org/portugues/tematica/2019/03/index.htm","primario","lido"),
    "d-up-3c": doc("g-up","Resoluções Políticas do 3º Congresso","2023","resolução de congresso",U+"unidadepopular.org.br/blog/resolucoes-politicas-aprovadas-no-3o-congresso-nacional-da-unidade-popular-pelo-socialismo","primario","lido"),
    "d-up-dn26": doc("g-up","Resolução Política do Diretório Nacional","2026","resolução de direção",U+"unidadepopular.org.br/blog/resolucao-politica","primario","lido"),
    "d-up-prog": doc("g-up","Programa da UP pelo Socialismo","2026","programa",U+"unidadepopular.org.br/api/media/file/2026_Programa_UP.pdf","primario","parcial"),
    /* PCR */
    "d-pcr-2003": doc("g-pcr","O PCR e a Revolução Brasileira (teses do III Congresso)","2003","teses de congresso",U+"pcrbrasil.org/wp-content/uploads/2010/06/O-PCR-e-a-Revolu%C3%A7%C3%A3o-Brasileira.pdf","primario","lido"),
    "d-pcr-prog": doc("g-pcr","Programa para a Revolução Socialista Brasileira","2013","programa",U+"pcrbrasil.org/pcr-lanca-programa-para-revolucao-brasil/","primario","parcial"),
    "d-pcr-15": doc("g-pcr","Resolução sobre a conjuntura","2015","resolução de direção",U+"pcrbrasil.org/resolucao-do-pcr-sobre-a-conjuntura/","primario","lido"),
    "d-pcr-7c": doc("g-pcr","Resoluções do 7º Congresso","2025","resolução de congresso",U+"pcrbrasil.org/","primario","coletar"),
    "d-pcr-revis": doc("g-pcr","Texto primário sobre revisionismo (PCUS pós-Stalin e PC da China)","—","texto programático","a localizar em pcrbrasil.org ou averdade.org.br","primario","coletar"),
    /* PCB */
    "d-pcb-16c": doc("g-pcb","Declaração Política do XVI Congresso","2021","resolução de congresso",U+"pcb.org.br/portal2/28127","primario","lido"),
    "d-pcb-8conf": doc("g-pcb","VIII Conferência Política Nacional: resoluções","2024","resolução de conferência",U+"pcb.org.br/portal2/32254","primario","lido"),
    "d-pcb-cc24": doc("g-pcb","Versão do Comitê Central sobre a cisão de 2024","2024","nota do CC",U+"pcb.org.br/portal2/","primario","coletar"),
    /* PCBR */
    "d-pcbr-17c": doc("g-pcbr","Resoluções do XVII Congresso Extraordinário","2024","resolução de congresso",U+"emdefesadocomunismo.com.br/resolucoes-do-xvii-congresso-extraordinario-do-partido-comunista-brasileiro-reconstrucao-revolucionaria/","primario","lido"),
    "d-pcbr-nome": doc("g-pcbr","Comunicado sobre a alteração do nome","2024","comunicado",U+"emdefesadocomunismo.com.br/comunicado-sobre-a-alteracao-do-nome-de-nosso-partido/","primario","lido"),
    "d-pcbr-26": doc("g-pcbr","Nota “Votar em Lula para derrotar Bolsonaro…”","2026","nota do CC",U+"emdefesadocomunismo.com.br/nota-politica-votar-em-lula-para-derrotar-bolsonaro-e-organizar-os-trabalhadores-para-a-luta-de-classes/","primario","lido"),
    "d-pcbr68-linha": doc("g-pcbr68","Linha Política","1968","documento fundador","coletâneas: Vida e Obra de Mário Alves","primario","coletar"),
    "d-pcbr68-cpdoc": doc("g-pcbr68","Verbete PCBR (FGV/CPDOC)","—","verbete",U+"www18.fgv.br/cpdoc/acervo/dicionarios/verbete-tematico/partido-comunista-brasileiro-revolucionario-pcbr","secundario","lido"),
    /* PSTU */
    "d-pstu-perm": doc("g-pstu","O PSTU e a revolução permanente no Brasil","—","texto programático",U+"www.pstu.org.br/o-pstu-e-a-revolucao-permanente-no-brasil/","primario","lido"),
    "d-pstu-frente": doc("g-pstu","Frente ampla com a burguesia não!","2022","artigo oficial",U+"www.pstu.org.br/frente-ampla-com-a-burguesia-nao-vamos-construir-um-polo-socialista-e-revolucionario/","primario","lido"),
    "d-pstu-26": doc("g-pstu","Contra Bolsonaro, voto crítico no 13…","2026","editorial",U+"opiniaosocialista.com.br/contra-bolsonaro-voto-critico-no-13-e-independencia-nas-ruas/","primario","lido"),
    "d-pstu-cong": doc("g-pstu","Resoluções de congresso (2022–2026)","—","resolução de congresso","não localizadas","primario","coletar"),
    "d-pstu-teses": doc("g-pstu","Teses programáticas (versão oficial)","—","programa","a localizar em pstu.org.br","primario","coletar"),
    /* PCO */
    "d-pco-conf": doc("g-pco","39ª Conferência Nacional: voto nulo","2026","nota oficial",U+"pco.org.br/2026/10/13/39a-conferencia-nacional-do-pco-decide-pelo-voto-nulo/","primario","parcial"),
    "d-pco-prog": doc("g-pco","Um programa de luta em defesa do povo trabalhador e da revolução","2026","programa eleitoral",U+"causaoperaria.org.br/2026/um-programa-de-luta-em-defesa-do-povo-trabalhador-e-da-revolucao/","primario","lido"),
    "d-pco-12c": doc("g-pco","Resoluções do XII Congresso","2026","resolução de congresso",U+"causaoperaria.org.br/2026/xii-congresso-do-pco-encerra-com-eleicao-do-ccn-e-balanco-de-quatro-anos-de-luta/","primario","coletar"),
    "d-pco-trot": doc("g-pco","Seções “O que é Trotskismo” e “O Trotskismo no Brasil”","—","texto programático","site do PCO","primario","coletar"),
    "d-pco-dco": doc("g-pco","Artigos do DCO contra PSTU e PCBR","2026","artigo do órgão oficial",U+"causaoperaria.org.br/2026/pcbr-denuncia-a-frente-ampla-e-termina-fazendo-campanha-por-ela/","primario","lido")
  };

  /* ---------- 2) o que cada partido afirma (paráfrase) ----------
     [eixo, texto, [ids de documentos], marca opcional] */
  M.posicoes = {
    "g-psol": [
      ["a","Descreve o Brasil como país erguido sobre escravismo e colonialismo, mantido na periferia do capitalismo por interesses monopolistas; vê o golpe de 2016 como reação das classes dominantes ao conflito distributivo.",["d-psol-prog"]],
      ["a","Usa o termo “superexploração”, que lembra a teoria marxista da dependência, mas o documento não cita Marini.",["d-psol-prog"],"leitura interpretativa"],
      ["e","Coloca o socialismo como horizonte estratégico (democrático, ecossocialista, internacionalista) e reivindica independência política de classe, sem excluir unidade ampla.",["d-psol-prog"]],
      ["e","Apoiou Lula desde o 1º turno de 2022 e defende mobilização social permanente pelo programa eleito, com crítica ao marco fiscal.",["d-psol-8c","d-psol-dn23"]],
      ["a","O programa de 2004 critica as experiências do stalinismo e as capitulações da “3ª via” social-democrata.",["d-psol-2004"]]
    ],
    "g-mes": [
      ["e","Propõe defender o governo contra a extrema-direita, mas manter independência e não apoiar medidas que joguem a crise sobre os trabalhadores.",["d-mes-tese"],"tese de tendência"]
    ],
    "g-pt": [
      ["a","Diz que a crise do capitalismo é estrutural e multidimensional e fala em superar a dependência externa por soberania alimentar, energética, produtiva, digital e militar.",["d-pt-17enc"]],
      ["e","Defende frente ampla, reformas estruturais e “socialismo petista” radicalmente democrático e sustentável, construído como nova hegemonia na sociedade e no Estado.",["d-pt-17enc","d-pt-dn25"]],
      ["e","Segundo a chamada do 8º Congresso, o manifesto propõe sete reformas, um novo pacto de desenvolvimento e concertação com a classe trabalhadora e com empresários “comprometidos com a nação”. Texto integral ainda por coletar.",["d-pt-8c"],"parcial"]
    ],
    "g-ds": [
      ["e","Resolução da XIV Conferência diz que a tarefa é construir a vitória sobre a extrema-direita por um Brasil democrático e antineoliberal. Texto integral ainda por coletar.",["d-ds-conf"],"tendência, parcial"]
    ],
    "g-pcdob": [
      ["a","Fala em crise sistêmica do capitalismo, cita Marx sobre a concentração e centralização do capital e Lenin sobre o desenvolvimento desigual; vê declínio relativo dos EUA e ascensão da China, que chama de socialista.",["d-pcdob-16c"]],
      ["e","Define o Novo Projeto Nacional de Desenvolvimento como o “caminho brasileiro para o socialismo”, passando por uma república de democracia popular. Duas tarefas: reeleger Lula e fazer mudanças estruturais.",["d-pcdob-prog","d-pcdob-16c"]],
      ["e","Integra o governo e a federação com o PT; declara integrar a corrente teórica do marxismo-leninismo.",["d-pcdob-16c"]]
    ],
    "g-up": [
      ["a","Vê a contradição principal entre capital e trabalho, uma burguesia particularmente reacionária e herança escravocrata e patriarcal que soma opressão de raça e gênero à exploração.",["d-up-2019"]],
      ["a","Descreve o acordo Mercosul–UE como aprofundamento da dependência frente ao imperialismo europeu e fala em desindustrialização.",["d-up-3c"]],
      ["e","Disputa eleições como tribuna, reconhece todas as formas de luta e prevê controle social dos monopólios, nacionalização dos bancos e reforma agrária popular.",["d-up-2019","d-up-prog"]],
      ["e","Faz oposição de esquerda ao governo Lula, que acusa de conciliação de classes, e se opõe à extrema-direita; em 2026 chamou a derrotar o fascismo.",["d-up-dn26"]]
    ],
    "g-pcr": [
      ["a","Afirma que só uma revolução socialista resolve os problemas econômicos do Brasil e prevê socialização dos monopólios, nacionalização dos bancos e fim da espoliação imperialista.",["d-pcr-2003","d-pcr-prog"]],
      ["e","Define o partido como vanguarda da classe operária, a ditadura do proletariado como meta e um governo revolucionário dos trabalhadores; orienta a militância a construir a UP.",["d-pcr-2003","d-pcr-15"]],
      ["a","A afirmação de que considera revisionistas o PCUS pós-Stalin e o PC da China vem de fonte secundária e precisa de documento primário.",["d-pcr-revis"],"não verificado"]
    ],
    "g-pcb": [
      ["a","Descreve um capitalismo completo, dependente e industrialmente regredido, com burguesia associada ao capital internacional dividida em fração bolsonarista e direita clássica, e Estado de caráter de classe.",["d-pcb-8conf"]],
      ["e","Defende revolução socialista sem acordo com a burguesia e frente anticapitalista e anti-imperialista, que “não pode ser confundida com uma frente eleitoral”; chama o governo Lula de conciliação de classes.",["d-pcb-8conf","d-pcb-16c"]],
      ["a","Faz autocrítica da antiga estratégia nacional e democrática; o V Congresso (1960) defendia frente com a burguesia nacionalista.",["d-pcb-8conf"]]
    ],
    "g-pcbr": [
      ["a","Parte de um país colonizado, estruturado pela escravização e pela dizimação dos povos originários, e classifica o governo Lula-Alckmin como burguês e social-liberal.",["d-pcbr-17c","d-pcbr-26"]],
      ["e","Defende estratégia socialista sem etapas, ditadura do proletariado e superação do etapismo do velho PCB.",["d-pcbr-17c"]],
      ["e","No 2º turno de 2026 chamou voto em Lula contra Flávio Bolsonaro, mantendo independência, para dar mais espaço de organização aos trabalhadores.",["d-pcbr-26"]],
      ["a","Critica como reformistas o PC Português, o PCdoB e o PC da Federação Russa, e a maioria do CC do PCB por um “giro à direita”. Essa disputa só está documentada pelo lado do PCBR.",["d-pcbr-17c","d-pcb-cc24"],"um lado só"]
    ],
    "g-pcbr68": [
      ["e","Fundado por dissidentes do PCB, defendia a luta armada contra a ditadura e um governo popular revolucionário (CPDOC). O texto da Linha Política ainda não foi coletado, e fontes divergem sobre a estratégia em etapas.",["d-pcbr68-cpdoc","d-pcbr68-linha"],"parcial"]
    ],
    "g-pstu": [
      ["a","Define o governo Lula como governo capitalista a serviço do mercado financeiro.",["d-pstu-26"]],
      ["e","Declara a revolução permanente como alicerce do programa, com independência de classe, e rejeita frente ampla com a burguesia em favor de um polo socialista e revolucionário.",["d-pstu-perm","d-pstu-frente"]],
      ["e","No 2º turno de 2026, voto crítico em Lula sem apoio político ao governo.",["d-pstu-26"]],
      ["a","Critica o MES por reivindicar a revolução permanente e, segundo o PSTU, praticar “etapas stalinistas”, e o PSOL pela estratégia reformista.",["d-pstu-perm","d-pstu-frente"]]
    ],
    "g-pco": [
      ["a","Vê o regime de 1988 em crise, com a burguesia recorrendo a meios autoritários, e o terceiro governo Lula como fracasso da frente ampla.",["d-pco-prog","d-pco-conf"]],
      ["e","Trata eleições como terreno secundário e tribuna do governo operário; em 2026 decidiu pelo voto nulo no 2º turno.",["d-pco-conf","d-pco-prog"]],
      ["a","Seus artigos acusam PSTU e PCBR de oportunismo por apoiarem, criticamente, Lula ou a frente ampla (texto do órgão do próprio partido).",["d-pco-dco"],"polêmica de partido"]
    ]
  };

  /* ---------- 3) conceitos novos, com base em documento ---------- */
  const NOVOS = [
    ["c-concilia","concept","Conciliação de classes (caracterização do governo Lula)",2023,"Termo de PCB, UP, PSTU e outros para o governo Lula: acordo com setores do capital e da direita, em prejuízo da independência da classe trabalhadora. PCBR fala em “social-liberalismo”. PT, PCdoB e a maioria do PSOL rejeitam a leitura e tratam a reeleição como tarefa central.",1],
    ["c-frenteamp","concept","Frente ampla × frente anticapitalista",2022,"Dois modelos de aliança no Brasil atual. A frente ampla (PT, PCdoB, maioria do PSOL, e voto em Lula no 2º turno de 2026 também por PCB, PCBR e PSTU) vê a extrema-direita como inimigo central. A frente anticapitalista (PCB, PCBR, PSTU, UP) rejeita acordo com a burguesia e defende polo socialista.",1],
    ["c-soberania","concept","Soberania nacional e dependência",2025,"PT, PCdoB, PSOL e UP falam em dependência e neocolonialismo, mas divergem sobre a saída: desenvolvimento soberano com aliança de setores nacionais (PT, PCdoB) ou ruptura socialista (UP, PCB, PCBR). O PSTU fala em semicolônia (fonte secundária).",1],
    ["c-china","concept","China socialista e multipolaridade",2025,"O PCdoB chama a China de socialista e vê declínio relativo dos EUA; o PT fala em novo padrão Estado–mercado e ordem multipolar. A UP critica a dependência também em relação à China (ainda por documentar em fonte primária).",1],
    ["c-fascismo","concept","Extrema-direita e fascismo",2024,"PCB trata o fascismo como tropa de choque do capital; PT, PCdoB e PSOL tratam a extrema-direita como inimigo central de uma frente democrática; UP chama a derrotar o fascismo.",1],
    ["c-governoop","concept","Governo operário / governo dos trabalhadores",2014,"Tese do PCO (e, em outra formulação, do PCR: governo revolucionário dos trabalhadores) de um governo que sai da luta e rompe com a burguesia, usando eleições como tribuna.",1],
    ["c-ecosoc","concept","Ecossocialismo e socialismo do século 21",2025,"Horizonte do programa atual do PSOL: socialismo democrático, participativo, ecossocialista e internacionalista. O PT fala em socialismo “sustentável”.",1]
  ];
  NOVOS.forEach((n) => M.nodes.push(n));
  Object.assign(M.eixos, {
    "c-concilia": "m", "c-frenteamp": "e", "c-soberania": "m", "c-china": "m",
    "c-fascismo": "a", "c-governoop": "e", "c-ecosoc": "e"
  });

  const E = [
    /* críticas com base em documento */
    ["g-pstu","g-mes","critica","Segundo o PSTU, o MES reivindica a revolução permanente, mas pratica etapas stalinistas. Fonte: O PSTU e a revolução permanente no Brasil (primária)."],
    ["g-pstu","g-psol","critica","Critica a estratégia reformista de partidos eleitorais. Fonte: PSTU (primária)."],
    ["g-pstu","g-pt","critica","Vê o governo Lula como capitalista e a frente ampla como conciliação. Fonte: PSTU (primária)."],
    ["g-pcbr","g-pcdob","critica","Chama PCdoB, PCP e PCFR de partidos reformistas. Fonte: PCBR (primária)."],
    ["g-pcbr","g-pcb","critica","Acusa a maioria do CC do PCB de giro à direita; a versão do CC ainda não foi coletada. Fonte: PCBR (um lado só)."],
    ["g-pcb","g-pt","critica","Chama o governo Lula de conciliação de classes e fala em apassivamento das massas. Fonte: PCB (primária)."],
    ["g-up","g-pt","critica","Acusa o governo Lula de conciliação de classes. Fonte: UP (primária)."],
    ["g-pco","g-pstu","critica","Acusa de oportunismo o apoio crítico a Lula. Fonte: órgão do PCO (polêmica de partido)."],
    ["g-pco","g-pcbr","critica","Acusa de fazer campanha pela frente ampla que diz denunciar. Fonte: órgão do PCO (polêmica de partido)."],
    ["g-psol","g-estal","critica","O programa de 2004 critica as experiências totalitárias dos regimes stalinistas. Fonte: PSOL (primária)."],
    ["g-psol","g-socdem","critica","O programa de 2004 critica as capitulações da terceira via social-democrata. Fonte: PSOL (primária)."],

    /* reivindicações explícitas */
    ["p-marx","g-pcdob","infl","O PCdoB cita Marx sobre concentração e centralização do capital. Fonte: 16º Congresso (primária)."],
    ["p-lenin","g-pcdob","infl","Cita Lenin sobre desenvolvimento desigual e declara-se marxista-leninista. Fonte: 16º Congresso (primária)."],
    ["p-lenin","g-pcbr","infl","Reivindica Lenin e o marxismo-leninismo, e o partido de vanguarda. Fonte: XVII Congresso (primária)."],
    ["p-lenin","g-pcr","infl","Reivindica o marxismo-leninismo e a ditadura do proletariado. Fonte: teses do III Congresso (primária)."],
    ["p-trot","g-pstu","infl","Reivindica Trotsky, a revolução permanente e o Programa de Transição. Fonte: PSTU (primária)."],

    /* novos conceitos: quem trata */
    ["g-pcb","c-concilia","trata"],["g-up","c-concilia","trata"],["g-pstu","c-concilia","trata"],["g-pcbr","c-concilia","trata"],
    ["g-pt","c-concilia","critica","Rejeita a leitura de conciliação e trata o governo como instrumento de frente ampla. Leitura interpretativa a partir das resoluções do PT."],
    ["c-concilia","c-frenteamp","fundamenta","Quem vê conciliação de classes tende a rejeitar a frente ampla. Leitura interpretativa."],
    ["g-pt","c-frenteamp","trata"],["g-pcdob","c-frenteamp","trata"],["g-pcb","c-frenteamp","trata"],["g-pstu","c-frenteamp","trata"],
    ["c-frenteamp","c-frente","complementa","Atualiza o debate clássico sobre frentes únicas e populares no Brasil atual."],
    ["g-pt","c-soberania","trata"],["g-pcdob","c-soberania","trata"],["g-up","c-soberania","trata"],["g-psol","c-soberania","trata"],
    ["c-soberania","c-dep","complementa","Leitura interpretativa: a soberania nacional retoma o tema da dependência, com saídas diferentes."],
    ["g-pcdob","c-china","trata"],["g-pt","c-china","trata"],
    ["g-pcb","c-fascismo","trata"],["g-pt","c-fascismo","trata"],["g-pcdob","c-fascismo","trata"],["g-psol","c-fascismo","trata"],["g-up","c-fascismo","trata"],
    ["g-pco","c-governoop","trata"],["g-pcr","c-governoop","trata"],
    ["g-psol","c-ecosoc","trata"],["g-pt","c-ecosoc","trata"],
    ["g-pcdob","c-etapa","trata","O Novo Projeto Nacional de Desenvolvimento passa por democracia popular antes do socialismo. Leitura interpretativa."],
    ["g-pcbr","c-etapa","critica","Supera o etapismo do velho PCB. Fonte: XVII Congresso (primária)."],
    ["g-pstu","c-perm","trata"]
  ];
  E.forEach((e) => M.edges.push(e));

  M.debates.push(
    {
      id: "d-governo",
      titulo: "O governo Lula e a esquerda marxista (2023–2026)",
      pergunta: "Conciliação de classes ou frente necessária contra a extrema-direita? Os documentos mostram dois blocos, e posições concretas que se cruzam no 2º turno de 2026.",
      nos: ["c-concilia","c-frenteamp","c-fascismo","g-pt","g-pcdob","g-psol","g-pcb","g-pcbr","g-up","g-pstu","g-pco"],
      posicoes: [
        { quem: "PT e PCdoB", ids: ["g-pt","g-pcdob"], texto: "A reeleição de Lula e a derrota da extrema-direita são a tarefa central; as reformas estruturais e o desenvolvimento soberano preparam o caminho ao socialismo." },
        { quem: "PSOL", ids: ["g-psol"], texto: "Apoiou Lula desde o 1º turno de 2022 e cobra mobilização e crítica pontual, como ao marco fiscal. O MES propõe independência com defesa do governo contra a extrema-direita." },
        { quem: "PCB e PCBR", ids: ["g-pcb","g-pcbr"], texto: "Chamam o governo de conciliação de classes (PCB) ou social-liberal (PCBR) e defendem revolução sem etapas, mas chamaram apoio crítico ou voto em Lula no 2º turno de 2026." },
        { quem: "UP e PCR", ids: ["g-up","g-pcr"], texto: "Oposição de esquerda ao governo, que acusam de conciliação, e luta contra o fascismo." },
        { quem: "PSTU", ids: ["g-pstu"], texto: "Governo capitalista; candidatura própria no 1º turno e voto crítico em Lula no 2º, sem apoio político." },
        { quem: "PCO", ids: ["g-pco"], texto: "Frente ampla fracassou; voto nulo no 2º turno e crítica a quem apoiou Lula." },
        { quem: "Ponto de método", ids: ["c-frenteamp"], texto: "Os rótulos do mapa vêm dos documentos de cada partido. As polêmicas entre partidos estão marcadas como tal, e resultados eleitorais ficam fora até a conferência no TSE." }
      ]
    },
    {
      id: "d-caratrev",
      titulo: "Caráter da revolução brasileira hoje",
      pergunta: "Etapas ou socialismo direto? Os documentos recentes retomam o velho debate sobre a revolução nacional-democrática, a revolução permanente e a transição.",
      nos: ["c-etapa","c-perm","c-nd","c-soberania","c-governoop","g-pcdob","g-pcb","g-pcbr","g-pstu","g-pcr","g-pco","g-psol","g-pt"],
      posicoes: [
        { quem: "PCdoB", ids: ["g-pcdob"], texto: "Novo Projeto Nacional de Desenvolvimento como caminho brasileiro, com democracia popular antes do socialismo." },
        { quem: "PCB e PCBR", ids: ["g-pcb","g-pcbr"], texto: "Revolução socialista sem etapas; autocrítica da estratégia nacional e democrática do PCB de 1960." },
        { quem: "PCR e UP", ids: ["g-pcr","g-up"], texto: "Revolução socialista e governo revolucionário dos trabalhadores, com a UP como instrumento legal de massas." },
        { quem: "PSTU", ids: ["g-pstu"], texto: "Revolução permanente: tarefas democráticas e anti-imperialistas dentro da revolução socialista." },
        { quem: "PCO", ids: ["g-pco"], texto: "Governo operário; eleições como tribuna." },
        { quem: "PT e PSOL", ids: ["g-pt","g-psol"], texto: "Socialismo como horizonte: radicalmente democrático e sustentável (PT) ou ecossocialista e democrático (PSOL), por reformas e acúmulo de forças." }
      ]
    }
  );
})();
