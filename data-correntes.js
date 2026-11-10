/* ------------------------------------------------------------------
   PRINCIPAIS CORRENTES DO MARXISMO
   Estende MAPA (carregue depois dos demais arquivos de dados).

   As correntes já existentes (II Internacional, bolcheviques,
   mencheviques, Comintern, estalinismo, trotskismo, maoísmo,
   eurocomunismo) ficam em data.js. Aqui entram as demais.

   Os anos são marcos aproximados, e os nomes de várias correntes
   (marxismo ocidental, por exemplo) são rótulos feitos depois, por
   críticos e historiadores, e não por quem está na corrente.
   Relações marcadas "leitura interpretativa" são hipóteses.
------------------------------------------------------------------- */
(function () {
  "use strict";
  const M = MAPA;

  const NOVOS = [
    ["g-socdem","group","Social-democracia e revisionismo",1899,"Corrente majoritária da II Internacional. Bernstein (1899) propõe reformas graduais e revisão das teses de Marx; Kautsky defende a ortodoxia, mas com estratégia parlamentar. Racha em 1914 com o apoio dos partidos à guerra e, depois, com a Revolução Russa.",0],
    ["g-conselhos","group","Comunismo de conselhos",1920,"Corrente de Pannekoek, Gorter e outros. Defende o poder de conselhos operários e critica o partido de vanguarda e a participação parlamentar. Lenin polemiza com ela em Esquerdismo (1920).",0],
    ["g-lux","group","Luxemburguismo",1904,"Linha de Rosa Luxemburgo: ênfase na ação espontânea das massas e na greve de massas, crítica ao centralismo de Lenin (1904) e à restrição da democracia após 1917 (1918). Também é crítica do reformismo de Bernstein.",0],
    ["g-austro","group","Austromarxismo",1904,"Otto Bauer, Max Adler, Hilferding e outros, em Viena. Atualizam o marxismo em temas como a questão nacional e o capital financeiro, e defendem um caminho democrático ao socialismo, distinto do bolchevique e do social-democrata alemão.",0],
    ["g-ocidental","group","Marxismo ocidental",1923,"Rótulo posterior para a tradição que, a partir de Lukács, Korsch e Gramsci, enfatiza filosofia, cultura e consciência, mais distante da prática dos partidos. Os limites da categoria são debatidos.",0],
    ["g-frankfurt","group","Escola de Frankfurt / teoria crítica",1923,"Instituto de Pesquisa Social (1923). Horkheimer, Adorno, Marcuse e Benjamin, entre outros: crítica da razão instrumental, da indústria cultural e do autoritarismo, com pouca vinculação a partidos.",0],
    ["g-althusser","group","Marxismo estruturalista (Althusser)",1965,"Para Marx e Ler O Capital (1965). Tese de uma ruptura epistemológica no Marx maduro, rejeição do humanismo e do historicismo, e leitura estrutural das formações sociais. Influencia Poulantzas.",0],
    ["g-guevarismo","group","Guevarismo e foquismo",1960,"Estratégia da Revolução Cubana, formulada por Guevara e Debray: um núcleo guerrilheiro (foco) cria as condições da revolução e substitui, em parte, o papel do partido. Influencia grupos brasileiros após 1964.",1],
    ["g-dependencia","group","Teoria marxista da dependência",1965,"Marini, Dos Santos, Bambirra e outros. Veem o subdesenvolvimento como parte do desenvolvimento do capitalismo mundial, com superexploração do trabalho na periferia. Debate com a dependência associada de Cardoso e Faletto.",1],
    ["g-operaismo","group","Operaísmo e autonomismo",1961,"Corrente italiana (Quaderni Rossi, 1961; Panzieri, Tronti, depois Negri). Parte da luta e da composição da classe operária, e não do partido, e acompanha as mudanças do trabalho.",0],
    ["g-feminismo","group","Feminismo marxista e reprodução social",1970,"Parte de Engels (1884) e do debate dos anos 1970 sobre trabalho doméstico. Estuda como a reprodução da força de trabalho se liga ao capital. Autoras como Lise Vogel e Silvia Federici divergem entre si.",0],
    ["g-ecomarx","group","Ecomarxismo e ecossocialismo",1988,"Releituras de Marx sobre a relação entre sociedade e natureza, como a ideia de falha metabólica (Foster) e o ecossocialismo (Löwy, Kovel). Ano aproximado.",0],
    ["g-latinoam","group","Marxismo latino-americano",1928,"Mariátegui (Sete Ensaios, 1928) liga o socialismo às questões indígena e camponesa e rejeita o transplante de modelos europeus. Inspira interpretações da formação nacional em vários países.",1],
    ["g-quarta","group","Quarta Internacional",1938,"Fundada por Trotsky em 1938, em oposição ao estalinismo e ao Comintern. Teve cisões a partir de 1953, e hoje há várias organizações que reivindicam o nome ou a herança.",0],
    ["g-morenismo","group","Morenismo",1960,"Corrente trotskista derivada do argentino Nahuel Moreno. Reúne organizações como a Liga Internacional dos Trabalhadores (LIT-QI), à qual o PSTU se vincula. Ano aproximado.",1],
    ["g-hoxhaismo","group","Hoxhaísmo",1978,"Corrente ligada ao albanês Enver Hoxha, que rompeu com a China em 1978 e passou a criticar o maoísmo e o titoísmo. Varia o quanto cada organização assume o rótulo.",0],
    ["g-titoismo","group","Titoísmo e autogestão iugoslava",1948,"Iugoslávia de Tito, expulsa do Cominform em 1948 por divergir de Moscou. Desenvolve um modelo de autogestão e um não alinhamento, criticados por outras correntes.",0],
    ["p-mariategui","person","José Carlos Mariátegui",1928,"Marxista peruano, fundador do Partido Socialista do Peru. Autor dos Sete Ensaios de Interpretação da Realidade Peruana e de divergências com a linha da Internacional na América Latina.",0],
    ["w-sete","work","Sete Ensaios de Interpretação da Realidade Peruana",1928,"Mariátegui analisa economia, terra, questão indígena, educação e religião no Peru e propõe um socialismo enraizado na realidade andina.",0]
  ];
  NOVOS.forEach((n) => M.nodes.push(n));
  Object.assign(M.eixos, { "w-sete": "a" });

  M.correnteIds = ["g-ii","g-bolch","g-mench","g-comintern","g-estal","g-trot","g-mao","g-euro"]
    .concat(NOVOS.filter((n) => n[1] === "group").map((n) => n[0]));

  const E = [
    /* social-democracia e reforma */
    ["p-bern","g-socdem","infl"],["p-kautsky","g-socdem","infl"],
    ["g-ii","g-socdem","contexto","Corrente majoritária da II Internacional."],
    ["g-socdem","c-reforma","trata"],
    ["w-reformaourev","g-socdem","critica","Luxemburgo responde a Bernstein."],
    ["w-renegado","g-socdem","critica","Lenin ataca a posição de Kautsky sobre democracia e ditadura do proletariado."],

    /* conselhos, luxemburguismo, operaísmo */
    ["g-conselhos","c-soviet","complementa","Leitura interpretativa: compartilha a ideia de conselhos, mas rejeita que o partido os dirija."],
    ["w-esq","g-conselhos","critica","Lenin responde a Gorter e Pannekoek sobre parlamento e partido."],
    ["g-conselhos","c-vanguarda","critica","Rejeita o partido de vanguarda como dirigente dos conselhos."],
    ["g-conselhos","c-autoemanc","complementa","Reforça a ideia de que a emancipação da classe é obra da própria classe."],
    ["p-lux","g-lux","infl"],
    ["g-lux","c-espont","trata"],["g-lux","w-luxrr","trata"],["g-lux","w-acumulacao","trata"],["g-lux","w-reformaourev","trata"],
    ["g-lux","c-cent","critica","Crítica ao centralismo rígido (1904) e à restrição da democracia (1918)."],
    ["g-conselhos","g-operaismo","infl","Leitura interpretativa: o operaísmo retoma a ênfase na autonomia da classe."],
    ["g-operaismo","c-vanguarda","critica","Parte da luta dos próprios operários, e não do partido."],
    ["g-operaismo","c-autoemanc","complementa","Leitura interpretativa."],

    /* austromarxismo e marxismo ocidental */
    ["p-hilf","g-austro","infl"],["g-austro","g-ii","contexto"],
    ["p-lukacs","g-ocidental","infl"],["p-gramsci","g-ocidental","infl"],
    ["g-ocidental","w-hcc","trata"],["g-ocidental","w-gramsci","trata"],
    ["g-ocidental","g-estal","critica","Distancia-se do marxismo soviético oficial, enfatizando filosofia e cultura. A classificação é debatida."],
    ["g-ocidental","g-frankfurt","contexto"],
    ["w-hcc","g-frankfurt","infl","Influência da reificação de Lukács na teoria crítica."],
    ["g-frankfurt","c-alienacao","trata"],
    ["g-althusser","g-ocidental","contexto","Parte dos autores o inclui na tradição ocidental, outra parte o opõe a ela."],
    ["g-althusser","c-alienacao","critica","Rejeita o humanismo teórico e a centralidade da alienação no Marx maduro."],
    ["g-althusser","c-inversao","critica","Enfatiza a ruptura com Hegel, contra a leitura de Lukács."],
    ["g-althusser","p-poul","infl"],

    /* ramos do trotskismo, do maoísmo e outros */
    ["g-trot","g-quarta","contexto","Organização internacional fundada por Trotsky."],
    ["g-quarta","g-estal","critica","Nasce em oposição ao estalinismo e ao Comintern."],
    ["g-trot","g-morenismo","contexto"],["g-quarta","g-morenismo","contexto","Parte da tradição trotskista que se separou em várias organizações."],
    ["g-morenismo","g-pstu","infl","O PSTU se vincula à LIT-QI."],
    ["g-morenismo","g-mes","infl","O MES do PSOL é classificado como morenista pela Wikipédia."],
    ["g-mao","g-hoxhaismo","contexto","Hoxha rompeu com a China em 1978."],
    ["g-hoxhaismo","g-mao","critica","Critica o maoísmo e o pós-Stalin soviético."],
    ["g-estal","g-hoxhaismo","infl","Reivindica o legado de Stalin."],
    ["g-hoxhaismo","g-pcr","infl","O PCR é próximo do Partido do Trabalho da Albânia, embora não se diga hoxhaísta."],
    ["g-estal","g-titoismo","critica","Moscou expulsa a Iugoslávia do Cominform em 1948."],
    ["g-titoismo","c-vanguarda","critica","Leitura interpretativa: a autogestão questiona o dirigismo do partido-Estado."],

    /* periferia e Brasil */
    ["p-guevara","g-guevarismo","infl"],["p-debray","g-guevarismo","infl"],
    ["g-guevarismo","w-guevara","trata"],["g-guevarismo","w-debray","trata"],["g-guevarismo","c-foco","trata"],
    ["g-guevarismo","c-vanguarda","critica","Desloca a vanguarda do partido para o núcleo guerrilheiro."],
    ["g-guevarismo","g-aln","infl"],
    ["p-marini","g-dependencia","infl"],["g-dependencia","w-marini","trata"],
    ["g-dependencia","p-fhc","critica","Debate com a dependência associada de Cardoso e Faletto."],
    ["g-latinoam","g-dependencia","contexto"],
    ["p-mariategui","g-latinoam","infl"],["p-mariategui","w-sete","autor"],
    ["g-latinoam","c-campesinato","complementa","Leitura interpretativa: o campesinato e o mundo indígena como sujeito."],
    ["g-latinoam","g-comintern","critica","Mariátegui divergiu da linha da Internacional na América Latina."],
    ["g-latinoam","p-caio","contexto","Interpretações marxistas da formação nacional."],

    /* novos sujeitos e temas */
    ["w-origem","g-feminismo","infl"],
    ["g-feminismo","c-lutaclasses","complementa","Amplia a análise para o trabalho doméstico e a reprodução da força de trabalho."],
    ["g-feminismo","c-valor","trata"],
    ["w-capital","g-ecomarx","infl","Leitura da relação sociedade e natureza a partir de O Capital."],
    ["g-ecomarx","w-dialnat","complementa","Leitura interpretativa: revê o debate sobre dialética da natureza."]
  ];
  E.forEach((e) => M.edges.push(e));

  M.debates.push({
    id: "d-correntes",
    titulo: "As principais correntes do marxismo",
    pergunta: "Onde as correntes divergem: reforma ou revolução, o papel do partido, filosofia e cultura, periferia e novos sujeitos.",
    nos: M.correnteIds.concat(["p-mariategui","c-reforma","c-vanguarda","c-soviet"]),
    posicoes: [
      { quem: "Reforma ou revolução", ids: ["g-socdem"], texto: "Social-democracia e revisionismo apostam em reformas graduais. Luxemburgo e Lenin discordam entre si, mas ambos rejeitam essa via." },
      { quem: "O papel do partido", ids: ["g-bolch"], texto: "Bolcheviques defendem um partido de vanguarda; conselhistas, luxemburguistas e operaístas dão mais peso à ação da própria classe." },
      { quem: "Filosofia e cultura", ids: ["g-ocidental"], texto: "Marxismo ocidental e teoria crítica enfatizam consciência e cultura; Althusser lê Marx por uma ruptura estrutural." },
      { quem: "Herdeiros de 1917", ids: ["g-estal"], texto: "Estalinismo, trotskismo (Quarta Internacional, morenismo), maoísmo, hoxhaísmo e titoísmo disputam a herança de 1917 e o balanço da URSS." },
      { quem: "Periferia", ids: ["g-dependencia"], texto: "Mariátegui, a teoria da dependência e o guevarismo pensam o capitalismo na periferia, com respostas estratégicas diferentes." },
      { quem: "Novos sujeitos e temas", ids: ["g-feminismo"], texto: "Feminismo marxista e ecomarxismo ampliam o que a análise do capital precisa explicar." },
      { quem: "Ponto de método", ids: ["g-ocidental"], texto: "Vários rótulos foram criados depois por críticos e historiadores. Use-os como mapa, não como identidade fixa." }
    ]
  });
})();
