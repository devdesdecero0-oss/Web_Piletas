
const WHATSAPP_NUMBER = 5493794747089; 
const GENERAL_WHATSAPP_MESSAGE = "Hola! Quiero consultar por una pileta y me gustaría recibir asesoramiento.";

function getWhatsAppLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function getPoolWhatsAppLink(poolName){
  const message = `Hola! Estoy interesado/a en la ${poolName}. Quisiera recibir más información sobre medidas, precio y disponibilidad.`;
  return getWhatsAppLink(message);
}

/* ======================================================================
   DATOS DE PRODUCTOS — agregar/editar piletas acá, sin tocar el HTML
   ====================================================================== */
const pools = [
  {
    id: 1,
    name: "Pileta Modelo Roma",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
    dimensions: "8m x 4m",
    depth: "1,50m de profundidad",
    size: "grande",
    shape: "rectangular",
    description: "Un modelo amplio y elegante ideal para grandes espacios. Perfecta para reuniones familiares y tardes largas de verano.",
    features: ["Estructura reforzada", "Sistema de filtrado incluido", "Escalera de acceso", "Deck perimetral opcional", "Iluminación LED opcional", "Cobertor de invierno"],
    price: "Consultar precio"
  },
  {
    id: 2,
    name: "Pileta Modelo Capri",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    dimensions: "7m x 4m",
    depth: "1,40m de profundidad",
    size: "grande",
    shape: "otras-formas",
    description: "Forma libre inspirada en las lagunas naturales. Se integra con paisajismo y espacios de relax al aire libre.",
    features: ["Diseño de bordes curvos", "Zona de descanso integrada", "Revestimiento antideslizante", "Bomba de alta eficiencia", "Cascada opcional", "Iluminación LED opcional"],
    price: "Consultar precio"
  },
  {
    id: 3,
    name: "Pileta Modelo Toscana",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=900&q=80",
    dimensions: "6m x 3m",
    depth: "1,35m de profundidad",
    size: "mediana",
    shape: "rectangular",
    description: "El equilibrio ideal entre espacio y practicidad. Se adapta bien a patios medianos sin resignar comodidad.",
    features: ["Instalación en 5 a 7 días", "Filtro de arena incluido", "Escalera de acero inoxidable", "Manta térmica opcional", "Bordes redondeados de seguridad"],
    price: "Consultar precio"
  },
  {
    id: 4,
    name: "Pileta Modelo Positano",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    dimensions: "4,5m x 2,5m",
    depth: "1,30m de profundidad",
    size: "mediana",
    shape: "otras-formas",
    description: "Ovalada y armoniosa, pensada para patios con estilo mediterráneo o jardines con espacios de estar.",
    features: ["Forma ovalada", "Fácil mantenimiento", "Filtro cartucho incluido", "Escalera integrada", "Cobertor a medida"],
    price: "Consultar precio"
  },
  {
    id: 5,
    name: "Pileta Modelo Ibiza",
    image: "https://images.unsplash.com/photo-1596178060810-72636e4d0f18?auto=format&fit=crop&w=900&q=80",
    dimensions: "5m x 2,5m",
    depth: "1,25m de profundidad",
    size: "chica",
    shape: "rectangular",
    description: "Compacta pero con gran presencia. Ideal para patios chicos que quieren su pileta sin resignar diseño.",
    features: ["Instalación rápida", "Bajo consumo de agua", "Sistema de filtrado compacto", "Escalera plegable", "Ideal para terrenos chicos"],
    price: "Consultar precio"
  },
  {
    id: 6,
    name: "Pileta Modelo Amalfi",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    dimensions: "3,5m x 2m",
    depth: "1,10m de profundidad",
    size: "chica",
    shape: "otras-formas",
    description: "La opción más chica de la línea, con forma libre. Perfecta para balcones amplios, terrazas o patios reducidos.",
    features: ["Formato compacto", "Instalación en 2 a 3 días", "Filtro cartucho incluido", "Bajo mantenimiento", "Apta para espacios reducidos"],
    price: "Consultar precio"
  }
];

/* ======================================================================
   RENDER: PRODUCT CARDS
   ====================================================================== */
const shapeLabel = { rectangular: "rectangular", "otras-formas": "forma libre" };
const sizeLabel = { chica: "chica", mediana: "mediana", grande: "grande" };

function poolMediaFallback(){
  return "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect width=%22400%22 height=%22300%22 fill=%22%234fc1d6%22/><rect y=%22190%22 width=%22400%22 height=%22110%22 fill=%22%23136587%22/></svg>";
}

function renderPools(){
  const grid = document.getElementById('poolGrid');
  grid.innerHTML = pools.map(pool => `
    <article class="pool-card" data-size="${pool.size}" data-shape="${pool.shape}">
      <div class="pool-media">
        <span class="pool-tag">${sizeLabel[pool.size]} · ${shapeLabel[pool.shape]}</span>
        <img src="${pool.image}" alt="${pool.name}, ${pool.dimensions}" loading="lazy" onerror="this.src='${poolMediaFallback()}'">
      </div>
      <div class="pool-body">
        <h3>${pool.name}</h3>
        <div class="pool-dims">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5"/></svg>
          ${pool.dimensions}
        </div>
        <p>${pool.description}</p>
        <div class="pool-price">${pool.price}</div>
      </div>
      <div class="pool-actions">
        <button class="btn btn-outline-dark" data-detail="${pool.id}">Ver detalles</button>
        <a class="btn btn-primary" href="${getPoolWhatsAppLink(pool.name)}" target="_blank" rel="noopener">
          <svg class="wa-icon" viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.4.7 4.63 1.9 6.5L4 29l7.66-1.87a12 12 0 0 0 4.36.82h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.72.9.99-3.63-.24-.37a9.78 9.78 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.63 0 5.1 1.02 6.96 2.88a9.76 9.76 0 0 1 2.87 6.94c0 5.4-4.4 9.76-9.83 9.76z"/></svg>
          WhatsApp
        </a>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-detail]').forEach(btn=>{
    btn.addEventListener('click', ()=> openModal(Number(btn.dataset.detail)));
  });
}
renderPools();

/* ======================================================================
   FILTERS
   ====================================================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.pool-card').forEach(card=>{
      const match = filter === 'todas' || card.dataset.size === filter || card.dataset.shape === filter;
      card.classList.toggle('hide', !match);
    });
  });
});

/* ======================================================================
   PRODUCT MODAL
   ====================================================================== */
const modalOverlay = document.getElementById('modalOverlay');
function openModal(id){
  const pool = pools.find(p=>p.id===id);
  if(!pool) return;
  document.getElementById('modalImg').src = pool.image;
  document.getElementById('modalImg').onerror = function(){ this.src = poolMediaFallback(); };
  document.getElementById('modalImg').alt = pool.name;
  document.getElementById('modalTitle').textContent = pool.name;
  document.getElementById('modalDims').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5"/></svg> ${pool.dimensions} · ${pool.depth}`;
  document.getElementById('modalDesc').textContent = pool.description;
  document.getElementById('modalFeatures').innerHTML = pool.features.map(f=>`<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>${f}</li>`).join('');
  document.getElementById('modalPrice').textContent = pool.price;
  document.getElementById('modalWaBtn').href = getPoolWhatsAppLink(pool.name);
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e=>{ if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key === 'Escape'){ closeModal(); } });

/* ======================================================================
   WHATSAPP LINKS: setup general buttons
   ====================================================================== */
['navWaBtn','heroWaBtn','mobileWaBtn','finalWaBtn','floatWaBtn'].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = getWhatsAppLink(GENERAL_WHATSAPP_MESSAGE);
});

/* ======================================================================
   MOBILE MENU
   ====================================================================== */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=>{
  const isOpen = mobileMenu.classList.toggle('active');
  hamburgerBtn.classList.toggle('open', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{
    mobileMenu.classList.remove('active');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ======================================================================
   SCROLL REVEAL
   ====================================================================== */
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.15, rootMargin:'0px 0px -60px 0px'});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('in'));
}
