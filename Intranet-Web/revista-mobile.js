// ═══════════════════════════════════════════════
// REVISTA MOBILE — Efecto libro con volteo 3D

// ── SONIDO DE PÁGINA ──
let audioLibro = null;
let sonidoActivo = localStorage.getItem('qhse-sonido-libro') !== 'off';

function toggleSonidoLibro() {
  sonidoActivo = !sonidoActivo;
  localStorage.setItem('qhse-sonido-libro', sonidoActivo ? 'on' : 'off');
  const icon = document.querySelector('#btn-mute i');
  if (icon) icon.className = sonidoActivo ? 'fas fa-volume-up' : 'fas fa-volume-mute';
}

function sonidoPagina() {
  if (!sonidoActivo) return;
  try {
    if (!audioLibro) audioLibro = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = audioLibro.createOscillator();
    const gain = audioLibro.createGain();
    osc.connect(gain);
    gain.connect(audioLibro.destination);

    const variacion = (Math.random() * 20) - 10; // ±10Hz
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180 + variacion, audioLibro.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90 + variacion, audioLibro.currentTime + 0.18);
    gain.gain.setValueAtTime(0.05, audioLibro.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioLibro.currentTime + 0.2);
    osc.start(); osc.stop(audioLibro.currentTime + 0.2);
  } catch (e) {}
}

function sonidoLimite() {
  if (!sonidoActivo) return;
  try {
    if (!audioLibro) audioLibro = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = audioLibro.createOscillator();
    const gain = audioLibro.createGain();
    osc.connect(gain);
    gain.connect(audioLibro.destination);

    osc.type = 'square';
    osc.frequency.setValueAtTime(120, audioLibro.currentTime);
    gain.gain.setValueAtTime(0.04, audioLibro.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioLibro.currentTime + 0.06);
    osc.start(); osc.stop(audioLibro.currentTime + 0.06);
  } catch (e) {}
}

function sonidoAbrirLibro() {
  if (!sonidoActivo) return;
  try {
    if (!audioLibro) audioLibro = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = audioLibro.createOscillator();
    const gain = audioLibro.createGain();
    osc.connect(gain);
    gain.connect(audioLibro.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, audioLibro.currentTime);
    osc.frequency.exponentialRampToValueAtTime(500, audioLibro.currentTime + 0.3);
    gain.gain.setValueAtTime(0.05, audioLibro.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioLibro.currentTime + 0.35);
    osc.start(); osc.stop(audioLibro.currentTime + 0.35);
  } catch (e) {}
}
// Solo se activa en pantallas < 768px
// ═══════════════════════════════════════════════

const MOBILE_CSS = `
  .book-overlay {
    position: fixed;
    inset: 0;
    background: #0a1628;
    z-index: 999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .book-topbar {
    height: 48px;
    background: rgba(10,22,40,.95);
    border-bottom: 1px solid rgba(0,200,255,.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    flex-shrink: 0;
    z-index: 10;
  }
  .book-topbar-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(255,255,255,.8);
  }
  .book-topbar-page {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(0,200,255,.7);
  }
  .book-stage {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1200px;
    padding: 12px;
    overflow: hidden;
  }
  .book-page {
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 48px - 72px - 24px);
    background: white;
    border-radius: 12px;
    overflow-y: auto;
    overflow-x: hidden;
    transform-origin: center center;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
  }
  .book-page.dark-page {
    background: linear-gradient(135deg, #0a1628 0%, #0e2044 50%, #1a3160 100%);
  }
  .book-page-inner {
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
  }
  .book-nav {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    flex-shrink: 0;
  }
  .book-nav-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(0,200,255,.3);
    background: rgba(30,136,229,.15);
    color: #00c8ff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s;
    -webkit-tap-highlight-color: transparent;
  }
  .book-nav-btn:active {
    background: rgba(30,136,229,.4);
    transform: scale(.93);
  }
  .book-nav-btn:disabled {
    opacity: .25;
    pointer-events: none;
  }
  .book-dots {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .book-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,.2);
    transition: all .3s;
  }
  .book-dot.active {
    background: #00c8ff;
    width: 18px;
    border-radius: 3px;
  }
  .book-indice-wrap { position: relative; }
  .book-indice-menu {
    position: absolute;
    top: 40px;
    right: 0;
    background: #0e2044;
    border: 1px solid rgba(0,200,255,.25);
    border-radius: 10px;
    padding: 6px;
    min-width: 190px;
    box-shadow: 0 10px 30px rgba(0,0,0,.4);
    z-index: 20;
    display: none;
  }
  .book-indice-menu.open { display: block; }
  .book-indice-item {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    color: rgba(255,255,255,.85);
    font-size: 12px;
    font-weight: 600;
    padding: 9px 10px;
    border-radius: 7px;
    cursor: pointer;
    transition: all .15s;
  }
  .book-indice-item:hover,
  .book-indice-item:active {
    background: rgba(30,136,229,.25);
    color: white;
  }
  /* Animación slide + fade hacia adelante */
  @keyframes slideOutLeft {
    0%   { transform: translateX(0);     opacity: 1; }
    100% { transform: translateX(-60px); opacity: 0; }
  }
  @keyframes slideInRight {
    0%   { transform: translateX(60px);  opacity: 0; }
    100% { transform: translateX(0);     opacity: 1; }
  }
  /* Animación slide + fade hacia atrás */
  @keyframes slideOutRight {
    0%   { transform: translateX(0);     opacity: 1; }
    100% { transform: translateX(60px);  opacity: 0; }
  }
  @keyframes slideInLeft {
    0%   { transform: translateX(-60px); opacity: 0; }
    100% { transform: translateX(0);     opacity: 1; }
  }
  .flip-out          { animation: slideOutLeft  .22s ease-in  forwards; }
  .flip-in           { animation: slideInRight  .22s ease-out forwards; }
  .flip-out-reverse  { animation: slideOutRight .22s ease-in  forwards; }
  .flip-in-reverse   { animation: slideInLeft   .22s ease-out forwards; }
`;

// ═══════════════════════════════════════════════
// DEFINICIÓN DE HOJAS
// ═══════════════════════════════════════════════

function obtenerHojas() {
  return [
    // ── HOJA 1: Portada izquierda ──
    {
      id: 'hoja-portada-left',
      dark: true,
      render: () => `
        <div style="position:relative;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div class="prev-cover-grid" style="border-radius:12px;"></div>
          <div class="prev-cover-line" style="border-radius:12px 0 0 12px;"></div>
          <div style="position:relative;z-index:10;padding-left:18px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;">
              <span id="pv-edition-badge-m" style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;padding:4px 12px;border-radius:100px;background:rgba(30,136,229,.2);border:1px solid rgba(0,200,255,.3);color:#00c8ff">
                ${document.getElementById('pv-edition-badge')?.textContent || 'Edición —'}
              </span>
              <span style="font-size:10px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em">
                ${document.getElementById('pv-volumen')?.textContent || 'Vol. 1'}
              </span>
            </div>
            <p style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:600;font-style:italic;color:#00c8ff;letter-spacing:.08em;margin-bottom:8px">ALERTAS QHSE</p>
            <h1 style="font-family:'Barlow Condensed',sans-serif;font-size:clamp(36px,10vw,56px);font-weight:900;font-style:italic;line-height:.95;color:white;letter-spacing:-.02em;">
              ${document.getElementById('pv-titulo')?.textContent || 'SEGURIDAD SIN EXCUSAS'}
            </h1>
          </div>
          <div style="position:relative;z-index:10;display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:24px;">
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(227,30,36,.25);border:1px solid rgba(227,30,36,.3)"><i class="fas fa-hard-hat mr-1"></i>Safety</span>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(16,185,129,.2);border:1px solid rgba(16,185,129,.3)"><i class="fas fa-check-double mr-1"></i>Quality</span>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(245,158,11,.2);border:1px solid rgba(245,158,11,.3)"><i class="fas fa-heartbeat mr-1"></i>Health</span>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(30,136,229,.2);border:1px solid rgba(30,136,229,.3)"><i class="fas fa-leaf mr-1"></i>Env.</span>
          </div>
        </div>
      `
    },

    // ── HOJA 2: Portada derecha ──
    {
      id: 'hoja-portada-right',
      dark: true,
      render: () => `
        <div style="position:relative;height:100%;display:flex;flex-direction:column;justify-content:center;gap:20px;">
          <div class="prev-cover-grid" style="border-radius:12px;"></div>
          <div style="position:relative;z-index:10;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:20px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
              <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#1e88e5,#00c8ff);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="fas fa-quote-left text-white" style="font-size:10px;"></i></div>
              <div>
                <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.5)">Mensaje de</p>
                <p style="font-size:10px;font-weight:700;color:rgba(255,255,255,.8);text-transform:uppercase;letter-spacing:.06em">Gerencia de Operaciones</p>
              </div>
            </div>
            <p style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.6;font-style:italic">
              ${document.getElementById('pv-mensaje')?.textContent || '—'}
            </p>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.1);">
              <p style="font-size:10px;font-weight:800;color:rgba(255,255,255,.9);text-transform:uppercase;letter-spacing:.06em">
                ${document.getElementById('pv-director')?.textContent || 'Ing. —'}
              </p>
              <p style="font-size:9px;color:rgba(255,255,255,.45);margin-top:2px">Gerente de Operaciones — In Hole Solutions</p>
            </div>
          </div>
          <div style="position:relative;z-index:10;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
            <div style="border-radius:10px;padding:14px 10px;text-align:center;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.25)">
              <p style="font-family:'Barlow Condensed';font-size:32px;font-weight:900;color:#34d399;line-height:1">
                ${document.getElementById('pv-stat-dias')?.textContent || '0'}
              </p>
              <p style="font-size:8px;color:rgba(255,255,255,.55);font-weight:700;text-transform:uppercase;letter-spacing:.03em;margin-top:4px">Días sin<br>accidente</p>
            </div>
            <div style="border-radius:10px;padding:14px 10px;text-align:center;background:rgba(30,136,229,.15);border:1px solid rgba(30,136,229,.25)">
              <p style="font-family:'Barlow Condensed';font-size:32px;font-weight:900;color:#60a5fa;line-height:1">
                ${document.getElementById('pv-stat-obs')?.textContent || '0'}
              </p>
              <p style="font-size:8px;color:rgba(255,255,255,.55);font-weight:700;text-transform:uppercase;letter-spacing:.03em;margin-top:4px">Reportes<br>riesgo</p>
            </div>
            <div style="border-radius:10px;padding:14px 10px;text-align:center;background:rgba(245,158,11,.15);border:1px solid rgba(245,158,11,.25)">
              <p style="font-family:'Barlow Condensed';font-size:32px;font-weight:900;color:#fbbf24;line-height:1">
                ${document.getElementById('pv-stat-acc')?.textContent || '0'}
              </p>
              <p style="font-size:8px;color:rgba(255,255,255,.55);font-weight:700;text-transform:uppercase;letter-spacing:.03em;margin-top:4px">Near miss<br>resueltos</p>
            </div>
          </div>
        </div>
      `
    },

    // ── HOJA 3: Safety izquierda ──
    {
      id: 'hoja-safety-left',
      dark: false,
      render: () => `
        <div>
          <div style="background:linear-gradient(135deg,#e31e24,#c01a1f);border-radius:10px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <i class="fas fa-hard-hat text-white"></i>
            <div>
              <span style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.7)">Safety</span>
              <h2 style="font-family:'Barlow Condensed';font-size:18px;font-weight:900;font-style:italic;color:white;margin:0;">
                ${document.getElementById('pv-safety-titulo')?.textContent || 'ALERTA DE SEGURIDAD'}
              </h2>
            </div>
          </div>
          ${document.getElementById('pv-epp-safety')?.outerHTML || ''}
          ${document.getElementById('pv-tips-safety')?.outerHTML || ''}
          ${document.getElementById('pv-qr-safety-list')?.outerHTML || ''}
        </div>
      `
    },

    // ── HOJA 4: Safety derecha (Near Miss) ──
    {
      id: 'hoja-safety-right',
      dark: false,
      render: () => `
        <div>
          <p style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#64748b;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
            <i class="fas fa-triangle-exclamation" style="color:#e31e24"></i>Lección Aprendida — Near Miss
          </p>
          <div style="display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:100px;background:#fef2f2;border:1px solid #fecaca;margin-bottom:12px">
            <i class="fas fa-circle" style="font-size:6px;color:#dc2626"></i>
            <span style="font-size:10px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.06em">
              ${document.getElementById('pv-nm-area')?.textContent || '—'}
            </span>
          </div>
          <div style="border-left:4px solid #e31e24;background:#fff5f5;border-radius:0 10px 10px 0;padding:12px 14px;margin-bottom:12px">
            <p style="font-family:'Barlow Condensed';font-size:16px;font-weight:900;color:#1e293b;text-transform:uppercase;margin-bottom:6px">
              ${document.getElementById('pv-nm-titulo')?.textContent || '—'}
            </p>
            <p style="font-size:11px;color:#64748b;line-height:1.6">
              ${document.getElementById('pv-nm-desc')?.textContent || ''}
            </p>
          </div>
          <div style="display:grid;gap:10px;">
            <div style="border-radius:10px;padding:12px;background:#f8fafc;border:1px solid #e2e8f0">
              <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:4px"><i class="fas fa-magnifying-glass mr-1" style="color:#60a5fa"></i>Causa Raíz</p>
              <p style="font-size:12px;color:#475569">${document.getElementById('pv-nm-causa')?.textContent || '—'}</p>
            </div>
            <div style="border-radius:10px;padding:12px;background:#f0fdf4;border:1px solid #bbf7d0">
              <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#15803d;margin-bottom:4px"><i class="fas fa-wrench mr-1"></i>Acción Correctiva</p>
              <p style="font-size:12px;color:#475569">${document.getElementById('pv-nm-accion')?.textContent || '—'}</p>
            </div>
          </div>
        </div>
      `
    },

    // ── HOJA 5: Quality izquierda ──
    {
      id: 'hoja-quality-left',
      dark: false,
      render: () => `
        <div>
          <div style="background:linear-gradient(135deg,#1e88e5,#0d47a1);border-radius:10px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <i class="fas fa-check-double text-white"></i>
            <div>
              <span style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.7)">Quality</span>
              <h2 style="font-family:'Barlow Condensed';font-size:18px;font-weight:900;font-style:italic;color:white;margin:0;">
                ${document.getElementById('pv-quality-titulo')?.textContent || 'CALIDAD OPERATIVA'}
              </h2>
            </div>
          </div>
          ${document.getElementById('pv-quality-tabla-wrap')?.outerHTML || ''}
          ${document.getElementById('pv-quality-alerta-wrap')?.outerHTML || ''}
        </div>
      `
    },

    // ── HOJA 6: Quality derecha ──
    {
      id: 'hoja-quality-right',
      dark: false,
      render: () => `
        <div>
          ${document.getElementById('pv-quality-pasos-list')?.outerHTML || ''}
          ${document.getElementById('pv-epp-quality')?.outerHTML || ''}
          ${document.getElementById('pv-qr-quality-wrap')?.outerHTML || ''}
        </div>
      `
    },

    // ── HOJA 7: Health izquierda ──
    {
      id: 'hoja-health-left',
      dark: false,
      render: () => `
        <div>
          <div style="background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:10px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <i class="fas fa-heartbeat text-white"></i>
            <div>
              <span style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.7)">Health</span>
              <h2 style="font-family:'Barlow Condensed';font-size:18px;font-weight:900;font-style:italic;color:white;margin:0;">
                ${document.getElementById('pv-health-titulo')?.textContent || 'SALUD OCUPACIONAL'}
              </h2>
            </div>
          </div>
          ${document.getElementById('pv-health-ruido-box')?.outerHTML || ''}
          ${document.getElementById('pv-health-tips-list')?.outerHTML || ''}
        </div>
      `
    },

    // ── HOJA 8: Health derecha ──
    {
      id: 'hoja-health-right',
      dark: false,
      render: () => `
        <div>
          ${document.getElementById('pv-health-ergo-subtitulo')?.closest('div')?.outerHTML || ''}
          ${document.getElementById('pv-health-ergo-peso-wrap')?.outerHTML || ''}
        </div>
      `
    },

    // ── HOJA 9: Environment izquierda ──
    {
      id: 'hoja-env-left',
      dark: false,
      render: () => `
        <div>
          <div style="background:linear-gradient(135deg,#10b981,#059669);border-radius:10px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <i class="fas fa-leaf text-white"></i>
            <div>
              <span style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.7)">Environment</span>
              <h2 style="font-family:'Barlow Condensed';font-size:18px;font-weight:900;font-style:italic;color:white;margin:0;">
                ${document.getElementById('pv-env-titulo')?.textContent || 'CUIDADO AMBIENTAL'}
              </h2>
            </div>
          </div>
          ${document.getElementById('pv-env-fluidos')?.outerHTML || ''}
          ${document.getElementById('pv-env-protocolo-wrap')?.outerHTML || ''}
        </div>
      `
    },

    // ── HOJA 10: Environment derecha ──
    {
      id: 'hoja-env-right',
      dark: false,
      render: () => `
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="background:linear-gradient(135deg,#0a1628,#1a3160);border-radius:12px;padding:20px;text-align:center;border:1px solid rgba(16,185,129,.3)">
            <p style="font-family:'Barlow Condensed';font-size:48px;font-weight:900;color:#34d399;line-height:1">
              ${document.getElementById('pv-env-derrames')?.textContent || '0'}
            </p>
            <p style="font-size:10px;font-weight:700;text-transform:uppercase;color:rgba(255,255,255,.6);letter-spacing:.06em;margin-top:6px">Derrames no contenidos 2026</p>
          </div>
          ${document.getElementById('pv-qr-ambiental-img-wrap')?.closest('.prev-qr-box')?.outerHTML || ''}
        </div>
      `
    },

    // ── HOJA 11: Guardián QHSE (hoja completa) ──
    {
      id: 'hoja-guardian',
      dark: true,
      render: () => `
        <div style="height:100%;display:flex;flex-direction:column;justify-content:center;">
          <div id="mobile-guardian-content"></div>
        </div>
      `
    },

  ];
}

// ═══════════════════════════════════════════════
// LÓGICA PRINCIPAL DEL LIBRO
// ═══════════════════════════════════════════════

let hojaActual = 0;
let totalHojas = 0;
let animando   = false;
let hojas      = [];

function iniciarLibro() {
  sonidoAbrirLibro();
  if (window.innerWidth >= 768) return;

  hojas      = obtenerHojas();
  totalHojas = hojas.length;

  // Inyectar CSS
  const style = document.createElement('style');
  style.innerHTML = MOBILE_CSS;
  document.head.appendChild(style);

  // Crear estructura del libro
  const overlay = document.createElement('div');
  overlay.className = 'book-overlay';
  overlay.id        = 'book-overlay';
  overlay.innerHTML = `
    <div class="book-topbar">
      <span class="book-topbar-title">
        <span style="color:#00c8ff;margin-right:6px">●</span> SENTINEL IHS
      </span>
      <span class="book-topbar-page" id="book-page-label">1 / ${totalHojas}</span>
      <div style="display:flex;align-items:center;gap:6px;">
        <div class="book-indice-wrap">
          <button class="book-nav-btn" id="btn-indice" onclick="toggleIndiceLibro()" style="width:34px;height:34px;font-size:13px;">
            <i class="fas fa-list"></i>
          </button>
          <div class="book-indice-menu" id="book-indice-menu">
            <button class="book-indice-item" onclick="irAHoja(2)"><i class="fas fa-hard-hat" style="color:#e31e24"></i> Safety</button>
            <button class="book-indice-item" onclick="irAHoja(4)"><i class="fas fa-check-double" style="color:#1e88e5"></i> Quality</button>
            <button class="book-indice-item" onclick="irAHoja(6)"><i class="fas fa-heartbeat" style="color:#f59e0b"></i> Health</button>
            <button class="book-indice-item" onclick="irAHoja(8)"><i class="fas fa-leaf" style="color:#10b981"></i> Environment</button>
            <button class="book-indice-item" onclick="irAHoja(10)"><i class="fas fa-star" style="color:#fbbf24"></i> Guardián del Mes</button>
          </div>
        </div>
        <button class="book-nav-btn" id="btn-mute" onclick="toggleSonidoLibro()" style="width:34px;height:34px;font-size:13px;">
          <i class="fas fa-volume-${sonidoActivo ? 'up' : 'mute'}"></i>
        </button>
      </div>
    </div>

    <div class="book-stage">
      <div class="book-page ${hojas[0].dark ? 'dark-page' : ''}" id="book-page">
        <div class="book-page-inner" id="book-page-inner"></div>
      </div>
    </div>

    <div class="book-nav">
      <button class="book-nav-btn" id="btn-prev" onclick="voltearPagina(-1)" disabled>
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="book-dots" id="book-dots"></div>
      <button class="book-nav-btn" id="btn-next" onclick="voltearPagina(1)">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  // Generar dots
  const dotsEl = document.getElementById('book-dots');
  hojas.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'book-dot' + (i === 0 ? ' active' : '');
    dot.id = `dot-${i}`;
    dotsEl.appendChild(dot);
  });

  // Renderizar primera hoja
  renderizarHoja(0);

  // Swipe táctil
  let touchStartX = 0;
  let touchStartY = 0;
  overlay.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  overlay.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      voltearPagina(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
}

function renderizarHoja(index) {
  const pageEl      = document.getElementById('book-page');
  const pageInnerEl = document.getElementById('book-page-inner');
  const hoja        = hojas[index];

  pageEl.className = 'book-page' + (hoja.dark ? ' dark-page' : '');
  pageInnerEl.innerHTML = hoja.render();

  if (hojas[index].id === 'hoja-guardian') {
    const src = document.getElementById('prev-guardian');
    const dst = document.getElementById('mobile-guardian-content');
    if (src && dst) {
      dst.innerHTML = src.innerHTML;
      const avatar = dst.querySelector('#pv-g-avatar');
      if (avatar) avatar.remove();
    }
  }

  // Actualizar label
  document.getElementById('book-page-label').textContent =
    `${index + 1} / ${totalHojas}`;

  // Actualizar dots
  document.querySelectorAll('.book-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });

  // Botones
  document.getElementById('btn-prev').disabled = index === 0;
  document.getElementById('btn-next').disabled = index === totalHojas - 1;
}

function voltearPagina(direccion) {
  if (animando) return;
  const nueva = hojaActual + direccion;
  if (nueva < 0 || nueva >= totalHojas) {
    sonidoLimite();
    if (navigator.vibrate) navigator.vibrate(15);
    return;
  }

  sonidoPagina();

  animando = true;
  const pageEl = document.getElementById('book-page');

  // Clase de salida según dirección
  const claseOut = direccion > 0 ? 'flip-out' : 'flip-out-reverse';
  const claseIn  = direccion > 0 ? 'flip-in'  : 'flip-in-reverse';

  pageEl.classList.add(claseOut);

  setTimeout(() => {
    pageEl.classList.remove(claseOut);
    hojaActual = nueva;
    renderizarHoja(hojaActual);
    pageEl.classList.add(claseIn);

    setTimeout(() => {
      pageEl.classList.remove(claseIn);
      animando = false;
    }, 260);
  }, 260);
}

// ── ÍNDICE: saltar directo a una hoja específica ──
function irAHoja(index) {
  if (animando) return;
  if (index < 0 || index >= totalHojas || index === hojaActual) {
    toggleIndiceLibro(false);
    return;
  }

  sonidoPagina();
  animando = true;
  const pageEl = document.getElementById('book-page');
  const direccion = index > hojaActual ? 1 : -1;
  const claseOut = direccion > 0 ? 'flip-out' : 'flip-out-reverse';
  const claseIn  = direccion > 0 ? 'flip-in'  : 'flip-in-reverse';

  pageEl.classList.add(claseOut);

  setTimeout(() => {
    pageEl.classList.remove(claseOut);
    hojaActual = index;
    renderizarHoja(hojaActual);
    pageEl.classList.add(claseIn);

    setTimeout(() => {
      pageEl.classList.remove(claseIn);
      animando = false;
    }, 260);
  }, 260);

  toggleIndiceLibro(false);
}

// ── Abrir/cerrar el menú del índice ──
function toggleIndiceLibro(forzar) {
  const menu = document.getElementById('book-indice-menu');
  if (!menu) return;
  const abrir = forzar !== undefined ? forzar : !menu.classList.contains('open');
  menu.classList.toggle('open', abrir);
}