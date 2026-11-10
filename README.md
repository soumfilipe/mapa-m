# Mapa do Leninismo

Mapa interativo de conceitos, obras, autores, movimentos e eventos ligados a Marx, Engels e à teoria leninista da revolução, com as discordâncias entre correntes e a leitura para o Brasil.

Site estático (HTML, CSS e JS puros, sem dependências nem build).

## Publicar no GitHub Pages

1. Crie um repositório (ex.: `mapa-leninismo`) e envie estes arquivos na raiz: `index.html`, `style.css`, `app.js`, `data.js`, `data-marx.js`, `README.md`.
2. No repositório: **Settings → Pages → Build and deployment**.
3. Em *Source*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em um ou dois minutos o site abre em `https://SEU-USUARIO.github.io/mapa-leninismo/`.

Para testar localmente basta abrir o `index.html` no navegador.

## Análise × estratégia

Cada conceito e cada obra tem um **eixo**, mostrado pela forma do ponto:

| Forma | Eixo | Significado |
|---|---|---|
| ● círculo | Análise | explica como a realidade funciona; pode ser testada e revista |
| ■ quadrado | Ponte | análise com implicação estratégica direta |
| ◆ losango | Estratégia | prescreve o que fazer: partido, alianças, via ao poder |

Autores, movimentos e eventos não têm eixo (são círculos).

- O modo **Análise × Estratégia** organiza o mapa em três faixas (mais a de atores e eventos), com o ano no eixo horizontal.
- A relação **Fundamenta** (laranja) liga uma análise a uma estratégia que se apoia nela. Se o diagnóstico cai, a estratégia perde esse apoio, mas pode se sustentar por outras razões. Onde não há linha, a decisão é política.
- Os chips ● ■ ◆ na barra de filtros escondem cada eixo.

## Marx e Engels

`data-marx.js` reúne o núcleo: materialismo histórico, luta de classes, base e superestrutura, mais-valia, acumulação e crises, alienação e reificação, Estado e bonapartismo, extinção do Estado, fases do comunismo, autoemancipação, Marx tardio (comuna russa, Irlanda) e a dialética da natureza. Cada ponto se liga ao leninismo e às correntes posteriores por três tipos de relação:

- **Complementa / atualiza** (azul): amplia ou corrige o conceito anterior (ex.: Engels 1890 e Gramsci, Estado ampliado e Poulantzas).
- **Crítica** (vermelho tracejado): discorda (ex.: Lukács sobre a dialética da natureza; Bakunin sobre o Estado transitório).
- **Fundamenta** (laranja): análise → estratégia.

O chip **Destacar Marx e Engels** ilumina esse núcleo no mapa.

## Como usar

- **Rede**: pontos ligados por relações. Clique em um ponto para ver o resumo, o eixo e todas as conexões.
- **Linha do tempo**: uma faixa por tipo, ordenado pelo ano do marco principal.
- **Debates**: 13 disputas com posições lado a lado; "Destacar no mapa" ilumina os nós envolvidos.
- **Busca**: digite um termo e pressione Enter para abrir o primeiro resultado.
- **Links diretos**: `...#c-quebrar` abre selecionado; `?modo=tempo` e `?modo=eixos` abrem em cada visualização.

## Como ampliar

Núcleo leninista em `data.js`; Marx, Engels e eixos em `data-marx.js`.

```js
// nó: [id, tipo, rótulo, ano, resumo, brasil(1/0)]
["c-novo", "concept", "Meu conceito", 1930, "Resumo curto.", 0],

// relação: [origem, destino, tipo, nota opcional]
["p-lenin", "c-novo", "trata", "Contexto da relação."],

// eixo (em data-marx.js, objeto M.eixos): "a", "m" ou "e"
"c-novo": "a",
```

Tipos de nó: `concept`, `work`, `person`, `group`, `event`.
Tipos de relação: `autor`, `trata`, `infl`, `critica`, `contexto`, `fundamenta`, `complementa`.
O primeiro item de cada posição em `debates` é o nó aberto ao clicar no nome.

## Atenção

Os resumos são material de apoio, escritos sem acesso às edições dos textos. **Confira datas, atribuições e interpretações nas fontes primárias antes de publicar.** Pontos de cuidado: a Introdução de Engels de 1895 e a carta a Zasulitch têm leituras muito disputadas, e a classificação por eixo é um juízo de interpretação (revise à vontade). Relações marcadas como "leitura interpretativa" são hipóteses de trabalho, não consensos, e são o lugar natural para o seu revisionismo: reescreva-as.

Para ler os textos: [Marxists Internet Archive em português](https://www.marxists.org/portugues/); edições recentes saem por Boitempo e Expressão Popular.
