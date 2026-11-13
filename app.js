// ===== Catálogo (preços e medidas conforme os PDFs da cliente) =====
// n = nome · p = preço · i = nome do arquivo em img/ · s = medidas · c = cores [nome, hex]
const CATEGORIAS = [
  { id: "toalhas", nome: "Toalhas", nota: "Valor por toalha", itens: [
    { n: "Toalha xadrez", p: "R$ 8,00", i: "toalha-xadrez", s: ["4 lugares", "1,40 × 1,40 m"],
      c: [["Preto e branco", "#141414"], ["Vermelho e branco", "#d6232b"]] },
    { n: "Toalha de poá", p: "R$ 8,00", i: "toalha-poa", s: ["4 lugares", "1,40 × 1,40 m"],
      c: [["Preto com bolas brancas", "#141414"], ["Branco com bolas pretas", "#f2f2f2"]] },
    { n: "Toalha lisa", p: "R$ 8,00", i: "toalha-lisa", s: ["4 lugares", "1,40 × 1,40 m"],
      c: [["Rosa", "#e8b9b9"], ["Bege", "#f0d8aa"], ["Branca", "#fbfbf8"], ["Verde oliva", "#59692a"], ["Preta", "#262624"]] },
    { n: "Toalha de chita", p: "R$ 8,00", i: "toalha-chita", s: ["4 lugares", "1,40 × 1,40 m"] },
    { n: "Toalha de jacquard", p: "R$ 8,00", i: "toalha-jacquard-4", s: ["4 lugares", "1,40 × 1,40 m"],
      c: [["Pink", "#c4235b"], ["Vermelho", "#c8244b"], ["Creme", "#ecd9a8"]] },
    { n: "Toalha de jacquard", p: "R$ 15,00", i: "toalha-jacquard-azul", s: ["8 lugares", "3,0 × 3,0 m"],
      c: [["Azul marinho", "#1f2a5a"], ["Verde oliva", "#6b7040"], ["Vermelho", "#b3262e"]] },
    { n: "Toalha de jacquard", p: "R$ 15,00", i: "toalha-jacquard-rosa", s: ["8 lugares", "3,0 × 3,0 m"],
      c: [["Rosa envelhecido", "#c49a9a"], ["Rosa chá", "#e8c4bb"], ["Goiaba", "#e0725f"]] },
    { n: "Toalha de jacquard", p: "R$ 15,00", i: "toalha-jacquard-perola", s: ["8 lugares", "3,0 × 3,0 m"],
      c: [["Pérola", "#ece9e2"], ["Marfim", "#efe5c8"]] },
    { n: "Toalha de jacquard", p: "R$ 15,00", i: "toalha-jacquard-creme", s: ["8 lugares", "3,0 × 3,0 m"],
      c: [["Creme", "#eee0bb"], ["Branca", "#fbfbf8"]] },
    { n: "Toalha de jacquard", p: "R$ 15,00", i: "toalha-jacquard-dourada", s: ["8 lugares", "3,0 × 3,0 m"],
      c: [["Dourada", "#c8a45a"], ["Dourado escuro", "#8a6d2b"]] },
  ]},
  { id: "guardanapos", nome: "Guardanapos", nota: "Valor por guardanapo", itens: [
    { n: "Guardanapo de linho", p: "R$ 2,50", i: "guardanapo-linho", s: ["40 × 40 cm"],
      c: [["Azul marinho", "#1a1c3a"], ["Vinho", "#7a1a2a"], ["Pink", "#d81b6a"], ["Lilás", "#c9a8e6"], ["Azul bebê", "#a6d6e0"], ["Creme", "#f1e8cf"]] },
    { n: "Guardanapo de jacquard", p: "R$ 2,50", i: "guardanapo-jacquard", s: ["40 × 40 cm"],
      c: [["Lilás claro", "#e0d6e8"], ["Marfim", "#f1e7c8"], ["Bege", "#ecdbb0"], ["Rosa antigo", "#d9b2c0"]] },
    { n: "Guardanapo de oxford", p: "R$ 2,50", i: "guardanapo-oxford", s: ["40 × 40 cm"],
      c: [["Azul royal", "#1d3fa8"], ["Rosa claro", "#f1c2c8"], ["Vermelho", "#c4182f"], ["Branco", "#fbfbf8"]] },
    { n: "Guardanapo de jacquard liso", p: "R$ 2,50", i: "guardanapo-jacquard-liso", s: ["40 × 40 cm"],
      c: [["Azul petróleo", "#1f4b66"], ["Branco", "#f6f1ec"], ["Verde esmeralda", "#1f9a7f"]] },
  ]},
  { id: "sousplats", nome: "Sousplats", nota: "Valor por sousplat", itens: [
    { n: "Sousplat dourado", p: "R$ 3,50", i: "sousplat-dourado" },
    { n: "Sousplat prata", p: "R$ 3,50", i: "sousplat-prata" },
    { n: "Sousplat mesa família", p: "R$ 3,50", i: "sousplat-familia" },
    { n: "Sousplat rústico", p: "R$ 3,50", i: "sousplat-rustico" },
    { n: "Sousplat vintage branco", p: "R$ 3,50", i: "sousplat-vintage-branco" },
    { n: "Sousplat vintage marfim", p: "R$ 3,50", i: "sousplat-vintage-marfim" },
    { n: "Sousplat branco ornamentado", p: "R$ 3,50", i: "sousplat-branco-ornamentado", f: 1 },
    { n: "Sousplat verde canelado", p: "R$ 3,50", i: "sousplat-verde-canelado", f: 1 },
    { n: "Sousplat de vidro rosé", p: "R$ 3,50", i: "sousplat-vidro-rose", f: 1 },
    { n: "Sousplat azul ornamentado", p: "R$ 3,50", i: "sousplat-azul-ornamentado", f: 1 },
    { n: "Sousplat azul floral", p: "R$ 3,50", i: "sousplat-azul-floral", f: 1 },
    { n: "Sousplat cinza geométrico", p: "R$ 3,50", i: "sousplat-cinza-geometrico", f: 1 },
    { n: "Sousplat branco ondulado", p: "R$ 3,50", i: "sousplat-branco-ondulado", f: 1 },
    { n: "Sousplat branco relevo", p: "R$ 3,50", i: "sousplat-branco-relevo", f: 1 },
    { n: "Sousplat marfim ondulado", p: "R$ 3,50", i: "sousplat-marfim-ondulado", f: 1 },
    { n: "Sousplat prata rendado", p: "R$ 3,50", i: "sousplat-prata-rendado", f: 1 },
    { n: "Sousplat vermelho canelado", p: "R$ 3,50", i: "sousplat-vermelho-canelado", f: 1 },
    { n: "Sousplat prata ornamentado", p: "R$ 3,50", i: "sousplat-prata-ornamentado", f: 1 },
    { n: "Sousplat champanhe", p: "R$ 3,50", i: "sousplat-champanhe", f: 1 },
    { n: "Sousplat dourado rendado", p: "R$ 3,50", i: "sousplat-dourado-rendado", f: 1 },
    { n: "Sousplat dourado envelhecido", p: "R$ 3,50", i: "sousplat-dourado-envelhecido", f: 1 },
  ]},
  { id: "tacas", nome: "Taças", nota: "Valor por unidade", itens: [
    { n: "Taça tradicional", p: "R$ 0,50", i: "taca-tradicional" },
    { n: "Taça de chopp", p: "R$ 1,50", i: "taca-chopp" },
    { n: "Taça de vinho", p: "R$ 1,50", i: "taca-vinho" },
    { n: "Taça decorada colorida", p: "R$ 2,00", i: "taca-decorada-colorida" },
    { n: "Taça decorada", p: "R$ 2,00", i: "taca-decorada" },
    { n: "Taça martini", p: "R$ 1,50", i: "taca-martini" },
    { n: "Taça decorada verde", p: "R$ 2,00", i: "taca-decorada-verde" },
    { n: "Copinho de shot", p: "R$ 0,50", i: "copinho-shot" },
  ]},
  { id: "talheres", nome: "Talheres", nota: "Valor por unidade", itens: [
    { n: "Garfo refeição", p: "R$ 0,50", i: "garfo-refeicao" },
    { n: "Faca refeição", p: "R$ 0,50", i: "faca-refeicao" },
    { n: "Garfo sobremesa", p: "R$ 0,50", i: "garfo-sobremesa" },
    { n: "Colher sobremesa e de café", p: "R$ 0,50", i: "colher-sobremesa" },
  ]},
  { id: "loucas", nome: "Louças", nota: "Valor por unidade", itens: [
    { n: "Prato refeição", p: "R$ 0,50", i: "pratos" },
    { n: "Prato sobremesa", p: "R$ 0,50", i: "pratos" },
    { n: "Xícara de chá", p: "R$ 2,00", i: "xicara-cha" },
    { n: "Xícara de café", p: "R$ 0,80", i: "xicara-cafe" },
    { n: "Ramequim redondo", p: "R$ 2,00", i: "ramequim-redondo" },
    { n: "Ramequim quadrado", p: "R$ 2,00", i: "ramequim-quadrado" },
  ]},
  { id: "rechauds", nome: "Rechauds", nota: "Valor por rechaud", itens: [
    { n: "Rechaud quadrado", p: "R$ 45,00", i: "rechaud-quadrado", s: ["8 litros"] },
    { n: "Rechaud redondo", p: "R$ 45,00", i: "rechaud-redondo", s: ["8 litros"] },
  ]},
  { id: "pecas", nome: "Peças decorativas", nota: "Valor por peça", itens: [
    { n: "Peças de madeira", p: "R$ 25,00", i: "peca-madeira" },
    { n: "Peças de vidro", p: "R$ 25,00", i: "peca-vidro" },
    { n: "Peças rosé gold", p: "R$ 25,00", i: "peca-rosegold" },
    { n: "Peças douradas", p: "R$ 25,00", i: "peca-dourada" },
    { n: "Peças pratas", p: "R$ 25,00", i: "peca-prata-1" },
    { n: "Peças pratas espelhadas", p: "R$ 25,00", i: "peca-prata-2" },
  ]},
];

// Favo do topo: [coluna, linha, foto] — hexágono central + 6 vizinhos
const FAVO = [
  [0, 0, "sousplat-dourado"],
  [-1, 0, "taca-decorada-colorida"],
  [1, 0, "toalha-jacquard-azul"],
  [-0.5, -0.866, "toalha-xadrez"],
  [0.5, -0.866, "peca-rosegold"],
  [-0.5, 0.866, "xicara-cha"],
  [0.5, 0.866, "taca-decorada-verde"],
];

// Cores dos itens que não têm lista própria (tiradas das fotos)
const CORES_AUTO = {
  "toalha-chita": [["Azul", "#2a4aa0"], ["Amarelo", "#f0d23a"], ["Verde", "#3f8f3a"], ["Coral", "#ef7b6a"]],
  "sousplat-dourado": [["Dourado", "#c9a24a"]],
  "sousplat-prata": [["Prata", "#bcc2c9"]],
  "sousplat-familia": [["Preto", "#1b1b1b"], ["Cinza claro", "#bdb8ad"]],
  "sousplat-rustico": [["Bronze", "#7a6a45"], ["Palha", "#c9772a"]],
  "sousplat-vintage-branco": [["Branco", "#e9e9e4"]],
  "sousplat-vintage-marfim": [["Marfim", "#e9dfb8"]],
  "sousplat-branco-ornamentado": [["Branco", "#e6e8e4"]],
  "sousplat-verde-canelado": [["Verde", "#4a5d4a"]],
  "sousplat-vidro-rose": [["Rosé transparente", "#e8c0c0"]],
  "sousplat-azul-ornamentado": [["Azul escuro", "#2d3c5c"]],
  "sousplat-azul-floral": [["Azul", "#33445e"]],
  "sousplat-cinza-geometrico": [["Cinza", "#8a8284"]],
  "sousplat-branco-ondulado": [["Branco", "#eceff2"]],
  "sousplat-branco-relevo": [["Branco", "#f0f1f5"]],
  "sousplat-marfim-ondulado": [["Marfim", "#ece4cf"]],
  "sousplat-prata-rendado": [["Prata", "#bcc2c9"]],
  "sousplat-vermelho-canelado": [["Vermelho", "#a3122f"]],
  "sousplat-prata-ornamentado": [["Prata", "#a9adb4"]],
  "sousplat-champanhe": [["Champanhe", "#cbb68f"]],
  "sousplat-dourado-rendado": [["Dourado", "#b89a6a"]],
  "sousplat-dourado-envelhecido": [["Dourado", "#d2bc88"]],
  "taca-tradicional": [["Transparente", "#e4ecf0"]],
  "taca-chopp": [["Transparente", "#e4ecf0"]],
  "taca-vinho": [["Transparente", "#e4ecf0"]],
  "taca-decorada-colorida": [["Azul", "#2f5f86"], ["Roxo", "#7a4a6a"], ["Âmbar", "#b9962a"]],
  "taca-decorada": [["Transparente", "#e4ecf0"]],
  "taca-martini": [["Transparente", "#e4ecf0"]],
  "taca-decorada-verde": [["Verde", "#6f9a5a"]],
  "copinho-shot": [["Transparente", "#e4ecf0"]],
  "garfo-refeicao": [["Inox", "#c5c9cf"]],
  "faca-refeicao": [["Inox", "#c5c9cf"]],
  "garfo-sobremesa": [["Inox", "#c5c9cf"]],
  "colher-sobremesa": [["Inox", "#c5c9cf"]],
  "pratos": [["Branco", "#f1f1ee"]],
  "xicara-cha": [["Branco", "#f1f1ee"]],
  "xicara-cafe": [["Branco", "#f1f1ee"]],
  "ramequim-redondo": [["Branco", "#f1f1ee"]],
  "ramequim-quadrado": [["Branco", "#f1f1ee"]],
  "rechaud-quadrado": [["Inox", "#c5c9cf"]],
  "rechaud-redondo": [["Inox", "#c5c9cf"]],
  "peca-madeira": [["Madeira", "#8a5a2b"]],
  "peca-vidro": [["Transparente", "#e4ecf0"]],
  "peca-rosegold": [["Rosé gold", "#c98f7e"]],
  "peca-dourada": [["Dourado", "#c9a24a"]],
  "peca-prata-1": [["Prata", "#bcc2c9"]],
  "peca-prata-2": [["Prata", "#bcc2c9"]],
};

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ===== Favo do topo =====
const comb = document.getElementById("comb");
FAVO.forEach(([x, y, img], k) => {
  const h = document.createElement("div");
  h.className = "hx";
  h.style.setProperty("--x", x);
  h.style.setProperty("--y", y);
  h.style.setProperty("--k", k);
  h.innerHTML = `<img src="img/${img}.jpg" alt="">`;
  comb.appendChild(h);
});

// ===== Catálogo =====
const main = document.getElementById("catalogo");
const tabs = document.getElementById("tabs");

for (const cat of CATEGORIAS) {
  const a = document.createElement("a");
  a.href = `#${cat.id}`;
  a.textContent = cat.nome;
  a.dataset.id = cat.id;
  tabs.appendChild(a);

  const n = cat.itens.length;
  const sec = document.createElement("section");
  sec.id = cat.id;
  sec.setAttribute("aria-labelledby", `h-${cat.id}`);
  sec.innerHTML = `
    <div class="side rv">
      <h2 id="h-${cat.id}">${esc(cat.nome)}</h2>
      <span class="line"></span>
      <p>${esc(cat.nota)}<br>${n} ${n === 1 ? "modelo" : "modelos"}</p>
    </div>
    <div class="grid"></div>`;
  const grid = sec.querySelector(".grid");

  cat.itens.forEach((it, k) => {
    const fig = document.createElement("article");
    fig.className = "item rv";
    fig.style.setProperty("--d", `${(k % 3) * 90}ms`);
    const specs = (it.s || []).map((t) => `<span>${esc(t)}</span>`).join("");
    const cores = (it.c || CORES_AUTO[it.i] || [])
      .map(([nome, hex], j) => `<li style="--j:${j}"><i style="background:${hex}"></i>${esc(nome)}</li>`)
      .join("");
    fig.innerHTML = `
      <button class="ph" aria-label="Ampliar foto: ${esc(it.n)}">
        <img src="img/${it.i}.jpg" alt="${esc(it.n)}" loading="lazy">
      </button>
      <div class="row"><h3>${esc(it.n)}</h3><b class="dots"></b><span class="price">${esc(it.p)}</span></div>
      ${specs ? `<p class="spec">${specs}</p>` : ""}
      ${cores ? `<ul class="cores" aria-label="Cores disponíveis">${cores}</ul>` : ""}`;
    const ph = fig.querySelector(".ph"), im = ph.querySelector("img");
    ph.style.setProperty("--bg", `url(img/${it.i}.jpg)`);
    const mark = () => (it.f || im.naturalHeight > im.naturalWidth * 1.15) && ph.classList.add("tall");
    im.complete ? mark() : im.addEventListener("load", mark);
    ph.addEventListener("click", () => openLb(it, ph));
    grid.appendChild(fig);
  });
  main.appendChild(sec);
}

// Categoria ativa conforme a rolagem
const ind = document.createElement("span");
ind.className = "ind";
tabs.appendChild(ind);
const links = [...tabs.querySelectorAll("a")];
function moveInd(a) {
  ind.style.width = `${a.offsetWidth}px`;
  ind.style.transform = `translateX(${a.offsetLeft}px)`;
}
moveInd(links[0]);
links[0].classList.add("on");
addEventListener("resize", () => moveInd(tabs.querySelector(".on") || links[0]));
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) {
    links.forEach((l) => l.classList.toggle("on", l.dataset.id === e.target.id));
    const on = tabs.querySelector(".on");
    if (on) { moveInd(on); tabs.scrollTo({ left: on.offsetLeft - 24, behavior: "smooth" }); }
  }
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => io.observe(s));

// ===== Foto ampliada =====
const lb = document.getElementById("lightbox");
const lbClose = document.getElementById("lbClose");
let lastFocus = null;
function openLb(it, from) {
  lastFocus = from;
  document.getElementById("lbImg").src = `img/${it.i}.jpg`;
  document.getElementById("lbImg").alt = it.n;
  document.getElementById("lbCap").textContent = `${it.n}, ${it.p}`;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  lbClose.focus();
}
function closeLb() {
  lb.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
lb.addEventListener("click", (e) => { if (e.target.tagName !== "IMG") closeLb(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closeLb(); });

// ===== Animações =====
// Entrada dos itens ao rolar (uma vez só)
const rv = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); }
}), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
document.querySelectorAll(".rv").forEach((el) => rv.observe(el));

// Barra de progresso e movimento do favo na rolagem
const bar = document.getElementById("progress");
let tick = false;
function onScroll() {
  if (tick) return;
  tick = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    if (scrollY < innerHeight) comb.style.setProperty("--sy", (scrollY * -0.1).toFixed(1));
    tick = false;
  });
}
addEventListener("scroll", onScroll, { passive: true });

// Favo acompanha o mouse (só em telas com mouse)
const hero = document.querySelector(".hero");
if (matchMedia("(hover:hover)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    comb.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    comb.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  });
  hero.addEventListener("mouseleave", () => { comb.style.setProperty("--px", 0); comb.style.setProperty("--py", 0); });
}

// ===== Voltar ao topo =====
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
const toTop = document.getElementById("toTop");
toTop.hidden = false;
addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 700), { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));

// ===== Clique numa categoria: rola até ela e repete a animação de entrada =====
function whenScrollStops(cb) {
  let last = -1, still = 0, t0 = performance.now();
  (function check() {
    still = scrollY === last ? still + 1 : 0;
    last = scrollY;
    if (still >= 6 || performance.now() - t0 > 2000) cb();
    else requestAnimationFrame(check);
  })();
}
tabs.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  e.preventDefault();
  const sec = document.getElementById(a.dataset.id);
  history.replaceState(null, "", `#${a.dataset.id}`);
  sec.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  if (reduce) return;
  sec.classList.remove("replay");
  whenScrollStops(() => {
    sec.querySelectorAll(".item").forEach((el, k) => el.style.setProperty("--r", `${Math.min(k, 8) * 70}ms`));
    void sec.offsetWidth; // reinicia a animação se já estava rodando
    sec.classList.add("replay");
    setTimeout(() => sec.classList.remove("replay"), 2200);
  });
});
