(function () {
  "use strict";

  const D = MAPA;
  const NS = "http://www.w3.org/2000/svg";
  const $ = (s, r) => (r || document).querySelector(s);
  const svgEl = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  /* ---------------- dados ---------------- */
  const EIX = D.eixos || {};
  const nodes = D.nodes.map(([id, type, label, year, summary, br]) => ({
    id, type, label, year, summary, br: !!br, eixo: EIX[id] || "", partido: (D.partidos||{})[id] || null,
    x: 0, y: 0, vx: 0, vy: 0, deg: 0, visible: true, fixed: false
  }));
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const edges = [];
  D.edges.forEach(([a, b, kind, note]) => {
    const s = byId.get(a), t = byId.get(b);
    if (!s || !t) { console.warn("Relação com id inexistente:", a, b); return; }
    edges.push({ s, t, kind, note: note || "", visible: true });
    s.deg++; t.deg++;
  });

  const state = {
    mode: "rede", hiddenTypes: new Set(), hiddenKinds: new Set(), hiddenEixos: new Set(),
    br: false, marx: false, part: false, sel: null, debate: null, q: ""
  };

  /* ---------------- posições iniciais ---------------- */
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const lane = { concept: 0, work: 1, person: 2, group: 3, event: 4 };
  nodes.forEach((n) => {
    const a = (lane[n.type] / 5) * Math.PI * 2 + (rnd() - 0.5) * 0.9;
    const r = 160 + rnd() * 300;
    n.x = Math.cos(a) * r; n.y = Math.sin(a) * r;
  });

  /* ---------------- SVG ---------------- */
  const svg = $("#svg"), vp = $("#vp");
  const gEdges = $("#edges"), gNodes = $("#nodes"), gAxis = $("#axis");

  edges.forEach((e) => {
    const k = D.kinds[e.kind];
    const attrs = { class: "edge k-" + e.kind, stroke: k.color };
    if (k.dash) attrs["stroke-dasharray"] = k.dash;
    e.line = svgEl("line", attrs, gEdges);
  });

  nodes.forEach((n) => {
    const g = svgEl("g", { class: "node" + (n.br ? " br" : ""), "data-id": n.id }, gNodes);
    n.r = 6 + Math.sqrt(n.deg) * 2.3;
    const fill = D.types[n.type].color;
    if (n.eixo === "e") {
      const R = n.r * 1.3;
      svgEl("polygon", { class: "sh", points: "0," + (-R) + " " + R + ",0 0," + R + " " + (-R) + ",0", fill }, g);
    } else if (n.eixo === "m") {
      svgEl("rect", { class: "sh", x: -n.r, y: -n.r, width: n.r * 2, height: n.r * 2, rx: 3, fill }, g);
    } else {
      svgEl("circle", { class: "sh", r: n.r, fill }, g);
    }
    const t = svgEl("text", { x: n.r + 4, y: 4 }, g);
    t.textContent = n.label;
    const title = svgEl("title", {}, g);
    title.textContent = n.label + " (" + n.year + ")";
    n.g = g; n.text = t;
  });

  /* eixo do tempo */
  const YMIN = 1860, YMAX = 2030, TW = 3600;
  const tx = (y) => ((y - YMIN) / (YMAX - YMIN)) * TW - TW / 2;
  const axisLines = [], axisTexts = [];
  for (let y = 1875; y <= 2025; y += 25) {
    const g = svgEl("g", { class: "axis" }, gAxis);
    axisLines.push(svgEl("line", { x1: tx(y), x2: tx(y), y1: -300, y2: 300 }, g));
    const t = svgEl("text", { x: tx(y) + 4, y: -310 }, g);
    t.textContent = y; axisTexts.push(t);
  }
  const isTL = () => state.mode !== "rede";
  const EIX_LANES = [["a", "Análise: como a realidade funciona"], ["m", "Ponte: análise com implicação estratégica"], ["e", "Estratégia: o que fazer politicamente"], ["", "Atores e eventos"]];
  const laneGroup = svgEl("g", {}, gAxis);
  function computeTimeline() {
    const rowH = 26, gap = 90; let yOff = 0;
    while (laneGroup.firstChild) laneGroup.removeChild(laneGroup.firstChild);
    const lanes = state.mode === "eixos"
      ? EIX_LANES.map(([k, name]) => ({ name, test: (n) => (n.eixo || "") === k }))
      : Object.keys(lane).sort((a, b) => lane[a] - lane[b]).map((t) => ({ name: D.types[t].label, test: (n) => n.type === t }));
    const labels = [];
    lanes.forEach((L) => {
      const list = nodes.filter((n) => n.visible && L.test(n))
        .sort((a, b) => a.year - b.year || a.label.localeCompare(b.label));
      const rowsEnd = [];
      list.forEach((n) => {
        const x = tx(n.year), w = n.label.length * 5.9 + n.r * 2 + 18;
        let r = rowsEnd.findIndex((e) => e < x);
        if (r < 0) { r = rowsEnd.length; rowsEnd.push(0); }
        rowsEnd[r] = x + w; n.tx = x; n.ty = yOff + r * rowH;
      });
      if (list.length) {
        labels.push({ name: L.name, y: yOff - 30 });
        yOff += Math.max(rowsEnd.length, 1) * rowH + gap;
      }
    });
    const vis = nodes.filter((n) => n.visible);
    if (!vis.length) return;
    const lo = Math.min.apply(null, vis.map((n) => n.ty)), hi = Math.max.apply(null, vis.map((n) => n.ty));
    const mid = (lo + hi) / 2;
    vis.forEach((n) => { n.ty -= mid; });
    labels.forEach((l) => {
      const t = svgEl("text", { class: "lanetxt", x: tx(YMIN) + 8, y: l.y - mid }, laneGroup);
      t.textContent = l.name;
    });
    axisLines.forEach((l) => { l.setAttribute("y1", lo - mid - 60); l.setAttribute("y2", hi - mid + 30); });
    axisTexts.forEach((t) => t.setAttribute("y", lo - mid - 68));
  }
  gAxis.style.display = "none";

  /* ---------------- simulação ---------------- */
  let alpha = 1, running = false, needFit = true;

  function step() {
    const tl = isTL();
    const vis = nodes.filter((n) => n.visible);
    if (tl) {
      vis.forEach((n) => { n.x += (n.tx - n.x) * 0.3; n.y += (n.ty - n.y) * 0.3; });
      alpha *= 0.985; return;
    }
    for (let i = 0; i < vis.length; i++) {
      const a = vis[i];
      for (let j = i + 1; j < vis.length; j++) {
        const b = vis[j];
        let dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy;
        if (d2 < 1) { dx = rnd() - 0.5; dy = rnd() - 0.5; d2 = 1; }
        const d = Math.sqrt(d2);
        let fx, fy;
        if (tl) {
          const min = 92;
          if (d >= min) continue;
          const push = (min - d) * 0.16;
          fx = (dx / d) * push * 0.2; fy = (dy / d) * push;
        } else {
          if (d > 760) continue;
          const f = (11000 * alpha) / (d2 + 500);
          fx = (dx / d) * f; fy = (dy / d) * f;
        }
        a.vx -= fx; a.vy -= fy; b.vx += fx; b.vy += fy;
      }
    }
    if (!tl) {
      edges.forEach((e) => {
        if (!e.visible) return;
        const a = e.s, b = e.t;
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
        const L = e.kind === "autor" ? 60 : 130, k = e.kind === "autor" ? 0.07 : 0.024;
        const f = (d - L) * k * Math.max(alpha, 0.25);
        const fx = (dx / d) * f, fy = (dy / d) * f;
        a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
      });
    }
    vis.forEach((n) => {
      if (tl) {
        n.vx += (tx(n.year) - n.x) * 0.1;
        n.vy += (laneY(n.type) - n.y) * 0.012;
      } else {
        n.vx -= n.x * 0.0022; n.vy -= n.y * 0.0022;
      }
      n.vx *= 0.78; n.vy *= 0.78;
      if (!n.fixed) { n.x += n.vx; n.y += n.vy; }
    });
    alpha *= 0.985;
  }

  function draw() {
    nodes.forEach((n) => {
      if (n.visible) n.g.setAttribute("transform", "translate(" + n.x.toFixed(1) + "," + n.y.toFixed(1) + ")");
    });
    edges.forEach((e) => {
      if (!e.visible) return;
      e.line.setAttribute("x1", e.s.x.toFixed(1)); e.line.setAttribute("y1", e.s.y.toFixed(1));
      e.line.setAttribute("x2", e.t.x.toFixed(1)); e.line.setAttribute("y2", e.t.y.toFixed(1));
    });
  }

  function loop() {
    step(); draw();
    if (needFit && alpha < 0.3) { fit(); needFit = false; }
    if (alpha > 0.02) requestAnimationFrame(loop);
    else running = false;
  }
  function reheat(a) {
    alpha = Math.max(alpha, a);
    if (!running) { running = true; requestAnimationFrame(loop); }
  }

  /* ---------------- câmera ---------------- */
  const view = { x: 0, y: 0, k: 1 };
  function applyView() {
    vp.setAttribute("transform", "translate(" + view.x + "," + view.y + ") scale(" + view.k + ")");
    updateLabels();
  }
  function toWorld(cx, cy) {
    const r = svg.getBoundingClientRect();
    return { x: (cx - r.left - view.x) / view.k, y: (cy - r.top - view.y) / view.k };
  }
  function zoomAt(cx, cy, f) {
    const r = svg.getBoundingClientRect();
    const px = cx - r.left, py = cy - r.top;
    const k = Math.min(4, Math.max(0.12, view.k * f));
    const real = k / view.k;
    view.x = px - (px - view.x) * real; view.y = py - (py - view.y) * real; view.k = k;
    applyView();
  }
  function fit() {
    const vis = nodes.filter((n) => n.visible);
    if (!vis.length) return;
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    vis.forEach((n) => { x0 = Math.min(x0, n.x); x1 = Math.max(x1, n.x); y0 = Math.min(y0, n.y); y1 = Math.max(y1, n.y); });
    if (isTL()) y0 -= 80;
    const w = svg.clientWidth, h = svg.clientHeight;
    const bw = x1 - x0 + 200, bh = y1 - y0 + 140;
    let k = Math.max(0.12, Math.min(w / bw, h / bh, 1.4));
    if (isTL()) k = Math.max(k, 0.6);
    view.k = k;
    view.x = isTL() && k * bw > w ? 24 - x0 * k : w / 2 - ((x0 + x1) / 2) * k;
    view.y = h / 2 - ((y0 + y1) / 2) * k;
    applyView();
  }
  function centerOn(n) {
    const w = svg.clientWidth, h = svg.clientHeight;
    view.x = w / 2 - n.x * view.k; view.y = h / 2 - n.y * view.k;
    applyView();
  }

  svg.addEventListener("wheel", (e) => {
    e.preventDefault();
    zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.0015));
  }, { passive: false });

  const ptrs = new Map();
  let drag = null, pinch = null;
  svg.addEventListener("pointerdown", (e) => {
    try { svg.setPointerCapture(e.pointerId); } catch (_) {}
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) };
      if (drag && drag.node) drag.node.fixed = false;
      drag = null; return;
    }
    const g = e.target.closest ? e.target.closest(".node") : null;
    drag = { node: g ? byId.get(g.getAttribute("data-id")) : null, sx: e.clientX, sy: e.clientY, moved: false, vx: view.x, vy: view.y };
    if (drag.node) drag.node.fixed = true;
  });
  svg.addEventListener("pointermove", (e) => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, d / pinch.d);
      pinch.d = d; return;
    }
    if (!drag) return;
    const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (!drag.moved && Math.hypot(dx, dy) > 5) drag.moved = true;
    if (!drag.moved) return;
    if (drag.node) {
      const w = toWorld(e.clientX, e.clientY);
      drag.node.x = w.x; drag.node.y = w.y; drag.node.vx = drag.node.vy = 0;
      reheat(0.3); draw();
    } else {
      view.x = drag.vx + dx; view.y = drag.vy + dy; applyView();
    }
  });
  function endPtr(e) {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.delete(e.pointerId);
    if (pinch) { if (ptrs.size < 2) pinch = null; drag = null; return; }
    if (drag) {
      if (drag.node) { drag.node.fixed = false; if (!drag.moved) select(drag.node.id); }
      else if (!drag.moved) clearSel();
      drag = null;
    }
  }
  svg.addEventListener("pointerup", endPtr);
  svg.addEventListener("pointercancel", endPtr);

  /* ---------------- foco, filtros, rótulos ---------------- */
  function applyFocus() {
    let fs = null, mode = null;
    if (state.sel) {
      fs = new Set([state.sel]);
      edges.forEach((e) => {
        if (e.s.id === state.sel) fs.add(e.t.id);
        if (e.t.id === state.sel) fs.add(e.s.id);
      });
      mode = "sel";
    } else if (state.debate) {
      fs = new Set(state.debate.nos); mode = "set";
    } else if (state.q) {
      const q = norm(state.q);
      fs = new Set(nodes.filter((n) => norm(n.label + " " + n.summary).includes(q)).map((n) => n.id));
      mode = "set";
    } else if (state.br || state.marx || state.part) {
      fs = new Set();
      if (state.br) nodes.forEach((n) => { if (n.br) fs.add(n.id); });
      if (state.part) (D.partidoIds || []).forEach((id) => fs.add(id));
      if (state.marx) (D.marxIds || []).forEach((id) => fs.add(id));
      mode = "set";
    }
    state.focus = fs;
    nodes.forEach((n) => {
      n.g.classList.toggle("dim", !!fs && !fs.has(n.id));
      n.g.classList.toggle("sel", n.id === state.sel);
    });
    edges.forEach((e) => {
      let on = true;
      if (fs) on = mode === "sel" ? (e.s.id === state.sel || e.t.id === state.sel) : (fs.has(e.s.id) && fs.has(e.t.id));
      e.line.classList.toggle("dim", !on);
      e.line.classList.toggle("hl", !!fs && on);
    });
    updateLabels();
    renderBanner();
  }

  function updateLabels() {
    const thr = isTL() ? 0.85 : 1.5;
    nodes.forEach((n) => {
      let show;
      if (state.focus) show = state.focus.has(n.id);
      else show = isTL() ? true : (n.deg >= 5 || view.k > thr);
      n.text.style.display = show ? "" : "none";
    });
  }

  function applyFilters() {
    nodes.forEach((n) => {
      n.visible = !state.hiddenTypes.has(n.type) && !(n.eixo && state.hiddenEixos.has(n.eixo));
      n.g.style.display = n.visible ? "" : "none";
    });
    edges.forEach((e) => {
      e.visible = e.s.visible && e.t.visible && !state.hiddenKinds.has(e.kind);
      e.line.style.display = e.visible ? "" : "none";
    });
    if (isTL()) { computeTimeline(); for (let i = 0; i < 40; i++) step(); }
    draw(); reheat(0.5);
  }

  function renderBanner() {
    const b = $("#banner");
    if (state.debate && !state.sel) {
      b.hidden = false;
      b.innerHTML = "<span>Debate: " + esc(state.debate.titulo) + "</span><button type=\"button\">limpar</button>";
      b.querySelector("button").onclick = () => { state.debate = null; applyFocus(); };
    } else b.hidden = true;
  }

  /* ---------------- seleção e painel ---------------- */
  function select(id) {
    const n = byId.get(id); if (!n) return;
    state.sel = id; state.debate = state.debate; // mantém contexto do debate em segundo plano
    applyFocus(); renderDetail(n); showTab("detalhe"); centerOn(n);
    try { history.replaceState(null, "", "#" + id); } catch (_) {}
  }
  function clearSel() {
    state.sel = null; applyFocus(); renderDetail(null);
    try { history.replaceState(null, "", location.pathname + location.search); } catch (_) {}
  }

  const kindOrder = ["critica", "complementa", "fundamenta", "infl", "trata", "contexto", "autor"];
  function renderDetail(n) {
    const box = $("#tab-detalhe");
    if (!n) {
      box.innerHTML =
        "<p class=\"hint\">Toque ou clique em um ponto para ver o resumo e todas as relações. Conceitos e obras têm um <b>eixo</b>: análise (●), ponte (■) ou estratégia (◆). Use o modo <b>Análise × Estratégia</b> para ver os dois lados separados.</p>" +
        "<p class=\"hint\">Sugestões para começar: <a href=\"#c-vanguarda\" data-go=\"c-vanguarda\" style=\"color:var(--accent)\">Partido de vanguarda</a>, " +
        "<a href=\"#c-quebrar\" data-go=\"c-quebrar\" style=\"color:var(--accent)\">Quebrar o Estado</a>, " +
        "<a href=\"#c-etapa\" data-go=\"c-etapa\" style=\"color:var(--accent)\">Revolução por etapas</a>, " +
        "<a href=\"#c-estadoclasse\" data-go=\"c-estadoclasse\" style=\"color:var(--accent)\">Estado como instrumento de classe</a>. " +
        "Ou abra a aba <b>Debates</b>.</p>";
      bindGo(box); return;
    }
    const type = D.types[n.type];
    const groups = {};
    edges.forEach((e) => {
      if (e.s === n || e.t === n) {
        const out = e.s === n, other = out ? e.t : e.s;
        (groups[e.kind] = groups[e.kind] || []).push({ out, other, note: e.note });
      }
    });
    let html = "<span class=\"pill type\" style=\"background:" + type.color + "\">" + esc(type.label) + "</span>" +
      "<span class=\"pill\">" + esc(n.year) + "</span>" + (n.br ? "<span class=\"pill br\">Brasil</span>" : "") +
      (n.eixo ? "<span class=\"pill eixo " + n.eixo + "\">" + esc(D.eixoInfo[n.eixo].label) + "</span>" : "") +
      (n.partido ? "<span class=\"pill eixo\">" + esc(D.formasPartido[n.partido.forma]) + "</span>" : "") +
      "<h2>" + esc(n.label) + "</h2><p class=\"lead\">" + esc(n.summary) + "</p>" +
      (n.eixo ? "<p class=\"eixonote\"><b>Eixo: " + esc(D.eixoInfo[n.eixo].label) + ".</b> " + esc(D.eixoInfo[n.eixo].desc) + "</p>" : "") +
      (n.partido ? "<p class=\"eixonote\"><b>Partido e teoria.</b> " + esc(n.partido.nota) + "</p>" : "");
    const titles = { critica: "Discordâncias e críticas", complementa: "Complementos e atualizações", fundamenta: "Da análise à estratégia", infl: "Influências", trata: "Conceitos e obras", contexto: "Contexto histórico", autor: "Autoria" };
    kindOrder.forEach((k) => {
      const list = groups[k]; if (!list) return;
      html += "<h3>" + titles[k] + "</h3><ul class=\"rel\">";
      list.forEach((it) => {
        const rel = it.out ? D.kinds[k].label : D.kinds[k].rev;
        html += "<li><span class=\"k " + k + "\">" + esc(rel) + "</span><a data-go=\"" + it.other.id + "\">" + esc(it.other.label) + "</a>" +
          (it.note ? "<span class=\"note\">" + esc(it.note) + "</span>" : "") + "</li>";
      });
      html += "</ul>";
    });
    box.innerHTML = html; box.scrollTop = 0; bindGo(box);
  }
  function bindGo(root) {
    root.querySelectorAll("[data-go]").forEach((a) => {
      a.addEventListener("click", (ev) => { ev.preventDefault(); select(a.getAttribute("data-go")); });
    });
  }

  /* abas */
  function showTab(name) {
    document.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("on", b.dataset.tab === name));
    ["detalhe", "debates", "sobre"].forEach((t) => $("#tab-" + t).classList.toggle("on", t === name));
  }
  document.querySelectorAll(".tabs button").forEach((b) => b.addEventListener("click", () => showTab(b.dataset.tab)));

  /* debates */
  function renderDebates() {
    const box = $("#tab-debates");
    let html = "<p class=\"hint\">Cada debate reúne posições concorrentes. Use “Destacar no mapa” e depois toque nos nomes para abrir os autores.</p>";
    D.debates.forEach((d) => {
      html += "<div class=\"card\"><h4>" + esc(d.titulo) + "</h4><p>" + esc(d.pergunta) + "</p>" +
        "<button class=\"go\" type=\"button\" data-debate=\"" + d.id + "\">Destacar no mapa</button>";
      d.posicoes.forEach((p) => {
        html += "<div class=\"pos\"><b data-go=\"" + p.ids[0] + "\">" + esc(p.quem) + "</b>: " + esc(p.texto) + "</div>";
      });
      html += "</div>";
    });
    box.innerHTML = html; bindGo(box);
    box.querySelectorAll("[data-debate]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.debate = D.debates.find((d) => d.id === btn.dataset.debate);
        state.sel = null; renderDetail(null); applyFocus();
        const hit = state.debate.nos.map((id) => byId.get(id)).filter((n) => n && n.visible);
        if (hit.length) {
          const cx = hit.reduce((s, n) => s + n.x, 0) / hit.length, cy = hit.reduce((s, n) => s + n.y, 0) / hit.length;
          view.x = svg.clientWidth / 2 - cx * view.k; view.y = svg.clientHeight / 2 - cy * view.k; applyView();
        }
      });
    });
  }

  /* sobre */
  function renderAbout() {
    let leg = "<div class=\"legend\">";
    Object.keys(D.types).forEach((k) => {
      leg += "<span class=\"dot\" style=\"background:" + D.types[k].color + "\"></span><span>" + esc(D.types[k].label) + "</span>";
    });
    Object.keys(D.kinds).forEach((k) => {
      const kd = D.kinds[k];
      leg += "<span class=\"ln\" style=\"border-top-color:" + kd.color + ";border-top-style:" + (kd.dash ? "dashed" : "solid") + "\"></span><span>" + esc(kd.chip) + "</span>";
    });
    leg += "</div>";
    const shapes = "<div class=\"legend\"><span class=\"glyph big\">●</span><span>Análise: explica como a realidade funciona</span>" +
      "<span class=\"glyph big\">■</span><span>Ponte: análise com implicação estratégica direta</span>" +
      "<span class=\"glyph big\">◆</span><span>Estratégia: prescreve o que fazer politicamente</span></div>";
    $("#tab-sobre").innerHTML =
      "<div class=\"sobre\">" + leg +
      "<h3>Análise e estratégia</h3>" + shapes +
      "<p>Conceitos e obras têm forma própria. <b>Análise</b> são enunciados que podem ser testados e revistos com novos dados (como o capitalismo funciona, qual a formação social). <b>Estratégia</b> são decisões sobre o que fazer (partido, alianças, via ao poder). A relação <i>Fundamenta</i> mostra onde uma estratégia se apoia numa análise. Onde não há essa ligação, é escolha política. Revisar a análise não obriga a trocar a estratégia, e vice-versa.</p>" +
      "<p><b>Como ler.</b> Cada ponto é um conceito, obra, autor, movimento ou evento. Linhas tracejadas vermelhas mostram críticas e discordâncias. Pontos com borda rosa são brasileiros. O tamanho do ponto cresce com o número de conexões.</p>" +
      "<p><b>Linha do tempo.</b> O ano de cada ponto é o marco principal (obra, fundação ou formulação), e não o nascimento.</p>" +
      "<p><b>Aviso.</b> Os resumos são apoio de estudo. Datas, atribuições e interpretações precisam ser conferidas nas fontes primárias antes de uso público. Relações marcadas como “leitura interpretativa” são hipóteses, não consensos.</p>" +
      "<p><b>Origens das críticas.</b> Hegel, Feuerbach, Smith, Ricardo, os utópicos, Proudhon e Lassalle aparecem como alvos ou fontes de Marx. O debate <i>De onde vêm as críticas de Marx?</i> reúne o conjunto.</p>" +
      "<p><b>Partidos e correntes.</b> Muitos partidos brasileiros são de correntes ou de frente, e a teoria marxista costuma estar em alas, e não no partido inteiro. O chip <i>Destacar partidos</i> mostra o conjunto. As classificações vêm de fontes públicas e das autodescrições dos grupos; confira antes de usar.</p>" +
      "<p><b>Para ler os textos.</b> O acervo em português do <a href=\"https://www.marxists.org/portugues/\" target=\"_blank\" rel=\"noopener\">Marxists Internet Archive</a> reúne muitas das obras citadas; edições recentes saem por editoras como Boitempo e Expressão Popular.</p>" +
      "<p><b>Para ampliar.</b> Edite <code>data.js</code> (núcleo leninista) e <code>data-marx.js</code> (Marx, Engels e a classificação por eixos): acrescente nós e relações e o mapa se reorganiza sozinho.</p></div>";
  }

  /* filtros (chips) */
  function renderBar() {
    const bar = $("#bar"); bar.innerHTML = "";
    const mk = (cls, html, onClick, off) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "chip " + cls + (off ? " off" : ""); b.innerHTML = html;
      b.addEventListener("click", () => onClick(b)); bar.appendChild(b); return b;
    };
    Object.keys(D.types).forEach((k) => {
      const n = nodes.filter((x) => x.type === k).length;
      mk("", "<span class=\"dot\" style=\"background:" + D.types[k].color + "\"></span>" + esc(D.types[k].label) + " · " + n, (b) => {
        if (state.hiddenTypes.has(k)) state.hiddenTypes.delete(k); else state.hiddenTypes.add(k);
        b.classList.toggle("off", state.hiddenTypes.has(k)); applyFilters();
      });
    });
    const s = document.createElement("span"); s.className = "sep"; bar.appendChild(s);
    Object.keys(D.kinds).forEach((k) => {
      const kd = D.kinds[k];
      mk("", "<span class=\"ln\" style=\"border-top-color:" + kd.color + ";border-top-style:" + (kd.dash ? "dashed" : "solid") + "\"></span>" + esc(kd.chip), (b) => {
        if (state.hiddenKinds.has(k)) state.hiddenKinds.delete(k); else state.hiddenKinds.add(k);
        b.classList.toggle("off", state.hiddenKinds.has(k)); applyFilters();
      });
    });
    const sE = document.createElement("span"); sE.className = "sep"; bar.appendChild(sE);
    const EG = { a: "●", m: "■", e: "◆" };
    ["a", "m", "e"].forEach((k) => {
      mk("", "<span class=\"glyph\">" + EG[k] + "</span>" + esc(D.eixoInfo[k].label), (b) => {
        if (state.hiddenEixos.has(k)) state.hiddenEixos.delete(k); else state.hiddenEixos.add(k);
        b.classList.toggle("off", state.hiddenEixos.has(k)); applyFilters();
      });
    });
    const s2 = document.createElement("span"); s2.className = "sep"; bar.appendChild(s2);
    mk("br", "Destacar Marx e Engels", (b) => {
      state.marx = !state.marx; b.classList.toggle("on", state.marx); applyFocus();
    });
    mk("br", "Destacar partidos", (b) => {
      state.part = !state.part; b.classList.toggle("on", state.part); applyFocus();
    });
    mk("br", "Destacar Brasil", (b) => {
      state.br = !state.br; b.classList.toggle("on", state.br); applyFocus();
    });
  }

  /* ---------------- modos ---------------- */
  function setMode(m) {
    state.mode = m;
    $("#m-rede").classList.toggle("on", m === "rede");
    $("#m-tempo").classList.toggle("on", m === "tempo");
    $("#m-eixos").classList.toggle("on", m === "eixos");
    gAxis.style.display = m !== "rede" ? "" : "none";
    nodes.forEach((n) => { n.vx = n.vy = 0; });
    if (m !== "rede") computeTimeline();
    alpha = 1;
    for (let i = 0; i < 500; i++) step();
    alpha = 0.02; draw(); fit();
    updateLabels();
  }
  $("#m-rede").addEventListener("click", () => setMode("rede"));
  $("#m-tempo").addEventListener("click", () => setMode("tempo"));
  $("#m-eixos").addEventListener("click", () => setMode("eixos"));
  $("#z-in").addEventListener("click", () => zoomAt(svg.getBoundingClientRect().left + svg.clientWidth / 2, svg.getBoundingClientRect().top + svg.clientHeight / 2, 1.3));
  $("#z-out").addEventListener("click", () => zoomAt(svg.getBoundingClientRect().left + svg.clientWidth / 2, svg.getBoundingClientRect().top + svg.clientHeight / 2, 1 / 1.3));
  $("#z-fit").addEventListener("click", fit);

  /* busca */
  const qInput = $("#q");
  qInput.addEventListener("input", () => { state.q = qInput.value.trim(); applyFocus(); });
  qInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && state.q) {
      const q = norm(state.q);
      const hit = nodes.find((n) => norm(n.label).includes(q)) || nodes.find((n) => norm(n.label + " " + n.summary).includes(q));
      if (hit) { select(hit.id); qInput.blur(); }
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { state.debate = null; state.q = ""; qInput.value = ""; clearSel(); }
  });
  window.addEventListener("resize", () => { if (nodes.length) fit(); });

  /* ---------------- início ---------------- */
  renderBar(); renderDebates(); renderAbout(); renderDetail(null);
  for (let i = 0; i < 220; i++) step();
  alpha = 0.02; draw(); fit(); applyFocus();
  const h = (location.hash || "").slice(1);
  if (h && byId.has(h)) select(h);
  const mm = /[?&]modo=(tempo|eixos)/.exec(location.search);
  if (mm) setMode(mm[1]);
})();
