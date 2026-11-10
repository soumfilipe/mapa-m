/* ------------------------------------------------------------------
   NÚCLEO MARX E ENGELS + EIXOS ANÁLISE / ESTRATÉGIA
   Estende MAPA (carregue depois de data.js).

   eixos: classifica conceitos e obras em
     "a" = análise      (descreve ou explica como a realidade funciona;
                         pode ser testada contra fatos e revista)
     "e" = estratégia   (prescreve o que fazer: partido, alianças, via ao poder)
     "m" = ponte        (análise com implicação estratégica direta)
   Autores, movimentos e eventos não têm eixo.

   Relações novas:
     fundamenta  = uma análise sustenta uma escolha estratégica
                   (se ela cair, a estratégia perde o apoio, mas pode
                    sobreviver por outras razões)
     complementa = atualiza, amplia ou corrige um conceito anterior
------------------------------------------------------------------- */
(function () {
  "use strict";
  const M = MAPA;

  M.kinds.fundamenta = { chip: "Fundamenta", label: "fundamenta", rev: "fundamentado em", color: "#ffb86b", dash: "" };
  M.kinds.complementa = { chip: "Complementa", label: "complementa / atualiza", rev: "complementado por", color: "#8fd3ff", dash: "10 3" };

  /* relações já existentes que, em rigor, são "análise → estratégia" */
  M.edges.forEach((e) => {
    if (e[0] === "c-imp" && (e[1] === "c-elo" || e[1] === "c-autod") && e[2] === "infl") e[2] = "fundamenta";
  });

  M.eixoInfo = {
    a: { label: "Análise", desc: "explica como a realidade funciona; pode ser testada e revista com novos dados." },
    e: { label: "Estratégia", desc: "prescreve o que fazer politicamente; depende de análise, mas também de valores e de escolhas." },
    m: { label: "Ponte", desc: "análise com implicação estratégica direta; é onde diagnóstico e decisão mais se confundem." }
  };

  /* ---------------- NÓS NOVOS ---------------- */
  const NOVOS = [
    /* autores */
    ["p-engels","person","Friedrich Engels",1845,"Parceiro intelectual e financiador de Marx. Autor de A Situação da Classe Trabalhadora na Inglaterra (1845), do Anti-Dühring (1878) e de A Origem da Família (1884). Editou os Livros II (1885) e III (1894) de O Capital. Sua sistematização é fonte e alvo de debate: continuidade ou deformação de Marx?",0],
    ["p-bakunin","person","Mikhail Bakunin",1872,"Anarquista russo. Disputa com Marx na I Internacional sobre Estado, partido e ditadura; é expulso no Congresso de Haia (1872). Referência da crítica libertária ao marxismo de Estado.",0],

    /* movimentos */
    ["g-lc","group","Liga dos Comunistas",1847,"Organização para a qual Marx e Engels redigem o Manifesto (1848). Dissolvida em 1852, após o julgamento de Colônia.",0],
    ["g-ait","group","I Internacional (AIT)",1864,"Associação Internacional dos Trabalhadores, fundada em Londres. Marx redige o Discurso Inaugural e os estatutos. Cisão com os anarquistas em 1872; encerrada formalmente em 1876.",0],

    /* evento */
    ["e-1848","event","Revoluções de 1848",1848,"Ondas revolucionárias na Europa. Marx e Engels as analisam em As Lutas de Classes na França e em O 18 Brumário.",0],

    /* obras de Marx e Engels */
    ["w-manuscritos","work","Manuscritos Econômico-Filosóficos",1844,"Marx sobre o trabalho alienado: o trabalhador se aliena do produto, da atividade, do gênero humano e dos outros. Só publicados em 1932, o que alimentou leituras humanistas do marxismo.",0],
    ["w-engels-cond","work","A Situação da Classe Trabalhadora na Inglaterra",1845,"Engels descreve a vida operária em Manchester com base em observação direta. Reforça o interesse de Marx pela economia política.",0],
    ["w-ideologia","work","A Ideologia Alemã",1846,"Marx e Engels formulam o materialismo histórico: a consciência é determinada pela vida material e a história é sucessão de modos de produção e de lutas de classes. Manuscrito inédito em vida (publicado em 1932).",0],
    ["w-manifesto","work","Manifesto Comunista",1848,"Programa da Liga dos Comunistas: história como luta de classes, polarização entre burguesia e proletariado, comunistas como a parte mais decidida do movimento operário e medidas de transição.",0],
    ["w-lutasclasse","work","As Lutas de Classes na França (1848–1850)",1850,"Marx analisa a revolução de 1848 na França como luta entre frações de classe. Ganha em 1895 uma Introdução de Engels, muito disputada.",0],
    ["w-18brum","work","O 18 Brumário de Luís Bonaparte",1852,"Marx explica como o golpe de Napoleão III foi possível: empate entre classes e Estado com relativa autonomia (bonapartismo).",0],
    ["w-prefacio","work","Prefácio de 1859 (Contribuição à Crítica da Economia Política)",1859,"Formulação clássica do materialismo histórico: forças produtivas e relações de produção, base e superestrutura, e épocas de revolução social quando as relações travam as forças.",0],
    ["w-capital","work","O Capital (Livro I)",1867,"Análise da mercadoria, do valor, da mais-valia, da acumulação e do fetichismo. Marx publica o Livro I; Engels edita os Livros II e III.",0],
    ["w-antidu","work","Anti-Dühring",1878,"Engels expõe de forma sistemática filosofia, economia e socialismo. Contém a fórmula de que o Estado “definha” em vez de ser abolido por decreto; Lenin a cita extensamente.",0],
    ["w-zasulitch","work","Carta a Vera Zasulitch",1881,"Marx responde (com vários esboços) sobre a comuna rural russa: limita ao Ocidente a análise de O Capital e admite que a comuna poderia servir de ponto de apoio à regeneração social se houvesse revolução complementar no Ocidente.",0],
    ["w-dialnat","work","Dialética da Natureza",1883,"Engels (escrita entre 1873 e 1883; publicada em 1925) estende a dialética à natureza. Alvo de críticas do marxismo ocidental e fonte do “materialismo dialético” soviético.",0],
    ["w-origem","work","A Origem da Família, da Propriedade Privada e do Estado",1884,"Engels, a partir de notas de Marx sobre Morgan: o Estado surge com a divisão em classes e serve à classe economicamente dominante.",0],
    ["w-cartabloch","work","Carta a Joseph Bloch (Engels)",1890,"Engels: a economia determina a história apenas “em última instância”; política, direito e ideias reagem e influem. Critica leituras economicistas atribuídas a Marx.",0],
    ["w-engels1895","work","Introdução de 1895 a As Lutas de Classes na França",1895,"Último grande texto político de Engels: reconhece o peso do sufrágio universal e a mudança da técnica militar contra a barricada. Foi lido pela social-democracia como aval à via legal; Engels protestou em carta a Kautsky contra uma edição que o apresentava como defensor da legalidade a todo custo.",0],
    ["w-acumulacao","work","A Acumulação do Capital (Luxemburgo)",1913,"Luxemburgo sustenta que o capitalismo precisa de espaços não capitalistas para realizar a mais-valia e liga isso ao imperialismo. Polêmica com os esquemas de reprodução de Marx e com outros marxistas.",0],
    ["w-hcc","work","História e Consciência de Classe",1923,"Lukács desenvolve a reificação a partir do fetichismo da mercadoria e restringe a dialética à história e à sociedade, criticando a extensão à natureza.",0],

    /* conceitos — análise */
    ["c-matdial","concept","Materialismo histórico",1846,"A produção da vida material condiciona a organização social e as ideias; a história é sequência de modos de produção. É método de análise, não programa político.",0],
    ["c-lutaclasses","concept","Luta de classes",1848,"O conflito em torno da apropriação do excedente move a mudança histórica. Marx (carta a Weydemeyer, 1852) diz que não descobriu as classes nem sua luta; sua contribuição foi ligá-las a fases da produção e à ditadura do proletariado.",0],
    ["c-modoprod","concept","Forças produtivas e relações de produção",1859,"A contradição entre o desenvolvimento das forças produtivas e as relações sociais que as organizam abre épocas de transformação.",0],
    ["c-basesuper","concept","Base e superestrutura",1859,"Metáfora segundo a qual a estrutura econômica condiciona direito, política e cultura. Muito debatida: determinismo ou condicionamento?",0],
    ["c-instancia","concept","Determinação em última instância",1890,"Engels (cartas de 1890): a economia é decisiva só em última instância; política, direito e ideias têm ação recíproca. Ponte para Gramsci, Poulantzas e a crítica ao economicismo.",0],
    ["c-valor","concept","Teoria do valor-trabalho",1867,"O valor das mercadorias deriva do trabalho socialmente necessário, base da mais-valia. Debate permanente, por exemplo, sobre o “problema da transformação” (valores em preços).",0],
    ["c-maisvalia","concept","Mais-valia e exploração",1867,"O lucro vem do trabalho excedente não pago: o trabalhador cria mais valor do que recebe em salário. Núcleo da análise da exploração em O Capital.",0],
    ["c-acumulacao","concept","Acumulação, concentração e crises",1867,"O capital tende a acumular, concentrar-se e entrar em crises periódicas. As causas são disputadas (queda tendencial da taxa de lucro, desproporções, subconsumo, realização).",0],
    ["c-alienacao","concept","Alienação e fetichismo da mercadoria",1844,"Nas relações capitalistas, as relações entre pessoas aparecem como relações entre coisas, e o trabalhador se separa do produto de seu trabalho.",0],
    ["c-reific","concept","Reificação",1923,"Lukács generaliza o fetichismo: a lógica da mercadoria penetra a consciência, o direito e a cultura, e naturaliza o que é social.",0],
    ["c-ideologia","concept","Ideologia",1846,"As ideias dominantes tendem a ser as da classe dominante; a consciência é produto social. Gramsci amplia com hegemonia.",0],
    ["c-estadoclasse","concept","Estado como instrumento de classe",1848,"O Estado moderno aparece como comitê de negócios comuns da burguesia (Manifesto) e como produto do antagonismo de classes (Engels, A Origem).",0],
    ["c-bonap","concept","Autonomia relativa do Estado (bonapartismo)",1852,"Quando as classes se equilibram, o Estado pode parecer pairar acima delas. Ponto de partida de teorias sobre autonomia relativa (Gramsci, Poulantzas).",0],
    ["c-dialnat","concept","Dialética da natureza",1883,"Extensão da dialética a processos naturais (Engels). Divide marxistas: continuidade necessária ou deslize metafísico?",0],
    ["c-diamat","concept","Materialismo dialético (diamat)",1938,"Doutrina filosófica oficial soviética, sistematizada sob Stalin, com base em Engels, e imposta como visão de mundo do marxismo-leninismo.",0],

    /* conceitos — ponte / estratégia */
    ["c-fases","concept","Fases do comunismo",1875,"Na Crítica do Programa de Gotha: um período de transição, uma fase inferior (retribuição pelo trabalho) e uma superior (a cada um segundo suas necessidades). Lenin usa isso em O Estado e a Revolução.",0],
    ["c-extincao","concept","Extinção do Estado",1878,"Engels: com o fim das classes o Estado se torna supérfluo e “definha”; não é abolido por decreto. Contraponto ao anarquismo e base de O Estado e a Revolução.",0],
    ["c-autoemanc","concept","Autoemancipação da classe",1864,"Estatutos da I Internacional: a emancipação dos trabalhadores deve ser obra dos próprios trabalhadores. Invocada contra a vanguarda substitucionista, e também reinterpretada por quem a vê compatível com organização partidária.",0],
    ["c-avanco","concept","Comunistas como setor avançado",1848,"O Manifesto diz que os comunistas não formam um partido à parte frente aos outros partidos operários, mas são sua parte mais decidida e esclarecida. Citado em defesa e em crítica da vanguarda.",0],
    ["c-comunarussa","concept","Comuna rural russa e vias não lineares",1881,"A carta a Zasulitch abre a possibilidade de caminhos que não repetem o ocidente. Leituras recentes (por exemplo, Kevin Anderson, 2010) usam isso contra a imagem de um Marx linear e eurocêntrico.",0],
    ["c-irlanda","concept","Opressão nacional e classe operária (Irlanda)",1870,"Em 1869–70 Marx conclui que a opressão da Irlanda divide a classe operária inglesa e que libertar a Irlanda é condição da emancipação dos trabalhadores ingleses.",0]
  ];
  NOVOS.forEach((n) => M.nodes.push(n));

  /* ---------------- EIXOS (análise / ponte / estratégia) ---------------- */
  M.eixos = {
    /* conceitos existentes */
    "c-reforma":"e","c-vanguarda":"e","c-consc":"m","c-espont":"m","c-aliança":"e","c-perm":"m","c-cent":"e",
    "c-autod":"e","c-sitrev":"m","c-imp":"a","c-elo":"m","c-quebrar":"e","c-dit":"m","c-soviet":"e","c-tatica":"e",
    "c-frente":"e","c-1pais":"e","c-etapa":"m","c-hegem":"m","c-guerrapos":"e","c-estampl":"a","c-burocracia":"a",
    "c-gpp":"e","c-nd":"m","c-viapac":"e","c-feud":"a","c-foco":"e","c-guerrurb":"e","c-dep":"a","c-subimp":"a",
    "c-rb":"a","c-demuv":"e","c-prec":"a",
    /* obras existentes */
    "w-marxguerra":"m","w-marxgotha":"m","w-reformaourev":"m","w-bernstein":"m","w-que":"e","w-orgquest":"e",
    "w-duas":"e","w-imp":"a","w-teses":"e","w-estado":"m","w-renegado":"e","w-kautskyditadura":"e","w-luxrr":"m",
    "w-esq":"e","w-lukacs":"a","w-stalin-fund":"e","w-gramsci":"m","w-trot-perm":"m","w-trot-hist":"a",
    "w-trot-traida":"a","w-mao":"e","w-mao-nd":"m","w-pcb58":"e","w-guevara":"e","w-sodre":"a","w-caio":"m",
    "w-debray":"e","w-marig":"e","w-fhc":"a","w-marini":"a","w-flo":"a","w-poul":"m","w-gor":"a","w-cnc":"e","w-antunes":"a",
    /* conceitos novos */
    "c-matdial":"a","c-lutaclasses":"a","c-modoprod":"a","c-basesuper":"a","c-instancia":"a","c-valor":"a",
    "c-maisvalia":"a","c-acumulacao":"a","c-alienacao":"a","c-reific":"a","c-ideologia":"a","c-estadoclasse":"a",
    "c-bonap":"a","c-dialnat":"a","c-diamat":"a","c-fases":"m","c-extincao":"m","c-autoemanc":"e","c-avanco":"e",
    "c-comunarussa":"m","c-irlanda":"m",
    /* obras novas */
    "w-manuscritos":"a","w-engels-cond":"a","w-ideologia":"a","w-manifesto":"m","w-lutasclasse":"a","w-18brum":"a",
    "w-prefacio":"a","w-capital":"a","w-antidu":"m","w-zasulitch":"m","w-dialnat":"a","w-origem":"a","w-cartabloch":"a",
    "w-engels1895":"m","w-acumulacao":"a","w-hcc":"a"
  };

  /* ids destacados em "Marx e Engels" */
  const FORA = new Set(["p-bakunin","w-acumulacao","w-hcc","c-reific","c-diamat"]);
  M.marxIds = NOVOS.map((n) => n[0]).filter((id) => !FORA.has(id)).concat(["p-marx", "w-marxguerra", "w-marxgotha", "e-comuna"]);

  /* ---------------- RELAÇÕES NOVAS ---------------- */
  const E = [
    /* autoria */
    ["p-marx","w-manuscritos","autor"],["p-marx","w-ideologia","autor"],["p-marx","w-manifesto","autor"],["p-marx","w-lutasclasse","autor"],
    ["p-marx","w-18brum","autor"],["p-marx","w-prefacio","autor"],["p-marx","w-capital","autor"],["p-marx","w-zasulitch","autor"],
    ["p-engels","w-engels-cond","autor"],["p-engels","w-ideologia","autor"],["p-engels","w-manifesto","autor"],["p-engels","w-antidu","autor"],
    ["p-engels","w-origem","autor"],["p-engels","w-dialnat","autor"],["p-engels","w-cartabloch","autor"],["p-engels","w-engels1895","autor"],
    ["p-lux","w-acumulacao","autor"],["p-lukacs","w-hcc","autor"],
    ["p-engels","p-marx","complementa","Parceiro, financiador, editor dos Livros II e III e sistematizador. Se foi continuador ou deformador é debate aberto."],

    /* obras → conceitos */
    ["w-manuscritos","c-alienacao","trata"],["w-capital","c-alienacao","trata","Reaparece como fetichismo da mercadoria."],
    ["w-capital","c-maisvalia","trata"],["w-capital","c-valor","trata"],["w-capital","c-acumulacao","trata"],
    ["w-ideologia","c-matdial","trata"],["w-ideologia","c-ideologia","trata"],
    ["w-manifesto","c-lutaclasses","trata"],["w-manifesto","c-estadoclasse","trata"],["w-manifesto","c-avanco","trata"],
    ["w-prefacio","c-modoprod","trata"],["w-prefacio","c-basesuper","trata"],["w-prefacio","c-matdial","trata"],
    ["w-lutasclasse","c-lutaclasses","trata"],["w-18brum","c-bonap","trata"],
    ["w-origem","c-estadoclasse","trata"],["w-antidu","c-extincao","trata"],["w-dialnat","c-dialnat","trata"],
    ["w-cartabloch","c-instancia","trata"],["w-zasulitch","c-comunarussa","trata"],["w-marxgotha","c-fases","trata"],
    ["w-acumulacao","c-acumulacao","trata"],["w-hcc","c-reific","trata"],
    ["w-engels1895","c-reforma","infl","Usada por Bernstein e Kautsky para legitimar a via legal. Lenin acusa Kautsky de distorcer Engels."],
    ["w-estado","c-fases","trata","Lenin retoma a distinção entre fase inferior e superior."],

    /* pessoas → conceitos */
    ["p-marx","c-matdial","trata"],["p-marx","c-maisvalia","trata"],["p-marx","c-lutaclasses","trata"],
    ["p-marx","c-quebrar","trata","No prefácio de 1872 ao Manifesto, Marx diz que a Comuna mostrou que a classe operária não pode simplesmente tomar a máquina estatal pronta."],
    ["p-engels","c-extincao","trata"],["p-engels","c-instancia","trata"],["p-engels","c-dialnat","trata"],
    ["p-engels","c-dit","trata","Na Introdução de 1891 à Guerra Civil na França, Engels aponta a Comuna como exemplo da ditadura do proletariado."],
    ["p-engels","c-estadoclasse","trata"],
    ["p-lukacs","c-reific","trata"],["p-marx","g-lc","infl"],["p-marx","g-ait","infl"],
    ["p-bakunin","g-ait","contexto","A disputa leva à cisão de 1872."],

    /* encadeamentos Marx/Engels → o resto do mapa */
    ["p-marx","p-lenin","infl","Lenin se apresenta como continuador de Marx, em disputa com a leitura da II Internacional."],
    ["w-antidu","w-estado","infl","Lenin cita extensamente a passagem sobre o definhamento do Estado."],
    ["w-origem","w-estado","infl"],
    ["c-extincao","c-quebrar","fundamenta","Lenin: após quebrar o aparelho, o novo poder se extingue gradualmente."],
    ["c-extincao","c-dit","complementa","A ditadura do proletariado é entendida como fase que prepara a extinção do Estado."],
    ["c-estadoclasse","c-quebrar","fundamenta","Se o Estado é instrumento de classe, a transição exige outro poder de classe, e não apenas ocupar o aparelho."],
    ["c-estadoclasse","c-dit","fundamenta"],
    ["c-estampl","c-estadoclasse","complementa","Gramsci amplia: o Estado inclui a sociedade civil e o consenso, e não apenas coerção."],
    ["c-estampl","c-guerrapos","fundamenta","Se o Estado inclui a sociedade civil, a luta é por hegemonia (guerra de posição)."],
    ["p-poul","c-estadoclasse","critica","Vê a leitura instrumentalista como simplificadora: o Estado condensa relações de força entre classes."],
    ["c-bonap","c-estampl","complementa","A autonomia relativa abre caminho à teoria do Estado ampliado."],
    ["c-bonap","c-burocracia","infl","Trotsky usa analogias bonapartistas para o regime estalinista."],
    ["c-instancia","c-basesuper","complementa","Engels corrige leituras economicistas: a superestrutura reage."],
    ["c-instancia","c-hegem","complementa","A ação recíproca da superestrutura abre espaço para pensar hegemonia."],
    ["c-ideologia","c-hegem","complementa"],
    ["c-modoprod","c-etapa","fundamenta","A ideia de estágios sucessivos de produção alimenta o etapismo. Leituras mecanicistas são contestadas, inclusive pelo Marx tardio."],
    ["c-modoprod","c-basesuper","trata"],
    ["c-lutaclasses","c-modoprod","trata"],
    ["c-maisvalia","c-valor","fundamenta"],
    ["c-maisvalia","c-dep","infl","Marini: superexploração como forma específica de extração de mais-valia na periferia."],
    ["c-maisvalia","c-prec","infl","Antunes retoma a exploração para analisar o trabalho contemporâneo."],
    ["c-acumulacao","c-imp","infl","Concentração e crise explicam monopólios, capital financeiro e expansão externa."],
    ["c-acumulacao","c-sitrev","fundamenta","A crise do capital cria o terreno, mas não decide o desfecho político: isso depende de organização e escolha."],
    ["c-feud","c-etapa","fundamenta","Se há resquícios feudais, justifica-se uma etapa democrática com aliança de classes (tese do PCB)."],
    ["w-acumulacao","c-imp","infl","Luxemburgo liga imperialismo à necessidade de mercados não capitalistas."],
    ["p-lux","c-acumulacao","complementa","Propõe explicação alternativa para a crise e a expansão. Foi criticada por vários marxistas."],
    ["c-alienacao","c-reific","complementa"],
    ["c-reific","c-ideologia","complementa","Lukács traz o fetichismo para a teoria da consciência."],
    ["c-dialnat","c-diamat","infl"],
    ["g-estal","c-diamat","trata"],
    ["w-hcc","c-dialnat","critica","Restringe a dialética à sociedade; vê a extensão à natureza como equívoco de Engels."],
    ["p-lukacs","c-dialnat","critica"],

    /* estratégia: partido e autoemancipação */
    ["g-ait","c-autoemanc","contexto"],
    ["c-autoemanc","c-vanguarda","critica","Tensão destacada por leitores: autoemancipação versus vanguarda. Defensores veem as duas compatíveis."],
    ["c-autoemanc","c-espont","complementa","Luxemburgo reivindica a autoemancipação contra o centralismo bolchevique."],
    ["c-avanco","c-vanguarda","infl","O Manifesto fala em setor mais decidido, não em partido separado. Lenin radicaliza com revolucionários profissionais."],
    ["g-lc","c-avanco","contexto"],
    ["p-bakunin","c-dit","critica","Alerta que uma ditadura “transitória” criaria nova camada dirigente."],
    ["p-bakunin","c-extincao","critica","O Estado não definha sozinho: deve ser abolido de imediato."],

    /* Marx tardio, periferia e nação */
    ["c-comunarussa","c-etapa","critica","Relativiza a ideia de que todo país deve passar pelas mesmas etapas."],
    ["c-comunarussa","c-elo","infl","Antecipa que a ruptura pode vir fora do centro. Lenin e os populistas leram a carta de formas distintas."],
    ["c-irlanda","c-autod","infl","A opressão nacional como obstáculo à unidade da classe operária."],

    /* contexto histórico */
    ["e-1848","w-manifesto","contexto"],["e-1848","w-lutasclasse","contexto"],["e-1848","w-18brum","contexto"],
    ["e-comuna","g-ait","contexto","A Comuna é saudada pela Internacional e agrava as divisões internas."]
  ];
  E.forEach((e) => M.edges.push(e));

  /* ---------------- DEBATES NOVOS ---------------- */
  M.debates.push(
    {
      id: "d-analise-estrategia",
      titulo: "A análise autoriza a estratégia?",
      pergunta: "Quando um diagnóstico muda, a estratégia muda junto? Ou há uma lacuna entre entender o capitalismo e decidir o que fazer?",
      nos: ["c-feud","c-etapa","c-estadoclasse","c-quebrar","c-estampl","c-guerrapos","c-acumulacao","c-sitrev","c-imp","c-elo","c-dep","w-capital","g-pcb","p-caio"],
      posicoes: [
        { quem: "Tradição leninista", ids: ["p-lenin"], texto: "A análise do imperialismo e do Estado fundamenta a estratégia (elo mais fraco, quebrar o aparelho), mas só a análise concreta da situação decide a tática." },
        { quem: "PCB dos anos 1950–60", ids: ["g-pcb"], texto: "O diagnóstico de resquícios feudais fundamenta a aliança nacional-democrática. Se o diagnóstico cai, a estratégia perde o apoio." },
        { quem: "Caio Prado Jr.", ids: ["p-caio"], texto: "Revê o diagnóstico (capitalismo desde a colônia) e conclui que a etapa democrática perde o sentido." },
        { quem: "Gramsci", ids: ["p-gramsci"], texto: "Estado ampliado fundamenta a guerra de posição: o diagnóstico do Estado orienta a forma da luta." },
        { quem: "Ponto de método", ids: ["c-acumulacao"], texto: "A crise cria terreno, mas não decide o desfecho. Duas pessoas com o mesmo diagnóstico podem divergir sobre o que fazer, e revisar a análise não obriga a trocar a estratégia." }
      ]
    },
    {
      id: "d-engels-marx",
      titulo: "Engels continuou ou deformou Marx?",
      pergunta: "Engels sistematizou e popularizou o marxismo. Para uns, foi a continuação natural; para outros, introduziu determinismo e dialética da natureza.",
      nos: ["p-engels","p-marx","w-antidu","w-dialnat","w-cartabloch","w-hcc","c-dialnat","c-diamat","c-instancia","c-basesuper","p-lukacs","g-estal"],
      posicoes: [
        { quem: "Engels", ids: ["p-engels"], texto: "Sistematiza o método (Anti-Dühring) e amplia a dialética à natureza; em 1890 corrige o economicismo." },
        { quem: "Lukács (1923)", ids: ["p-lukacs"], texto: "Restringe a dialética à história e à sociedade e critica a extensão à natureza." },
        { quem: "Estalinismo", ids: ["g-estal"], texto: "Transforma a dialética da natureza em doutrina oficial (diamat)." },
        { quem: "Engels tardio", ids: ["w-cartabloch"], texto: "Defende que a economia vale só em última instância, aproximando-se de leituras não economicistas." },
        { quem: "Estado atual do debate", ids: ["p-marx"], texto: "Parte da historiografia vê diferenças de ênfase entre os dois; outra defende continuidade. A questão segue aberta." }
      ]
    },
    {
      id: "d-marx-tardio",
      titulo: "Marx tinha uma teoria linear dos estágios?",
      pergunta: "A leitura de que todos os países passam pelas mesmas etapas é de Marx ou de intérpretes posteriores?",
      nos: ["c-modoprod","c-etapa","c-comunarussa","w-zasulitch","c-irlanda","c-autod","c-elo","g-estal","g-comintern","c-perm"],
      posicoes: [
        { quem: "Leitura etapista", ids: ["g-estal"], texto: "Estágios sucessivos como lei geral, aplicada por Comintern e PCs (etapa democrático-burguesa)." },
        { quem: "Carta a Zasulitch", ids: ["w-zasulitch"], texto: "A análise de O Capital vale para o Ocidente; a comuna russa pode ser ponto de apoio, com revolução complementar no Ocidente." },
        { quem: "Irlanda", ids: ["c-irlanda"], texto: "Marx revê a posição sobre opressão nacional e conclui que libertar a Irlanda é condição da emancipação do operariado inglês." },
        { quem: "Releituras recentes", ids: ["c-comunarussa"], texto: "Autores como Kevin Anderson destacam o Marx tardio contra a imagem linear e eurocêntrica." },
        { quem: "Trotsky", ids: ["c-perm"], texto: "Combina etapas: o desenvolvimento desigual e combinado permite saltos, com tarefas democráticas absorvidas pelo poder proletário." }
      ]
    },
    {
      id: "d-crise",
      titulo: "Por que o capitalismo entra em crise?",
      pergunta: "Queda da taxa de lucro, desproporção, subconsumo, realização, financeirização: a explicação muda a política que se segue.",
      nos: ["c-acumulacao","c-maisvalia","c-valor","c-imp","c-dep","c-subimp","w-capital","w-acumulacao","w-imp","p-lux","p-hilf","p-lenin","p-marini"],
      posicoes: [
        { quem: "Marx", ids: ["w-capital"], texto: "Acumulação gera contradições (queda tendencial da taxa de lucro, desproporções); as causas são disputadas." },
        { quem: "Luxemburgo", ids: ["p-lux"], texto: "O capitalismo precisa de espaços não capitalistas para realizar a mais-valia; imperialismo como necessidade." },
        { quem: "Hilferding e Lenin", ids: ["p-hilf","p-lenin"], texto: "Concentração, capital financeiro e monopólios explicam a expansão e a guerra." },
        { quem: "Marini", ids: ["p-marini"], texto: "Na periferia, a troca desigual é compensada por superexploração, o que molda ciclos e dependência." }
      ]
    },
    {
      id: "d-marx-estado",
      titulo: "O que Marx e Engels disseram sobre Estado e transição?",
      pergunta: "Entre a Comuna, o definhamento e o sufrágio universal, o que o par deixou como método e o que deixou como ambiguidade?",
      nos: ["c-estadoclasse","c-bonap","c-quebrar","c-extincao","c-fases","c-dit","c-reforma","w-marxguerra","w-marxgotha","w-antidu","w-origem","w-engels1895","e-comuna","p-marx","p-engels","p-bakunin","p-kautsky","p-bern","p-lenin"],
      posicoes: [
        { quem: "Marx", ids: ["p-marx"], texto: "Estado como poder de classe; a Comuna mostra que a máquina estatal pronta não serve (prefácio de 1872 ao Manifesto)." },
        { quem: "Engels", ids: ["p-engels"], texto: "Estado definha com o fim das classes (Anti-Dühring); a Comuna é a ditadura do proletariado (1891)." },
        { quem: "Engels 1895", ids: ["w-engels1895"], texto: "Reconhece o sufrágio e a mudança militar contra a barricada. Disputa de leitura entre reformistas, Lenin e o próprio Engels." },
        { quem: "Bakunin", ids: ["p-bakunin"], texto: "Rejeita o Estado transitório como risco de nova dominação." },
        { quem: "Lenin", ids: ["p-lenin"], texto: "Síntese em O Estado e a Revolução: quebrar, instaurar poder dos sovietes e deixar o Estado se extinguir." },
        { quem: "Kautsky e Bernstein", ids: ["p-kautsky","p-bern"], texto: "Leem Engels como respaldo da via parlamentar." }
      ]
    }
  );
})();
