/* ------------------------------------------------------------------
   ORIGENS DAS CRÍTICAS DE MARX
   De quem Marx herda e contra quem argumenta. Serve para saber
   sobre o que se critica antes de ler a crítica.

   Estende MAPA (carregue depois de data.js e data-marx.js).
   A síntese de Lenin, "As Três Fontes e as Três Partes Constitutivas
   do Marxismo" (1913), organiza o conjunto: filosofia clássica alemã,
   economia política inglesa e socialismo francês.
------------------------------------------------------------------- */
(function () {
  "use strict";
  const M = MAPA;

  const NOVOS = [
    /* autores */
    ["p-hegel","person","G. W. F. Hegel",1820,"Filósofo idealista alemão. Dele Marx herda a dialética, a ideia de alienação e a história como processo, mas critica o idealismo e a visão do Estado como universalidade que concilia os interesses particulares.",0],
    ["p-feuerbach","person","Ludwig Feuerbach",1841,"Materialista e crítico da religião (A Essência do Cristianismo, 1841): Deus como projeção alienada do ser humano. Marx e Engels adotam a ideia de alienação, mas criticam seu materialismo contemplativo e a-histórico.",0],
    ["p-smith","person","Adam Smith",1776,"Economista escocês da economia política clássica. Marx aproveita a divisão do trabalho e a ligação do valor ao trabalho, mas trata as categorias capitalistas como históricas, e não naturais.",0],
    ["p-ricardo","person","David Ricardo",1817,"Economista inglês que sistematiza a teoria do valor-trabalho, ponto de partida de Marx. Marx critica a naturalização das categorias burguesas e a falta da distinção entre trabalho e força de trabalho, chave para a mais-valia.",0],
    ["p-proudhon","person","Pierre-Joseph Proudhon",1846,"Socialista francês, precursor do anarquismo (Filosofia da Miséria, 1846). Marx responde em Miséria da Filosofia (1847) e o critica por querer reformar a troca e o crédito sem superar as relações de produção.",0],
    ["p-lassalle","person","Ferdinand Lassalle",1863,"Fundador do primeiro partido operário alemão (1863). Apostava no sufrágio universal e na ajuda estatal a cooperativas. Marx o critica na Crítica do Programa de Gotha (1875).",0],

    /* grupos */
    ["g-utopicos","group","Socialismo utópico (Saint-Simon, Fourier, Owen)",1825,"Primeiros projetos de sociedade socialista, baseados em crítica moral e em experimentos de comunidade. Marx e Engels reconhecem a crítica social, mas apontam a ausência de análise das tendências históricas e do papel da classe trabalhadora.",0],
    ["g-hegelianos","group","Jovens hegelianos (Bauer, Stirner)",1840,"Intelectuais alemães que radicalizaram Hegel pela crítica da religião e viam nas ideias o motor da história. A Ideologia Alemã é a polêmica de Marx e Engels com eles e com Feuerbach.",0],

    /* obras */
    ["w-critica-hegel","work","Crítica da Filosofia do Direito de Hegel (Introdução)",1844,"Marx critica a religião como consolo da miséria, desloca a crítica do céu para a terra e aponta o proletariado como classe universal, cuja emancipação exige superar todas as dominações.",0],
    ["w-teses-feuerbach","work","Teses sobre Feuerbach",1845,"Notas de Marx: critica o materialismo contemplativo, que ignora a prática social, e afirma que a tarefa é transformar o mundo, e não só interpretá-lo.",0],
    ["w-miseria","work","Miséria da Filosofia",1847,"Marx responde a Proudhon, criticando a leitura a-histórica das categorias econômicas e a ideia de reformar o capitalismo sem superar as relações de produção.",0],
    ["w-utopico","work","Do Socialismo Utópico ao Socialismo Científico",1880,"Engels contrasta o socialismo utópico com a análise das tendências históricas do capitalismo. A oposição entre os termos é vista por alguns historiadores como simplificadora.",0],
    ["w-tresfontes","work","As Três Fontes e as Três Partes Constitutivas do Marxismo",1913,"Lenin resume as origens do marxismo: filosofia clássica alemã, economia política inglesa e socialismo francês. Útil para saber o que Marx herda e o que critica.",0],

    /* conceitos */
    ["c-inversao","concept","Inversão da dialética hegeliana",1873,"No posfácio de 1873 a O Capital, Marx diz ter encontrado a dialética de Hegel “de cabeça para baixo” e a recolocado sobre bases materiais. Quanto de Hegel permanece é debate: Lukács enfatiza a herança hegeliana; Althusser, uma ruptura.",0],
    ["c-criticaeconomia","concept","Crítica da economia política",1859,"Marx assume o valor-trabalho da economia política clássica, mas trata suas categorias (mercadoria, capital, salário) como formas históricas, e não leis naturais. É o subtítulo de O Capital.",0],
    ["c-socialismocient","concept","Socialismo científico versus utópico",1880,"Engels opõe ao projeto moral dos utópicos uma análise das tendências do capitalismo. O contraste é útil e polêmico: críticos veem cientificismo; defensores, rigor histórico.",0],
    ["c-universal","concept","Proletariado como classe universal",1844,"Tese do jovem Marx: o proletariado, sem propriedade e submetido a opressão geral, só se emancipa superando todas as dominações de classe. Hoje é questionada pelo debate sobre informais e precarizados.",0]
  ];
  NOVOS.forEach((n) => M.nodes.push(n));

  Object.assign(M.eixos, {
    "c-inversao": "a", "c-criticaeconomia": "a", "c-socialismocient": "m", "c-universal": "m",
    "w-critica-hegel": "a", "w-teses-feuerbach": "m", "w-miseria": "m", "w-utopico": "m", "w-tresfontes": "a"
  });

  /* entram no destaque "Marx e Engels (e suas fontes)" */
  NOVOS.forEach((n) => M.marxIds.push(n[0]));

  const E = [
    /* autoria */
    ["p-marx","w-critica-hegel","autor"],["p-marx","w-teses-feuerbach","autor"],["p-marx","w-miseria","autor"],
    ["p-engels","w-utopico","autor"],["p-lenin","w-tresfontes","autor"],

    /* Lenin: as três fontes */
    ["w-tresfontes","p-hegel","trata","Filosofia clássica alemã."],
    ["w-tresfontes","p-ricardo","trata","Economia política inglesa."],
    ["w-tresfontes","g-utopicos","trata","Socialismo francês."],
    ["w-tresfontes","c-matdial","trata"],

    /* Hegel e a filosofia alemã */
    ["p-hegel","c-inversao","infl"],["p-marx","c-inversao","trata"],
    ["w-capital","c-inversao","trata","Posfácio de 1873 à segunda edição."],
    ["w-hcc","c-inversao","complementa","Lukács reforça a herança hegeliana (totalidade, dialética) contra leituras positivistas."],
    ["p-hegel","c-alienacao","infl","Marx parte do conceito hegeliano de alienação, mas o ancora no trabalho concreto."],
    ["w-critica-hegel","p-hegel","critica","Contesta a ideia de que o Estado concilia as particularidades: a sociedade civil é a base, e não o contrário."],
    ["w-critica-hegel","c-estadoclasse","infl","A crítica do Estado em Hegel é ponto de partida da teoria marxista do Estado."],
    ["w-critica-hegel","c-universal","trata"],
    ["p-feuerbach","c-alienacao","infl","A crítica da religião como alienação inspira Marx."],
    ["w-teses-feuerbach","p-feuerbach","critica","Materialismo contemplativo: falta a prática social como atividade humana."],
    ["w-teses-feuerbach","c-matdial","trata"],
    ["w-ideologia","g-hegelianos","critica","Polêmica com Bauer, Stirner e Feuerbach: para eles as ideias movem a história; para Marx e Engels, a vida material."],
    ["w-ideologia","p-feuerbach","critica"],

    /* economia política */
    ["p-smith","c-criticaeconomia","infl"],["p-ricardo","c-criticaeconomia","infl"],
    ["p-ricardo","c-valor","infl","Marx parte do valor-trabalho de Ricardo e distingue trabalho de força de trabalho para explicar a mais-valia."],
    ["p-smith","c-valor","infl"],
    ["w-capital","c-criticaeconomia","trata"],["w-prefacio","c-criticaeconomia","trata"],
    ["p-marx","p-ricardo","critica","Absorve e critica: as categorias burguesas são históricas, não naturais."],
    ["p-marx","p-smith","critica"],

    /* socialismo francês e outros alvos */
    ["w-utopico","c-socialismocient","trata"],
    ["g-utopicos","c-socialismocient","contexto","É o termo de contraste de Engels."],
    ["w-utopico","g-utopicos","critica","Reconhece a crítica social, mas aponta o caráter moral e a ausência de análise histórica."],
    ["w-manifesto","g-utopicos","critica","A seção do Manifesto sobre o socialismo e o comunismo crítico-utópicos."],
    ["w-miseria","p-proudhon","critica","Critica a pretensão de reformar troca e crédito sem superar as relações de produção, e a leitura a-histórica das categorias."],
    ["p-proudhon","p-bakunin","infl","Proudhon é precursor do anarquismo e influencia Bakunin."],
    ["w-marxgotha","p-lassalle","critica","Critica a “lei de ferro dos salários” e a ideia de que o Estado deve financiar cooperativas."],
    ["p-lassalle","c-reforma","infl","Aposta no sufrágio universal e na ajuda estatal: precedente da via legal da social-democracia alemã."],

    /* sujeito revolucionário: do jovem Marx ao debate atual */
    ["c-universal","c-lutaclasses","infl"],
    ["c-campesinato","c-universal","critica","Bakunin amplia o sujeito para camponeses e marginalizados, além do operariado industrial."],
    ["c-prec","c-universal","contexto","Leitura interpretativa: o debate sobre informais e precarizados reabre a tese do proletariado como classe universal."]
  ];
  E.forEach((e) => M.edges.push(e));

  M.debates.push({
    id: "d-fontes",
    titulo: "De onde vêm as críticas de Marx?",
    pergunta: "Antes de avaliar uma crítica, vale saber contra quem e o quê ela se dirige: Hegel, a economia política, os utópicos, Proudhon, Lassalle.",
    nos: ["p-marx","p-hegel","p-feuerbach","g-hegelianos","p-smith","p-ricardo","g-utopicos","p-proudhon","p-lassalle","w-tresfontes","w-critica-hegel","w-teses-feuerbach","w-miseria","w-utopico","w-marxgotha","c-inversao","c-criticaeconomia","c-universal","c-socialismocient"],
    posicoes: [
      { quem: "Lenin (1913)", ids: ["w-tresfontes"], texto: "Marxismo como herdeiro de três fontes: filosofia clássica alemã, economia política inglesa e socialismo francês." },
      { quem: "Hegel e Feuerbach", ids: ["p-hegel"], texto: "Marx herda a dialética e a alienação, mas inverte o idealismo e critica o materialismo contemplativo. Quanto fica de Hegel é debate (Lukács versus Althusser)." },
      { quem: "Smith e Ricardo", ids: ["p-ricardo"], texto: "Fonte do valor-trabalho. Marx critica a naturalização das categorias e distingue trabalho de força de trabalho." },
      { quem: "Utópicos", ids: ["g-utopicos"], texto: "Crítica social reconhecida, mas sem análise histórica do papel da classe trabalhadora (Manifesto, Engels 1880)." },
      { quem: "Proudhon e Lassalle", ids: ["p-proudhon","p-lassalle"], texto: "Alvos de crítica sobre reformar troca e crédito, e sobre salários e ajuda estatal. Proudhon também é precursor do anarquismo." },
      { quem: "Ponto de método", ids: ["c-criticaeconomia"], texto: "Conhecer a fonte ajuda a separar o que é herança do que é crítica e a ver onde os intérpretes divergem." }
    ]
  });
})();
