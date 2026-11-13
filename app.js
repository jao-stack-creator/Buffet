// ===== Dados do catálogo (preços por unidade, conforme os PDFs) =====
const CATEGORIAS = [
  { id: "toalhas", nome: "Toalhas", itens: [
    { n: "Toalha Xadrez", d: "4 lugares · 1,40 x 1,40", p: "R$ 8,00", i: "toalha-xadrez" },
    { n: "Toalha de Poá", d: "4 lugares · 1,40 x 1,40", p: "R$ 8,00", i: "toalha-poa" },
    { n: "Toalha Lisa", d: "4 lugares · 1,40 x 1,40", p: "R$ 8,00", i: "toalha-lisa" },
    { n: "Toalha de Chita", d: "4 lugares · 1,40 x 1,40", p: "R$ 8,00", i: "toalha-chita" },
    { n: "Toalha de Jacquard", d: "4 lugares · 1,40 x 1,40", p: "R$ 8,00", i: "toalha-jacquard-4" },
    { n: "Toalha de Jacquard", d: "8 lugares · 3,0 x 3,0 · Cores: azul marinho, verde oliva e vermelho", p: "R$ 15,00", i: "toalha-jacquard-azul" },
    { n: "Toalha de Jacquard", d: "8 lugares · 3,0 x 3,0 · Cores: rosa envelhecido, rosa chá e goiaba", p: "R$ 15,00", i: "toalha-jacquard-rosa" },
    { n: "Toalha de Jacquard", d: "8 lugares · 3,0 x 3,0 · Cores: pérola e marfim", p: "R$ 15,00", i: "toalha-jacquard-perola" },
    { n: "Toalha de Jacquard", d: "8 lugares · 3,0 x 3,0 · Cores: creme e branca", p: "R$ 15,00", i: "toalha-jacquard-creme" },
    { n: "Toalha de Jacquard", d: "8 lugares · 3,0 x 3,0 · Cores: dourada e dourado escuro", p: "R$ 15,00", i: "toalha-jacquard-dourada" },
  ]},
  { id: "guardanapos", nome: "Guardanapos", itens: [
    { n: "Guardanapo de Linho", d: "0,40 x 0,40", p: "R$ 2,50", i: "guardanapo-linho" },
    { n: "Guardanapo de Jacquard", d: "0,40 x 0,40", p: "R$ 2,50", i: "guardanapo-jacquard" },
    { n: "Guardanapo de Oxford", d: "0,40 x 0,40", p: "R$ 2,50", i: "guardanapo-oxford" },
    { n: "Guardanapo de Jacquard Liso", d: "0,40 x 0,40", p: "R$ 2,50", i: "guardanapo-jacquard-liso" },
  ]},
  { id: "sousplats", nome: "Sousplats", itens: [
    { n: "Sousplat Dourado", p: "R$ 3,50", i: "sousplat-dourado" },
    { n: "Sousplat Prata", p: "R$ 3,50", i: "sousplat-prata" },
    { n: "Sousplat Mesa Família", p: "R$ 3,50", i: "sousplat-familia" },
    { n: "Sousplat Rústico", p: "R$ 3,50", i: "sousplat-rustico" },
    { n: "Sousplat Vintage Branco", p: "R$ 3,50", i: "sousplat-vintage-branco" },
    { n: "Sousplat Vintage Marfim", p: "R$ 3,50", i: "sousplat-vintage-marfim" },
  ]},
  { id: "tacas", nome: "Taças", itens: [
    { n: "Taça Tradicional", p: "R$ 0,50", i: "taca-tradicional" },
    { n: "Taça de Chopp", p: "R$ 1,50", i: "taca-chopp" },
    { n: "Taça de Vinho", p: "R$ 1,50", i: "taca-vinho" },
    { n: "Taça Decorada Colorida", p: "R$ 2,00", i: "taca-decorada-colorida" },
    { n: "Taça Decorada", p: "R$ 2,00", i: "taca-decorada" },
    { n: "Taça Martini", p: "R$ 1,50", i: "taca-martini" },
    { n: "Taça Decorada Verde", p: "R$ 2,00", i: "taca-decorada-verde" },
    { n: "Copinho de Shot", p: "R$ 0,50", i: "copinho-shot" },
  ]},
  { id: "talheres", nome: "Talheres", itens: [
    { n: "Garfo Refeição", p: "R$ 0,50", i: "garfo-refeicao" },
    { n: "Faca Refeição", p: "R$ 0,50", i: "faca-refeicao" },
    { n: "Garfo Sobremesa", p: "R$ 0,50", i: "garfo-sobremesa" },
    { n: "Colher Sobremesa e de Café", p: "R$ 0,50", i: "colher-sobremesa" },
  ]},
  { id: "loucas", nome: "Louças", itens: [
    { n: "Prato Refeição", p: "R$ 0,50", i: "pratos" },
    { n: "Prato Sobremesa", p: "R$ 0,50", i: "pratos" },
    { n: "Xícara de Chá", p: "R$ 2,00", i: "xicara-cha" },
    { n: "Xícara de Café", p: "R$ 0,80", i: "xicara-cafe" },
    { n: "Ramequim Redondo", p: "R$ 2,00", i: "ramequim-redondo" },
    { n: "Ramequim Quadrado", p: "R$ 2,00", i: "ramequim-quadrado" },
  ]},
  { id: "rechauds", nome: "Rechauds", itens: [
    { n: "Rechaud Quadrado 8L", p: "R$ 45,00", i: "rechaud-quadrado" },
    { n: "Rechaud Redondo 8L", p: "R$ 45,00", i: "rechaud-redondo" },
  ]},
  { id: "pecas", nome: "Peças Decorativas", itens: [
    { n: "Peças de Madeira", p: "R$ 25,00 cada", i: "peca-madeira" },
    { n: "Peças de Vidro", p: "R$ 25,00 cada", i: "peca-vidro" },
    { n: "Peças Rose Gold", p: "R$ 25,00 cada", i: "peca-rosegold" },
    { n: "Peças Douradas", p: "R$ 25,00 cada", i: "peca-dourada" },
    { n: "Peças Pratas", p: "R$ 25,00 cada", i: "peca-prata-1" },
    { n: "Peças Pratas (espelhadas)", p: "R$ 25,00 cada", i: "peca-prata-2" },
  ]},
];

// ===== Helpers =====
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ===== Render =====
const main = document.getElementById("catalogo");
const tabs = document.getElementById("tabs");

for (const cat of CATEGORIAS) {
  const a = document.createElement("a");
  a.href = `#${cat.id}`;
  a.textContent = cat.nome;
  a.dataset.id = cat.id;
  tabs.appendChild(a);

  const sec = document.createElement("section");
  sec.id = cat.id;
  sec.innerHTML = `<div class="sh"><h2>${esc(cat.nome)}</h2><span>${cat.itens.length} ${cat.itens.length === 1 ? "item" : "itens"}</span></div><div class="grid"></div>`;
  const grid = sec.querySelector(".grid");

  cat.itens.forEach((it, k) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.setProperty("--d", `${(k % 4) * 70}ms`);
    card.innerHTML = `
      <button class="ph" aria-label="Ampliar foto: ${esc(it.n)}">
        <img src="img/${it.i}.jpg" alt="${esc(it.n)}" loading="lazy">
        <span class="tag">${esc(it.p)}</span>
        <span class="zoom" aria-hidden="true">+</span>
      </button>
      <div class="info">
        <h3>${esc(it.n)}</h3>
        ${it.d ? `<p class="desc">${esc(it.d)}</p>` : ""}
        <p class="unit">${/cada|unidade/.test(it.p) ? "" : "por unidade"}</p>
      </div>`;
    const ph = card.querySelector(".ph"), im = ph.querySelector("img");
    ph.style.setProperty("--bg", `url(img/${it.i}.jpg)`);
    const mark = () => im.naturalHeight > im.naturalWidth * 1.15 && ph.classList.add("tall");
    im.complete ? mark() : im.addEventListener("load", mark);
    ph.addEventListener("click", () => openLb(it));
    grid.appendChild(card);
  });
  main.appendChild(sec);
}

// Aba ativa conforme a rolagem
const links = [...tabs.querySelectorAll("a")];
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) {
    links.forEach((l) => l.classList.toggle("on", l.dataset.id === e.target.id));
    const on = tabs.querySelector(".on");
    if (on) tabs.scrollTo({ left: on.offsetLeft - 24, behavior: "smooth" });
  }
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => io.observe(s));

// Lightbox
const lb = document.getElementById("lightbox");
function openLb(it) {
  document.getElementById("lbImg").src = `img/${it.i}.jpg`;
  document.getElementById("lbImg").alt = it.n;
  document.getElementById("lbCap").textContent = `${it.n} — ${it.p}`;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
lb.addEventListener("click", (e) => { if (e.target.tagName !== "IMG") closeLb(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

// Animação de entrada ao rolar
const rv = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); }
}), { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach((el) => rv.observe(el));
