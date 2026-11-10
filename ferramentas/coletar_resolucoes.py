#!/usr/bin/env python3
"""
Lista os documentos de uma página de resoluções de partido e gera um CSV
no mesmo formato do documentos-a-coletar.csv, para você revisar à mão.

Uso:
    python3 coletar_resolucoes.py https://psol50.org.br/resolucoes/ saida.csv
    python3 coletar_resolucoes.py URL saida.csv --baixar-pdfs pasta_pdfs

O que faz:
  1. baixa a página (com pausa e identificação, sem sobrecarregar o site);
  2. extrai os links de PDFs e de páginas que parecem resoluções, teses
     ou programas;
  3. grava título (texto do link), link e ano, quando aparece no texto;
  4. opcional: baixa os PDFs e, se o comando `pdftotext` existir, extrai o
     texto para a mesma pasta, para você ler ou colar em um chat.

Só usa a biblioteca padrão. NÃO foi testado contra o site real (o ambiente
onde foi escrito não alcança o endereço). Se a página montar a lista por
JavaScript, o script não verá os links; nesse caso salve a página do
navegador como HTML e passe o caminho do arquivo no lugar da URL.
Documentos públicos apenas; respeite os termos de uso do site.
"""
import csv, os, re, shutil, subprocess, sys, time
from html.parser import HTMLParser
from urllib.parse import urljoin
from urllib.request import Request, urlopen

UA = "mapa-marxismo-coletor/1.0 (uso pessoal, pesquisa)"
PALAVRAS = re.compile(r"resolu|tese|programa|congresso|conferência|conferencia|manifesto|diretório|direcao|direção", re.I)

class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.out = []; self._href = None; self._txt = []
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            self._href = dict(attrs).get("href"); self._txt = []
    def handle_data(self, data):
        if self._href is not None: self._txt.append(data)
    def handle_endtag(self, tag):
        if tag == "a" and self._href:
            self.out.append((self._href, " ".join("".join(self._txt).split()))); self._href = None

def ler(origem):
    if os.path.exists(origem):
        return open(origem, encoding="utf-8", errors="replace").read()
    req = Request(origem, headers={"User-Agent": UA})
    return urlopen(req, timeout=30).read().decode("utf-8", errors="replace")

def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    origem, saida = sys.argv[1], sys.argv[2]
    pasta = sys.argv[sys.argv.index("--baixar-pdfs") + 1] if "--baixar-pdfs" in sys.argv else None
    p = Links(); p.feed(ler(origem))
    vistos, linhas = set(), []
    for href, txt in p.out:
        url = urljoin(origem, href) if origem.startswith("http") else href
        eh_pdf = url.lower().split("?")[0].endswith(".pdf")
        if url in vistos or not (eh_pdf or PALAVRAS.search(txt) or PALAVRAS.search(url)): continue
        vistos.add(url)
        ano = re.search(r"(19|20)\d\d", txt + " " + url)
        linhas.append(("PDF" if eh_pdf else "página", txt or "(sem texto)", ano.group(0) if ano else "", url))
    with open(saida, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f, quoting=csv.QUOTE_ALL)
        w.writerow(["id", "partido", "documento", "tipo", "ano", "link", "situacao", "observacao"])
        for i, (tipo, txt, ano, url) in enumerate(linhas, 1):
            w.writerow([f"auto-{i:03d}", "", txt, tipo, ano, url, "a revisar", ""])
    print(len(linhas), "links gravados em", saida)
    if pasta:
        os.makedirs(pasta, exist_ok=True)
        for i, (tipo, txt, ano, url) in enumerate(linhas, 1):
            if tipo != "PDF": continue
            destino = os.path.join(pasta, f"auto-{i:03d}.pdf")
            try:
                dados = urlopen(Request(url, headers={"User-Agent": UA}), timeout=60).read()
                open(destino, "wb").write(dados)
                if shutil.which("pdftotext"):
                    subprocess.run(["pdftotext", "-layout", destino, destino[:-4] + ".txt"], check=False)
            except Exception as e:
                print("falhou:", url, e)
            time.sleep(1.5)

if __name__ == "__main__":
    main()
