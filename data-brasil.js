/* ------------------------------------------------------------------
   LINHAS DO DEBATE MARXISTA BRASILEIRO
   Estende MAPA (carregue depois de data-correntes.js).

   Cobre interpretações do Brasil, questão racial, Teologia da
   Libertação e a crítica do valor, para localizar o debate
   brasileiro no mapa das correntes.

   Resumos feitos do meu conhecimento, sem consulta a fontes nesta
   etapa. Confira datas e atribuições. Algumas ligações são
   "leitura interpretativa" (hipóteses para revisar).
------------------------------------------------------------------- */
(function () {
  "use strict";
  const M = MAPA;

  const NOVOS = [
    ["g-iseb","group","ISEB e nacional-desenvolvimentismo",1955,"Instituto Superior de Estudos Brasileiros (1955), com intelectuais de orientações diversas, parte deles marxistas, como Nelson Werneck Sodré. Defende desenvolvimento nacional contra o atraso e o imperialismo. É o alvo de rompimento da teoria da dependência.",1],
    ["g-seminario","group","Seminário Marx (USP)",1958,"Grupo de leitura coletiva de O Capital reunido por professores da USP a partir de 1958, com José Arthur Giannotti e outros, entre eles Fernando Henrique Cardoso e Roberto Schwarz. Dá base acadêmica às leituras uspianas de Marx. Ano aproximado.",1],
    ["g-negro","group","Marxismo e questão racial no Brasil",1959,"Clóvis Moura (Rebeliões da Senzala, 1959), Florestan Fernandes (1964) e, com diálogo crítico, Lélia Gonzalez. Discutem se raça é uma dimensão da classe ou um eixo próprio de opressão. Há divergências entre os autores.",1],
    ["g-teologia","group","Teologia da Libertação e CEBs",1971,"Corrente cristã latino-americana (Gutiérrez, 1971), em diálogo com categorias marxistas. As comunidades eclesiais de base e a Comissão Pastoral da Terra contribuíram para o PT e o MST. A relação com o marxismo foi controversa dentro da Igreja.",1],
    ["g-valor","group","Crítica do valor (Wertkritik)",1986,"Corrente alemã do grupo Krisis, com Robert Kurz. Relê Marx a partir da forma-valor e do fetichismo e critica o marxismo do movimento operário. Teve recepção no Brasil. Ano aproximado.",1],

    ["p-moura","person","Clóvis Moura",1959,"Sociólogo e historiador brasileiro. Autor de Rebeliões da Senzala (1959), que analisa a resistência dos escravizados com categorias marxistas.",1],
    ["p-lelia","person","Lélia Gonzalez",1984,"Intelectual brasileira, autora de textos sobre racismo e sexismo na cultura brasileira. Dialoga criticamente com o marxismo.",1],
    ["p-chico","person","Francisco de Oliveira",1972,"Sociólogo brasileiro, autor de Crítica à Razão Dualista (1972) e crítico do dualismo atraso/moderno nas leituras do Brasil.",1],
    ["p-kurz","person","Robert Kurz",1991,"Teórico alemão da crítica do valor. Autor de O Colapso da Modernização (1991).",0],

    ["w-rebelioes","work","Rebeliões da Senzala",1959,"Clóvis Moura analisa a resistência de escravizados no Brasil como parte da luta de classes.",1],
    ["w-integracao","work","A Integração do Negro na Sociedade de Classes",1964,"Florestan Fernandes estuda a posição da população negra na transição para a sociedade de classes em São Paulo.",1],
    ["w-razao","work","Crítica à Razão Dualista",1972,"Chico de Oliveira argumenta que atraso e modernidade se reforçam mutuamente no capitalismo brasileiro, contra leituras dualistas.",1],
    ["w-colapso","work","O Colapso da Modernização",1991,"Kurz interpreta o fim do socialismo de Estado e a crise da periferia a partir da crise do trabalho abstrato.",0]
  ];
  NOVOS.forEach((n) => M.nodes.push(n));
  Object.assign(M.eixos, { "w-rebelioes": "a", "w-integracao": "a", "w-razao": "a", "w-colapso": "a" });

  NOVOS.filter((n) => n[1] === "group").forEach((n) => M.correnteIds.push(n[0]));

  const E = [
    /* nacional-desenvolvimentismo e uspianos */
    ["p-sodre","g-iseb","contexto","Sodré foi professor do ISEB."],
    ["g-iseb","g-pcb","contexto","Tese da revolução nacional-democrática próxima à linha do PCB, embora o ISEB reunisse orientações diversas."],
    ["g-dependencia","g-iseb","critica","A teoria da dependência rompe com o nacional-desenvolvimentismo."],
    ["g-seminario","w-capital","trata","Leitura coletiva de O Capital."],
    ["g-seminario","p-fhc","contexto","Fernando Henrique Cardoso participou do grupo."],
    ["p-chico","w-razao","autor"],
    ["w-razao","w-caio","contexto","Leitura interpretativa: debate sobre atraso e modernidade na formação do Brasil."],
    ["w-razao","w-flo","contexto","Leitura interpretativa: dialoga com a tese da revolução burguesa atípica."],

    /* questão racial */
    ["p-moura","g-negro","infl"],["p-flo","g-negro","infl"],["p-lelia","g-negro","infl"],
    ["p-moura","w-rebelioes","autor"],["p-flo","w-integracao","autor"],
    ["g-negro","w-rebelioes","trata"],["g-negro","w-integracao","trata"],
    ["g-negro","c-lutaclasses","complementa","Debate se raça é dimensão da classe ou eixo próprio de opressão; os autores divergem."],
    ["g-negro","g-feminismo","complementa","Leitura interpretativa: cruzam raça, gênero e classe."],

    /* religião e movimentos */
    ["g-teologia","g-mst","infl","A Comissão Pastoral da Terra e as comunidades de base apoiaram a organização camponesa."],
    ["g-teologia","g-pt","contexto","As comunidades de base contribuíram para a formação do PT."],
    ["g-teologia","c-lutaclasses","contexto","Dialoga com categorias marxistas; a relação foi controversa na Igreja."],

    /* crítica do valor */
    ["p-kurz","g-valor","infl"],["p-kurz","w-colapso","autor"],["g-valor","w-colapso","trata"],
    ["g-valor","c-valor","critica","Relê o valor como forma social a superar, e não como bandeira de defesa do trabalho."],
    ["g-valor","c-lutaclasses","critica","Questiona a centralidade da luta de classes tradicional."],
    ["g-valor","c-prec","complementa","Leitura interpretativa: crise do trabalho e exclusão."],
    ["g-valor","p-antunes","critica","Antunes defende a centralidade do trabalho hoje; a crítica do valor a questiona."]
  ];
  E.forEach((e) => M.edges.push(e));

  M.debates.push({
    id: "d-brasil",
    titulo: "Linhas do debate marxista brasileiro",
    pergunta: "Interpretações do Brasil, raça e classe, fé e luta, e o futuro do trabalho: onde as linhas se encontram e divergem.",
    nos: ["g-iseb","g-seminario","g-negro","g-teologia","g-valor","g-dependencia","g-pcb","g-mst","g-pt","p-caio","p-sodre","p-flo","p-chico","p-moura","p-lelia","p-kurz","p-antunes","p-marini","p-fhc","w-razao","w-integracao","w-rebelioes","w-colapso"],
    posicoes: [
      { quem: "Formação nacional", ids: ["p-caio"], texto: "Caio Prado, Sodré e o ISEB debatem atraso, feudalismo, imperialismo e burguesia nacional." },
      { quem: "Dependência e dualismo", ids: ["g-dependencia"], texto: "Marini rompe com o desenvolvimentismo; Cardoso defende dependência associada; Chico de Oliveira critica o dualismo." },
      { quem: "Raça e classe", ids: ["g-negro"], texto: "Moura e Florestan analisam a escravidão e o racismo com categorias de classe; os autores divergem sobre a relação entre os dois." },
      { quem: "Fé e luta", ids: ["g-teologia"], texto: "Teologia da Libertação e CEBs aproximam fé e luta social, com relação controversa com o marxismo." },
      { quem: "O futuro do trabalho", ids: ["p-antunes"], texto: "Antunes defende a centralidade do trabalho; a crítica do valor (Kurz) a questiona." },
      { quem: "Ponto de método", ids: ["g-seminario"], texto: "Muitas dessas linhas nasceram da universidade e do movimento ao mesmo tempo. Vale cruzar obra, grupo e organização." }
    ]
  });
})();
