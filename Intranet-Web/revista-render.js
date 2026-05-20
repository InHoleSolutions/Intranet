// ═══════════════════════════════════════════════════════════
// 1. CSS
// ═══════════════════════════════════════════════════════════
const REVISTA_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700;1,900&display=swap');

  .magazine-wrap { max-width: 80%; margin: 0 auto; }

  /* Cover */
  .prev-cover { background: linear-gradient(135deg, #0a1628 0%, #0e2044 50%, #1a3160 100%); border-radius: 20px; padding: 40px; position: relative; overflow: hidden; margin-bottom: 16px; min-height: 360px; }
  .prev-cover-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(30,136,229,.07) 1px, transparent 1px), linear-gradient(90deg,rgba(30,136,229,.07) 1px,transparent 1px); background-size: 36px 36px; border-radius: 20px; }
  .prev-cover-line { position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: linear-gradient(180deg, #00c8ff, #1e88e5, #e31e24); border-radius: 20px 0 0 20px; }
  .prev-cover-title { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(22px, 4vw, 52px); font-weight: 900; font-style: italic; line-height: 1; color: white; letter-spacing: -.02em; word-break: break-word; overflow-wrap: break-word; max-width: 99%; }
  .prev-cover-subtitle { font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 600; font-style: italic; color: #00c8ff; letter-spacing: .08em; }
  .prev-stat { border-radius: 10px; padding: 10px 12px; text-align: center; }
  .prev-msg-box { border-radius: 14px; padding: 20px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); }

  /* Section card */
  .prev-section { background: white; border-radius: 16px; margin-bottom: 16px; overflow: hidden; box-shadow: 0 2px 16px rgba(10,22,40,.07); }
  .prev-section-header { padding: 16px 22px; display: flex; align-items: center; gap: 12px; }
  .prev-section-body { padding: 20px 22px; }
  .prev-section-title { font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 900; font-style: italic; color: white; margin: 0; }
  .prev-badge { font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; padding: 3px 10px; border-radius: 100px; background: rgba(255,255,255,.2); color: white; }

  /* Near miss */
  .prev-nm { border-left: 4px solid #e31e24; background: #fff5f5; border-radius: 0 12px 12px 0; padding: 14px 16px; margin: 10px 0; }
  .prev-nm-label { font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: #e31e24; margin-bottom: 6px; }

  /* Guardian */
  .prev-guardian { background: linear-gradient(135deg, #0a1628 0%, #1a3160 100%); border-radius: 14px; padding: 22px; }
  .prev-guardian-avatar { width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #00c8ff, #1e88e5); display: flex; align-items: center; justify-content: center; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 18px; color: white; flex-shrink: 0; }

  /* EPP */
  .prev-epp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 8px; }
  .prev-epp-item { background: #f0f4f8; border-radius: 10px; padding: 10px 6px; text-align: center; }
  .prev-epp-icon { font-size: 22px; display: block; margin-bottom: 4px; }
  .prev-epp-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: #0e2044; }

  /* QR */
  .prev-qr-box { background: #0a1628; border-radius: 12px; padding: 14px; display: flex; align-items: center; gap: 12px; margin-top: 10px; }
  .prev-qr-placeholder { width: 60px; height: 60px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 22px; overflow: hidden; }

  @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
  .fade-in { animation: fadeIn .3s ease both; }
`;

// ═══════════════════════════════════════════════════════════
// 2. HTML
// ═══════════════════════════════════════════════════════════
const REVISTA_HTML = `
<div class="magazine-wrap">

  <!-- ── PORTADA ── -->
  <div class="prev-cover fade-in" id="prev-cover">
    <div class="prev-cover-grid"></div>
    <div class="prev-cover-line"></div>
    <div style="position:relative;z-index:10;display:flex;gap:24px;flex-wrap:wrap;">
      <!-- Left -->
      <div style="flex:1;min-width:200px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
          <span id="pv-edition-badge" style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;padding:4px 12px;border-radius:100px;background:rgba(30,136,229,.2);border:1px solid rgba(0,200,255,.3);color:#00c8ff">Edición —</span>
          <span id="pv-volumen" style="font-size:10px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em">Vol. 1</span>
        </div>
        <p class="prev-cover-subtitle mb-1">ALERTAS QHSE</p>
        <h1 class="prev-cover-title" id="pv-titulo">SEGURIDAD SIN EXCUSAS</h1>
      </div>
      <!-- Right -->
      <div style="width:240px;">
        <div class="prev-msg-box">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#1e88e5,#00c8ff);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="fas fa-quote-left text-white" style="font-size:10px;"></i></div>
            <div><p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.5)">Mensaje de</p><p style="font-size:10px;font-weight:700;color:rgba(255,255,255,.8);text-transform:uppercase;letter-spacing:.06em">Gerencia de Operaciones</p></div>
          </div>
          <p id="pv-mensaje" style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.6;font-style:italic">—</p>
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.1);">
            <p id="pv-director" style="font-size:10px;font-weight:800;color:rgba(255,255,255,.9);text-transform:uppercase;letter-spacing:.06em">Ing. —</p>
            <p style="font-size:9px;color:rgba(255,255,255,.45);margin-top:2px">Gerente de Operaciones — In Hole Solutions</p>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:10px;">
          <div class="prev-stat" style="background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.25)">
            <p id="pv-stat-dias" style="font-family:'Barlow Condensed';font-size:24px;font-weight:900;color:#34d399;line-height:1">0</p>
            <p style="font-size:8px;color:rgba(255,255,255,.55);font-weight:700;text-transform:uppercase;letter-spacing:.03em;margin-top:2px">Días sin<br>accidente</p>
          </div>
          <div class="prev-stat" style="background:rgba(30,136,229,.15);border:1px solid rgba(30,136,229,.25)">
            <p id="pv-stat-obs" style="font-family:'Barlow Condensed';font-size:24px;font-weight:900;color:#60a5fa;line-height:1">0</p>
            <p style="font-size:8px;color:rgba(255,255,255,.55);font-weight:700;text-transform:uppercase;letter-spacing:.03em;margin-top:2px">Reportes<br>riesgo</p>
          </div>
          <div class="prev-stat" style="background:rgba(245,158,11,.15);border:1px solid rgba(245,158,11,.25)">
            <p id="pv-stat-acc" style="font-family:'Barlow Condensed';font-size:24px;font-weight:900;color:#fbbf24;line-height:1">0</p>
            <p style="font-size:8px;color:rgba(255,255,255,.55);font-weight:700;text-transform:uppercase;letter-spacing:.03em;margin-top:2px">Near miss<br>resueltos</p>
          </div>
        </div>
      </div>
    </div>
    <div style="position:absolute;bottom:20px;left:40px;display:flex;flex-wrap:wrap;gap:6px;z-index:10;">
      <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(227,30,36,.25);border:1px solid rgba(227,30,36,.3)"><i class="fas fa-hard-hat mr-1"></i>Safety</span>
      <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(16,185,129,.2);border:1px solid rgba(16,185,129,.3)"><i class="fas fa-check-double mr-1"></i>Quality</span>
      <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(245,158,11,.2);border:1px solid rgba(245,158,11,.3)"><i class="fas fa-heartbeat mr-1"></i>Health</span>
      <span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:100px;color:rgba(255,255,255,.8);background:rgba(30,136,229,.2);border:1px solid rgba(30,136,229,.3)"><i class="fas fa-leaf mr-1"></i>Env.</span>
    </div>
  </div>

  <!-- ── SAFETY ── -->
  <div class="prev-section fade-in" id="prev-safety">
    <div class="prev-section-header" style="background:linear-gradient(135deg,#e31e24,#c01a1f)">
      <div style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="fas fa-hard-hat text-white text-sm"></i></div>
      <div><span class="prev-badge">Safety</span><h2 class="prev-section-title" id="pv-safety-titulo">ALERTA DE SEGURIDAD</h2></div>
      <span style="margin-left:auto;font-size:10px;font-weight:700;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em">Safety</span>
    </div>
    <div class="prev-section-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <!-- LEFT -->
        <div>
          <p id="pv-safety-subtema" style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#000000;margin-bottom:6px;display:flex;align-items:center;gap:6px"><i class="fas fa-hard-hat"></i><span id="pv-safety-subtema-text"></span></p>
          <div id="pv-epp-safety" style="border:2px dashed rgba(227,30,36,.25);border-radius:12px;padding:14px;background:#fff5f5;margin-bottom:12px">
            <p id="pv-epp-safety-titulo" style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#e31e24;margin-bottom:10px;display:flex;align-items:center;gap:5px"><i class="fas fa-shield-halved"></i>EPP Obligatorio</p>
            <div id="pv-epp-safety-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(68px,1fr));gap:8px"></div>
          </div>
          <div id="pv-tips-safety" style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px"></div>
          <div id="pv-qr-safety-list"></div>
        </div>
        <!-- RIGHT: Near Miss -->
        <div>
          <p style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#64748b;margin-bottom:8px;display:flex;align-items:center;gap:6px"><i class="fas fa-triangle-exclamation text-red-500"></i>Lección Aprendida — Near Miss</p>
          <div style="display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:100px;background:#fef2f2;border:1px solid #fecaca;margin-bottom:10px">
            <i class="fas fa-circle text-red-500" style="font-size:6px"></i>
            <span id="pv-nm-area" style="font-size:10px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.06em">—</span>
          </div>
          <div style="border-left:4px solid #e31e24;background:#fff5f5;border-radius:0 10px 10px 0;padding:12px 14px;margin-bottom:10px">
            <p id="pv-nm-titulo" style="font-family:'Barlow Condensed';font-size:15px;font-weight:900;color:#1e293b;text-transform:uppercase;margin-bottom:6px">—</p>
            <p id="pv-nm-desc" style="font-size:11px;color:#64748b;line-height:1.6"></p>
          </div>
          <div style="display:grid;gap:8px">
            <div style="border-radius:10px;padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0">
              <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:4px"><i class="fas fa-magnifying-glass mr-1 text-blue-400"></i>Causa Raíz</p>
              <p id="pv-nm-causa" style="font-size:12px;color:#475569">—</p>
            </div>
            <div style="border-radius:10px;padding:10px 12px;background:#f0fdf4;border:1px solid #bbf7d0">
              <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#15803d;margin-bottom:4px"><i class="fas fa-wrench mr-1"></i>Acción Correctiva</p>
              <p id="pv-nm-accion" style="font-size:12px;color:#475569">—</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── QUALITY ── -->
  <div class="prev-section fade-in" id="prev-quality">
    <div class="prev-section-header" style="background:linear-gradient(135deg,#1e88e5,#0d47a1)">
      <div style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="fas fa-check-double text-white text-sm"></i></div>
      <div>
        <span class="prev-badge" style="background:rgba(255,255,255,.15);color:rgba(255,255,255,.9);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:2px 8px;border-radius:4px">QUALITY</span>
        <h2 class="prev-section-title" id="pv-quality-titulo">CALIDAD OPERATIVA</h2>
      </div>
      <span style="margin-left:auto;font-size:10px;font-weight:700;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em">Quality</span>
    </div>
    <div class="prev-section-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
        <!-- LEFT -->
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
            <span style="font-size:18px">🔗</span>
            <h3 id="pv-quality-left-titulo" style="font-family:'Barlow Condensed';font-size:15px;font-weight:900;color:#1e293b;text-transform:uppercase;letter-spacing:.04em">INTEGRIDAD DE CONEXIONES</h3>
          </div>
          <div id="pv-quality-tabla-wrap" style="margin-bottom:14px"></div>
          <div id="pv-quality-alerta-wrap" style="display:none">
            <div style="background:linear-gradient(135deg,#0a1628,#1a3160);border-radius:10px;padding:14px;border-left:4px solid #f59e0b">
              <p id="pv-quality-alerta-titulo" style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#fbbf24;margin-bottom:6px"><i class="fas fa-triangle-exclamation mr-1"></i>¡ALERTA DE CALIDAD!</p>
              <p id="pv-quality-alerta-texto" style="font-size:12px;color:rgba(255,255,255,.8);line-height:1.65"></p>
            </div>
          </div>
        </div>
        <!-- RIGHT -->
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
            <span style="font-size:18px">⚙️</span>
            <h3 id="pv-quality-right-titulo" style="font-family:'Barlow Condensed';font-size:15px;font-weight:900;color:#1e293b;text-transform:uppercase;letter-spacing:.04em">MÁQUINA DE TORQUE</h3>
          </div>
          <div id="pv-quality-pasos-list" style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px"></div>
          <div id="pv-epp-quality" style="border:2px dashed rgba(30,136,229,.25);border-radius:12px;padding:12px;background:#f0f7ff;margin-bottom:14px">
            <p id="pv-epp-quality-titulo" style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#1e88e5;margin-bottom:10px;display:flex;align-items:center;gap:5px"><i class="fas fa-shield-halved"></i>EPP Quality</p>
            <div id="pv-epp-quality-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(68px,1fr));gap:8px"></div>
          </div>
          <div id="pv-qr-quality-wrap">
            <div class="prev-qr-box">
              <div class="prev-qr-placeholder" id="pv-qr-torque-img-wrap">⚙️</div>
              <div>
                <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#00c8ff">Código QR</p>
                <p id="pv-qr-torque-titulo" style="font-size:11px;font-weight:700;color:white;margin-top:2px">Manual de Torque</p>
                <p id="pv-qr-torque-desc" style="font-size:10px;color:rgba(255,255,255,.4);margin-top:1px">Sin descripción</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── HEALTH ── -->
  <div class="prev-section fade-in" id="prev-health">
    <div class="prev-section-header" style="background:linear-gradient(135deg,#f59e0b,#d97706)">
      <div style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="fas fa-heartbeat text-white text-sm"></i></div>
      <div>
        <span class="prev-badge" style="background:rgba(255,255,255,.2);color:rgba(255,255,255,.9);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:2px 8px;border-radius:4px">HEALTH</span>
        <h2 class="prev-section-title" id="pv-health-titulo">SALUD OCUPACIONAL</h2>
      </div>
      <span style="margin-left:auto;font-size:10px;font-weight:700;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em">Health</span>
    </div>
    <div class="prev-section-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
        <!-- LEFT: Ruido -->
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
            <h3 id="pv-health-left-titulo" style="font-family:'Barlow Condensed';font-size:15px;font-weight:900;color:#1e293b;text-transform:uppercase;letter-spacing:.04em">PROTECCIÓN RUIDO Y VIBRACIÓN</h3>
          </div>
          <div id="pv-health-ruido-box" style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:12px;margin-bottom:10px">
            <p id="pv-health-ruido-titulo" style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#92400e;margin-bottom:10px;display:flex;align-items:center;gap:5px">
              <i class="fas fa-volume-high"></i>NIVELES DE EXPOSICIÓN AL RUIDO
            </p>
            <div id="pv-health-barras-list" style="display:flex;flex-direction:column;gap:8px"></div>
          </div>
          <div id="pv-health-tips-list" style="display:flex;flex-direction:column;gap:6px"></div>
        </div>
        <!-- RIGHT: Ergonomía -->
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
            <span style="font-size:18px">🚶</span>
            <h3 id="pv-health-right-titulo" style="font-family:'Barlow Condensed';font-size:15px;font-weight:900;color:#1e293b;text-transform:uppercase;letter-spacing:.04em">ERGONOMÍA EN CAMPO Y TALLER</h3>
          </div>
          <div style="border:1.5px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:10px">
            <div id="pv-health-ergo-subtitulo" style="background:#f8fafc;padding:7px 12px;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#64748b;border-bottom:1px solid #e2e8f0">POSTURAS CORRECTAS</div>
            <div style="display:grid;grid-template-columns:1fr 1fr">
              <div style="padding:14px;text-align:center;border-right:1px solid #e2e8f0">
                <div style="width:36px;height:36px;border-radius:50%;background:#22c55e;margin:0 auto 8px;display:flex;align-items:center;justify-content:center"><i class="fas fa-check" style="color:white;font-size:14px"></i></div>
                <p style="font-size:9px;font-weight:800;color:#15803d;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Correcto</p>
                <p id="pv-health-ergo-correcto" style="font-size:11px;color:#475569;line-height:1.5">—</p>
              </div>
              <div style="padding:14px;text-align:center">
                <div style="width:36px;height:36px;border-radius:50%;background:#ef4444;margin:0 auto 8px;display:flex;align-items:center;justify-content:center"><i class="fas fa-times" style="color:white;font-size:14px"></i></div>
                <p style="font-size:9px;font-weight:800;color:#dc2626;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Incorrecto</p>
                <p id="pv-health-ergo-incorrecto" style="font-size:11px;color:#475569;line-height:1.5">—</p>
              </div>
            </div>
          </div>
          <div id="pv-health-ergo-peso-wrap" style="display:none;background:#fffbeb;border-radius:8px;padding:9px 12px;margin-bottom:12px;border-left:3px solid #f59e0b">
            <p id="pv-health-ergo-peso" style="font-size:11px;color:#78350f;line-height:1.6"></p>
          </div>
          <div class="prev-qr-box" style="margin-top:4px">
            <div class="prev-qr-placeholder" id="pv-qr-ergo-img-wrap">🏋️</div>
            <div>
              <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#00c8ff">Código QR</p>
              <p id="pv-qr-ergo-titulo" style="font-size:11px;font-weight:700;color:white;margin-top:2px">Video Ergonomía</p>
              <p id="pv-qr-ergo-desc" style="font-size:10px;color:rgba(255,255,255,.4);margin-top:1px">Sin descripción</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── ENVIRONMENT ── -->
  <div class="prev-section fade-in" id="prev-environment">
    <div class="prev-section-header" style="background:linear-gradient(135deg,#10b981,#059669)">
      <div style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="fas fa-leaf text-white text-sm"></i></div>
      <div>
        <span class="prev-badge" style="background:rgba(255,255,255,.2);color:rgba(255,255,255,.9);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:2px 8px;border-radius:4px">ENVIRONMENT</span>
        <h2 class="prev-section-title" id="pv-env-titulo">CUIDADO AMBIENTAL</h2>
      </div>
      <span style="margin-left:auto;font-size:10px;font-weight:700;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em">Environment</span>
    </div>
    <div class="prev-section-body">
      <div style="display:grid;grid-template-columns:3fr 1fr;gap:20px;align-items:start">
        <!-- Left -->
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
            <span style="font-size:16px">💧</span>
            <h3 id="pv-env-left-titulo" style="font-family:'Barlow Condensed';font-size:15px;font-weight:900;color:#1e293b;text-transform:uppercase;letter-spacing:.04em">CONTROL Y CONTENCIÓN DE FLUIDOS</h3>
          </div>
          <div id="pv-env-fluidos" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px"></div>
          <div id="pv-env-protocolo-wrap">
            <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px">
              <p id="pv-env-protocolo-titulo" style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#065f46;margin-bottom:10px;display:flex;align-items:center;gap:5px">
                <i class="fas fa-triangle-exclamation"></i>PROTOCOLO DE RESPUESTA A DERRAME
              </p>
              <div id="pv-env-protocolo-steps" style="display:flex;gap:12px;flex-wrap:wrap"></div>
            </div>
          </div>
        </div>
        <!-- Right -->
        <div style="display:flex;flex-direction:column;gap:12px;min-width:160px">
          <div style="background:linear-gradient(135deg,#0a1628,#1a3160);border-radius:12px;padding:16px;text-align:center;border:1px solid rgba(16,185,129,.3)">
            <p id="pv-env-derrames" style="font-family:'Barlow Condensed';font-size:40px;font-weight:900;color:#34d399;line-height:1">0</p>
            <p style="font-size:10px;font-weight:700;text-transform:uppercase;color:rgba(255,255,255,.6);letter-spacing:.06em;margin-top:4px">Derrames no<br>contenidos 2026</p>
          </div>
          <div class="prev-qr-box" style="margin-top:0">
            <div class="prev-qr-placeholder" id="pv-qr-ambiental-img-wrap">🌿</div>
            <div>
              <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#00c8ff">Código QR</p>
              <p id="pv-qr-ambiental-titulo" style="font-size:11px;font-weight:700;color:white;margin-top:2px">Incidente Ambiental</p>
              <p id="pv-qr-ambiental-desc" style="font-size:10px;color:rgba(255,255,255,.4);margin-top:1px">Sin descripción</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── GUARDIAN ── -->
  <div class="prev-section fade-in" id="prev-guardian">
    <div class="prev-section-header" style="background:linear-gradient(135deg,#7c3aed,#4c1d95)">
      <div style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="fas fa-star text-white text-sm"></i></div>
      <div>
        <span class="prev-badge" style="background:rgba(255,255,255,.2);color:rgba(255,255,255,.9);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:2px 8px;border-radius:4px">GUARDIÁN QHSE</span>
        <h2 class="prev-section-title">GUARDIÁN QHSE DEL MES</h2>
      </div>
    </div>
    <div class="prev-section-body" style="padding:0">
      <div style="background:linear-gradient(135deg,#0a1628,#1a3160);border-radius:12px;padding:20px 20px 16px;position:relative;overflow:hidden">
        <div style="display:flex;align-items:flex-start;gap:14px">
          <div id="pv-g-avatar" style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#00c8ff);display:flex;align-items:center;justify-content:center;font-family:'Barlow Condensed';font-size:18px;font-weight:900;color:white;flex-shrink:0;">??</div>
          <div style="flex:1;min-width:0">
            <p id="pv-g-mes" style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.45);margin-bottom:4px">Guardián QHSE del Mes</p>
            <h3 id="pv-g-nombre" style="font-family:'Barlow Condensed';font-size:30px;font-weight:900;font-style:italic;color:white;line-height:1;margin-bottom:4px">[Nombre]</h3>
            <p id="pv-g-puesto" style="font-size:12px;color:rgba(255,255,255,.55)">—</p>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <p id="pv-g-reportes" style="font-family:'Barlow Condensed';font-size:46px;font-weight:900;color:#00c8ff;line-height:1">0</p>
            <p style="font-size:8px;font-weight:700;text-transform:uppercase;color:rgba(255,255,255,.4);letter-spacing:.06em;margin-top:2px">Condiciones<br>reportadas</p>
          </div>
        </div>
        <div style="margin-top:14px;padding:12px 14px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)">
          <p id="pv-g-motivo" style="font-size:12px;color:rgba(255,255,255,.75);line-height:1.65;font-style:italic">—</p>
        </div>
        <div id="pv-g-badges" style="margin-top:12px;display:flex;flex-wrap:wrap;gap:6px;"></div>
      </div>
    </div>
  </div>

</div><!-- /magazine-wrap -->
`;

// ═══════════════════════════════════════════════════════════
// 3. MONTAR REVISTA EN UN CONTENEDOR
// ═══════════════════════════════════════════════════════════
function montarRevista(containerId) {
  // Inyectar CSS una sola vez
  if (!document.getElementById('revista-ihs-css')) {
    const style = document.createElement('style');
    style.id = 'revista-ihs-css';
    style.textContent = REVISTA_CSS;
    document.head.appendChild(style);
  }
  // Inyectar HTML
  const container = document.getElementById(containerId);
  if (container) container.innerHTML = REVISTA_HTML;
}

// ═══════════════════════════════════════════════════════════
// 4. APLICAR DATOS DE SUPABASE A LA REVISTA
// ═══════════════════════════════════════════════════════════
function aplicarEdicionARevista(data) {
  const pv  = id => document.getElementById(id);
  const set = (id, val) => { const el = pv(id); if (el && val != null) el.textContent = val; };

  // ── PORTADA ──
  if (pv('pv-titulo')) pv('pv-titulo').textContent = data.titulo || 'SEGURIDAD SIN EXCUSAS';
  set('pv-edition-badge', data.edicion ? `Edición ${data.edicion}` : 'Edición —');
  set('pv-volumen',  data.volumen || 'Vol. 1');
  set('pv-director', data.nombre_director ? `Ing. ${data.nombre_director}` : 'Ing. —');
  set('pv-mensaje',  data.mensaje_director || '—');
  set('pv-stat-dias', data.stat_dias ?? 0);
  set('pv-stat-obs',  data.stat_obs  ?? 0);
  set('pv-stat-acc',  data.stat_acc  ?? 0);

  // ── SAFETY ──
  set('pv-safety-titulo', data.safety_titulo || 'ALERTA DE SEGURIDAD');
  const subTemaEl = pv('pv-safety-subtema-text');
  if (subTemaEl) subTemaEl.textContent = (data.safety_contenido || '').split('\n')[0].toUpperCase() || '';

  // EPP Safety
  const eppSTitEl = pv('pv-epp-safety-titulo');
  if (eppSTitEl) eppSTitEl.innerHTML = `<i class="fas fa-shield-halved"></i> ${data.safety_epp_titulo || 'EPP Obligatorio'}`;
  const epSGrid = pv('pv-epp-safety-grid');
  if (epSGrid) {
    const items = Array.isArray(data.epp_safety) ? data.epp_safety : [];
    epSGrid.innerHTML = items.length
      ? items.map(e => `
          <div style="background:#f0f4f8;border-radius:10px;padding:10px 6px;text-align:center">
            <span style="font-size:26px;display:block;margin-bottom:4px">${e.emoji || '🔧'}</span>
            <span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#0e2044;line-height:1.2;display:block">${e.label || ''}</span>
          </div>`).join('')
      : '<p style="font-size:11px;color:#94a3b8;padding:6px;grid-column:1/-1">Sin EPP registrado</p>';
  }

  // Tips Safety
  const tipsEl = pv('pv-tips-safety');
  if (tipsEl) {
    const tips = Array.isArray(data.tips_safety) ? data.tips_safety : [];
    const tipColorMap = { '✅':'green','⚠️':'yellow','🚫':'red','💡':'yellow','🔔':'yellow','❌':'red','🟢':'green','🟡':'yellow','🔴':'red','ℹ️':'green','📌':'yellow','🛑':'red' };
    const tipBgMap  = { green:'#f0fdf4', yellow:'#fffbeb', red:'#fef2f2' };
    const tipBdrMap = { green:'#22c55e', yellow:'#f59e0b', red:'#ef4444' };
    tipsEl.innerHTML = tips.filter(t => t.text || t.texto).map(t => {
      const col = tipColorMap[t.icon] || 'green';
      return `<div style="display:flex;align-items:flex-start;gap:10px;padding:10px 14px;border-radius:10px;background:${tipBgMap[col]};border-left:4px solid ${tipBdrMap[col]}">
        <span style="font-size:16px;flex-shrink:0;margin-top:1px">${t.icon}</span>
        <p style="font-size:12px;color:#475569;line-height:1.6;margin:0">${t.text || t.texto}</p>
      </div>`;
    }).join('');
  }

  // QRs Safety dinámicos
  const qrSafetyEl = pv('pv-qr-safety-list');
  if (qrSafetyEl) {
    const qrs = Array.isArray(data.qrs_safety) ? data.qrs_safety : [];
    qrSafetyEl.innerHTML = qrs.map(qr => `
      <div style="background:#0a1628;border-radius:12px;padding:14px;display:flex;align-items:center;gap:12px;margin-top:8px">
        <div style="width:60px;height:60px;background:white;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:22px;overflow:hidden">
          ${qr.img ? `<img src="${qr.img}" style="width:56px;height:56px;object-fit:contain;border-radius:6px;">` : '📋'}
        </div>
        <div>
          <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#00c8ff">Código QR</p>
          <p style="font-size:11px;font-weight:700;color:white;margin-top:2px">${qr.titulo || ''}</p>
          <p style="font-size:10px;color:rgba(255,255,255,.4);margin-top:1px">${qr.desc || ''}</p>
        </div>
      </div>`).join('');
  }

  // ── QUALITY ──
  set('pv-quality-titulo',      data.quality_titulo      || 'CALIDAD OPERATIVA');
  set('pv-quality-left-titulo', data.quality_left_titulo || 'INTEGRIDAD DE CONEXIONES');
  set('pv-quality-right-titulo',data.quality_right_titulo|| 'MÁQUINA DE TORQUE');

  // Tabla quality
  const tablaWrap = pv('pv-quality-tabla-wrap');
  if (tablaWrap) {
    const rows = Array.isArray(data.quality_tabla) ? data.quality_tabla : [];
    const colores = ['#22c55e','#3b82f6','#f59e0b','#a855f7','#ef4444','#06b6d4'];
    tablaWrap.innerHTML = rows.length
      ? `<div style="background:#0a1628;border-radius:10px;overflow:hidden;border:1px solid rgba(30,136,229,.25)">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;background:#0e2044;padding:7px 10px;gap:4px">
            <span style="font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.5)">Parámetro</span>
            <span style="font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.5)">Condición OK</span>
            <span style="font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.5)">Acción</span>
          </div>
          ${rows.map((r,i) => `
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:8px 10px;gap:4px;border-top:1px solid rgba(255,255,255,.06)">
              <span style="font-size:11px;color:rgba(255,255,255,.8);font-weight:500">${r.param||r.parametro||'—'}</span>
              <span style="font-size:11px;color:${colores[i%colores.length]};font-weight:700">${r.condicion||'—'}</span>
              <span style="font-size:11px;color:rgba(255,255,255,.6)">${r.accion||'—'}</span>
            </div>`).join('')}
        </div>`
      : '<p style="font-size:11px;color:#94a3b8;padding:6px">Sin datos de inspección</p>';
  }

  // Alerta quality
  const alertaWrap = pv('pv-quality-alerta-wrap');
  if (alertaWrap) {
    const tit = data.quality_alerta_titulo;
    const txt = data.quality_alerta_texto;
    if (tit || txt) {
      alertaWrap.style.display = 'block';
      set('pv-quality-alerta-titulo', tit || '¡ALERTA DE CALIDAD!');
      const textoEl = pv('pv-quality-alerta-texto');
      if (textoEl) textoEl.innerHTML = (txt || '')
        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:white">$1</strong>')
        .replace(/==(.+?)==/g, '<span style="color:#fbbf24;font-weight:700">$1</span>');
    } else {
      alertaWrap.style.display = 'none';
    }
  }

  // Pasos quality
  const pasosEl = pv('pv-quality-pasos-list');
  if (pasosEl) {
    const pasos = Array.isArray(data.quality_pasos) ? data.quality_pasos : [];
    pasosEl.innerHTML = pasos.map((p,i) => `
      <div style="display:flex;gap:10px;align-items:flex-start;background:#f8fafc;border-radius:10px;padding:10px 12px;border:1px solid #e2e8f0">
        <div style="width:24px;height:24px;border-radius:50%;background:#1e88e5;color:white;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i+1}</div>
        <div>
          <p style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:2px">${p.titulo||''}</p>
          <p style="font-size:11px;color:#64748b;line-height:1.5">${p.desc||''}</p>
        </div>
      </div>`).join('');
  }

  // EPP Quality
  const epQTitEl = pv('pv-epp-quality-titulo');
  if (epQTitEl) epQTitEl.innerHTML = `<i class="fas fa-shield-halved"></i> ${data.quality_epp_titulo || 'EPP Quality'}`;
  const epQGrid = pv('pv-epp-quality-grid');
  if (epQGrid) {
    const items = Array.isArray(data.epp_quality) ? data.epp_quality : [];
    epQGrid.innerHTML = items.length
      ? items.map(e => `
          <div style="background:white;border-radius:10px;padding:10px 6px;text-align:center;border:1px solid #e2e8f0">
            <span style="font-size:26px;display:block;margin-bottom:4px">${e.emoji||'🔧'}</span>
            <span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#0e2044;line-height:1.2;display:block">${e.label||''}</span>
          </div>`).join('')
      : '';
  }

  // QR Torque
  if (data.qr_urls) {
    set('pv-qr-torque-titulo', data.qr_urls.torque_titulo || 'Manual de Torque');
    set('pv-qr-torque-desc',   data.qr_urls.torque_desc   || '');
    const torqueWrap = pv('pv-qr-torque-img-wrap');
    if (torqueWrap && data.qr_urls.torque_img) {
      torqueWrap.innerHTML = `<img src="${data.qr_urls.torque_img}" style="width:60px;height:60px;object-fit:contain;border-radius:6px;">`;
    }
  }

  // ── HEALTH ──
  set('pv-health-titulo',       data.health_titulo       || 'SALUD OCUPACIONAL');
  set('pv-health-left-titulo',  data.health_left_titulo  || 'PROTECCIÓN RUIDO Y VIBRACIÓN');
  set('pv-health-right-titulo', data.health_right_titulo || 'ERGONOMÍA EN CAMPO Y TALLER');

  // Título barras ruido
  const ruidoTitEl = pv('pv-health-ruido-titulo');
  if (ruidoTitEl) ruidoTitEl.innerHTML = `<i class="fas fa-volume-high"></i> ${data.health_ruido_titulo || 'NIVELES DE EXPOSICIÓN AL RUIDO'}`;

  // Barras de ruido
  const barrasEl = pv('pv-health-barras-list');
  if (barrasEl) {
    const barras = Array.isArray(data.health_barras) ? data.health_barras : [];
    const colorHex = { red:'#ef4444', orange:'#f97316', green:'#22c55e', blue:'#3b82f6' };
    barrasEl.innerHTML = barras.map(b => `
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
          <span style="font-size:11px;color:#1e293b;font-weight:500">${b.label||'—'}</span>
          <span style="font-size:11px;font-weight:700;color:${colorHex[b.color]||'#ef4444'}">${b.valor||''}</span>
        </div>
        <div style="height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${Math.min(100,b.pct||80)}%;background:${colorHex[b.color]||'#ef4444'};border-radius:4px;"></div>
        </div>
      </div>`).join('');
  }

  // Tips health
  const htipsEl = pv('pv-health-tips-list');
  if (htipsEl) {
    const htips = Array.isArray(data.health_tips) ? data.health_tips : [];
    const tipBg  = { '🔇':'#fff7ed','🖐️':'#f0fdf4','⚠️':'#fffbeb', default:'#f8fafc' };
    const tipBdr = { '🔇':'#fed7aa','🖐️':'#bbf7d0','⚠️':'#fde68a', default:'#e2e8f0' };
    htipsEl.innerHTML = htips.filter(t => t.texto || t.text).map(t => `
      <div style="display:flex;align-items:flex-start;gap:10px;padding:9px 12px;border-radius:9px;background:${tipBg[t.icon]||tipBg.default};border-left:3px solid ${tipBdr[t.icon]||tipBdr.default}">
        <span style="font-size:15px;flex-shrink:0;margin-top:1px">${t.icon}</span>
        <p style="font-size:11px;color:#475569;line-height:1.6;margin:0">${t.texto||t.text}</p>
      </div>`).join('');
  }

  // Ergo
  set('pv-health-ergo-subtitulo',  data.health_ergo_subtitulo  || 'POSTURAS CORRECTAS');
  set('pv-health-ergo-correcto',   data.health_ergo_correcto   || '—');
  set('pv-health-ergo-incorrecto', data.health_ergo_incorrecto || '—');
  const pesoWrap = pv('pv-health-ergo-peso-wrap');
  if (pesoWrap) {
    if (data.health_ergo_peso) {
      pesoWrap.style.display = 'block';
      const pesoEl = pv('pv-health-ergo-peso');
      if (pesoEl) pesoEl.innerHTML = `<span style="font-size:14px;margin-right:5px">💛</span>${data.health_ergo_peso}`;
    } else {
      pesoWrap.style.display = 'none';
    }
  }

  // QR Ergo
  if (data.qr_urls) {
    set('pv-qr-ergo-titulo', data.qr_urls.ergo_titulo || 'Video Ergonomía');
    set('pv-qr-ergo-desc',   data.qr_urls.ergo_desc   || '');
    const ergoWrap = pv('pv-qr-ergo-img-wrap');
    if (ergoWrap && data.qr_urls.ergo_img) {
      ergoWrap.innerHTML = `<img src="${data.qr_urls.ergo_img}" style="width:60px;height:60px;object-fit:contain;border-radius:6px;">`;
    }
  }

  // ── ENVIRONMENT ──
  set('pv-env-titulo',            data.env_titulo            || 'CUIDADO AMBIENTAL');
  set('pv-env-left-titulo',       data.env_left_titulo       || 'CONTROL Y CONTENCIÓN DE FLUIDOS');
  set('pv-env-protocolo-titulo',  data.env_protocolo_titulo  || 'PROTOCOLO DE RESPUESTA A DERRAME');
  set('pv-env-derrames',          data.env_derrames          ?? 0);

  // Tarjetas fluidos
  const fluidosDiv = pv('pv-env-fluidos');
  if (fluidosDiv) {
    const fluidos = Array.isArray(data.env_fluidos) ? data.env_fluidos : [];
    fluidosDiv.innerHTML = fluidos.length
      ? fluidos.map(f => `
          <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1.5px solid #bbf7d0;border-radius:10px;padding:12px;text-align:center">
            <div style="font-size:26px;margin-bottom:6px">${f.icon || '🧴'}</div>
            <p style="font-family:'Barlow Condensed';font-size:12px;font-weight:900;color:#065f46;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">${f.titulo||''}</p>
            <p style="font-size:10px;color:#374151;line-height:1.5">${f.desc||f.descripcion||''}</p>
          </div>`).join('')
      : '<p style="font-size:11px;color:#94a3b8">Sin tarjetas de fluidos</p>';
  }

  // Protocolo pasos
  const pasosDiv = pv('pv-env-protocolo-steps');
  if (pasosDiv) {
    const protocoloPasos = Array.isArray(data.env_protocolo) ? data.env_protocolo : [];
    pasosDiv.innerHTML = protocoloPasos.map((p,i) => `
      <div style="text-align:center;flex:1;min-width:60px">
        <div style="width:28px;height:28px;border-radius:50%;background:#10b981;color:white;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 4px">${i+1}</div>
        <p style="font-size:10px;font-weight:800;text-transform:uppercase;color:#065f46;letter-spacing:.04em">${p.titulo||p}</p>
        <p style="font-size:9px;color:#6b7280;margin-top:2px">${p.desc||''}</p>
      </div>`).join('');
  }

  // QR Ambiental
  if (data.qr_urls) {
    set('pv-qr-ambiental-titulo', data.qr_urls.ambiental_titulo || 'Incidente Ambiental');
    set('pv-qr-ambiental-desc',   data.qr_urls.ambiental_desc   || '');
    const ambWrap = pv('pv-qr-ambiental-img-wrap');
    if (ambWrap && data.qr_urls.ambiental_img) {
      ambWrap.innerHTML = `<img src="${data.qr_urls.ambiental_img}" style="width:60px;height:60px;object-fit:contain;border-radius:6px;">`;
    }
  }

  // ── GUARDIAN ──
  set('pv-g-mes', data.edicion ? `Guardián QHSE del Mes — ${data.edicion}` : 'Guardián QHSE del Mes');
  if (data.guardian_nombre) {
    set('pv-g-nombre', data.guardian_nombre);
    const initials = data.guardian_nombre.trim().split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
    set('pv-g-avatar', initials || '??');
  }
  const gPuesto = data.guardian_puesto || '';
  const gArea   = data.guardian_area   || '';
  const partes  = [gPuesto, gArea].filter(Boolean);
  if (partes.length) set('pv-g-puesto', partes.join(' — '));
  set('pv-g-reportes', data.guardian_reportes ?? 0);
  if (data.guardian_motivo) set('pv-g-motivo', `"${data.guardian_motivo}"`);

  // Badges
  const badgesEl = pv('pv-g-badges');
  if (badgesEl) {
    const badges = Array.isArray(data.guardian_badges) ? data.guardian_badges : [];
    const badgeColors = {
      blue:   { bg:'rgba(0,200,255,.15)',  border:'rgba(0,200,255,.3)',  color:'#00c8ff' },
      yellow: { bg:'rgba(245,158,11,.15)', border:'rgba(245,158,11,.3)', color:'#fbbf24' },
      green:  { bg:'rgba(16,185,129,.15)', border:'rgba(16,185,129,.3)', color:'#6ee7b7' },
      red:    { bg:'rgba(239,68,68,.15)',  border:'rgba(239,68,68,.3)',  color:'#fca5a5' },
    };
    badgesEl.innerHTML = badges.map(b => {
      const c = badgeColors[b.color] || badgeColors.blue;
      return `<span style="font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 12px;border-radius:100px;background:${c.bg};border:1px solid ${c.border};color:${c.color}">${b.emoji || '⭐'} ${b.label || ''}</span>`;
    }).join('');
  }
}