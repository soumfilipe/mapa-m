/* ------------------------------------------------------------------
   DADOS DO MAPA — edite aqui para ampliar ou corrigir.

   nodes: [id, tipo, rótulo, ano, resumo, brasil(1/0)]
     ano = marco principal (obra, fundação ou formulação), não nascimento.
   edges: [origem, destino, tipo_da_relação, nota opcional]
   debates: perguntas em disputa, com posições e nós a destacar.

   Os resumos são material de apoio para estudo, não substituem as
   fontes primárias. Revise datas e interpretações antes de publicar.
------------------------------------------------------------------- */
const MAPA = {
  types: {
    concept: { label: "Conceito", color: "#c4a7ff" },
    work:    { label: "Obra",     color: "#ffd98a" },
    person:  { label: "Autor",    color: "#7fe3cc" },
    group:   { label: "Movimento / organização", color: "#ff9ec0" },
    event:   { label: "Evento",   color: "#93c8ff" }
  },

  kinds: {
    autor:    { chip: "Autoria",   label: "escreveu",              rev: "escrito por",          color: "#6f6a85", dash: "" },
    trata:    { chip: "Trata de",  label: "trata de",              rev: "tratado em",           color: "#8d87ac", dash: "" },
    infl:     { chip: "Influência",label: "influencia",            rev: "influenciado por",     color: "#c4a7ff", dash: "" },
    critica:  { chip: "Crítica",   label: "critica / discorda de", rev: "criticado por",        color: "#ff8f8f", dash: "7 4" },
    contexto: { chip: "Contexto",  label: "é contexto de",         rev: "tem como contexto",    color: "#6fd6c4", dash: "2 3" }
  },

  nodes: [
    /* ---------- EVENTOS ---------- */
    ["e-comuna","event","Comuna de Paris",1871,"Governo operário que durou semanas. Marx a lê como prova de que a classe trabalhadora não pode simplesmente se apossar da máquina de Estado pronta. Lenin retoma essa lição em 1917.",0],
    ["e-1905","event","Revolução de 1905",1905,"Greves, motins e os primeiros sovietes na Rússia. Laboratório de Duas Táticas e da revolução permanente de Trotsky.",0],
    ["e-1914","event","Guerra de 1914 e colapso da II Internacional",1914,"A maioria dos partidos social-democratas apoia seus governos na guerra. Lenin lê isso como falência do oportunismo e eixo da ruptura com Kautsky.",0],
    ["e-1917","event","Revoluções de 1917",1917,"Fevereiro derruba o czar; Outubro leva os bolcheviques ao poder apoiados nos sovietes. Origem da experiência que o leninismo tenta generalizar.",0],
    ["e-alema","event","Revolução Alemã",1918,"Lenin contava com a revolução europeia, sobretudo a alemã, para socorrer a Rússia isolada. Foi derrotada em 1919, com o assassinato de Luxemburgo e Liebknecht.",0],
    ["e-com2","event","II Congresso da Comintern",1920,"Aprova as 21 condições de admissão e as teses sobre a questão nacional e colonial, que propõem aliança com movimentos de libertação nacional.",0],
    ["e-china","event","Revolução Chinesa",1949,"Vitória comunista num país de maioria camponesa, sob liderança de Mao. Desloca o centro de gravidade do marxismo para o campo e para o Sul global.",0],
    ["e-cuba","event","Revolução Cubana",1959,"Guerrilha vitoriosa fora da linha dos partidos comunistas tradicionais. Alimenta a teoria do foco e as dissidências armadas latino-americanas.",0],
    ["e-64","event","Golpe de 1964",1964,"Interrompe as reformas de base e desmoraliza a aposta do PCB numa aliança com a burguesia nacional. Abre o debate entre via pacífica e luta armada.",1],

    /* ---------- MOVIMENTOS / ORGANIZAÇÕES ---------- */
    ["g-ii","group","II Internacional",1889,"Federação de partidos socialistas e operários. Kautsky era seu principal teórico; a adesão à guerra em 1914 a desagrega.",0],
    ["g-bolch","group","Bolcheviques",1903,"Facção do POSDR liderada por Lenin após a cisão de 1903. Partido de revolucionários profissionais que toma o poder em 1917.",0],
    ["g-mench","group","Mencheviques",1903,"Facção minoritária (de nome) do POSDR, com Mártov. Defende partido mais aberto e, em geral, que a Rússia passe antes por uma revolução burguesa.",0],
    ["g-comintern","group","Internacional Comunista (Comintern)",1919,"Fundada para reunir os partidos que romperam com a social-democracia. Impõe disciplina centralizada e linhas táticas comuns; dissolvida em 1943.",0],
    ["g-estal","group","Estalinismo / marxismo-leninismo",1924,"Codificação do leninismo como doutrina de Estado sob Stalin: socialismo num só país, etapismo para países atrasados, partido-Estado. “Marxismo-leninismo” é o nome dessa doutrina.",0],
    ["g-trot","group","Trotskismo",1938,"Corrente que defende a revolução permanente, o internacionalismo e a crítica à burocracia soviética. IV Internacional fundada em 1938.",0],
    ["g-mao","group","Maoísmo",1937,"Adapta o leninismo a um país camponês: guerra popular prolongada, “nova democracia”, papel central do campesinato.",0],
    ["g-euro","group","Eurocomunismo",1976,"Nos anos 1970, PCs italiano, espanhol e francês (em graus diversos) aceitam pluralismo e eleições e se distanciam de Moscou. Forte influência de Gramsci.",0],
    ["g-pcb","group","PCB",1922,"Fundado em 1922 e filiado à Comintern; o nome passa a “Brasileiro” em 1961. Adota a revolução nacional-democrática. Em 1992 a maioria se transforma em PPS e um grupo reconstrói o PCB.",1],
    ["g-pcdob","group","PCdoB",1962,"Surge de cisão do PCB em 1962, com crítica à desestalinização. Tradição maoísta na origem; organiza a Guerrilha do Araguaia (1967–74). Hoje atua na via eleitoral.",1],
    ["g-aln","group","ALN",1968,"Ação Libertadora Nacional, fundada por Carlos Marighella após romper com o PCB. Prega a luta armada urbana contra a ditadura.",1],
    ["g-pt","group","PT",1980,"Partido dos Trabalhadores. Reúne sindicalismo, setores católicos de base e correntes marxistas diversas. A estratégia dominante é eleitoral e institucional.",1],
    ["g-mst","group","MST",1984,"Movimento dos Trabalhadores Rurais Sem Terra. Movimento camponês com forte formação política de inspiração marxista e foco na reforma agrária.",1],
    ["g-pstu","group","PSTU",1994,"Partido trotskista de origem morenista; nasce da Convergência Socialista, expulsa do PT em 1992.",1],
    ["g-pco","group","PCO",1995,"Partido da Causa Operária. Origem trotskista, a partir da tendência Causa Operária, que deixou o PT no início dos anos 1990.",1],

    /* ---------- AUTORES ---------- */
    ["p-marx","person","Karl Marx",1848,"Autor do Manifesto (1848) e de O Capital. Fonte das ideias de ditadura do proletariado e de ruptura com o Estado burguês, relidas por Lenin.",0],
    ["p-lenin","person","Lenin",1902,"Vladimir Ilitch Uliánov (1870–1924). Teórico e dirigente bolchevique. Contribuições centrais: teoria do partido, do imperialismo e do Estado.",0],
    ["p-kautsky","person","Karl Kautsky",1909,"Principal teórico da II Internacional. Defende a ortodoxia contra Bernstein, mas rejeita a Revolução de Outubro como ditadura de partido.",0],
    ["p-bern","person","Eduard Bernstein",1899,"Revisionismo clássico: o capitalismo se transformaria por reformas, e o movimento valeria mais que o “objetivo final”. Alvo de Kautsky e Luxemburgo.",0],
    ["p-mart","person","Iúli Mártov",1903,"Líder menchevique. Sua fórmula para a filiação partidária (mais ampla) vence a de Lenin em 1903 e motiva a cisão.",0],
    ["p-lux","person","Rosa Luxemburgo",1899,"Marxista polonesa-alemã. Combate o reformismo, mas defende espontaneidade e democracia das massas contra o centralismo bolchevique.",0],
    ["p-trot","person","Leon Trotsky",1906,"Presidiu o Soviete de São Petersburgo em 1905 e dirigiu a insurreição de Outubro. Formula a revolução permanente e critica a burocracia estalinista.",0],
    ["p-stalin","person","Josef Stalin",1924,"Sucessor de Lenin. Sistematiza o “marxismo-leninismo”, o socialismo num só país e a disciplina de partido-Estado.",0],
    ["p-mao","person","Mao Tsé-tung",1937,"Líder do PC chinês. Adapta o leninismo ao campesinato com a guerra popular prolongada e a nova democracia.",0],
    ["p-gramsci","person","Antonio Gramsci",1930,"Marxista italiano preso pelo fascismo. Nos Cadernos do Cárcere reelabora o leninismo para o Ocidente: hegemonia, guerra de posição, Estado ampliado.",0],
    ["p-lukacs","person","György Lukács",1924,"Autor de História e Consciência de Classe (1923) e de um estudo sobre Lenin (1924), que o lê como teórico da “atualidade da revolução”.",0],
    ["p-hilf","person","Rudolf Hilferding",1910,"Autor de O Capital Financeiro (1910): fusão de bancos e indústria. Fonte direta da análise leninista do imperialismo.",0],
    ["p-hobson","person","J. A. Hobson",1902,"Economista liberal inglês. Em Imperialismo: um estudo (1902) liga a expansão colonial a excesso de capital e subconsumo. Lenin o usa criticamente.",0],
    ["p-guevara","person","Che Guevara",1960,"Médico argentino e dirigente da Revolução Cubana. Em A Guerra de Guerrilhas defende que focos rurais podem criar as condições da revolução.",0],
    ["p-debray","person","Régis Debray",1967,"Em Revolução na Revolução? sistematiza a teoria do foco e opõe a guerrilha ao partido tradicional.",0],
    ["p-marig","person","Carlos Marighella",1969,"Dirigente do PCB que rompe em 1967 e funda a ALN. Autor do Manual do Guerrilheiro Urbano. Morto pela repressão em 1969.",1],
    ["p-caio","person","Caio Prado Jr.",1966,"Historiador marxista. Em A Revolução Brasileira questiona a tese de resquícios feudais e a aliança com a burguesia nacional.",1],
    ["p-flo","person","Florestan Fernandes",1974,"Sociólogo. Em A Revolução Burguesa no Brasil argumenta que a burguesia brasileira é autocrática e dependente, sem vocação democrática clássica.",1],
    ["p-marini","person","Ruy Mauro Marini",1973,"Principal nome da teoria marxista da dependência. Formula superexploração do trabalho e subimperialismo.",1],
    ["p-astro","person","Astrojildo Pereira",1922,"Ex-anarquista, fundador e primeiro secretário-geral do PCB.",1],
    ["p-prestes","person","Luís Carlos Prestes",1925,"Líder da Coluna Prestes (1925–27). Adere ao comunismo, preside a ANL em 1935 e lidera o PCB por décadas.",1],
    ["p-cnc","person","Carlos Nelson Coutinho",1979,"Filósofo gramsciano. Em A Democracia como Valor Universal (1979) desloca a ditadura do proletariado e propõe estratégia de ampliação democrática.",1],
    ["p-poul","person","Nicos Poulantzas",1978,"Teórico do Estado. Em O Estado, o Poder, o Socialismo (1978) vê o Estado como condensação de relações de força e propõe uma via democrática ao socialismo.",0],
    ["p-antunes","person","Ricardo Antunes",2018,"Sociólogo do trabalho. Fala em “classe-que-vive-do-trabalho”, informalidade e uberização como nova morfologia do trabalho.",1],
    ["p-sodre","person","Nelson Werneck Sodré",1962,"Historiador próximo do PCB. Defende a presença de resquícios feudais na estrutura agrária, base da aliança nacional-democrática.",1],
    ["p-gor","person","Jacob Gorender",1978,"Ex-PCB e ex-PCBR. Em O Escravismo Colonial propõe um modo de produção específico, nem feudal nem simplesmente capitalista.",1],
    ["p-fhc","person","F. H. Cardoso",1969,"Com Enzo Faletto, em Dependência e Desenvolvimento na América Latina (1969), propõe a via da dependência associada, polo oposto ao de Marini.",1],

    /* ---------- OBRAS ---------- */
    ["w-marxguerra","work","A Guerra Civil na França",1871,"Texto de Marx sobre a Comuna: a classe operária não pode apenas tomar a máquina estatal pronta e usá-la para seus fins.",0],
    ["w-marxgotha","work","Crítica do Programa de Gotha",1875,"Carta de Marx que fala em período de transição e em ditadura do proletariado. Fonte textual para a tese leninista.",0],
    ["w-reformaourev","work","Reforma Social ou Revolução?",1899,"Luxemburgo contra Bernstein: sem luta pelo poder, reformas não mudam a natureza do capitalismo.",0],
    ["w-bernstein","work","Pressupostos do Socialismo",1899,"Texto de Bernstein que dá origem ao “revisionismo”. Defende a via reformista e parlamentar.",0],
    ["w-que","work","Que Fazer?",1902,"Lenin: o movimento operário espontâneo gera consciência sindical; a consciência socialista exige um partido de revolucionários profissionais.",0],
    ["w-orgquest","work","Questões de Organização da Social-Democracia Russa",1904,"Luxemburgo critica o “ultracentralismo” de Lenin e defende que o partido seja corrigido pela experiência das massas.",0],
    ["w-duas","work","Duas Táticas da Social-Democracia",1905,"Lenin prevê, para a Rússia, uma ditadura democrático-revolucionária de operários e camponeses, sem liderança da burguesia liberal.",0],
    ["w-imp","work","Imperialismo, Fase Superior do Capitalismo",1916,"Lenin: monopólios, capital financeiro, exportação de capital e partilha do mundo explicam a guerra e a possibilidade de ruptura na periferia.",0],
    ["w-teses","work","Teses de Abril",1917,"Ao voltar à Rússia, Lenin rejeita apoio ao Governo Provisório e defende “todo poder aos sovietes” e a passagem à revolução socialista.",0],
    ["w-estado","work","O Estado e a Revolução",1917,"Lenin, escrito às vésperas de Outubro: o Estado burguês deve ser quebrado e substituído por um semi-Estado (sovietes) que se extingue gradualmente.",0],
    ["w-renegado","work","A Revolução Proletária e o Renegado Kautsky",1918,"Resposta de Lenin a Kautsky: a democracia burguesa é ditadura da burguesia; a ditadura do proletariado é democracia para a maioria.",0],
    ["w-kautskyditadura","work","A Ditadura do Proletariado (Kautsky)",1918,"Kautsky critica a supressão de liberdades pelo poder bolchevique e defende democracia e maioria como condição do socialismo.",0],
    ["w-luxrr","work","A Revolução Russa (Luxemburgo)",1918,"Manuscrito crítico de 1918. Apoia Outubro, mas critica a dissolução da Constituinte e o recuo das liberdades políticas.",0],
    ["w-esq","work","Esquerdismo, Doença Infantil do Comunismo",1920,"Lenin defende atuar em parlamentos e sindicatos reacionários e fazer compromissos quando necessário, sem abandonar o objetivo.",0],
    ["w-lukacs","work","Lenin: Estudo sobre a Unidade de seu Pensamento",1924,"Lukács lê Lenin como pensador da “atualidade da revolução”, unindo teoria e prática política.",0],
    ["w-stalin-fund","work","Fundamentos do Leninismo",1924,"Manual de Stalin que codifica o leninismo; ponto de partida da doutrina oficial do “marxismo-leninismo”.",0],
    ["w-gramsci","work","Cadernos do Cárcere",1929,"Escritos entre 1929 e 1935. Desenvolvem hegemonia, guerra de posição e Estado ampliado, a partir da experiência fascista e da Revolução Russa.",0],
    ["w-trot-perm","work","A Revolução Permanente",1930,"Trotsky: em países atrasados a revolução democrática só se completa pela tomada do poder pelo proletariado, e só se sustenta se for internacional.",0],
    ["w-trot-hist","work","História da Revolução Russa",1930,"Narrativa de Trotsky sobre 1917, com ênfase na ação das massas e na decisão de Outubro. Principal contexto para entender o período.",0],
    ["w-trot-traida","work","A Revolução Traída",1936,"Trotsky analisa a burocratização da URSS e a tese do socialismo num só país.",0],
    ["w-mao","work","Sobre a Guerra Prolongada",1938,"Mao: guerra popular em três fases (defensiva, equilíbrio, contraofensiva) com base no campesinato.",0],
    ["w-mao-nd","work","Sobre a Nova Democracia",1940,"Mao propõe uma etapa de “nova democracia” sob direção proletária, com aliança de várias classes antiimperialistas.",0],
    ["w-pcb58","work","Declaração de Março (PCB)",1958,"Documento do PCB: o Brasil precisa de revolução nacional-democrática, com via pacífica possível e aliança com setores da burguesia.",1],
    ["w-guevara","work","A Guerra de Guerrilhas",1960,"Guevara argumenta que forças populares podem vencer o exército e que o foco guerrilheiro pode criar condições para a revolução.",0],
    ["w-sodre","work","Formação Histórica do Brasil",1962,"Sodré apresenta leitura da história brasileira com presença de resquícios feudais, aderente à linha nacional-democrática.",1],
    ["w-caio","work","A Revolução Brasileira",1966,"Caio Prado Jr. rejeita a ideia de feudalismo e de burguesia nacional progressista, em polêmica direta com a linha do PCB.",1],
    ["w-debray","work","Revolução na Revolução?",1967,"Debray sistematiza a teoria do foco e a oposição entre guerrilha e partidos tradicionais.",0],
    ["w-marig","work","Manual do Guerrilheiro Urbano",1969,"Marighella: guia da guerrilha urbana contra a ditadura. Sua tradução da estratégia de foco para o contexto das cidades brasileiras.",1],
    ["w-fhc","work","Dependência e Desenvolvimento na América Latina",1969,"Cardoso e Faletto analisam como as estruturas internas e externas se articulam; abrem a corrente da dependência associada.",1],
    ["w-marini","work","Dialética da Dependência",1973,"Marini: o capitalismo dependente se reproduz pela superexploração do trabalho; subimperialismo como projeção regional.",1],
    ["w-flo","work","A Revolução Burguesa no Brasil",1974,"Florestan Fernandes: a burguesia brasileira faz sua revolução por via autocrática e dependente, sem romper com o passado agrário.",1],
    ["w-poul","work","O Estado, o Poder, o Socialismo",1978,"Poulantzas: o Estado é relação social e deve ser transformado por luta de massas combinada a democracia representativa.",0],
    ["w-gor","work","O Escravismo Colonial",1978,"Gorender sustenta que o Brasil teve um modo de produção escravista colonial, e não feudal.",1],
    ["w-cnc","work","A Democracia como Valor Universal",1979,"Coutinho defende que a democracia tem valor próprio e que o socialismo se constrói com ela, não contra ela.",1],
    ["w-antunes","work","O Privilégio da Servidão",2018,"Antunes analisa a uberização e a precarização como novo padrão de exploração no capitalismo contemporâneo.",1],

    /* ---------- CONCEITOS ---------- */
    ["c-reforma","concept","Reformismo / via parlamentar",1899,"Ideia de que o socialismo se conquista gradualmente, pela ampliação de direitos e por maioria eleitoral, sem ruptura.",0],
    ["c-vanguarda","concept","Partido de vanguarda",1902,"Organização de revolucionários profissionais que dirige a classe. Sem ela, os trabalhadores tenderiam apenas à luta por melhorias dentro do capitalismo.",0],
    ["c-consc","concept","Consciência socialista “de fora”",1902,"Tese de Que Fazer?: a consciência política de classe não nasce espontaneamente do conflito econômico; é levada ao movimento por teóricos e militantes.",0],
    ["c-espont","concept","Espontaneidade das massas",1904,"Para Luxemburgo, a experiência prática e a criatividade das massas ensinam mais que direções e corrigem o próprio partido.",0],
    ["c-aliança","concept","Aliança operário-camponesa",1905,"Operários e camponeses como bloco revolucionário em países onde o campesinato é majoritário.",0],
    ["c-perm","concept","Revolução permanente",1906,"Em países atrasados, as tarefas democráticas só se cumprem se o proletariado tomar o poder e avançar a tarefas socialistas, com apoio internacional.",0],
    ["c-cent","concept","Centralismo democrático",1906,"Liberdade de discussão, unidade na ação. Na prática leninista e depois estalinista, tende a reforçar a disciplina vertical.",0],
    ["c-autod","concept","Autodeterminação nacional",1914,"Direito de nações oprimidas à separação. Base da política de Lenin para as colônias e a questão nacional.",0],
    ["c-sitrev","concept","Situação revolucionária",1915,"Critérios de Lenin: crise dos de cima, agravamento da miséria, intensa atividade das massas. Só vira revolução com direção organizada.",0],
    ["c-imp","concept","Imperialismo (fase superior)",1916,"Monopólios, capital financeiro, exportação de capital, partilha do mundo. Conecta crise europeia e dominação colonial.",0],
    ["c-elo","concept","Elo mais fraco",1917,"A ruptura vem onde a cadeia imperialista é mais frágil, não onde o capitalismo é mais desenvolvido. Explica a Rússia.",0],
    ["c-quebrar","concept","Quebrar o aparelho de Estado",1917,"O Estado burguês não é neutro nem pode ser apenas ocupado; é preciso destruí-lo e substituí-lo por poder de tipo comunal.",0],
    ["c-dit","concept","Ditadura do proletariado",1917,"Poder de classe transitório que reprime a antiga classe dominante. Lenin a defende como democracia para a maioria; críticos veem risco de ditadura de partido.",0],
    ["c-soviet","concept","Poder dos sovietes",1917,"Conselhos de operários, soldados e camponeses como forma de poder alternativa ao parlamento.",0],
    ["c-tatica","concept","Compromisso e legalidade",1920,"Atuar em parlamentos e sindicatos reacionários, fazer alianças e recuos táticos, sem perder o objetivo.",0],
    ["c-frente","concept","Frentes únicas e populares",1935,"Alianças de comunistas com outros partidos e setores para barrar o fascismo e ampliar a base. Linha da Comintern a partir de 1935.",0],
    ["c-1pais","concept","Socialismo num só país",1924,"Tese estalinista: construir o socialismo na URSS isolada. Criticada por Trotsky como renúncia ao internacionalismo.",0],
    ["c-etapa","concept","Revolução por etapas",1928,"Em países atrasados, primeiro uma revolução democrática e antiimperialista, com aliança de classes, e só depois a socialista. Linha da Comintern e do PCB.",0],
    ["c-hegem","concept","Hegemonia",1930,"Direção política e cultural que obtém consentimento, além da coerção. Para Gramsci, é condição de vitória duradoura no Ocidente.",0],
    ["c-guerrapos","concept","Guerra de posição",1930,"Em sociedades com sociedade civil densa, a luta se dá por conquistas graduais de trincheiras culturais e políticas, e não por assalto direto.",0],
    ["c-estampl","concept","Estado ampliado",1930,"Estado = sociedade política + sociedade civil (hegemonia revestida de coerção). Ampliado por Poulantzas como relação social.",0],
    ["c-burocracia","concept","Degeneração burocrática",1936,"Trotsky: uma camada burocrática usurpa o poder operário na URSS, mantendo bases econômicas estatizadas.",0],
    ["c-gpp","concept","Guerra popular prolongada",1938,"Estratégia maoísta: cercar as cidades pelo campo, com exército popular, em fases sucessivas.",0],
    ["c-nd","concept","Nova democracia",1940,"Etapa de transição liderada pelo proletariado, com aliança entre classes antiimperialistas, antes do socialismo.",0],
    ["c-viapac","concept","Via pacífica",1958,"Linha adotada pelo PCB em 1958: reformas e alianças democráticas permitiriam a transição sem insurreição.",1],
    ["c-feud","concept","Debate sobre o “feudalismo” no Brasil",1962,"Disputa sobre a natureza da formação brasileira: restos feudais (PCB, Sodré), capitalismo desde a colônia (Caio Prado), escravismo colonial (Gorender).",1],
    ["c-foco","concept","Teoria do foco",1960,"A guerrilha rural, mesmo pequena, cria as condições subjetivas da revolução. Derivada da experiência cubana.",0],
    ["c-guerrurb","concept","Guerrilha urbana",1969,"Marighella: a luta armada se transfere para as cidades, com pequenos grupos de ação.",1],
    ["c-dep","concept","Teoria marxista da dependência",1973,"O subdesenvolvimento é parte do desenvolvimento capitalista mundial. Na versão de Marini, a periferia compensa a troca desigual com superexploração.",1],
    ["c-subimp","concept","Subimperialismo",1969,"Países dependentes de médio porte (como o Brasil) exercem projeção regional em nome do capital central e local.",1],
    ["c-rb","concept","Revolução burguesa no Brasil",1974,"Transição ao capitalismo por modernização conservadora, com burguesia autocrática e dependente.",1],
    ["c-demuv","concept","Democracia como valor universal",1979,"Tese de que democracia e pluralismo não são meros instrumentos burgueses, e sim conquistas a serem ampliadas rumo ao socialismo.",1],
    ["c-prec","concept","Uberização e precarização",2018,"Nova morfologia do trabalho: informalidade, plataformas, trabalho intermitente. Questiona a base social do proletariado clássico.",1]
  ],

  edges: [
    /* ---------- AUTORIA ---------- */
    ["p-lenin","w-que","autor"],["p-lenin","w-duas","autor"],["p-lenin","w-imp","autor"],["p-lenin","w-teses","autor"],
    ["p-lenin","w-estado","autor"],["p-lenin","w-renegado","autor"],["p-lenin","w-esq","autor"],
    ["p-marx","w-marxguerra","autor"],["p-marx","w-marxgotha","autor"],
    ["p-bern","w-bernstein","autor"],["p-lux","w-reformaourev","autor"],["p-lux","w-orgquest","autor"],["p-lux","w-luxrr","autor"],
    ["p-kautsky","w-kautskyditadura","autor"],["p-trot","w-trot-hist","autor"],["p-trot","w-trot-perm","autor"],["p-trot","w-trot-traida","autor"],
    ["p-stalin","w-stalin-fund","autor"],["p-mao","w-mao","autor"],["p-mao","w-mao-nd","autor"],["p-gramsci","w-gramsci","autor"],
    ["p-guevara","w-guevara","autor"],["p-debray","w-debray","autor"],["p-marig","w-marig","autor"],
    ["p-caio","w-caio","autor"],["p-flo","w-flo","autor"],["p-marini","w-marini","autor"],["p-fhc","w-fhc","autor"],
    ["p-gor","w-gor","autor"],["p-sodre","w-sodre","autor"],["p-cnc","w-cnc","autor"],["p-poul","w-poul","autor"],
    ["p-antunes","w-antunes","autor"],["p-lukacs","w-lukacs","autor"],["g-pcb","w-pcb58","autor"],

    /* ---------- OBRAS TRATAM DE CONCEITOS ---------- */
    ["w-que","c-vanguarda","trata"],["w-que","c-consc","trata"],
    ["w-que","c-cent","trata","Esboça o plano organizativo; a fórmula “centralismo democrático” se consolida a partir de 1906."],
    ["w-duas","c-aliança","trata"],
    ["w-duas","c-etapa","infl","Lenin defende em 1905 uma revolução democrático-burguesa com hegemonia proletária. A Comintern e o estalinismo depois codificam isso como etapismo."],
    ["w-imp","c-imp","trata"],
    ["w-imp","c-elo","infl","Fornece a base teórica; a metáfora da “cadeia” aparece em textos de 1917."],
    ["w-teses","c-soviet","trata"],
    ["w-teses","c-etapa","critica","Lenin abandona a fórmula de 1905 e rejeita o apoio ao Governo Provisório. Muitos bolcheviques resistiram."],
    ["w-estado","c-quebrar","trata"],["w-estado","c-dit","trata"],["w-estado","c-soviet","trata"],
    ["w-renegado","c-dit","trata"],
    ["w-esq","c-tatica","trata"],["w-esq","c-sitrev","trata"],
    ["w-bernstein","c-reforma","trata"],
    ["w-reformaourev","c-reforma","critica","Reformas são úteis, mas sem conquista do poder não alteram a natureza do capitalismo."],
    ["w-orgquest","c-espont","trata"],
    ["w-orgquest","c-cent","critica","Acusa o plano de Lenin de ultracentralismo; o partido deve ser corrigido pela experiência da classe."],
    ["w-luxrr","c-dit","critica","Apoia a revolução, mas critica a supressão da Constituinte e das liberdades. Defende ditadura da classe, não de um partido."],
    ["w-kautskyditadura","c-dit","critica","Contrapõe democracia a ditadura e acusa os bolcheviques de governar contra a maioria."],
    ["w-trot-perm","c-perm","trata"],["w-trot-traida","c-burocracia","trata"],
    ["w-stalin-fund","c-vanguarda","infl","Codifica o leninismo em manual; ponto de partida da doutrina oficial."],
    ["w-mao","c-gpp","trata"],["w-mao-nd","c-nd","trata"],
    ["w-gramsci","c-hegem","trata"],["w-gramsci","c-guerrapos","trata"],["w-gramsci","c-estampl","trata"],
    ["w-guevara","c-foco","trata"],["w-debray","c-foco","trata"],["w-marig","c-guerrurb","trata"],
    ["w-pcb58","c-viapac","trata"],
    ["w-caio","c-feud","critica","Se o Brasil já é capitalista desde a colônia, não há resquício feudal a liquidar por aliança com a burguesia."],
    ["w-caio","c-etapa","critica"],
    ["w-sodre","c-feud","trata","Defende a presença de resquícios feudais, base da linha nacional-democrática."],
    ["w-gor","c-feud","critica","Propõe modo de produção escravista colonial: nem feudal, nem simples capitalismo."],
    ["w-flo","c-rb","trata"],
    ["w-marini","c-dep","trata"],["w-marini","c-subimp","trata"],["w-fhc","c-dep","trata","Versão associada: o desenvolvimento dependente é possível e compatível com certa autonomia interna."],
    ["w-cnc","c-demuv","trata"],["w-poul","c-estampl","trata"],["w-antunes","c-prec","trata"],
    ["w-lukacs","c-vanguarda","trata","Lê o partido como instrumento da atualidade da revolução."],
    ["w-marxguerra","c-quebrar","trata","Fonte principal da tese de que a classe operária não pode usar a máquina estatal pronta."],
    ["w-marxgotha","c-dit","trata"],

    /* ---------- INFLUÊNCIAS ENTRE PENSADORES E CONCEITOS ---------- */
    ["p-marx","c-dit","trata"],
    ["w-marxguerra","w-estado","infl","Lenin relê a Comuna para fundamentar a destruição do aparelho estatal."],
    ["p-hobson","c-imp","infl","Lenin usa Hobson e critica suas conclusões reformistas."],
    ["p-hilf","c-imp","infl","O conceito de capital financeiro vem de Hilferding."],
    ["p-kautsky","c-consc","infl","Lenin cita Kautsky para afirmar que a consciência socialista vem “de fora” do movimento espontâneo."],
    ["p-lenin","c-sitrev","trata"],["p-lenin","c-tatica","trata"],["p-lenin","c-autod","trata"],["p-lenin","c-aliança","trata"],["p-lenin","c-elo","trata"],
    ["p-lenin","c-frente","infl","Politica de alianças de Lenin é referência para a Comintern."],
    ["c-imp","c-elo","infl","A tese do imperialismo funda a ideia de que a ruptura vem do elo mais frágil."],
    ["c-imp","c-autod","infl","Se o capitalismo é sistema mundial de opressão, as nações oprimidas são aliadas potenciais."],
    ["c-imp","c-dep","infl"],
    ["c-subimp","c-imp","infl","Atualiza a tese do imperialismo para países periféricos com projeção regional."],
    ["c-vanguarda","c-cent","infl"],
    ["c-vanguarda","g-bolch","infl"],
    ["c-cent","g-estal","infl","A disciplina partidária é endurecida na bolchevização da Comintern e no estalinismo."],
    ["c-espont","c-vanguarda","critica","Luxemburgo: a experiência criadora das massas corrige o partido, e não o contrário."],
    ["p-lux","c-espont","trata"],
    ["p-lux","p-bern","critica","Polêmica de 1899 sobre reforma e revolução."],
    ["p-bern","c-reforma","trata"],
    ["p-kautsky","c-reforma","trata","Defende estratégia de acúmulo de forças e maioria sem “tomar” o Estado pela força."],
    ["p-kautsky","p-lenin","critica","Acusa o bolchevismo de substituir a democracia por ditadura de partido e de blanquismo."],
    ["p-lenin","p-kautsky","critica","Em 1914–18 rompe com o antigo “papa do marxismo”, acusando-o de renegar Marx."],
    ["w-renegado","w-kautskyditadura","critica","Resposta direta de Lenin."],
    ["p-mart","c-vanguarda","critica","Propõe fórmula mais ampla de filiação; Lenin quer militância organizada."],
    ["p-mart","g-mench","infl"],
    ["g-mench","c-etapa","infl","Tese de que a Rússia precisava de revolução burguesa dirigida pela burguesia liberal; Lenin a rejeita em 1905."],
    ["g-bolch","g-mench","critica","Cisão de 1903 e depois divergência sobre aliança com a burguesia liberal."],
    ["g-mench","g-bolch","critica","Acusam os bolcheviques de substituir a classe pelo partido."],
    ["p-lenin","g-bolch","infl"],
    ["g-ii","g-bolch","contexto","Os bolcheviques surgem dentro da II Internacional; Lenin rompe com ela entre 1914 e 1917."],

    /* ---------- EVENTOS / CONTEXTO ---------- */
    ["e-comuna","w-marxguerra","contexto"],
    ["e-1905","w-duas","contexto"],["e-1905","c-soviet","contexto","Primeiros sovietes surgem em 1905."],["e-1905","c-perm","contexto","Trotsky presidiu o Soviete de São Petersburgo."],
    ["e-1914","w-imp","contexto"],["e-1914","c-sitrev","contexto"],["e-1914","g-ii","contexto","Colapso da II Internacional."],
    ["e-1917","c-soviet","contexto"],["e-1917","w-teses","contexto"],["e-1917","w-estado","contexto"],["e-1917","g-bolch","contexto"],["e-1917","w-trot-hist","contexto"],
    ["c-sitrev","e-1917","contexto","Lenin identifica em 1917 uma situação revolucionária."],
    ["e-alema","c-sitrev","contexto","Esperada como socorro à Rússia; derrotada em 1919."],
    ["e-alema","w-luxrr","contexto"],["e-alema","p-lux","contexto","Luxemburgo é assassinada em 1919."],
    ["e-com2","c-autod","trata","Teses sobre aliança com movimentos de libertação nacional, mantendo autonomia dos comunistas."],
    ["e-com2","w-esq","contexto"],["e-com2","g-comintern","contexto"],
    ["p-lenin","g-comintern","infl"],["g-comintern","g-estal","infl"],
    ["g-comintern","c-etapa","infl","Teses coloniais e o VI Congresso (1928) consolidam a revolução democrático-burguesa por etapas."],
    ["g-comintern","c-frente","infl"],
    ["p-stalin","g-estal","infl"],["p-stalin","c-1pais","trata"],["g-estal","c-etapa","infl"],["g-estal","c-1pais","trata"],

    /* ---------- TROTSKISMO ---------- */
    ["p-trot","c-perm","trata"],
    ["c-perm","c-etapa","critica","Nega que a Rússia ou colônias precisem esperar a burguesia fazer sua revolução."],
    ["c-perm","w-teses","infl","Debate historiográfico: convergência de Lenin com Trotsky em 1917 (leitura trotskista) ou desenvolvimento próprio de Lenin."],
    ["p-trot","p-stalin","critica","Combate o socialismo num só país e a burocracia."],
    ["p-trot","c-1pais","critica"],["p-trot","c-burocracia","trata"],["c-burocracia","g-estal","critica"],
    ["p-trot","g-trot","infl"],["g-trot","g-pstu","infl"],["g-trot","g-pco","infl"],

    /* ---------- MAOÍSMO ---------- */
    ["p-mao","g-mao","infl"],["e-china","c-gpp","contexto"],["c-gpp","g-pcdob","infl","Guerrilha do Araguaia segue a ideia de guerra popular."],
    ["c-autod","c-nd","infl"],["c-aliança","c-nd","infl"],["g-mao","g-pcdob","infl","Cisão de 1962 e aproximação com a China."],

    /* ---------- GRAMSCI E OCIDENTE ---------- */
    ["p-gramsci","p-lenin","infl","Gramsci é leninista heterodoxo: hegemonia reelabora a aliança de classes."],
    ["c-hegem","c-aliança","infl"],["c-hegem","c-guerrapos","infl"],
    ["c-guerrapos","c-quebrar","critica","Não nega Lenin: reconhece que o assalto vale para a Rússia, mas no Ocidente a sociedade civil é “trincheira”."],
    ["c-estampl","c-quebrar","critica","Se o Estado inclui a sociedade civil, quebrá-lo é mais complexo do que dissolver um aparelho."],
    ["p-lukacs","p-lenin","infl"],
    ["p-poul","c-estampl","infl"],
    ["p-poul","c-quebrar","critica","Propõe transformar o Estado com luta de massas combinada a democracia representativa."],
    ["g-euro","p-gramsci","infl"],["g-euro","c-dit","critica","Vários PCs europeus abandonam o termo nos anos 1970."],
    ["p-cnc","p-gramsci","infl"],["p-cnc","g-euro","contexto"],
    ["c-demuv","c-dit","critica","Desloca a ditadura do proletariado do horizonte estratégico."],

    /* ---------- LUTA ARMADA NA AMÉRICA LATINA ---------- */
    ["e-cuba","c-foco","contexto"],["e-cuba","p-guevara","contexto"],["p-guevara","c-foco","trata"],["p-debray","c-foco","trata"],
    ["c-foco","g-aln","infl","Marighella se aproxima de Cuba na OLAS (1967)."],
    ["p-marig","g-aln","infl"],["p-marig","c-guerrurb","trata"],
    ["g-aln","g-pcb","critica","Marighella rompe em 1967, rejeitando a via pacífica."],
    ["c-foco","c-viapac","critica","A linha de foco opõe-se à via pacífica."],

    /* ---------- BRASIL ---------- */
    ["p-astro","g-pcb","infl"],["p-prestes","g-pcb","infl"],
    ["g-comintern","g-pcb","infl","PCB filia-se à Comintern em 1922."],
    ["c-etapa","g-pcb","infl","Linha da revolução nacional-democrática com burguesia nacional."],
    ["c-frente","g-pcb","infl","ANL (1935): frente ampla ligada ao PCB e a Prestes; levante de novembro."],
    ["g-pcb","c-viapac","trata"],
    ["e-64","g-pcb","contexto","O golpe desmoralizou a aposta na burguesia nacional."],
    ["e-64","c-viapac","contexto"],
    ["e-64","g-aln","contexto"],
    ["g-pcdob","g-pcb","critica","Cisão de 1962 ligada à crítica da desestalinização e da linha pacífica."],
    ["p-caio","c-feud","critica"],["p-caio","c-etapa","critica","Sem feudalismo a liquidar, a aliança com burguesia nacional perde sentido."],
    ["p-sodre","c-feud","trata"],["p-gor","c-feud","critica"],
    ["p-flo","c-rb","trata"],
    ["c-rb","c-etapa","critica","A burguesia brasileira é autocrática e dependente: não faz “revolução democrática” clássica."],
    ["p-marini","c-dep","trata"],["p-marini","c-subimp","trata"],
    ["c-dep","c-etapa","critica","Capitalismo dependente não gera burguesia nacional antiimperialista; reproduz superexploração."],
    ["p-fhc","c-dep","trata"],
    ["p-marini","p-fhc","critica","Marini critica a dependência associada e o neodesenvolvimentismo de Cardoso e Serra (1978)."],
    ["p-cnc","c-demuv","trata"],
    ["c-demuv","g-pt","infl","Leitura interpretativa: ressonâncias da crítica ao vanguardismo na estratégia democrática do PT."],
    ["g-pt","g-pstu","contexto","Convergência Socialista expulsa do PT em 1992; PSTU em 1994."],
    ["g-pt","g-pco","contexto","Corrente Causa Operária sai do PT nos anos 1990."],
    ["g-trot","g-pt","infl","Correntes trotskistas atuam no PT em sua fundação e depois se afastam."],
    ["c-aliança","g-mst","infl","Leitura interpretativa: o campesinato como sujeito político ao lado dos trabalhadores urbanos."],
    ["c-feud","g-mst","contexto","Questão agrária é eixo do debate sobre a formação social."],
    ["p-antunes","c-prec","trata"],
    ["c-prec","c-vanguarda","contexto","Pergunta aberta: como organizar vanguarda ou partido com trabalho fragmentado?"],
    ["c-prec","c-sitrev","contexto"]
  ],

  debates: [
    {
      id: "d-consciencia",
      titulo: "Quem leva a consciência de classe?",
      pergunta: "A classe trabalhadora chega por si só ao socialismo ou precisa de um partido que lhe leve a consciência política?",
      nos: ["c-vanguarda","c-consc","c-espont","w-que","w-orgquest","p-lenin","p-lux","p-kautsky","p-mart","p-gramsci"],
      posicoes: [
        { quem: "Lenin", ids: ["p-lenin"], texto: "O movimento espontâneo produz consciência sindical; a socialista vem do partido de revolucionários profissionais (Que Fazer?, 1902)." },
        { quem: "Kautsky", ids: ["p-kautsky"], texto: "Fonte da tese da consciência “de fora”, que Lenin cita; mais tarde defende democracia e maioria contra o bolchevismo." },
        { quem: "Mártov", ids: ["p-mart"], texto: "Membro é quem colabora sob direção do partido; fórmula mais aberta que a de Lenin (1903)." },
        { quem: "Luxemburgo", ids: ["p-lux"], texto: "Erros do movimento operário são mais fecundos que a infalibilidade de qualquer comitê; o partido é corrigido pela experiência das massas." },
        { quem: "Gramsci", ids: ["p-gramsci"], texto: "O partido como “intelectual coletivo” que organiza hegemonia, mas dentro da sociedade civil e com base ampla." }
      ]
    },
    {
      id: "d-estado",
      titulo: "Quebrar, ocupar ou transformar o Estado?",
      pergunta: "O Estado burguês pode ser usado pelos trabalhadores ou precisa ser destruído?",
      nos: ["c-quebrar","c-dit","c-reforma","c-guerrapos","c-estampl","c-demuv","w-estado","w-renegado","w-kautskyditadura","p-lenin","p-kautsky","p-bern","p-gramsci","p-poul","p-cnc","g-euro"],
      posicoes: [
        { quem: "Lenin", ids: ["p-lenin"], texto: "Quebrar o aparelho (Comuna) e substituí-lo por sovietes; ditadura do proletariado como democracia da maioria." },
        { quem: "Kautsky e Bernstein", ids: ["p-kautsky","p-bern"], texto: "Via parlamentar e maioria; a ditadura de partido nega o próprio socialismo democrático." },
        { quem: "Gramsci", ids: ["p-gramsci"], texto: "No Ocidente, a sociedade civil é trincheira; a luta passa por hegemonia (guerra de posição)." },
        { quem: "Poulantzas", ids: ["p-poul"], texto: "O Estado é condensação de relações de força; combina luta de massas e representação para transformá-lo por dentro e fora." },
        { quem: "Coutinho e eurocomunistas", ids: ["p-cnc","g-euro"], texto: "A democracia é valor universal; abandona-se a ditadura do proletariado como horizonte." }
      ]
    },
    {
      id: "d-etapas",
      titulo: "Etapas ou permanência da revolução?",
      pergunta: "Em países atrasados ou dependentes, a revolução tem uma etapa democrático-burguesa prévia?",
      nos: ["c-etapa","c-perm","c-nd","c-aliança","w-duas","w-teses","w-trot-perm","w-mao-nd","g-mench","g-estal","g-comintern","g-pcb","p-lenin","p-trot","p-mao"],
      posicoes: [
        { quem: "Mencheviques", ids: ["g-mench"], texto: "A Rússia precisa antes de uma revolução burguesa, liderada pela burguesia liberal." },
        { quem: "Lenin 1905", ids: ["p-lenin","w-duas"], texto: "Revolução democrática com hegemonia de operários e camponeses, sem a burguesia liberal." },
        { quem: "Lenin 1917", ids: ["w-teses"], texto: "Nas Teses de Abril, passa à revolução socialista e rompe com o Governo Provisório." },
        { quem: "Trotsky", ids: ["p-trot","w-trot-perm"], texto: "Revolução permanente: tarefas democráticas só se cumprem pelo poder proletário, sustentado internacionalmente." },
        { quem: "Comintern e PCB", ids: ["g-comintern","g-pcb"], texto: "Etapa nacional-democrática com burguesia nacional em países coloniais e dependentes." },
        { quem: "Mao", ids: ["p-mao","w-mao-nd"], texto: "Nova democracia dirigida pelo proletariado, com aliança de classes antiimperialistas, antes do socialismo." }
      ]
    },
    {
      id: "d-formacao",
      titulo: "Qual é a formação social brasileira?",
      pergunta: "Feudal, capitalista desde a colônia, escravista, dependente? A resposta define a estratégia.",
      nos: ["c-feud","c-etapa","c-dep","c-rb","w-sodre","w-caio","w-gor","w-flo","w-marini","w-fhc","w-pcb58","p-sodre","p-caio","p-gor","p-flo","p-marini","p-fhc","g-pcb"],
      posicoes: [
        { quem: "PCB e Sodré", ids: ["g-pcb","p-sodre"], texto: "Resquícios feudais e imperialismo justificam revolução nacional-democrática com burguesia nacional." },
        { quem: "Caio Prado Jr.", ids: ["p-caio"], texto: "O Brasil nasce capitalista, voltado ao mercado externo; não há feudalismo a superar." },
        { quem: "Gorender", ids: ["p-gor"], texto: "Modo de produção escravista colonial, específico." },
        { quem: "Florestan Fernandes", ids: ["p-flo"], texto: "A burguesia fez sua revolução por via autocrática e dependente, sem democratização." },
        { quem: "Marini", ids: ["p-marini"], texto: "Capitalismo dependente baseado em superexploração; não há burguesia nacional antiimperialista." },
        { quem: "Cardoso e Faletto", ids: ["p-fhc"], texto: "Dependência associada: desenvolvimento possível, articulando estruturas internas e capital externo." }
      ]
    },
    {
      id: "d-armada",
      titulo: "Via pacífica ou luta armada (Brasil, 1958–69)?",
      pergunta: "Depois do golpe de 1964, qual caminho para derrotar a ditadura e mudar o país?",
      nos: ["c-viapac","c-foco","c-guerrurb","c-gpp","w-pcb58","w-marig","w-guevara","w-debray","e-64","e-cuba","g-pcb","g-aln","g-pcdob","p-marig","p-guevara","p-debray","p-prestes"],
      posicoes: [
        { quem: "PCB", ids: ["g-pcb","w-pcb58"], texto: "Via pacífica e frente democrática; rejeita a luta armada isolada." },
        { quem: "ALN e Marighella", ids: ["g-aln","p-marig"], texto: "Luta armada urbana como detonador do processo revolucionário." },
        { quem: "Guevara e Debray", ids: ["p-guevara","p-debray"], texto: "Foco guerrilheiro rural cria condições subjetivas; critica a espera do partido tradicional." },
        { quem: "PCdoB", ids: ["g-pcdob"], texto: "Guerra popular prolongada com base camponesa (Araguaia)." }
      ]
    },
    {
      id: "d-burocracia",
      titulo: "O que deu errado na revolução russa?",
      pergunta: "A burocratização e o partido-Estado são consequência do leninismo ou desvio?",
      nos: ["c-dit","c-cent","c-1pais","c-burocracia","w-luxrr","w-trot-traida","w-renegado","w-kautskyditadura","p-lux","p-trot","p-stalin","p-kautsky","p-lenin","g-estal","e-alema"],
      posicoes: [
        { quem: "Kautsky", ids: ["p-kautsky"], texto: "A ditadura de partido nasce da ruptura com a democracia." },
        { quem: "Luxemburgo", ids: ["p-lux"], texto: "Apoia a revolução, mas alerta que sem liberdades políticas a vida pública se atrofia (1918)." },
        { quem: "Trotsky", ids: ["p-trot"], texto: "O isolamento e o atraso criaram uma casta burocrática que usurpou o poder; o problema é o estalinismo." },
        { quem: "Estalinismo", ids: ["g-estal","p-stalin"], texto: "Socialismo num só país e partido-Estado como continuação do leninismo." },
        { quem: "Revisionismo histórico", ids: ["e-alema"], texto: "Discute o peso do isolamento (fracasso alemão), da guerra civil e das escolhas políticas." }
      ]
    },
    {
      id: "d-sujeito",
      titulo: "Quem é o sujeito revolucionário hoje?",
      pergunta: "Com informalidade, plataformas e financeirização, a base social do partido leninista ainda existe?",
      nos: ["c-prec","c-vanguarda","c-aliança","c-sitrev","p-antunes","w-antunes","g-mst","g-pt","c-feud"],
      posicoes: [
        { quem: "Antunes", ids: ["p-antunes"], texto: "A classe-que-vive-do-trabalho inclui precarizados e informais; a organização precisa ser ampliada." },
        { quem: "Tradição leninista", ids: ["c-aliança","c-vanguarda"], texto: "Operariado organizado em aliança com camponeses e partido de vanguarda." },
        { quem: "MST", ids: ["g-mst"], texto: "Campesinato organizado como sujeito político, com formação marxista." },
        { quem: "Estratégia institucional", ids: ["g-pt"], texto: "Mobilização eleitoral e política de massas; o partido como frente ampla." }
      ]
    },
    {
      id: "d-situacao",
      titulo: "Há “situação revolucionária” no Brasil?",
      pergunta: "Pergunta em aberto: aplicar os critérios de Lenin ao Brasil contemporâneo.",
      nos: ["c-sitrev","c-guerrapos","c-hegem","c-demuv","c-prec","w-esq","w-gramsci","p-lenin","p-gramsci","p-cnc","p-antunes"],
      posicoes: [
        { quem: "Critérios de Lenin", ids: ["c-sitrev","w-esq"], texto: "Crise dos de cima, agravamento da miséria, intensa atividade das massas e direção organizada. Hipótese a testar, não resposta pronta." },
        { quem: "Gramsci", ids: ["p-gramsci"], texto: "No Ocidente, a disputa é de hegemonia na sociedade civil (guerra de posição)." },
        { quem: "Coutinho", ids: ["p-cnc"], texto: "Estratégia de ampliação democrática, com pluralismo e direitos." },
        { quem: "Antunes", ids: ["p-antunes"], texto: "Crise estrutural do trabalho como terreno de novas organizações." }
      ]
    }
  ]
};
