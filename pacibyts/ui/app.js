// ===================================================
// PACYBITS FC 27 - MOTOR PRINCIPAL DE JUEGO (app.js)
// ===================================================

const STATE_KEY = "pacybits_fc27_save_v1";

// Estado global del juego
let gameState = {
    coins: 50000,
    purpleTokens: 0,  // Fichas moradas especiales para comprar Hall of FUT
    club: {},         // { [cardId]: true }
    duplicates: {},   // { [cardId]: count }
    myPacks: [],      // Array de sobres guardados: [{ id, name, color, packRef, source }]
    completedClubs: {}, // { [clubName]: true } Clubs completados que ya otorgaron fichas moradas
    stats: {
        packsOpened: 0,
        walkouts: 0,
        coinsEarned: 0
    },
    claimedRewards: {},
    claimedAchievements: {}, // { [achievementId]: true }
    soundEnabled: true,
    darkMode: false
};

let currentPackOpened = null;
let currentTab = "store";
let activeRarityFilter = "all";
let activePosFilter = "all";
let searchQuery = "";
let walkoutTimer = null;

// Mapa indexado por ID oficial para consultas instantáneas O(1)
const PLAYERS_BY_ID = {};
// Mapa de jugadores por club para verificación de clubs completos
const CLUB_PLAYERS_MAP = {};
// Lista de jugadores de Hall of FUT
const HOF_PLAYERS = [];

if (typeof PLAYERS_DB !== "undefined" && Array.isArray(PLAYERS_DB)) {
    for (let i = 0; i < PLAYERS_DB.length; i++) {
        const p = PLAYERS_DB[i];
        PLAYERS_BY_ID[p.id] = p;

        if (p.cardType === "hall_of_fut") {
            HOF_PLAYERS.push(p);
        }

        // Mapear cartas pertenecientes a clubes reales (excluir Free Agents y especiales sin plantilla)
        if (p.club && p.club.name && !["Free Agents", "FUT Icons", "FUT Heroes", "Hall of FUT"].includes(p.club.name)) {
            if (!CLUB_PLAYERS_MAP[p.club.name]) {
                CLUB_PLAYERS_MAP[p.club.name] = [];
            }
            CLUB_PLAYERS_MAP[p.club.name].push(p.id);
        }
    }
}
window.PLAYERS_BY_ID = PLAYERS_BY_ID;
window.CLUB_PLAYERS_MAP = CLUB_PLAYERS_MAP;
window.HOF_PLAYERS = HOF_PLAYERS;

// --- MOTOR DE AUDIO PROCEDURAL (Sintetizador Web Audio API) ---
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            audioCtx = new AudioContext();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

const SoundFX = {
    playPackTear() {
        if (!gameState.soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        
        // Sonido de desgarro de sobre
        const bufferSize = ctx.sampleRate * 0.25;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1200;
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
    },

    playWalkoutBass() {
        if (!gameState.soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 1.2);

        gain.gain.setValueAtTime(0.6, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.5);
    },

    playCardBurst() {
        if (!gameState.soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        // Acorde triunfal de reveal
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 1.0);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + i * 0.08);
            osc.stop(ctx.currentTime + i * 0.08 + 1.0);
        });
    },

    playCoinSound() {
        if (!gameState.soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        [987.77, 1318.51].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + idx * 0.07);
            osc.stop(ctx.currentTime + idx * 0.07 + 0.35);
        });
    },

    playClick() {
        if (!gameState.soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    }
};

// --- GESTIÓN DE GUARDADO LOCAL Y PYTHON BRIDGE ---
async function loadSavedData() {
    try {
        if (window.pywebview && window.pywebview.api) {
            const data = await window.pywebview.api.load_save_data();
            if (data && typeof data === 'object') {
                gameState = { ...gameState, ...data };
                updateHeaderUI();
                return;
            }
        }
    } catch (e) {
        console.warn("Python bridge not ready, using localStorage", e);
    }

    const localData = localStorage.getItem(STATE_KEY);
    if (localData) {
        try {
            const parsed = JSON.parse(localData);
            gameState = { ...gameState, ...parsed };
        } catch (e) {
            console.error("Error reading localStorage", e);
        }
    }
    updateHeaderUI();
}

async function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(gameState));
    try {
        if (window.pywebview && window.pywebview.api) {
            await window.pywebview.api.save_data(gameState);
        }
    } catch (e) {
        console.warn("Python save error:", e);
    }
    updateHeaderUI();
}

// --- ACTUALIZACIÓN DE INTERFAZ GENERAL ---
function updateHeaderUI() {
    document.getElementById("header-coins").textContent = Number(gameState.coins).toLocaleString();
    
    // Fichas moradas especiales para Hall of FUT
    const purpleTokensEl = document.getElementById("header-purple-tokens");
    if (purpleTokensEl) {
        purpleTokensEl.textContent = Number(gameState.purpleTokens || 0).toLocaleString();
    }
    const hofBalanceEl = document.getElementById("hof-tokens-balance");
    if (hofBalanceEl) {
        hofBalanceEl.textContent = Number(gameState.purpleTokens || 0).toLocaleString();
    }

    const totalCardsInDB = PLAYERS_DB.length;
    const collectedCount = Object.keys(gameState.club).length;
    const pct = Math.round((collectedCount / totalCardsInDB) * 100);
    
    const headerColEl = document.getElementById("header-collection");
    if (headerColEl) {
        headerColEl.textContent = `${collectedCount.toLocaleString()}`;
    }

    const hubColPct = document.getElementById("hub-collection-pct");
    if (hubColPct) {
        hubColPct.textContent = `${pct}%`;
    }

    // Contador de repetidas en pestaña y menú
    const totalDupsCount = Object.values(gameState.duplicates).reduce((acc, c) => acc + c, 0);
    const navDupBadge = document.getElementById("nav-dup-badge");
    if (navDupBadge) navDupBadge.textContent = totalDupsCount;
    const hubDupsBadge = document.getElementById("hub-dups-badge");
    if (hubDupsBadge) hubDupsBadge.textContent = `${totalDupsCount} CARTAS`;

    // Actualizar badge de Tus Sobres
    if (!Array.isArray(gameState.myPacks)) gameState.myPacks = [];
    const myPacksCount = gameState.myPacks.length;
    const myPacksBadge = document.getElementById("my-packs-badge");
    if (myPacksBadge) {
        myPacksBadge.textContent = myPacksCount;
        myPacksBadge.style.display = myPacksCount > 0 ? "inline-block" : "none";
    }

    // Actualizar sonido icon
    document.getElementById("btn-sound-toggle").textContent = gameState.soundEnabled ? "🔊" : "🔇";

    // Actualizar modo oscuro
    if (gameState.darkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    const themeBtn = document.getElementById("btn-theme-toggle");
    if (themeBtn) {
        themeBtn.innerHTML = gameState.darkMode ? `☀️ <span class="theme-btn-lbl">Claro</span>` : `🌙 <span class="theme-btn-lbl">Oscuro</span>`;
    }
}

// Cache y Manifest en memoria para resolución inmediata de caras locales
const localFaceCache = new Map(); // id -> boolean (true si existe local)

function getPlayerFaceUrl(player) {
    if (!player) return "assets/silhouette.png";
    const pid = String(player.id);
    const rawPid = String(player.basePlayerId || player.id).replace(/_totw$/, '');

    // 0. Si ya tiene ruta local explícita en su objeto (como las cartas Hall of FUT)
    if (player.localFace) {
        return player.localFace;
    }
    if (player.faceUrl && player.faceUrl.startsWith("assets/")) {
        return player.faceUrl;
    }
    
    // 1. Verificación instantánea contra el manifiesto de caras locales en formato WebP
    if (typeof LOCAL_FACES_MANIFEST !== "undefined" && (LOCAL_FACES_MANIFEST.has(rawPid) || LOCAL_FACES_MANIFEST.has(pid))) {
        return `assets/faces/${rawPid}.webp`;
    }
    
    // 2. Si ya se verificó previamente en tiempo de ejecución
    if (localFaceCache.get(rawPid) === true || localFaceCache.get(pid) === true) {
        return `assets/faces/${rawPid}.webp`;
    }

    // 3. Si tiene faceUrl remota oficial
    if (player.faceUrl) {
        if (player.faceUrl.includes("pulse.ea.com")) {
            return player.faceUrl;
        }
        if (window.location.protocol.startsWith("http")) {
            return `/img-proxy/${player.faceUrl}`;
        }
        return player.faceUrl;
    }

    // 4. Intento por defecto con .webp
    return `assets/faces/${rawPid}.webp`;
}

function handleFaceImgError(imgEl, player) {
    if (!imgEl) return;
    const pid = imgEl.dataset.playerId;
    const p = player || (pid && window.PLAYERS_BY_ID ? window.PLAYERS_BY_ID[pid] : null);
    
    if (pid) {
        const rawPid = String(pid).replace(/_totw$/, '');
        localFaceCache.set(String(pid), false);
        localFaceCache.set(rawPid, false);
    }

    // Si falló el .webp, intentar .png por retrocompatibilidad
    if (imgEl.src.endsWith(".webp") && !imgEl.dataset.triedPng) {
        imgEl.dataset.triedPng = "true";
        imgEl.src = imgEl.src.replace(/\.webp$/, ".png");
        return;
    }

    // Si tiene faceUrl oficial de EA Pulse CDN, intentar directo
    if (!imgEl.dataset.triedDirect && p && p.faceUrl) {
        imgEl.dataset.triedDirect = "true";
        imgEl.src = p.faceUrl;
        return;
    }

    // Si falló pero tiene faceUrl remota no probada por proxy
    if (!imgEl.dataset.triedProxy && p && p.faceUrl && window.location.protocol.startsWith("http") && !p.faceUrl.includes("pulse.ea.com")) {
        imgEl.dataset.triedProxy = "true";
        imgEl.src = `/img-proxy/${p.faceUrl}`;
        return;
    }

    // Fallback garantizado oficial: silueta
    imgEl.onerror = null;
    imgEl.src = "assets/silhouette.png";
}

function getFlagUrl(nationCode) {
    if (!nationCode) return "";
    return `assets/flags/${nationCode}.png`;
}

function getClubBadgeUrl(club) {
    if (!club) return "";
    if (club.badge === "icon") {
        const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,5 92,25 92,68 50,95 8,68 8,25" fill="#1e293b" stroke="#fbbf24" stroke-width="4"/>
            <text x="50" y="60" font-family="Arial, sans-serif" font-size="32" font-weight="900" fill="#fbbf24" text-anchor="middle">★</text>
        </svg>`;
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
    }
    if (club.badge === "hero") {
        const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,5 92,25 92,68 50,95 8,68 8,25" fill="#4c1d95" stroke="#c084fc" stroke-width="4"/>
            <text x="50" y="60" font-family="Arial, sans-serif" font-size="32" font-weight="900" fill="#f5d0fe" text-anchor="middle">⚡</text>
        </svg>`;
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
    }
    if (club.badge === "hof") {
        const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,5 92,25 92,68 50,95 8,68 8,25" fill="#3b0764" stroke="#c084fc" stroke-width="4"/>
            <text x="50" y="62" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#f3e8ff" text-anchor="middle">🏛️</text>
        </svg>`;
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
    }
    if (club.id) {
        return `assets/clubs/${club.id}.png`;
    }
    return "";
}

/**
 * Calcula la recompensa de fichas moradas según el tamaño del club completado.
 * Clubes grandes (30+ jugadores) otorgan 60-80 fichas; medianos (15-29) 35-50 fichas; pequeños 20-30 fichas.
 */
function getClubCompletionTokens(playerCount) {
    if (playerCount >= 40) return 80;
    if (playerCount >= 30) return 60;
    if (playerCount >= 20) return 45;
    if (playerCount >= 10) return 30;
    return 20;
}

/**
 * Verifica si los clubes a los que pertenecen las nuevas cartas han sido completados al 100%.
 * Si un club se completa por primera vez, se otorgan Fichas Moradas Especiales y se notifica al jugador.
 */
function checkClubCompletions(newCards) {
    if (!newCards || newCards.length === 0) return;
    if (!gameState.completedClubs) gameState.completedClubs = {};

    const clubsToCheck = new Set();
    newCards.forEach(c => {
        if (c.club && c.club.name && CLUB_PLAYERS_MAP[c.club.name]) {
            clubsToCheck.add(c.club.name);
        }
    });

    let newlyCompletedCount = 0;
    let totalTokensAwarded = 0;
    const completedNames = [];

    clubsToCheck.forEach(clubName => {
        if (gameState.completedClubs[clubName]) return; // Ya completado previamente

        const clubPlayerIds = CLUB_PLAYERS_MAP[clubName];
        if (!clubPlayerIds || clubPlayerIds.length === 0) return;

        const isFull = clubPlayerIds.every(id => !!gameState.club[id]);
        if (isFull) {
            const tokens = getClubCompletionTokens(clubPlayerIds.length);
            gameState.completedClubs[clubName] = true;
            gameState.purpleTokens = (gameState.purpleTokens || 0) + tokens;
            newlyCompletedCount++;
            totalTokensAwarded += tokens;
            completedNames.push(`${clubName} (+${tokens} 🟣)`);
        }
    });

    if (newlyCompletedCount > 0) {
        saveState();
        updateHeaderUI();
        showClubCompletedNotification(completedNames, totalTokensAwarded);
    }
}

function showClubCompletedNotification(completedNames, totalTokens) {
    SoundFX.playAchievement();
    const banner = document.createElement("div");
    banner.className = "club-completed-popup";
    banner.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: linear-gradient(135deg, #3b0764, #1e1b4b);
        border: 2px solid #c084fc;
        border-radius: 16px;
        padding: 18px 24px;
        color: #ffffff;
        box-shadow: 0 10px 30px rgba(168, 85, 247, 0.5);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 16px;
        animation: bounceIn 0.5s ease;
        max-width: 420px;
    `;
    banner.innerHTML = `
        <div style="font-size: 36px;">🏛️</div>
        <div>
            <div style="font-weight: 900; font-size: 15px; color: #f3e8ff; margin-bottom: 4px;">
                ¡CLUB COMPLETADO AL 100%!
            </div>
            <div style="font-size: 13px; color: #d8b4fe; margin-bottom: 6px;">
                ${completedNames.join(', ')}
            </div>
            <div style="font-size: 14px; font-weight: 800; color: #f0abfc;">
                +${totalTokens} Fichas Moradas 🟣 añadidas para el Hall of FUT
            </div>
        </div>
    `;
    document.body.appendChild(banner);
    setTimeout(() => {
        banner.style.transition = "opacity 0.5s, transform 0.5s";
        banner.style.opacity = "0";
        banner.style.transform = "translateY(20px)";
        setTimeout(() => banner.remove(), 500);
    }, 6000);
}

function getGraySilhouetteFace(player) {
    const initials = (player && player.name ? player.name : "PB").split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    
    // Gradientes temáticos premium según el tipo de carta
    let c1 = "#475569", c2 = "#1e293b", strokeColor = "#94a3b8", textColor = "#f1f5f9";
    if (player && player.cardType === "gold_rare") {
        c1 = "#b45309"; c2 = "#78350f"; strokeColor = "#fbbf24"; textColor = "#fef08a";
    } else if (player && player.cardType === "totw") {
        c1 = "#1e293b"; c2 = "#090d16"; strokeColor = "#f59e0b"; textColor = "#fbbf24";
    } else if (player && player.cardType === "icon") {
        c1 = "#713f12"; c2 = "#1c1917"; strokeColor = "#fef08a"; textColor = "#fff";
    } else if (player && player.cardType === "hero") {
        c1 = "#701a75"; c2 = "#2e1065"; strokeColor = "#f472b6"; textColor = "#fdf2f8";
    } else if (player && player.cardType === "silver") {
        c1 = "#64748b"; c2 = "#334155"; strokeColor = "#cbd5e1"; textColor = "#ffffff";
    } else if (player && player.cardType === "bronze") {
        c1 = "#78350f"; c2 = "#451a03"; strokeColor = "#d97706"; textColor = "#fef3c7";
    }

    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
        <defs>
            <linearGradient id="g_avatar_${player ? player.id : 'def'}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${c1}"/>
                <stop offset="100%" stop-color="${c2}"/>
            </linearGradient>
            <filter id="glow_${player ? player.id : 'def'}" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <!-- Cuerpo / Hombros -->
        <path d="M 20 180 C 20 135, 60 120, 90 120 C 120 120, 160 135, 160 180 Z" fill="url(#g_avatar_${player ? player.id : 'def'})" stroke="${strokeColor}" stroke-opacity="0.3" stroke-width="2"/>
        <!-- Cuello -->
        <rect x="78" y="105" width="24" height="24" rx="4" fill="${c1}"/>
        <!-- Cabeza / Silueta -->
        <ellipse cx="90" cy="74" rx="32" ry="38" fill="url(#g_avatar_${player ? player.id : 'def'})" stroke="${strokeColor}" stroke-opacity="0.4" stroke-width="2"/>
        <!-- Círculo e iniciales estilizadas -->
        <circle cx="90" cy="148" r="16" fill="#0b1120" stroke="${strokeColor}" stroke-width="2"/>
        <text x="90" y="153" font-family="'Inter', Arial, sans-serif" font-size="12" font-weight="900" fill="${textColor}" text-anchor="middle">${initials}</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
}

function getFallbackSvgFace(player) {
    return getGraySilhouetteFace(player);
}

function renderCardElement(player, options = {}) {
    const {
        isNew = false,
        dupCount = 0,
        isSilhouette = false,
        scale = 1,
        disableDetail = false
    } = options;

    const card = document.createElement("div");
    card.className = `fc-card ${player.cardType}`;
    card.dataset.playerId = player.id;
    if (scale !== 1) {
        card.style.transform = `scale(${scale})`;
    }

    if (isSilhouette) {
        card.classList.add("card-silhouette");
        card.style.filter = "grayscale(90%) brightness(55%) opacity(75%)";
        card.style.cursor = "default";
    }

    const flagUrl = getFlagUrl(player.nation.code);
    const clubBadgeUrl = getClubBadgeUrl(player.club);
    const faceUrl = getPlayerFaceUrl(player);

    let statusBadgeHTML = "";
    if (isNew) {
        statusBadgeHTML = `<div class="card-status-tag new">¡NUEVA!</div>`;
    } else if (dupCount > 0) {
        statusBadgeHTML = `<div class="card-status-tag dup">x${dupCount + 1}</div>`;
    }

    card.innerHTML = `
        ${statusBadgeHTML}
        <div class="fc-card-inner">
            <div class="fc-card-shield-pattern"></div>
            <div class="fc-card-glare"></div>
            <div class="fc-card-top-accent"></div>
            
            <div class="card-left-col">
                <div class="card-rating">${player.rating}</div>
                <div class="card-pos">${player.pos}</div>
                <div class="card-badge-line"></div>
                <img class="card-nation-flag" src="${flagUrl}" alt="${player.nation.name}" onerror="this.src='https://flagcdn.com/w80/${player.nation.code}.png';">
                ${clubBadgeUrl ? `<img class="card-club-badge" src="${clubBadgeUrl}" alt="${player.club.name}" onerror="this.style.display='none'">` : ''}
            </div>

            <img class="card-player-face" 
                 src="${faceUrl}" 
                 data-player-id="${player.id}"
                 alt="${player.name}" 
                 loading="eager"
                 decoding="async"
                 onerror="handleFaceImgError(this, window.PLAYERS_BY_ID ? window.PLAYERS_BY_ID['${player.id}'] : null);">

            <div class="card-info-pane">
                <div class="card-name-bar">${player.name}</div>
                <div class="card-divider-line"></div>

                <div class="card-stats-grid">
                    <div class="stat-item"><span class="stat-val">${player.stats.pac}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'DIV' : 'PAC'}</span></div>
                    <div class="stat-item"><span class="stat-val">${player.stats.sho}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'MAN' : 'TIR'}</span></div>
                    <div class="stat-item"><span class="stat-val">${player.stats.pas}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'KIC' : 'PAS'}</span></div>
                    <div class="stat-item"><span class="stat-val">${player.stats.dri}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'REF' : 'REG'}</span></div>
                    <div class="stat-item"><span class="stat-val">${player.stats.def}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'POS' : 'DEF'}</span></div>
                    <div class="stat-item"><span class="stat-val">${player.stats.phy}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'SPD' : 'FIS'}</span></div>
                </div>
            </div>
            
            <div class="card-bottom-notch"></div>
        </div>
    `;

    // Efecto 3D tilt holográfico con el ratón
    card.addEventListener("mousemove", (e) => {
        if (isSilhouette) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / (rect.height / 2)) * 12;
        const rotateY = (x / (rect.width / 2)) * 12;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.04)`;
    });

    card.addEventListener("mouseleave", () => {
        if (isSilhouette) return;
        card.style.transform = scale !== 1 ? `scale(${scale})` : "none";
    });

    // Clic para modal de detalle (solo si no está deshabilitado)
    if (!disableDetail) {
        card.addEventListener("click", () => {
            if (!isSilhouette) {
                SoundFX.playClick();
                openCardDetailModal(player);
            }
        });
    }

    return card;
}

// --- RENDERIZADO DE LA TIENDA DE SOBRES Y TUS SOBRES ---
let activeStoreView = "market"; // "market" | "my-packs" | "hof"

function initStore() {
    const marketContainer = document.getElementById("packs-container");
    const myPacksContainer = document.getElementById("my-packs-container");
    const hofContainer = document.getElementById("hof-store-container");
    const btnMarket = document.getElementById("btn-store-market");
    const btnMyPacks = document.getElementById("btn-store-my-packs");
    const btnHof = document.getElementById("btn-store-hof");

    function setStoreView(view) {
        activeStoreView = view;
        if (btnMarket) btnMarket.classList.toggle("active", view === "market");
        if (btnMyPacks) btnMyPacks.classList.toggle("active", view === "my-packs");
        if (btnHof) btnHof.classList.toggle("active", view === "hof");

        if (marketContainer) marketContainer.style.display = (view === "market") ? "grid" : "none";
        if (myPacksContainer) myPacksContainer.style.display = (view === "my-packs") ? "block" : "none";
        if (hofContainer) hofContainer.style.display = (view === "hof") ? "block" : "none";

        if (view === "my-packs") {
            renderMyPacks();
        } else if (view === "hof") {
            renderHofStore();
        }
    }

    if (btnMarket) {
        btnMarket.onclick = () => {
            SoundFX.playClick();
            setStoreView("market");
        };
    }

    if (btnMyPacks) {
        btnMyPacks.onclick = () => {
            SoundFX.playClick();
            setStoreView("my-packs");
        };
    }

    if (btnHof) {
        btnHof.onclick = () => {
            SoundFX.playClick();
            setStoreView("hof");
        };
    }

    setStoreView(activeStoreView);

    if (marketContainer) {
        marketContainer.innerHTML = "";


    PACKS_CONFIG.forEach(pack => {
        const packCard = document.createElement("div");
        packCard.className = "pack-card";

        const isFree = pack.price === 0;

        packCard.innerHTML = `
            <div class="pack-badge" style="border-color: ${pack.color}; color: ${pack.color}">${pack.badgeText}</div>
            
            <div class="pack-graphic" style="background: linear-gradient(135deg, ${pack.color}dd, #090d16)">
                <div class="pack-graphic-foil"></div>
                <div class="pack-graphic-title">FC 27<br>${pack.name}</div>
            </div>

            <div class="pack-info">
                <h3>${pack.name}</h3>
                <p>${pack.description}</p>
                <div class="pack-guaranteed">⭐ ${pack.guaranteed}</div>
            </div>

            <button class="btn-open-pack ${isFree ? 'free' : ''}" data-pack-id="${pack.id}">
                ${isFree ? 'Abrir Gratis 🎁' : `Abrir por 💰 ${pack.price.toLocaleString()}`}
            </button>
        `;

        packCard.querySelector(".btn-open-pack").addEventListener("click", () => {
            openPack(pack);
        });

        marketContainer.appendChild(packCard);
    });
    }

    updateHeaderUI();
}

// Renderiza los sobres que el usuario ha ganado en logros o recompensas
function renderMyPacks() {
    const emptyMsg = document.getElementById("my-packs-empty-msg");
    const grid = document.getElementById("my-packs-grid");
    if (!grid) return;

    grid.innerHTML = "";
    if (!Array.isArray(gameState.myPacks)) gameState.myPacks = [];

    if (gameState.myPacks.length === 0) {
        if (emptyMsg) emptyMsg.style.display = "block";
        grid.style.display = "none";
        return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";
    grid.style.display = "grid";

    gameState.myPacks.forEach((savedPack, index) => {
        const packCard = document.createElement("div");
        packCard.className = "pack-card";
        packCard.style.borderColor = savedPack.color || "var(--accent-gold)";

        packCard.innerHTML = `
            <div class="pack-badge" style="border-color: ${savedPack.color || '#10b981'}; color: ${savedPack.color || '#10b981'}">
                RECOMPENSA GUARDADA
            </div>
            
            <div class="pack-graphic" style="background: linear-gradient(135deg, ${savedPack.color || '#10b981'}dd, #090d16)">
                <div class="pack-graphic-foil"></div>
                <div class="pack-graphic-title">FC 27<br>${savedPack.name}</div>
            </div>

            <div class="pack-info">
                <h3>${savedPack.name}</h3>
                <p>${savedPack.description || 'Sobre ganado por completar logros o desafíos.'}</p>
                <div class="pack-guaranteed">🎁 ${savedPack.source || 'Recompensa de Logro'}</div>
            </div>

            <button class="btn-open-pack free" style="background: linear-gradient(135deg, #10b981, #059669);">
                ¡ABRIR AHORA! 🎁
            </button>
        `;

        packCard.querySelector(".btn-open-pack").addEventListener("click", () => {
            // Quitar este sobre del inventario
            const [packToOpen] = gameState.myPacks.splice(index, 1);
            saveState();
            updateHeaderUI();

            // Buscar configuración base o generar sobre según packRef
            let targetPackConfig = PACKS_CONFIG.find(p => p.id === packToOpen.packRef);
            if (!targetPackConfig) {
                targetPackConfig = {
                    id: packToOpen.id || "custom_reward",
                    name: packToOpen.name,
                    price: 0,
                    cardsCount: packToOpen.cardsCount || 9,
                    color: packToOpen.color || "#8b5cf6",
                    description: packToOpen.description,
                    guaranteed: "Sobre Especial de Logro",
                    weights: packToOpen.weights || { bronze: 0, silver: 0.1, gold_rare: 0.6, totw: 0.2, hero: 0.07, icon: 0.03 }
                };
            }

            // Crear copia con precio 0 para abrir
            const freePack = { ...targetPackConfig, price: 0 };
            openPack(freePack);
            renderMyPacks();
        });

        grid.appendChild(packCard);
    });
}

// --- TIENDA ESPECIAL HALL OF FUT ---
function renderHofStore() {
    const grid = document.getElementById("hof-cards-grid");
    const balanceSpan = document.getElementById("hof-tokens-balance");
    if (balanceSpan) {
        balanceSpan.textContent = (gameState.purpleTokens || 0).toLocaleString();
    }
    if (!grid) return;

    grid.innerHTML = "";

    // Ordenar cartas HOF de mayor a menor precio/rating
    const hofList = [...HOF_PLAYERS].sort((a, b) => (b.tokenPrice || 0) - (a.tokenPrice || 0));

    hofList.forEach(player => {
        const isOwned = !!gameState.club[player.id];
        const canAfford = (gameState.purpleTokens || 0) >= player.tokenPrice;

        const cardItem = document.createElement("div");
        cardItem.className = `hof-buy-card ${isOwned ? 'owned' : ''}`;

        // Render card
        const cardEl = renderCardElement(player, { scale: 0.85, isSilhouette: false });

        cardItem.innerHTML = `
            <div class="hof-card-preview-wrap"></div>
            <div class="hof-card-info">
                <div class="hof-card-title">${player.name}</div>
                <div class="hof-card-meta">${player.pos} · ${player.club ? player.club.name : 'Hall of FUT'} · OVR ${player.rating}</div>
                <div class="hof-price-tag">
                    <span class="hof-token-icon">🟣</span>
                    <span class="hof-token-val">${(player.tokenPrice || 500).toLocaleString()}</span>
                    <span class="hof-token-lbl">Fichas</span>
                </div>
                <button class="btn-buy-hof ${isOwned ? 'in-club' : (canAfford ? 'affordable' : 'locked')}" 
                        ${isOwned || !canAfford ? (isOwned ? 'disabled' : 'disabled') : ''}
                        data-player-id="${player.id}">
                    ${isOwned ? '✓ EN TU CLUB' : (canAfford ? `Fichar por ${player.tokenPrice} 🟣` : `Necesitas ${player.tokenPrice} 🟣`)}
                </button>
            </div>
        `;

        cardItem.querySelector(".hof-card-preview-wrap").appendChild(cardEl);

        const buyBtn = cardItem.querySelector(".btn-buy-hof");
        if (!isOwned && canAfford) {
            buyBtn.onclick = () => {
                buyHofCard(player);
            };
        }

        grid.appendChild(cardItem);
    });
}

function buyHofCard(player) {
    if (!player) return;
    const price = player.tokenPrice || 500;

    if ((gameState.purpleTokens || 0) < price) {
        alert("¡No tienes suficientes Fichas Moradas 🟣 para fichar a esta leyenda! Completa clubes en tu álbum para ganar más fichas.");
        return;
    }

    if (gameState.club[player.id]) {
        alert("¡Ya tienes esta carta del Hall of FUT en tu Club!");
        return;
    }

    // Cobrar fichas y añadir al club
    gameState.purpleTokens -= price;
    gameState.club[player.id] = true;
    gameState.stats.cardsCollected = Object.keys(gameState.club).length;

    SoundFX.playAchievement();
    saveState();
    updateHeaderUI();
    renderHofStore();

    // Notificación épica al jugador
    showHofPurchasedPopup(player);
}

function showHofPurchasedPopup(player) {
    const banner = document.createElement("div");
    banner.className = "club-completed-popup";
    banner.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: linear-gradient(135deg, #4a044e, #2e1065);
        border: 2px solid #e879f9;
        border-radius: 16px;
        padding: 18px 24px;
        color: #ffffff;
        box-shadow: 0 10px 35px rgba(217, 70, 239, 0.6);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 16px;
        animation: bounceIn 0.5s ease;
        max-width: 440px;
    `;
    banner.innerHTML = `
        <div style="font-size: 38px;">🏛️</div>
        <div>
            <div style="font-weight: 900; font-size: 15px; color: #fdf4ff; margin-bottom: 4px;">
                ¡FICHAJE HALL OF FUT COMPLETADO!
            </div>
            <div style="font-size: 14px; font-weight: 800; color: #f5d0fe; margin-bottom: 4px;">
                ${player.name} (${player.rating} · ${player.pos})
            </div>
            <div style="font-size: 13px; color: #e9d5ff;">
                Se ha añadido directamente a tu Colección y Álbum del Club.
            </div>
        </div>
    `;
    document.body.appendChild(banner);
    setTimeout(() => {
        banner.style.transition = "opacity 0.5s, transform 0.5s";
        banner.style.opacity = "0";
        banner.style.transform = "translateY(20px)";
        setTimeout(() => banner.remove(), 500);
    }, 5000);
}

// --- MOTOR DE PROBABILIDADES DINÁMICAS POR MEDIA (RATING PACK ENGINE) ---
/**
 * Calcula el peso dinámico individual de una carta según su media (rating) y el tipo de sobre.
 * REGLA FUNDAMENTAL: A mayor media, exponencialmente más difícil que salga la carta.
 * Las cartas de 75 son muy abundantes; las de 80-84 van bajando progresivamente;
 * las de 85-88 son escasas; las de 90-91 son ultra raras; y los iconos 94-98 son legendarios.
 */
function getCardDynamicWeight(rating, packId = "") {
    const r = Math.max(50, Math.min(99, Number(rating) || 75));
    let baseWeight = 0;

    // Escala de decaimiento exponencial estricto a partir de 75
    if (r <= 75) {
        baseWeight = 100;
    } else if (r <= 80) {
        baseWeight = 100 * Math.pow(0.82, r - 75); // 76: 82, 77: 67, 78: 55, 79: 45, 80: 37
    } else if (r <= 85) {
        baseWeight = 37.0 * Math.pow(0.74, r - 80); // 81: 27, 82: 20, 83: 15, 84: 11, 85: 8.2
    } else if (r <= 90) {
        baseWeight = 8.2 * Math.pow(0.62, r - 85);  // 86: 5.1, 87: 3.1, 88: 1.9, 89: 1.2, 90: 0.75
    } else {
        baseWeight = 0.75 * Math.pow(0.55, r - 90); // 91: 0.41, 92: 0.22, 93: 0.12, 94: 0.07, 95: 0.038, 96: 0.021, 97: 0.011, 98: 0.0063
    }

    // Moduladores por tipo de sobre (conservando la jerarquía decreciente por media)
    let multiplier = 1.0;
    if (packId === "pack_free") {
        if (r >= 86) multiplier = 0.15;
        else if (r >= 83) multiplier = 0.40;
    } else if (packId === "pack_gold_premium") {
        if (r >= 88) multiplier = 6.0;
        else if (r >= 86) multiplier = 4.5;
        else if (r >= 83) multiplier = 2.5;
        else if (r >= 80) multiplier = 1.5;
    } else if (packId === "pack_mega_top") {
        if (r >= 90) multiplier = 25.0;
        else if (r >= 88) multiplier = 18.0;
        else if (r >= 86) multiplier = 14.0;
        else if (r >= 83) multiplier = 7.0;
        else if (r >= 80) multiplier = 3.0;
    } else if (packId === "pack_icon_legends") {
        if (r >= 95) multiplier = 4.0;
        else if (r >= 92) multiplier = 7.0;
        else if (r >= 88) multiplier = 12.0;
    }

    return baseWeight * multiplier;
}

/**
 * Selecciona una carta dentro de un conjunto de candidatos aplicando pesos dinámicos por media.
 */
function pickCardFromPoolByRating(candidatePool, packId = "") {
    if (!candidatePool || candidatePool.length === 0) return null;
    if (candidatePool.length === 1) return candidatePool[0];

    let totalWeight = 0;
    const weights = new Float64Array(candidatePool.length);

    for (let i = 0; i < candidatePool.length; i++) {
        const w = getCardDynamicWeight(candidatePool[i].rating, packId);
        weights[i] = w;
        totalWeight += w;
    }

    if (totalWeight <= 0) {
        return candidatePool[Math.floor(Math.random() * candidatePool.length)];
    }

    let rnd = Math.random() * totalWeight;
    for (let i = 0; i < candidatePool.length; i++) {
        rnd -= weights[i];
        if (rnd <= 0) {
            return candidatePool[i];
        }
    }
    return candidatePool[candidatePool.length - 1];
}

// --- LÓGICA DE APERTURA DE SOBRES (PACK ENGINE) ---
function pickRandomCardByWeights(weights, packId = "") {
    const rand = Math.random();
    let cumulative = 0;
    let selectedType = "gold_rare";

    for (const [type, weight] of Object.entries(weights)) {
        cumulative += weight;
        if (rand <= cumulative) {
            selectedType = type;
            break;
        }
    }

    // Filtrar jugadores de ese tipo
    let candidatePool = PLAYERS_DB.filter(p => p.cardType === selectedType);
    if (candidatePool.length === 0) {
        candidatePool = PLAYERS_DB;
    }

    // Selección dinámica ponderada por media: contra más media tenga la carta, más difícil que salga
    return pickCardFromPoolByRating(candidatePool, packId);
}

function preloadPackImages(players) {
    if (!Array.isArray(players)) return;
    players.forEach(p => {
        try {
            // Precargar cara
            const faceUrl = getPlayerFaceUrl(p);
            if (faceUrl) {
                const imgFace = new Image();
                imgFace.src = faceUrl;
            }
            // Precargar bandera
            if (p.nation && p.nation.code) {
                const flagImg = new Image();
                flagImg.src = getFlagUrl(p.nation.code);
            }
            // Precargar escudo
            if (p.club) {
                const clubUrl = getClubBadgeUrl(p.club);
                if (clubUrl && !clubUrl.startsWith("data:")) {
                    const clubImg = new Image();
                    clubImg.src = clubUrl;
                }
            }
        } catch (e) {
            // Silenciar errores de precarga
        }
    });
}

function openPack(pack) {
    SoundFX.playClick();

    if (pack.price > 0 && gameState.coins < pack.price) {
        alert("¡No tienes suficientes monedas para abrir este sobre! Puedes conseguir más en la pestaña 'Recompensas'.");
        return;
    }

    // Cobrar sobre
    if (pack.price > 0) {
        gameState.coins -= pack.price;
    }
    gameState.stats.packsOpened++;

    // Generar cartas
    const packCards = [];
    const chosenIds = new Set();

    for (let i = 0; i < pack.cardsCount; i++) {
        let card = null;
        let attempts = 0;
        // Evitar duplicados exactos dentro del mismo sobre
        do {
            card = pickRandomCardByWeights(pack.weights, pack.id);
            attempts++;
        } while (chosenIds.has(card.id) && attempts < 15);

        chosenIds.add(card.id);
        packCards.push(card);
    }

    // Identificar mejor carta (para walkout)
    packCards.sort((a, b) => b.rating - a.rating);
    const topCard = packCards[0];

    // a) Precarga en paralelo de todas las imágenes del sobre en memoria (new Image()) durante la animación
    preloadPackImages(packCards);

    // GUARDADO AUTOMÁTICO EN CLUB Y PILA DE REPETIDAS
    const cardResults = packCards.map(card => {
        const alreadyOwned = !!gameState.club[card.id];
        let dupCount = 0;

        if (!alreadyOwned) {
            // Carta Nueva
            gameState.club[card.id] = true;
        } else {
            // Carta Repetida
            gameState.duplicates[card.id] = (gameState.duplicates[card.id] || 0) + 1;
            dupCount = gameState.duplicates[card.id];
        }

        return {
            player: card,
            isNew: !alreadyOwned,
            dupCount: dupCount
        };
    });

    // Comprobar si se ha completado algún club con las nuevas cartas obtenidas
    const newlyAcquiredCards = cardResults.filter(r => r.isNew).map(r => r.player);
    if (newlyAcquiredCards.length > 0) {
        checkClubCompletions(newlyAcquiredCards);
    }

    // Guardar cambios en local y Python
    saveState();

    currentPackOpened = {
        pack: pack,
        cardResults: cardResults,
        topCard: topCard
    };

    // b) Comprobar si la carta más alta es un Caminante (rating >= 86 o versión especial)
    const isSpecialVersion = ["icon", "hero", "totw"].includes(topCard.cardType);
    const isWalkout = topCard.rating >= 86 || isSpecialVersion;

    if (isWalkout) {
        gameState.stats.walkouts++;
        triggerWalkoutCinematic(topCard, pack, () => {
            showPackSummaryModal();
        });
    } else {
        // Animación más sencilla y dinámica para todos los sobres que no son caminante
        triggerSimplePackAnimation(topCard, pack, () => {
            showPackSummaryModal();
        });
    }
}

// --- ANIMACIÓN RÁPIDA Y SENCILLA PARA SOBRES NORMALES (NO WALKOUT) ---
function triggerSimplePackAnimation(player, pack, onFinish) {
    const modal = document.getElementById("walkout-modal");
    const splitWrapper = document.getElementById("pack-split-wrapper");
    const glowLine = document.getElementById("pack-glow-line");
    const leftInner = document.getElementById("pack-half-left-content");
    const rightInner = document.getElementById("pack-half-right-content");
    const titleLeft = document.getElementById("pack-split-title-left");
    const titleRight = document.getElementById("pack-split-title-right");
    const cluesBox = document.getElementById("walkout-clues");
    const cardBox = document.getElementById("walkout-card-box");
    const btnSkip = document.getElementById("btn-skip-walkout");

    if (walkoutTimer) clearTimeout(walkoutTimer);

    // Preparar colores del sobre
    const packColor = (pack && pack.color) ? pack.color : "#3b82f6";
    const packNameStr = (pack && pack.name) ? pack.name : "SOBRE FC 27";

    if (leftInner && rightInner) {
        const bgGradient = `linear-gradient(135deg, ${packColor}dd 0%, #090d16 100%)`;
        leftInner.style.background = bgGradient;
        rightInner.style.background = bgGradient;
    }
    if (titleLeft) titleLeft.textContent = "FC 27";
    if (titleRight) titleRight.textContent = packNameStr.split(" ")[0].toUpperCase();

    // Resetear estados visuales y ocultar pistas para apertura directa
    splitWrapper.classList.remove("opened");
    glowLine.classList.remove("glowing");
    if (cluesBox) cluesBox.style.display = "none";
    cardBox.classList.remove("reveal");
    cardBox.innerHTML = "";

    // Insertar la mejor carta
    const cardEl = renderCardElement(player, { scale: 1 });
    cardBox.appendChild(cardEl);

    modal.classList.add("active");
    SoundFX.playPackTear();

    let finished = false;
    const finishAnim = () => {
        if (finished) return;
        finished = true;
        if (walkoutTimer) clearTimeout(walkoutTimer);
        modal.classList.remove("active");
        if (cluesBox) cluesBox.style.display = ""; // Restaurar para futuros walkouts
        onFinish();
    };

    btnSkip.onclick = finishAnim;

    // Apertura rápida en 1.3s:
    // 1. Destello rápido en 100ms
    setTimeout(() => {
        if (finished) return;
        glowLine.classList.add("glowing");

        // 2. Desplazamiento de las dos mitades del sobre en 250ms
        setTimeout(() => {
            if (finished) return;
            splitWrapper.classList.add("opened");

            // 3. Revelar carta de inmediato con sonido de impacto
            setTimeout(() => {
                if (finished) return;
                SoundFX.playCardBurst();
                cardBox.classList.add("reveal");

                // 4. Pasar al resumen del sobre tras exhibir la carta brevemente (~850ms)
                walkoutTimer = setTimeout(() => {
                    finishAnim();
                }, 850);

            }, 250);

        }, 200);

    }, 100);
}

// --- CINEMÁTICA WALKOUT (SOBRE DIVIDIDO + SUSPENSE EN 4 SEGUNDOS) ---
function triggerWalkoutCinematic(player, pack, onFinish) {
    const modal = document.getElementById("walkout-modal");
    const splitWrapper = document.getElementById("pack-split-wrapper");
    const glowLine = document.getElementById("pack-glow-line");
    const leftInner = document.getElementById("pack-half-left-content");
    const rightInner = document.getElementById("pack-half-right-content");
    const titleLeft = document.getElementById("pack-split-title-left");
    const titleRight = document.getElementById("pack-split-title-right");

    const clueNation = document.getElementById("clue-nation");
    const cluePos = document.getElementById("clue-pos");
    const clueClub = document.getElementById("clue-club");
    const flagImg = document.getElementById("clue-flag-img");
    const nationName = document.getElementById("clue-nation-name");
    const posText = document.getElementById("clue-pos-text");
    const clubImg = document.getElementById("clue-club-img");
    const clubName = document.getElementById("clue-club-name");
    const cardBox = document.getElementById("walkout-card-box");
    const btnSkip = document.getElementById("btn-skip-walkout");

    // Limpiar temporizadores previos
    if (walkoutTimer) clearTimeout(walkoutTimer);

    // Preparar diseño del sobre que se va a dividir
    const packColor = (pack && pack.color) ? pack.color : "#fbbf24";
    const packNameStr = (pack && pack.name) ? pack.name : "SOBRE FC 27";
    
    if (leftInner && rightInner) {
        const bgGradient = `linear-gradient(135deg, ${packColor}cc 0%, #090d16 100%)`;
        leftInner.style.background = bgGradient;
        rightInner.style.background = bgGradient;
    }
    if (titleLeft) titleLeft.textContent = "FC 27";
    if (titleRight) titleRight.textContent = packNameStr.split(" ")[0].toUpperCase();

    // Resetear estados visuales
    const cluesBox = document.getElementById("walkout-clues");
    if (cluesBox) cluesBox.style.display = "";
    splitWrapper.classList.remove("opened");
    glowLine.classList.remove("glowing");
    clueNation.classList.remove("show");
    cluePos.classList.remove("show");
    clueClub.classList.remove("show");
    cardBox.classList.remove("reveal");
    cardBox.innerHTML = "";

    // Inyectar datos del walkout
    flagImg.src = getFlagUrl(player.nation.code);
    flagImg.onerror = () => { flagImg.src = `https://flagcdn.com/w160/${player.nation.code}.png`; };
    nationName.textContent = player.nation.name.toUpperCase();
    posText.textContent = player.pos;

    const clubBadge = getClubBadgeUrl(player.club);
    if (clubBadge) {
        clubImg.src = clubBadge;
        clubImg.style.display = "block";
    } else {
        clubImg.style.display = "none";
    }
    clubName.textContent = player.club.name.toUpperCase();

    // Crear carta gigante anticipadamente para que esté lista
    const walkoutCard = renderCardElement(player, { scale: 1 });
    cardBox.appendChild(walkoutCard);

    modal.classList.add("active");
    SoundFX.playPackTear();
    SoundFX.playWalkoutBass();

    let finished = false;
    const finishCinematic = () => {
        if (finished) return;
        finished = true;
        if (walkoutTimer) clearTimeout(walkoutTimer);
        modal.classList.remove("active");
        onFinish();
    };

    btnSkip.onclick = finishCinematic;

    // SECUENCIA DE 4 SEGUNDOS:
    // 0.0s - 0.3s: La línea central brillante resplandece en el centro del sobre
    setTimeout(() => {
        if (finished) return;
        glowLine.classList.add("glowing");

        // 0.4s: El sobre se divide verticalmente por la mitad desplazando mitades a los laterales
        setTimeout(() => {
            if (finished) return;
            splitWrapper.classList.add("opened");

            // 0.8s: En el hueco central, 1º Pista -> Nacionalidad (Bandera y nombre)
            setTimeout(() => {
                if (finished) return;
                clueNation.classList.add("show");
                SoundFX.playClick();

                // 1.8s: 2º Pista -> Posición
                setTimeout(() => {
                    if (finished) return;
                    cluePos.classList.add("show");
                    SoundFX.playClick();

                    // 2.8s: 3º Pista -> Club
                    setTimeout(() => {
                        if (finished) return;
                        clueClub.classList.add("show");
                        SoundFX.playClick();

                        // 3.8s - 4.0s: Revela la carta completa con efectos visuales y sonido de explosión
                        setTimeout(() => {
                            if (finished) return;
                            SoundFX.playCardBurst();
                            cardBox.classList.add("reveal");

                            // Al terminar los ~4.6s en total de la experiencia cinematográfica, pasa a la vista de cartas
                            setTimeout(() => {
                                finishCinematic();
                            }, 1200);

                        }, 900); // ~3.7s

                    }, 1000); // 2.8s

                }, 1000); // 1.8s

            }, 800); // 0.8s

        }, 400); // 0.4s

    }, 150); // 0.15s
}

// --- PANTALLA DE RESUMEN DEL SOBRE ---
function showPackSummaryModal() {
    if (!currentPackOpened) return;

    const modal = document.getElementById("pack-summary-modal");
    const cardsRow = document.getElementById("summary-cards-container");
    const title = document.getElementById("summary-pack-title");
    const btnSellDups = document.getElementById("btn-summary-sell-dups");

    title.textContent = `¡${currentPackOpened.pack.name.toUpperCase()} ABIERTO!`;
    cardsRow.innerHTML = "";

    let dupsInPackValue = 0;
    let dupsInPackCount = 0;

    currentPackOpened.cardResults.forEach((res, index) => {
        const cardEl = renderCardElement(res.player, {
            isNew: res.isNew,
            dupCount: res.dupCount
        });
        cardEl.style.animation = `fadeIn 0.5s ease backwards ${index * 0.1}s`;
        cardsRow.appendChild(cardEl);

        if (!res.isNew) {
            dupsInPackValue += res.player.quickSell;
            dupsInPackCount++;
        }
    });

    // Botón de venta rápida de repetidas de este sobre
    if (dupsInPackCount > 0) {
        btnSellDups.style.display = "block";
        btnSellDups.textContent = `Vender ${dupsInPackCount} Repetidas (+${dupsInPackValue.toLocaleString()} 💰)`;
        btnSellDups.onclick = () => {
            sellSpecificDuplicates(currentPackOpened.cardResults.filter(r => !r.isNew).map(r => r.player));
            btnSellDups.style.display = "none";
        };
    } else {
        btnSellDups.style.display = "none";
    }

    modal.classList.add("active");

    document.getElementById("btn-summary-back").onclick = () => {
        modal.classList.remove("active");
        updateHeaderUI();
        if (currentTab === "album") renderAlbum();
        if (currentTab === "duplicates") renderDuplicates();
    };

    document.getElementById("btn-summary-reopen").onclick = () => {
        modal.classList.remove("active");
        openPack(currentPackOpened.pack);
    };
}

// --- VISTA DE ÁLBUM (MI CLUB) CON PAGINACIÓN FLUIDA ---
let albumCurrentPage = 1;
const ALBUM_PAGE_SIZE = 48;
let activeOwnershipFilter = "all";

function renderAlbum() {
    const gallery = document.getElementById("album-gallery");
    gallery.innerHTML = "";

    const query = searchQuery.trim().toLowerCase();

    const filtered = PLAYERS_DB.filter(player => {
        // Filtro rareza
        if (activeRarityFilter !== "all" && player.cardType !== activeRarityFilter) {
            return false;
        }
        // Filtro posición
        if (activePosFilter !== "all") {
            if (activePosFilter === "DEL" && !["DEL", "EI", "ED"].includes(player.pos)) return false;
            if (activePosFilter === "MED" && !["MC", "MCD", "MCO", "MI", "MD"].includes(player.pos)) return false;
            if (activePosFilter === "DEF" && !["DFC", "LI", "LD"].includes(player.pos)) return false;
            if (activePosFilter === "POR" && player.pos !== "POR") return false;
        }
        // Filtro posesión (desbloqueadas vs siluetas)
        const isUnlocked = !!gameState.club[player.id];
        if (activeOwnershipFilter === "owned" && !isUnlocked) return false;
        if (activeOwnershipFilter === "missing" && isUnlocked) return false;

        // Búsqueda por texto (nombre, club o país)
        if (query) {
            const matchName = (player.name && player.name.toLowerCase().includes(query)) || 
                              (player.fullName && player.fullName.toLowerCase().includes(query));
            const matchClub = player.club && player.club.name && player.club.name.toLowerCase().includes(query);
            const matchNation = player.nation && player.nation.name && player.nation.name.toLowerCase().includes(query);
            if (!matchName && !matchClub && !matchNation) return false;
        }
        return true;
    });

    // Ordenar por rating descendente
    filtered.sort((a, b) => b.rating - a.rating);

    const paginationContainer = document.getElementById("album-pagination");
    const pageIndicator = document.getElementById("album-page-indicator");
    const btnPrev = document.getElementById("btn-album-prev");
    const btnNext = document.getElementById("btn-album-next");

    if (filtered.length === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <h3>No se encontraron cartas</h3>
                <p>Prueba con otros filtros o abre sobres en la tienda.</p>
            </div>
        `;
        if (paginationContainer) paginationContainer.style.display = "none";
        return;
    }

    const totalPages = Math.ceil(filtered.length / ALBUM_PAGE_SIZE);
    if (albumCurrentPage > totalPages) albumCurrentPage = totalPages;
    if (albumCurrentPage < 1) albumCurrentPage = 1;

    if (paginationContainer) {
        paginationContainer.style.display = totalPages > 1 ? "flex" : "none";
        if (pageIndicator) {
            pageIndicator.textContent = `Página ${albumCurrentPage} de ${totalPages} (${filtered.length} cartas)`;
        }
        if (btnPrev) {
            btnPrev.disabled = (albumCurrentPage <= 1);
            btnPrev.style.opacity = (albumCurrentPage <= 1) ? "0.4" : "1";
        }
        if (btnNext) {
            btnNext.disabled = (albumCurrentPage >= totalPages);
            btnNext.style.opacity = (albumCurrentPage >= totalPages) ? "0.4" : "1";
        }
    }

    const startIndex = (albumCurrentPage - 1) * ALBUM_PAGE_SIZE;
    const pagePlayers = filtered.slice(startIndex, startIndex + ALBUM_PAGE_SIZE);

    pagePlayers.forEach(player => {
        const isUnlocked = !!gameState.club[player.id];
        const dupCount = gameState.duplicates[player.id] || 0;

        const cardEl = renderCardElement(player, {
            isSilhouette: !isUnlocked,
            dupCount: dupCount
        });
        gallery.appendChild(cardEl);
    });
}

// --- VISTA PILA DE REPETIDAS ---
function renderDuplicates() {
    const gallery = document.getElementById("duplicates-gallery");
    const summaryText = document.getElementById("dup-summary-text");
    const btnSellAll = document.getElementById("btn-sell-all-dups");
    gallery.innerHTML = "";

    const dupPlayerIds = Object.keys(gameState.duplicates).filter(id => (gameState.duplicates[id] || 0) > 0);

    let totalCoinsValue = 0;
    let totalCardsCount = 0;

    dupPlayerIds.forEach(id => {
        const player = (window.PLAYERS_BY_ID && window.PLAYERS_BY_ID[id]) || PLAYERS_DB.find(p => String(p.id) === String(id));
        if (!player) return;
        const count = gameState.duplicates[id];
        totalCardsCount += count;
        totalCoinsValue += (player.quickSell * count);

        const cardWrapper = document.createElement("div");
        cardWrapper.style.display = "flex";
        cardWrapper.style.flexDirection = "column";
        cardWrapper.style.alignItems = "center";
        cardWrapper.style.gap = "10px";

        const cardEl = renderCardElement(player, { dupCount: count });

        const btnSellOne = document.createElement("button");
        btnSellOne.className = "filter-btn";
        btnSellOne.style.borderColor = "#10b981";
        btnSellOne.style.color = "#10b981";
        btnSellOne.textContent = `Vender 1 (+${player.quickSell.toLocaleString()} 💰)`;
        btnSellOne.onclick = () => {
            sellSingleDuplicate(player);
        };

        cardWrapper.appendChild(cardEl);
        cardWrapper.appendChild(btnSellOne);
        gallery.appendChild(cardWrapper);
    });

    summaryText.textContent = `Tienes ${totalCardsCount} cartas repetidas valoradas en ${totalCoinsValue.toLocaleString()} monedas.`;

    if (totalCardsCount === 0) {
        btnSellAll.style.opacity = "0.5";
        btnSellAll.style.pointerEvents = "none";
        gallery.innerHTML = `
            <div class="empty-state">
                <h3>No tienes cartas repetidas actualmente</h3>
                <p>Cuando te salga una carta que ya tienes en tu club, se guardará aquí automáticamente.</p>
            </div>
        `;
    } else {
        btnSellAll.style.opacity = "1";
        btnSellAll.style.pointerEvents = "auto";
        btnSellAll.onclick = () => {
            sellAllDuplicates();
        };
    }
}

// --- ACCIONES DE VENTA RÁPIDA DE REPETIDAS ---
function sellSingleDuplicate(player) {
    if ((gameState.duplicates[player.id] || 0) <= 0) return;

    gameState.duplicates[player.id]--;
    if (gameState.duplicates[player.id] === 0) {
        delete gameState.duplicates[player.id];
    }
    gameState.coins += player.quickSell;
    gameState.stats.coinsEarned += player.quickSell;

    SoundFX.playCoinSound();
    saveState();
    renderDuplicates();
}

function sellSpecificDuplicates(playerList) {
    let earned = 0;
    playerList.forEach(player => {
        if ((gameState.duplicates[player.id] || 0) > 0) {
            gameState.duplicates[player.id]--;
            if (gameState.duplicates[player.id] === 0) {
                delete gameState.duplicates[player.id];
            }
            earned += player.quickSell;
        }
    });

    gameState.coins += earned;
    gameState.stats.coinsEarned += earned;
    SoundFX.playCoinSound();
    saveState();
}

function sellAllDuplicates() {
    let totalEarned = 0;
    for (const [id, count] of Object.entries(gameState.duplicates)) {
        const player = (window.PLAYERS_BY_ID && window.PLAYERS_BY_ID[id]) || PLAYERS_DB.find(p => String(p.id) === String(id));
        if (player && count > 0) {
            totalEarned += (player.quickSell * count);
        }
    }

    if (totalEarned === 0) return;

    gameState.duplicates = {};
    gameState.coins += totalEarned;
    gameState.stats.coinsEarned += totalEarned;

    SoundFX.playCoinSound();
    saveState();
    renderDuplicates();
}

// --- VISTA DE RECOMPENSAS Y RETOS ---
const ACHIEVEMENTS = [
    {
        id: "daily_bonus",
        title: "🎁 Monedas de Bienvenida",
        desc: "¡15,000 monedas gratis para probar sobres de alto nivel!",
        reward: 15000,
        check: () => true
    },
    {
        id: "pack_opener_5",
        title: "📦 Coleccionista Novato",
        desc: "Abre al menos 5 sobres en la tienda.",
        reward: 10000,
        check: () => gameState.stats.packsOpened >= 5
    },
    {
        id: "walkout_hunter",
        title: "✨ Caza-Walkouts",
        desc: "Consigue tu primer jugador Walkout (86+).",
        reward: 20000,
        check: () => gameState.stats.walkouts >= 1
    },
    {
        id: "unique_20",
        title: "📚 Club en Crecimiento",
        desc: "Colecciona al menos 15 cartas únicas en tu álbum.",
        reward: 25000,
        check: () => Object.keys(gameState.club).length >= 15
    },
    {
        id: "icon_master",
        title: "👑 Leyenda Absoluta",
        desc: "Desbloquea al menos un Icono histórico (Pelé, Zidane, R9, etc.).",
        reward: 50000,
        check: () => Object.keys(gameState.club).some(id => id.startsWith("icon_"))
    }
];

function renderRewards() {
    const list = document.getElementById("rewards-list");
    list.innerHTML = "";

    ACHIEVEMENTS.forEach(ach => {
        const isClaimed = !!gameState.claimedRewards[ach.id];
        const canClaim = !isClaimed && ach.check();

        const box = document.createElement("div");
        box.style.background = "var(--bg-panel)";
        box.style.border = "1px solid var(--border-color)";
        box.style.borderRadius = "16px";
        box.style.padding = "20px";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "space-between";
        box.style.gap = "15px";

        box.innerHTML = `
            <div>
                <h3 style="font-size: 17px; margin-bottom: 4px; color: ${isClaimed ? '#94a3b8' : '#fbbf24'}">${ach.title}</h3>
                <p style="font-size: 13px; color: var(--text-secondary);">${ach.desc}</p>
            </div>
            <button class="filter-btn" style="min-width: 140px; ${canClaim ? 'background: #10b981; color: white; border-color: #34d399;' : ''}" ${!canClaim ? 'disabled' : ''}>
                ${isClaimed ? '✓ Reclamado' : `Reclamar +${ach.reward.toLocaleString()} 💰`}
            </button>
        `;

        if (canClaim) {
            box.querySelector("button").onclick = () => {
                gameState.claimedRewards[ach.id] = true;
                gameState.coins += ach.reward;
                SoundFX.playCoinSound();
                saveState();
                renderRewards();
            };
        }

        list.appendChild(box);
    });
}

// --- MODAL DETALLE DE CARTA ---
function openCardDetailModal(player) {
    const modal = document.getElementById("card-detail-modal");
    const renderBox = document.getElementById("detail-card-render");
    renderBox.innerHTML = "";

    const card = renderCardElement(player, { scale: 1 });
    renderBox.appendChild(card);

    document.getElementById("detail-player-name").textContent = player.name;
    document.getElementById("detail-player-full").textContent = player.fullName;
    document.getElementById("detail-player-pos").textContent = player.pos;
    document.getElementById("detail-player-club").textContent = player.club.name;
    document.getElementById("detail-player-nation").textContent = player.nation.name;
    document.getElementById("detail-player-type").textContent = player.cardType.toUpperCase().replace("_", " ");
    document.getElementById("detail-player-price").textContent = `${player.quickSell.toLocaleString()} monedas`;

    modal.classList.add("active");

    document.getElementById("btn-close-detail").onclick = () => {
        modal.classList.remove("active");
    };
}

// ===================================================
// --- FUT DRAFT ENGINE (MINIJUEGO) ---
// ===================================================

const DRAFT_FORMATIONS = [
    {
        id: "433",
        name: "4-3-3",
        desc: "Ofensivo clásico con extremos abiertos y tridente en ataque.",
        positions: [
            { id: "s0", name: "POR", x: 50, y: 88, group: "POR" },
            { id: "s1", name: "LI",  x: 18, y: 70, group: "DEF" },
            { id: "s2", name: "DFC", x: 38, y: 72, group: "DEF" },
            { id: "s3", name: "DFC", x: 62, y: 72, group: "DEF" },
            { id: "s4", name: "LD",  x: 82, y: 70, group: "DEF" },
            { id: "s5", name: "MC",  x: 32, y: 46, group: "MED" },
            { id: "s6", name: "MCD", x: 50, y: 52, group: "MED" },
            { id: "s7", name: "MC",  x: 68, y: 46, group: "MED" },
            { id: "s8", name: "EI",  x: 20, y: 22, group: "DEL" },
            { id: "s9", name: "DC",  x: 50, y: 18, group: "DEL" },
            { id: "s10", name: "ED", x: 80, y: 22, group: "DEL" }
        ],
        links: [
            [0, 2], [0, 3], // POR con DFCs
            [1, 2], [2, 3], [3, 4], // Línea defensiva LI-DFC-DFC-LD
            [1, 5], [4, 7], // Laterales con MCs
            [2, 6], [3, 6], // DFCs con MCD
            [5, 6], [6, 7], // Trío medular MC-MCD-MC
            [5, 8], [7, 10], // MCs con Extremos
            [6, 9], // MCD con DC
            [8, 9], [9, 10] // Tridente ofensivo EI-DC-ED
        ]
    },
    {
        id: "442",
        name: "4-4-2",
        desc: "Equilibrio total con dos delanteros centro y bandas rápidas.",
        positions: [
            { id: "s0", name: "POR", x: 50, y: 88, group: "POR" },
            { id: "s1", name: "LI",  x: 18, y: 70, group: "DEF" },
            { id: "s2", name: "DFC", x: 38, y: 72, group: "DEF" },
            { id: "s3", name: "DFC", x: 62, y: 72, group: "DEF" },
            { id: "s4", name: "LD",  x: 82, y: 70, group: "DEF" },
            { id: "s5", name: "MI",  x: 18, y: 45, group: "MED" },
            { id: "s6", name: "MC",  x: 40, y: 48, group: "MED" },
            { id: "s7", name: "MC",  x: 60, y: 48, group: "MED" },
            { id: "s8", name: "MD",  x: 82, y: 45, group: "MED" },
            { id: "s9", name: "DC",  x: 38, y: 20, group: "DEL" },
            { id: "s10", name: "DC", x: 62, y: 20, group: "DEL" }
        ],
        links: [
            [0, 2], [0, 3], // POR con DFCs
            [1, 2], [2, 3], [3, 4], // Defensa
            [1, 5], [4, 8], // Laterales con bandas
            [2, 6], [3, 7], // DFCs con MCs
            [5, 6], [6, 7], [7, 8], // Centro del campo
            [5, 9], [8, 10], // Bandas con DCs
            [6, 9], [7, 10], // MCs con DCs
            [9, 10] // Doble punta
        ]
    },
    {
        id: "4231",
        name: "4-2-3-1",
        desc: "Doble pivote defensivo con mediapunta creativo y un ariete.",
        positions: [
            { id: "s0", name: "POR", x: 50, y: 88, group: "POR" },
            { id: "s1", name: "LI",  x: 18, y: 70, group: "DEF" },
            { id: "s2", name: "DFC", x: 38, y: 72, group: "DEF" },
            { id: "s3", name: "DFC", x: 62, y: 72, group: "DEF" },
            { id: "s4", name: "LD",  x: 82, y: 70, group: "DEF" },
            { id: "s5", name: "MCD", x: 38, y: 54, group: "MED" },
            { id: "s6", name: "MCD", x: 62, y: 54, group: "MED" },
            { id: "s7", name: "MCO", x: 50, y: 36, group: "MED" },
            { id: "s8", name: "MI",  x: 20, y: 32, group: "MED" },
            { id: "s9", name: "MD",  x: 80, y: 32, group: "MED" },
            { id: "s10", name: "DC", x: 50, y: 16, group: "DEL" }
        ],
        links: [
            [0, 2], [0, 3], // POR con DFCs
            [1, 2], [2, 3], [3, 4], // Defensa
            [1, 5], [4, 6], // Laterales con MCDs
            [2, 5], [3, 6], // DFCs con MCDs
            [5, 6], // Doble pivote
            [5, 7], [6, 7], // MCDs con MCO
            [5, 8], [6, 9], // MCDs con Bandas
            [7, 8], [7, 9], // MCO con Bandas
            [7, 10], [8, 10], [9, 10] // Ataque al DC
        ]
    },
    {
        id: "352",
        name: "3-5-2",
        desc: "Defensa de 3 centrales con 5 medios y 2 puntas arriba.",
        positions: [
            { id: "s0", name: "POR", x: 50, y: 88, group: "POR" },
            { id: "s1", name: "DFC", x: 26, y: 72, group: "DEF" },
            { id: "s2", name: "DFC", x: 50, y: 74, group: "DEF" },
            { id: "s3", name: "DFC", x: 74, y: 72, group: "DEF" },
            { id: "s4", name: "MCD", x: 40, y: 55, group: "MED" },
            { id: "s5", name: "MCD", x: 60, y: 55, group: "MED" },
            { id: "s6", name: "MI",  x: 16, y: 40, group: "MED" },
            { id: "s7", name: "MCO", x: 50, y: 38, group: "MED" },
            { id: "s8", name: "MD",  x: 84, y: 40, group: "MED" },
            { id: "s9", name: "DC",  x: 38, y: 18, group: "DEL" },
            { id: "s10", name: "DC", x: 62, y: 18, group: "DEL" }
        ],
        links: [
            [0, 1], [0, 2], [0, 3], // POR con 3 DFCs
            [1, 2], [2, 3], // Línea de 3 centrales
            [1, 4], [2, 4], [2, 5], [3, 5], // Centrales con MCDs
            [1, 6], [3, 8], // Centrales exteriores con carrileros
            [4, 5], // Doble pivote
            [4, 6], [5, 8], // MCDs con carrileros
            [4, 7], [5, 7], // MCDs con MCO
            [6, 7], [7, 8], // Carrileros con MCO
            [6, 9], [8, 10], // Carrileros con DCs
            [7, 9], [7, 10], // MCO con DCs
            [9, 10] // Doble punta
        ]
    }
];

let draftState = {
    formation: null,
    starters: new Array(11).fill(null), // 11 posiciones
    bench: new Array(6).fill(null),       // 6 suplentes
    reserves: new Array(4).fill(null),    // 4 reservas
    activePickType: null, // "starter" | "bench" | "reserve"
    activePickIndex: -1
};

function initDraft() {
    renderDraftFormationSelection();
    setupDraftModalEvents();
}

function renderDraftFormationSelection() {
    const formationScreen = document.getElementById("draft-formation-screen");
    const boardScreen = document.getElementById("draft-board-screen");
    const container = document.getElementById("draft-formations-container");

    formationScreen.style.display = "block";
    boardScreen.style.display = "none";
    container.innerHTML = "";

    DRAFT_FORMATIONS.forEach(form => {
        const card = document.createElement("div");
        card.className = "formation-card";
        card.innerHTML = `
            <div class="formation-title">${form.name}</div>
            <p class="formation-desc">${form.desc}</p>
            <div class="formation-mini-preview">
                <span>⚽ 11 Titulares</span> • <span>🪑 6 Banquillo</span> • <span>📦 4 Reservas</span>
            </div>
        `;
        card.addEventListener("click", () => {
            selectDraftFormation(form);
        });
        container.appendChild(card);
    });
}

function selectDraftFormation(formation) {
    SoundFX.playClick();
    draftState.formation = formation;
    draftState.starters = new Array(11).fill(null);
    draftState.bench = new Array(6).fill(null);
    draftState.reserves = new Array(4).fill(null);

    document.getElementById("draft-formation-name").textContent = formation.name;
    document.getElementById("draft-formation-screen").style.display = "none";
    document.getElementById("draft-board-screen").style.display = "block";

    renderDraftBoard();
}

function renderDraftBoard() {
    renderDraftStarters();
    renderDraftBench();
    renderDraftReserves();
    updateDraftStats();
}

let draggedDraftSlot = null;
let activeSelectedDraftSlot = null;

function createDraftSlotElement(player, posLabel, slotType, slotIndex, onClick) {
    const slot = document.createElement("div");
    slot.className = "draft-slot";
    slot.dataset.slotType = slotType;
    slot.dataset.slotIndex = slotIndex;

    if (!player) {
        slot.innerHTML = `
            <div class="draft-slot-empty">
                <div class="draft-slot-plus">+</div>
                <div class="draft-slot-pos-label">${posLabel}</div>
            </div>
        `;
        slot.addEventListener("click", () => {
            // Si el usuario tenía una carta seleccionada previamente para mover, la mueve a este slot vacío
            if (activeSelectedDraftSlot) {
                const srcType = activeSelectedDraftSlot.type;
                const srcIdx = activeSelectedDraftSlot.index;
                activeSelectedDraftSlot = null;
                document.querySelectorAll(".draft-slot").forEach(s => s.classList.remove("selected-for-swap"));
                swapDraftPlayers(srcType, srcIdx, slotType, slotIndex);
                return;
            }
            SoundFX.playClick();
            onClick();
        });
    } else {
        const faceUrl = getPlayerFaceUrl(player);
        slot.draggable = true;
        slot.innerHTML = `
            <div class="draft-slot-filled ${player.cardType}">
                <div class="draft-slot-top-badge">
                    <span class="r-val">${player.rating}</span>
                    <span class="p-val">${player.pos}</span>
                </div>
                <div class="draft-slot-face-crop">
                    <img class="player-img" src="${faceUrl}" data-player-id="${player.id}" alt="${player.name}" onerror="handleFaceImgError(this, window.PLAYERS_BY_ID ? window.PLAYERS_BY_ID['${player.id}'] : null);">
                </div>
                <div class="draft-slot-info-bar">
                    <span class="p-name">${player.name}</span>
                    <span class="p-team">${player.club && player.club.name ? player.club.name : ''}</span>
                </div>
            </div>
        `;

        // DRAG & DROP EVENT LISTENERS
        slot.addEventListener("dragstart", (e) => {
            draggedDraftSlot = { type: slotType, index: slotIndex };
            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/plain", JSON.stringify(draggedDraftSlot));
            }
            // Retardar la adición de la clase dragging al siguiente ciclo para que la imagen fantasma arrastrada no sea semitransparente ni gris
            requestAnimationFrame(() => {
                if (draggedDraftSlot) {
                    slot.classList.add("dragging");
                }
            });
        });

        const resetDragState = () => {
            draggedDraftSlot = null;
            document.querySelectorAll(".draft-slot").forEach(s => {
                s.classList.remove("dragging");
                s.classList.remove("drag-over");
            });
        };

        slot.addEventListener("dragend", resetDragState);

        // CLICK-TO-SWAP (Permite cambiar tanto con click como arrastrando)
        slot.addEventListener("click", () => {
            if (!activeSelectedDraftSlot) {
                // Primer click: seleccionar este jugador para mover
                activeSelectedDraftSlot = { type: slotType, index: slotIndex };
                document.querySelectorAll(".draft-slot").forEach(s => s.classList.remove("selected-for-swap"));
                slot.classList.add("selected-for-swap");
                SoundFX.playClick();
            } else if (activeSelectedDraftSlot.type === slotType && activeSelectedDraftSlot.index === slotIndex) {
                // Deseleccionar si hace click en el mismo
                activeSelectedDraftSlot = null;
                slot.classList.remove("selected-for-swap");
            } else {
                // Segundo click: intercambiar cartas entre las dos posiciones
                const srcType = activeSelectedDraftSlot.type;
                const srcIdx = activeSelectedDraftSlot.index;
                activeSelectedDraftSlot = null;
                document.querySelectorAll(".draft-slot").forEach(s => s.classList.remove("selected-for-swap"));
                swapDraftPlayers(srcType, srcIdx, slotType, slotIndex);
            }
        });
    }

    // Permitir recibir cartas arrastradas tanto en slots llenos como vacíos
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (e.dataTransfer) {
            e.dataTransfer.dropEffect = "move";
        }
        slot.classList.add("drag-over");
    });

    slot.addEventListener("dragleave", (e) => {
        // Evitar que se desactive drag-over al pasar por hijos (como imágenes o textos)
        if (!slot.contains(e.relatedTarget)) {
            slot.classList.remove("drag-over");
        }
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("drag-over");

        let srcData = draggedDraftSlot;
        if (!srcData && e.dataTransfer) {
            try {
                const raw = e.dataTransfer.getData("text/plain");
                if (raw) srcData = JSON.parse(raw);
            } catch (err) {}
        }
        if (!srcData) return;

        const srcType = srcData.type;
        const srcIdx = srcData.index;
        const targetType = slotType;
        const targetIdx = slotIndex;

        // Si se suelta en la misma posición, no hacer nada
        if (srcType === targetType && srcIdx === targetIdx) return;

        // Intercambiar (Swap) las cartas entre las dos posiciones
        swapDraftPlayers(srcType, srcIdx, targetType, targetIdx);
    });

    return slot;
}

// Función para intercambiar jugadores entre cualquier slot (campo, banquillo, reservas)
function swapDraftPlayers(type1, index1, type2, index2) {
    const list1 = type1 === "starter" ? draftState.starters : (type1 === "bench" ? draftState.bench : draftState.reserves);
    const list2 = type2 === "starter" ? draftState.starters : (type2 === "bench" ? draftState.bench : draftState.reserves);

    const temp = list1[index1];
    list1[index1] = list2[index2];
    list2[index2] = temp;

    activeSelectedDraftSlot = null;
    SoundFX.playCardBurst();
    renderDraftBoard();
}

// --- MOTOR DE QUÍMICA CLÁSICA (VERDE / AMARILLO / ROJO, MÁXIMO 100) ---
// Calcula el enlace directo entre dos jugadores (FUT clásico):
// Mismo club o Icono/Héroe con club/país = Hipervínculo (3 pts, VERDE FUERTE)
// Mismo país o misma liga/club = Vínculo fuerte (2 pts, VERDE)
// Misma nacionalidad o misma liga/afinidad = Vínculo débil (1 pt, AMARILLO)
// Sin coincidencia = Vínculo muerto (0 pts, ROJO)
function getClassicPlayerLink(p1, p2) {
    if (!p1 || !p2) return { points: 0, color: "none" };

    // Si uno es Icono o Héroe
    const isSpecial1 = (p1.cardType === "icon" || p1.cardType === "hero");
    const isSpecial2 = (p2.cardType === "icon" || p2.cardType === "hero");

    if (isSpecial1 && isSpecial2) {
        return { points: 3, color: "green" };
    }

    if (isSpecial1 || isSpecial2) {
        const special = isSpecial1 ? p1 : p2;
        const normal = isSpecial1 ? p2 : p1;
        if (special.nation && normal.nation && special.nation.code === normal.nation.code) {
            return { points: 3, color: "green" };
        }
        return { points: 1, color: "yellow" };
    }

    const sameClub = p1.club && p2.club && (
        (p1.club.id && p1.club.id === p2.club.id) ||
        (p1.club.name && p1.club.name === p2.club.name)
    );
    const sameNation = p1.nation && p2.nation && p1.nation.code && (p1.nation.code === p2.nation.code);

    if (sameClub && sameNation) {
        return { points: 3, color: "green" }; // Hipervínculo perfecto
    }
    if (sameClub) {
        return { points: 2, color: "green" }; // Vínculo de club
    }
    if (sameNation) {
        return { points: 1.5, color: "green" }; // Vínculo fuerte de país
    }

    return { points: 0, color: "red" }; // Enlace muerto
}

// Dibuja las líneas SVG entre los 11 titulares según la formación activa
function renderPitchChemLines(svgId, positions, links, squad) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    svg.innerHTML = "";
    if (!positions || !links) return;

    links.forEach(pair => {
        const idx1 = pair[0];
        const idx2 = pair[1];
        const pos1 = positions[idx1];
        const pos2 = positions[idx2];
        if (!pos1 || !pos2) return;

        const p1 = squad ? squad[idx1] : null;
        const p2 = squad ? squad[idx2] : null;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", `${pos1.x}%`);
        line.setAttribute("y1", `${pos1.y}%`);
        line.setAttribute("x2", `${pos2.x}%`);
        line.setAttribute("y2", `${pos2.y}%`);

        if (p1 && p2) {
            const linkData = getClassicPlayerLink(p1, p2);
            if (linkData.color === "green") {
                line.setAttribute("class", "link-green");
            } else if (linkData.color === "yellow") {
                line.setAttribute("class", "link-yellow");
            } else {
                line.setAttribute("class", "link-red");
            }
        } else {
            // Línea neutra tenue cuando falta al menos un jugador
            line.setAttribute("stroke", "rgba(255, 255, 255, 0.15)");
            line.setAttribute("stroke-width", "2");
            line.setAttribute("stroke-dasharray", "4,4");
        }

        svg.appendChild(line);
    });
}

// Calcula la química total clásica (0 a 100) en base a posición individual y enlaces
function calculateClassicSquadChem(positions, links, squad) {
    if (!positions || !links || !squad) return 0;
    const filledCount = squad.filter(Boolean).length;
    if (filledCount === 0) return 0;

    let totalChem = 0;

    positions.forEach((pos, idx) => {
        const player = squad[idx];
        if (!player) return;

        // Comprobación de posición
        let posRating = 1; // Fuera de posición (mínimo 1)
        if (pos.group === "POR" && player.pos === "POR") posRating = 3;
        else if (pos.group === "DEF" && ["DFC", "LI", "LD", "CAD", "CAI"].includes(player.pos)) posRating = 3;
        else if (pos.group === "MED" && ["MC", "MCD", "MCO", "MI", "MD"].includes(player.pos)) posRating = 3;
        else if (pos.group === "DEL" && ["DEL", "DC", "EI", "ED", "SD"].includes(player.pos)) posRating = 3;
        else posRating = 1.5;

        // Si es la posición exacta
        if (player.pos === pos.name) posRating = 4;

        // Enlaces conectados a este jugador
        const connectedLinks = links.filter(pair => pair[0] === idx || pair[1] === idx);
        const linkCount = connectedLinks.length || 1;
        let linkPointsSum = 0;

        connectedLinks.forEach(pair => {
            const otherIdx = (pair[0] === idx) ? pair[1] : pair[0];
            const otherPlayer = squad[otherIdx];
            if (otherPlayer) {
                const link = getClassicPlayerLink(player, otherPlayer);
                linkPointsSum += link.points;
            }
        });

        // Ratio de puntos de enlace conseguidos vs enlaces totales
        const linkRatio = Math.min(1.5, linkPointsSum / linkCount);

        // Iconos y Héroes tienen química base individual altísima
        let individualChem = Math.round(posRating * 1.5 + (linkRatio * 4));
        if (player.cardType === "icon" || player.cardType === "hero") {
            individualChem = Math.max(8, individualChem + 3);
        }

        // Cap individual por jugador clásico: entre 1 y 10
        individualChem = Math.min(10, Math.max(1, individualChem));
        totalChem += individualChem;
    });

    return Math.min(100, Math.max(0, totalChem));
}

function renderDraftStarters() {
    const container = document.getElementById("pitch-starters-slots");
    container.innerHTML = "";

    const form = draftState.formation;
    form.positions.forEach((pos, idx) => {
        const player = draftState.starters[idx];
        const slot = createDraftSlotElement(player, pos.name, "starter", idx, () => {
            if (!player) {
                openDraftPicker("starter", idx, pos.name, pos.group);
            }
        });
        slot.style.left = `${pos.x}%`;
        slot.style.top = `${pos.y}%`;
        container.appendChild(slot);
    });

    // Renderizar líneas de química clásicas SVG (verde/amarillo/rojo)
    renderPitchChemLines("pitch-chem-svg", form.positions, form.links, draftState.starters);
}

function renderDraftBench() {
    const container = document.getElementById("pitch-bench-slots");
    container.innerHTML = "";

    const benchCount = draftState.bench.filter(p => p !== null).length;
    document.getElementById("bench-progress").textContent = `${benchCount}/6`;

    for (let i = 0; i < 6; i++) {
        const player = draftState.bench[i];
        const slot = createDraftSlotElement(player, `SUPL ${i + 1}`, "bench", i, () => {
            if (!player) {
                openDraftPicker("bench", i, `Banquillo ${i + 1}`, "ALL");
            }
        });
        container.appendChild(slot);
    }
}

function renderDraftReserves() {
    const container = document.getElementById("pitch-reserves-slots");
    container.innerHTML = "";

    const resCount = draftState.reserves.filter(p => p !== null).length;
    document.getElementById("reserves-progress").textContent = `${resCount}/4`;

    for (let i = 0; i < 4; i++) {
        const player = draftState.reserves[i];
        const slot = createDraftSlotElement(player, `RES ${i + 1}`, "reserve", i, () => {
            if (!player) {
                openDraftPicker("reserve", i, `Reserva ${i + 1}`, "ALL");
            }
        });
        container.appendChild(slot);
    }
}

// Genera 5 candidatos aleatorios de la base de datos sin duplicar jamás un jugador
function openDraftPicker(type, index, label, posGroup) {
    draftState.activePickType = type;
    draftState.activePickIndex = index;

    const modal = document.getElementById("draft-pick-modal");
    const title = document.getElementById("draft-pick-title");
    const sub = document.getElementById("draft-pick-subtitle");
    const candidatesBox = document.getElementById("draft-pick-candidates");

    title.textContent = `ELIGE TU ${label.toUpperCase()}`;
    sub.textContent = "Selecciona 1 de las 5 opciones para esta posición (solo puedes elegir una vez).";
    candidatesBox.innerHTML = "";

    // Filtrar candidatos según posición si es titular, o aleatorio general si es suplente/reserva
    let eligiblePool = PLAYERS_DB;
    if (posGroup && posGroup !== "ALL") {
        if (posGroup === "POR") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "POR");
        } else if (posGroup === "LI") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "LI" || p.pos === "CAI" || p.pos === "DFC");
        } else if (posGroup === "LD") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "LD" || p.pos === "CAD" || p.pos === "DFC");
        } else if (posGroup === "DFC") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "DFC" || p.pos === "LI" || p.pos === "LD");
        } else if (posGroup === "MCD") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "MCD" || p.pos === "MC");
        } else if (posGroup === "MC") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "MC" || p.pos === "MCO" || p.pos === "MCD");
        } else if (posGroup === "MCO") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "MCO" || p.pos === "MC" || p.pos === "DEL");
        } else if (posGroup === "MI") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "MI" || p.pos === "EI" || p.pos === "MC");
        } else if (posGroup === "MD") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "MD" || p.pos === "ED" || p.pos === "MC");
        } else if (posGroup === "EI") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "EI" || p.pos === "MI" || p.pos === "DEL");
        } else if (posGroup === "ED") {
            eligiblePool = PLAYERS_DB.filter(p => p.pos === "ED" || p.pos === "MD" || p.pos === "DEL");
        } else if (posGroup === "DC" || posGroup === "DEL") {
            eligiblePool = PLAYERS_DB.filter(p => ["DC", "DEL", "SD", "EI", "ED"].includes(p.pos));
        } else if (posGroup === "DEF") {
            eligiblePool = PLAYERS_DB.filter(p => ["LI", "LD", "DFC", "CAD", "CAI"].includes(p.pos));
        } else if (posGroup === "MED") {
            eligiblePool = PLAYERS_DB.filter(p => ["MC", "MCD", "MCO", "MI", "MD"].includes(p.pos));
        }
        if (eligiblePool.length < 5) {
            eligiblePool = PLAYERS_DB;
        }
    }

    // Recolectar todos los jugadores ya elegidos en la plantilla (por ID y por nombre para evitar clones)
    const existingDraftedPlayers = [
        ...draftState.starters.filter(Boolean),
        ...draftState.bench.filter(Boolean),
        ...draftState.reserves.filter(Boolean)
    ];

    const draftedIds = new Set(existingDraftedPlayers.map(p => String(p.id)));
    const draftedNames = new Set(existingDraftedPlayers.map(p => (p.name || '').trim().toLowerCase()));

    const candidates = [];
    const usedIds = new Set();
    const usedNames = new Set();

    function isPlayerAlreadyDrafted(player) {
        if (!player) return true;
        const pid = String(player.id);
        const pname = (player.name || '').trim().toLowerCase();
        return draftedIds.has(pid) || usedIds.has(pid) || draftedNames.has(pname) || usedNames.has(pname);
    }

    // --- SISTEMA DE TIERS DE CALIDAD HOMOGÉNEA POR ELECCIÓN EN FUT DRAFT ---
    // 1) Línea de Platas: ~5% de probabilidad. 5 opciones exclusivamente de categoría plata (ratings 65-74).
    // 2) Línea Top / Élite: ~30% de probabilidad en titulares/suplentes. 5 opciones destacadas (caminantes 86+, especiales icon/hero/totw o medias >= 85).
    // 3) Línea Estándar: Resto de elecciones con oros comunes/únicos balanceados (75-84).
    const randTier = Math.random();
    let roundTier = "standard"; // "silver" | "top_elite" | "standard"
    if (randTier < 0.05) {
        roundTier = "silver";
    } else if (randTier < 0.35) {
        roundTier = "top_elite";
    } else {
        roundTier = "standard";
    }

    // Filtrar eligiblePool por tier de calidad homogénea
    let tierPool = [];
    if (roundTier === "silver") {
        // Exclusivamente jugadores de categoría plata (ratings entre 65 y 74)
        tierPool = eligiblePool.filter(p => (p.cardType === "silver") || (p.rating >= 65 && p.rating <= 74));
        if (tierPool.length < 5) {
            // Ampliar a toda la base si la posición tiene pocos platas
            tierPool = PLAYERS_DB.filter(p => (p.cardType === "silver") || (p.rating >= 65 && p.rating <= 74));
        }
        sub.innerHTML = `🌟 <strong>LÍNEA DE PLATAS:</strong> 5 promesas de categoría plata (65-74 de media). Elige con criterio táctico.`;
    } else if (roundTier === "top_elite") {
        // Exclusivamente cartas destacadas (caminantes, cartas especiales o medias >= 85)
        tierPool = eligiblePool.filter(p => ["icon", "hero", "totw"].includes(p.cardType) || p.rating >= 85);
        if (tierPool.length < 5) {
            tierPool = PLAYERS_DB.filter(p => ["icon", "hero", "totw"].includes(p.cardType) || p.rating >= 85);
        }
        sub.innerHTML = `🔥 <strong>LÍNEA TOP / ÉLITE:</strong> ¡5 cartas de clase mundial destacadas (Caminantes 85+ o Especiales)!`;
    } else {
        // Rondas estándar: Oros comunes/únicos balanceados (ratings 75 a 84 típicamente)
        tierPool = eligiblePool.filter(p => p.rating >= 75 && p.rating <= 84 && !["icon", "hero"].includes(p.cardType));
        if (tierPool.length < 5) {
            tierPool = eligiblePool.filter(p => p.rating >= 70 && p.rating <= 85);
        }
        sub.textContent = "Selecciona 1 de las 5 opciones para esta posición (solo puedes elegir una vez).";
    }

    if (tierPool.length === 0) {
        tierPool = eligiblePool;
    }

    let attempts = 0;
    while (candidates.length < 5 && attempts < 400) {
        attempts++;
        const chosenPlayer = tierPool[Math.floor(Math.random() * tierPool.length)];
        if (chosenPlayer && !isPlayerAlreadyDrafted(chosenPlayer)) {
            usedIds.add(String(chosenPlayer.id));
            usedNames.add((chosenPlayer.name || '').trim().toLowerCase());
            candidates.push(chosenPlayer);
        }
    }

    // Si aún faltan candidatos por completar 5, rellenar del tierPool o eligiblePool garantizando sin duplicados
    attempts = 0;
    while (candidates.length < 5 && attempts < 500) {
        attempts++;
        const fallbackPool = tierPool.length >= 5 ? tierPool : eligiblePool;
        const rand = fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
        if (rand && !isPlayerAlreadyDrafted(rand)) {
            usedIds.add(String(rand.id));
            usedNames.add((rand.name || '').trim().toLowerCase());
            candidates.push(rand);
        }
    }

    // Renderizar candidatos con animación escalonada
    candidates.forEach((player, idx) => {
        const cardEl = renderCardElement(player, { scale: 0.95, disableDetail: true });
        cardEl.style.animationDelay = `${(idx * 0.13) + 0.05}s`;
        cardEl.addEventListener("click", () => {
            selectDraftCandidate(player);
        });
        candidatesBox.appendChild(cardEl);
    });

    modal.classList.add("active");
}

function selectDraftCandidate(player) {
    SoundFX.playCardBurst();
    const type = draftState.activePickType;
    const index = draftState.activePickIndex;

    if (type === "starter") {
        draftState.starters[index] = player;
    } else if (type === "bench") {
        draftState.bench[index] = player;
    } else if (type === "reserve") {
        draftState.reserves[index] = player;
    }

    document.getElementById("draft-pick-modal").classList.remove("active");
    renderDraftBoard();
}

function setupDraftModalEvents() {
    const pickModal = document.getElementById("draft-pick-modal");
    const rewardModal = document.getElementById("draft-reward-modal");
    const btnFinish = document.getElementById("btn-finish-draft");
    const btnClaim = document.getElementById("btn-claim-draft-reward");
    const btnPlayMatch = document.getElementById("btn-play-match");
    const btnCloseMatch = document.getElementById("btn-close-match-modal");
    const btnCollectMatchReward = document.getElementById("btn-collect-match-reward");

    document.getElementById("btn-close-draft-pick").addEventListener("click", () => {
        pickModal.classList.remove("active");
    });

    document.getElementById("btn-restart-draft").addEventListener("click", () => {
        if (confirm("¿Estás seguro de que quieres reiniciar el FUT Draft? Se perderá la plantilla actual.")) {
            renderDraftFormationSelection();
        }
    });

    if (btnFinish) {
        btnFinish.addEventListener("click", () => {
            showDraftRewardModal();
        });
    }

    if (btnClaim) {
        btnClaim.addEventListener("click", () => {
            claimDraftReward();
        });
    }

    if (btnPlayMatch) {
        btnPlayMatch.addEventListener("click", () => {
            startDraftMatchSimulation();
        });
    }

    if (btnCloseMatch) {
        btnCloseMatch.addEventListener("click", () => {
            document.getElementById("draft-match-modal").classList.remove("active");
        });
    }

    if (btnCollectMatchReward) {
        btnCollectMatchReward.addEventListener("click", () => {
            collectDraftMatchReward();
        });
    }

    // Controles de velocidad del partido
    document.querySelectorAll(".match-speed-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".match-speed-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            setMatchSpeed(btn.dataset.speed);
        });
    });
}

// Calcular monedas obtenidas según la calidad de la plantilla (Valoración + Química Clásica 0-100)
function calculateDraftReward(avgRating, totalChem) {
    // Escala clásica: Media (60-95) + Química Clásica (0-100) = Score (60 a 195)
    const score = avgRating + totalChem;
    let coins = 10000;

    if (score >= 180) {
        coins = 150000; // Calidad Dios (Media 88+, Chem 92+)
    } else if (score >= 170) {
        coins = 100000; // Calidad Élite (Media 86+, Chem 84+)
    } else if (score >= 155) {
        coins = 65000;  // Calidad Oro Top
    } else if (score >= 140) {
        coins = 40000;  // Calidad Muy Buena
    } else if (score >= 120) {
        coins = 25000;  // Calidad Buena
    } else if (score >= 100) {
        coins = 15000;  // Calidad Regular
    } else {
        coins = 8000;   // Calidad Básica
    }

    return coins;
}

function showDraftRewardModal() {
    const starterRatings = draftState.starters.filter(Boolean).map(p => p.rating);
    const allPicked = [
        ...draftState.starters.filter(Boolean),
        ...draftState.bench.filter(Boolean),
        ...draftState.reserves.filter(Boolean)
    ];

    const avgRating = starterRatings.length > 0
        ? Math.round(starterRatings.reduce((a, b) => a + b, 0) / starterRatings.length)
        : Math.round(allPicked.map(p => p.rating).reduce((a, b) => a + b, 0) / allPicked.length);

    const form = draftState.formation;
    const totalChem = form ? calculateClassicSquadChem(form.positions, form.links, draftState.starters) : 0;
    const coinsReward = calculateDraftReward(avgRating, totalChem);

    document.getElementById("reward-final-rating").textContent = avgRating;
    document.getElementById("reward-final-chem").textContent = `${totalChem} / 100`;
    document.getElementById("reward-final-coins").textContent = `+${coinsReward.toLocaleString()} 💰`;

    let tierMsg = "Plantilla estándar completada.";
    if (avgRating >= 88 && totalChem >= 90) {
        tierMsg = "🌟 ¡INCREÍBLE! Plantilla de Élite Mundial con Química Perfecta (Líneas Verdes). Te llevas la recompensa máxima.";
    } else if (avgRating >= 85 && totalChem >= 75) {
        tierMsg = "🔥 ¡Gran Trabajo! Excelente valoración y química clásica. Recompensa muy alta.";
    } else if (avgRating >= 82) {
        tierMsg = "👍 Buen equilibrio de plantilla. Bonificación de monedas entregada.";
    }
    document.getElementById("reward-final-tier-info").textContent = tierMsg;

    document.getElementById("draft-reward-modal").classList.add("active");
    SoundFX.playCardBurst();
}

function claimDraftReward() {
    const starterRatings = draftState.starters.filter(Boolean).map(p => p.rating);
    const avgRating = starterRatings.length > 0
        ? Math.round(starterRatings.reduce((a, b) => a + b, 0) / starterRatings.length)
        : 80;

    const form = draftState.formation;
    const totalChem = form ? calculateClassicSquadChem(form.positions, form.links, draftState.starters) : 0;

    const coinsWon = calculateDraftReward(avgRating, totalChem);
    gameState.coins += coinsWon;
    gameState.stats.coinsEarned = (gameState.stats.coinsEarned || 0) + coinsWon;

    // Entregar sobre de recompensa de FUT Draft a "Tus Sobres"
    if (!Array.isArray(gameState.myPacks)) gameState.myPacks = [];
    let draftPackName = "Sobre Draft Oro";
    let draftPackColor = "#fbbf24";
    let draftWeights = { bronze: 0.05, silver: 0.25, gold_rare: 0.60, totw: 0.08, hero: 0.015, icon: 0.005 };

    if (avgRating >= 88 && totalChem >= 85) {
        draftPackName = "Sobre Draft Campeón Mundial";
        draftPackColor = "#ec4899";
        draftWeights = { bronze: 0, silver: 0, gold_rare: 0.5, totw: 0.25, hero: 0.15, icon: 0.10 };
    } else if (avgRating >= 85 && totalChem >= 70) {
        draftPackName = "Sobre Draft Élite";
        draftPackColor = "#8b5cf6";
        draftWeights = { bronze: 0, silver: 0.05, gold_rare: 0.68, totw: 0.18, hero: 0.06, icon: 0.03 };
    }

    gameState.myPacks.push({
        id: `pack_draft_${Date.now()}`,
        name: draftPackName,
        color: draftPackColor,
        description: `Ganado al completar plantilla en FUT Draft (Media ${avgRating} / Chem ${totalChem}).`,
        source: `FUT Draft (${avgRating} RAT / ${totalChem} CHEM)`,
        cardsCount: 9,
        weights: draftWeights
    });

    updateHeaderUI();
    saveState();

    document.getElementById("draft-reward-modal").classList.remove("active");
    alert(`🎉 ¡Has recibido ${coinsWon.toLocaleString()} monedas por la calidad de tu plantilla!`);

    // Reiniciar para un nuevo draft
    renderDraftFormationSelection();
}

// ===================================================
// MOTOR DE SIMULACIÓN DE PARTIDOS EN VIVO VS IA
// ===================================================

const AI_RIVAL_CLUBS = [
    {
        name: "Manchester City",
        badgeIcon: "🦁",
        rating: 90,
        stars: ["Haaland", "De Bruyne", "Rodri", "Foden", "Bernardo Silva"],
        tactics: "Posesión Asfixiante y Ataque Rápido"
    },
    {
        name: "Real Madrid",
        badgeIcon: "👑",
        rating: 91,
        stars: ["Mbappé", "Vinícius Jr.", "Bellingham", "Valverde", "Courtois"],
        tactics: "Pegada Letal y Mística Europea"
    },
    {
        name: "FC Barcelona",
        badgeIcon: "🔵🔴",
        rating: 88,
        stars: ["Lamine Yamal", "Lewandowski", "Pedri", "Raphinha", "Gavi"],
        tactics: "Tiki-Taka y Desborde Juvenil"
    },
    {
        name: "Bayern Múnich",
        badgeIcon: "🔴⚪",
        rating: 89,
        stars: ["Harry Kane", "Musiala", "Sané", "Kimmich", "Davies"],
        tactics: "Presión Alta y Potencia Bávara"
    },
    {
        name: "Paris Saint-Germain",
        badgeIcon: "🗼",
        rating: 87,
        stars: ["Dembélé", "Barcola", "Hakimi", "Vitinha", "Donnarumma"],
        tactics: "Velocidad Extrema por Bandas"
    },
    {
        name: "Arsenal FC",
        badgeIcon: "🔴⚪",
        rating: 88,
        stars: ["Saka", "Ødegaard", "Rice", "Saliba", "Gabriel"],
        tactics: "Solidez Táctica y Balón Parado"
    },
    {
        name: "Liverpool FC",
        badgeIcon: "🦅",
        rating: 89,
        stars: ["Salah", "Van Dijk", "Luis Díaz", "Mac Allister", "Alisson"],
        tactics: "Gegenpressing y Transición Fulgurante"
    }
];

let matchSimState = {
    timer: null,
    currentMinute: 0,
    userScore: 0,
    rivalScore: 0,
    rivalClub: null,
    userRating: 85,
    userChem: 30,
    speedMultiplier: 1, // 1: normal (~150ms/min), 2: fast (~75ms/min), 10: turbo (~10ms/min)
    isFinished: false,
    userGoalScorers: [],
    rivalGoalScorers: []
};

function setMatchSpeed(mode) {
    if (mode === "fast") matchSimState.speedMultiplier = 2.5;
    else if (mode === "turbo") matchSimState.speedMultiplier = 15;
    else matchSimState.speedMultiplier = 1;
}

function startDraftMatchSimulation() {
    const modal = document.getElementById("draft-match-modal");
    if (!modal) return;

    // Calcular estadísticas del equipo del usuario
    const starters = draftState.starters.filter(Boolean);
    const starterRatings = starters.map(p => p.rating);
    const userRating = starterRatings.length > 0 
        ? Math.round(starterRatings.reduce((a, b) => a + b, 0) / starterRatings.length) 
        : 85;

    const form = draftState.formation;
    const userChem = form ? calculateClassicSquadChem(form.positions, form.links, draftState.starters) : 0;

    // Seleccionar rival de élite aleatorio
    const rival = AI_RIVAL_CLUBS[Math.floor(Math.random() * AI_RIVAL_CLUBS.length)];

    // Inicializar estado del partido
    matchSimState = {
        timer: null,
        currentMinute: 0,
        userScore: 0,
        rivalScore: 0,
        rivalClub: rival,
        userRating: userRating,
        userChem: userChem,
        speedMultiplier: 1,
        isFinished: false,
        userGoalScorers: [],
        rivalGoalScorers: []
    };

    // Actualizar Header del Marcador
    document.getElementById("match-user-name").textContent = "TU FUT DRAFT";
    document.getElementById("match-user-stats").textContent = `Media ${userRating} • Química ${userChem}/100`;
    document.getElementById("match-rival-name").textContent = rival.name.toUpperCase();
    document.getElementById("match-rival-stats").textContent = `Media ${rival.rating} • ${rival.tactics}`;
    document.getElementById("match-rival-badge").textContent = rival.badgeIcon;

    document.getElementById("match-score-user").textContent = "0";
    document.getElementById("match-score-rival").textContent = "0";
    document.getElementById("match-time-text").textContent = "0'";
    document.getElementById("match-period-text").textContent = "PRIMERA PARTE";

    // Resetear momentum
    document.getElementById("match-momentum-user").style.width = "50%";
    document.getElementById("match-momentum-rival").style.width = "50%";
    document.getElementById("match-momentum-pct").textContent = "50% - 50%";

    // Resetear feed y botones
    const eventsList = document.getElementById("match-events-list");
    eventsList.innerHTML = "";
    document.getElementById("match-finish-banner").style.display = "none";
    document.getElementById("btn-close-match-modal").style.display = "none";

    // Añadir pitido inicial
    appendMatchEvent({
        minute: 0,
        icon: "📢",
        type: "highlight",
        text: `¡Arranca el partido en el estadio! <strong>Tu plantilla de FUT Draft</strong> se mide ante el todopoderoso <strong>${rival.name}</strong>.`
    });

    modal.classList.add("active");
    SoundFX.playClick();

    // Arrancar el reloj minuto a minuto
    runMatchTick();
}

function runMatchTick() {
    if (matchSimState.currentMinute >= 90) {
        finishDraftMatch();
        return;
    }

    // Minuto a minuto con variación dinámica
    matchSimState.currentMinute++;
    const minute = matchSimState.currentMinute;
    document.getElementById("match-time-text").textContent = `${minute}'`;

    if (minute === 45) {
        document.getElementById("match-period-text").textContent = "DESCANSO";
        appendMatchEvent({
            minute: 45,
            icon: "⏸️",
            type: "highlight",
            text: `Fin de la primera mitad. Marcador provisional: <strong>${matchSimState.userScore} - ${matchSimState.rivalScore}</strong>.`
        });
    } else if (minute === 46) {
        document.getElementById("match-period-text").textContent = "SEGUNDA PARTE";
    }

    // Dinámica de juego y probabilidad de eventos
    processMatchMinuteEvents(minute);

    // Calcular velocidad del reloj (Base: 120ms por minuto virtual)
    const delay = Math.max(12, Math.round(120 / matchSimState.speedMultiplier));
    matchSimState.timer = setTimeout(runMatchTick, delay);
}

function processMatchMinuteEvents(minute) {
    const { userRating, userChem, rivalClub } = matchSimState;
    const starters = draftState.starters.filter(Boolean);
    const starPlayers = starters.filter(p => p.rating >= 84);
    const randomUserPlayer = starPlayers.length > 0 
        ? starPlayers[Math.floor(Math.random() * starPlayers.length)] 
        : starters[Math.floor(Math.random() * starters.length)] || { name: "Tu Delantero" };

    const randomRivalStar = rivalClub.stars[Math.floor(Math.random() * rivalClub.stars.length)];

    // Ventaja ponderada según valoración y química clásica (escala 0-100)
    // Un equipo con 88+ y chem 85+ tiene una clara superioridad táctica
    const powerRatio = (userRating * 0.7 + (userChem * 0.3) * 0.9) / (rivalClub.rating * 0.7 + 27 * 0.9);
    const userDomination = Math.min(78, Math.max(25, Math.round(50 * powerRatio)));
    const rivalDomination = 100 - userDomination;

    // Actualizar barra de posesión cada 5 minutos
    if (minute % 5 === 0) {
        const jitter = Math.floor(Math.random() * 9) - 4;
        const currentU = Math.min(85, Math.max(15, userDomination + jitter));
        const currentR = 100 - currentU;
        document.getElementById("match-momentum-user").style.width = `${currentU}%`;
        document.getElementById("match-momentum-rival").style.width = `${currentR}%`;
        document.getElementById("match-momentum-pct").textContent = `${currentU}% - ${currentR}%`;
    }

    // Probabilidad de Gol Usuario (~3.5% por minuto si domina)
    const userGoalChance = (userDomination / 100) * 0.055;
    // Probabilidad de Gol Rival (~2.8% por minuto)
    const rivalGoalChance = (rivalDomination / 100) * 0.045;

    // Probabilidad de tarjeta / ocasión fallada
    const chanceRoll = Math.random();

    if (chanceRoll < userGoalChance) {
        // ¡GOL DEL USUARIO!
        matchSimState.userScore++;
        document.getElementById("match-score-user").textContent = matchSimState.userScore;
        SoundFX.playCardBurst();

        const goalTexts = [
            `¡¡GOOOOOOL!! ¡Qué obra de arte! <strong>${randomUserPlayer.name}</strong> revienta las mallas con un trallazo imparable.`,
            `¡¡GOL GOL GOL!! Gran jugada colectiva que culmina <strong>${randomUserPlayer.name}</strong> a placer en el área chica.`,
            `¡¡GOOOLAZO!! Zurdazo teledirigido a la escuadra ejecutado magistralmente por <strong>${randomUserPlayer.name}</strong>.`,
            `¡GOOOOL! Error defensivo de ${rivalClub.name} y <strong>${randomUserPlayer.name}</strong> no perdona en el mano a mano.`
        ];
        appendMatchEvent({
            minute: minute,
            icon: "⚽🔥",
            type: "goal-user",
            text: goalTexts[Math.floor(Math.random() * goalTexts.length)]
        });

    } else if (chanceRoll < userGoalChance + rivalGoalChance) {
        // ¡GOL DEL RIVAL!
        matchSimState.rivalScore++;
        document.getElementById("match-score-rival").textContent = matchSimState.rivalScore;
        SoundFX.playPackTear();

        const rivalTexts = [
            `Gol de ${rivalClub.name}. <strong>${randomRivalStar}</strong> define con frialdad ante la salida de tu portero.`,
            `¡Anota ${rivalClub.name}! Cabezazo inapelable de <strong>${randomRivalStar}</strong> tras saque de esquina.`,
            `Gol del rival. Despiste defensivo y <strong>${randomRivalStar}</strong> aprovecha el rechace dentro del área.`
        ];
        appendMatchEvent({
            minute: minute,
            icon: "⚽⚡",
            type: "goal-rival",
            text: rivalTexts[Math.floor(Math.random() * rivalTexts.length)]
        });

    } else if (chanceRoll > 0.94) {
        // Ocasión peligrosa o parada del portero
        const porteroUser = starters.find(p => p.pos === "POR") || { name: "Tu Guardameta" };
        const highlightEvents = [
            `¡PARADÓN de <strong>${porteroUser.name}</strong>! Vuela para evitar el gol cantado de ${randomRivalStar}.`,
            `¡Al palo! El disparo con efecto de <strong>${randomUserPlayer.name}</strong> se estrella contra la madera del arco rival.`,
            `¡Ocasión clarísima! ${rivalClub.name} roza el gol pero la zaga de tu FUT Draft despeja en la misma línea.`
        ];
        appendMatchEvent({
            minute: minute,
            icon: "🧤",
            type: "highlight",
            text: highlightEvents[Math.floor(Math.random() * highlightEvents.length)]
        });

    } else if (chanceRoll > 0.91 && chanceRoll <= 0.94) {
        // Tarjeta amarilla
        const isUserCard = Math.random() > 0.5;
        if (isUserCard) {
            appendMatchEvent({
                minute: minute,
                icon: "🟨",
                type: "card-yellow",
                text: `Tarjeta amarilla para <strong>${randomUserPlayer.name}</strong> por una entrada a destiempo en el medio campo.`
            });
        } else {
            appendMatchEvent({
                minute: minute,
                icon: "🟨",
                type: "card-yellow",
                text: `Tarjeta amarilla para un defensor de <strong>${rivalClub.name}</strong> tras frenar un contragolpe peligroso.`
            });
        }
    }
}

function appendMatchEvent(event) {
    const list = document.getElementById("match-events-list");
    if (!list) return;

    const item = document.createElement("div");
    item.className = `match-event-item ${event.type}`;
    item.innerHTML = `
        <span class="event-min">${event.minute}'</span>
        <span class="event-icon">${event.icon}</span>
        <span class="event-desc">${event.text}</span>
    `;

    list.appendChild(item);
    list.scrollTop = list.scrollHeight;
}

function finishDraftMatch() {
    if (matchSimState.timer) clearTimeout(matchSimState.timer);
    matchSimState.isFinished = true;

    const { userScore, rivalScore, rivalClub } = matchSimState;
    const banner = document.getElementById("match-finish-banner");
    const icon = document.getElementById("match-finish-icon");
    const title = document.getElementById("match-finish-title");
    const msg = document.getElementById("match-finish-msg");
    const rewardBox = document.getElementById("match-finish-reward-box");
    const btnCollect = document.getElementById("btn-collect-match-reward");
    const btnClose = document.getElementById("btn-close-match-modal");

    if (btnClose) btnClose.style.display = "block";
    document.getElementById("match-period-text").textContent = "FINAL DEL PARTIDO";

    appendMatchEvent({
        minute: 90,
        icon: "🏁",
        type: "highlight",
        text: `¡PITA EL ÁRBITRO! Final del partido con resultado: <strong>Tu Draft ${userScore} - ${rivalScore} ${rivalClub.name}</strong>.`
    });

    // Determinar resultado
    if (userScore > rivalScore) {
        // ¡VICTORIA! Entrega sobre de 50.000 monedas + bonus
        SoundFX.playCardBurst();
        icon.textContent = "🏆";
        title.textContent = "¡VICTORIA MEMORABLE!";
        title.style.color = "#34d399";
        msg.textContent = `¡Has tumbado al ${rivalClub.name} (${userScore} - ${rivalScore})! Por tu hazaña, te llevas el Mega Sobre Top Players (valor 50.000 monedas) y 25.000 monedas en efectivo.`;
        
        rewardBox.innerHTML = `
            <div class="pack-badge" style="background: #8b5cf6; color: white;">PREMIO EXCLUSIVO DE CAMPEÓN</div>
            <div class="reward-title">🎁 Mega Sobre Top Players (Valor 50.000 Monedas)</div>
            <div class="reward-bonus">💰 + 25.000 Monedas directas a tu Club</div>
        `;
        btnCollect.textContent = "¡Reclamar Mega Sobre de 50.000 y Monedas! 🎁";
        btnCollect.dataset.outcome = "win";

    } else if (userScore === rivalScore) {
        // Empate
        SoundFX.playCoinSound();
        icon.textContent = "🤝";
        title.textContent = "¡EMPATE COMBATIDO!";
        title.style.color = "#fbbf24";
        msg.textContent = `Gran partido ante el ${rivalClub.name} (${userScore} - ${rivalScore}). Te llevas un Sobre Oro Premium y 15.000 monedas.`;
        
        rewardBox.innerHTML = `
            <div class="pack-badge" style="background: #f59e0b; color: white;">PREMIO DE CONSOLACIÓN</div>
            <div class="reward-title">🎁 Sobre Oro Premium (Valor 15.000 Monedas)</div>
            <div class="reward-bonus">💰 + 15.000 Monedas para tu Club</div>
        `;
        btnCollect.textContent = "¡Reclamar Recompensas del Empate! 💰";
        btnCollect.dataset.outcome = "draw";

    } else {
        // Derrota
        SoundFX.playClick();
        icon.textContent = "💔";
        title.textContent = "DERROTA APRETADA";
        title.style.color = "#ef4444";
        msg.textContent = `El ${rivalClub.name} se llevó la victoria (${userScore} - ${rivalScore}). Aún así, recibes un Sobre Oro Estándar y 8.000 monedas por competir.`;
        
        rewardBox.innerHTML = `
            <div class="pack-badge" style="background: #64748b; color: white;">PREMIO POR PARTICIPACIÓN</div>
            <div class="reward-title">🎁 Sobre Oro Estándar (Valor 5.000 Monedas)</div>
            <div class="reward-bonus">💰 + 8.000 Monedas para tu Club</div>
        `;
        btnCollect.textContent = "¡Recoger Monedas y Jugar Otro Draft! 🔄";
        btnCollect.dataset.outcome = "loss";
    }

    banner.style.display = "block";
    banner.scrollIntoView({ behavior: "smooth" });
}

function collectDraftMatchReward() {
    const btnCollect = document.getElementById("btn-collect-match-reward");
    const outcome = btnCollect.dataset.outcome || "win";

    if (!Array.isArray(gameState.myPacks)) gameState.myPacks = [];

    let coinsWon = 25000;
    let packName = "Mega Sobre Top Players";
    let packColor = "#8b5cf6";
    let packDesc = "Ganado por derrotar a la IA en el partido de FUT Draft.";
    let packWeights = { bronze: 0.0, silver: 0.0, gold_rare: 0.73, totw: 0.18, hero: 0.06, icon: 0.03 };

    if (outcome === "win") {
        coinsWon = 25000;
        packName = "Mega Sobre Top Players (50.000)";
        packColor = "#8b5cf6";
        packDesc = `¡Victoria épica contra ${matchSimState.rivalClub ? matchSimState.rivalClub.name : 'la IA'}! 9 cartas con altísimas probabilidades de Walkout (86+), TOTW e Iconos.`;
        packWeights = { bronze: 0.0, silver: 0.0, gold_rare: 0.73, totw: 0.18, hero: 0.06, icon: 0.03 };
    } else if (outcome === "draw") {
        coinsWon = 15000;
        packName = "Sobre Oro Premium";
        packColor = "#f59e0b";
        packDesc = "Empate disputado en FUT Draft ante la IA.";
        packWeights = { bronze: 0.03, silver: 0.12, gold_rare: 0.74, totw: 0.08, hero: 0.022, icon: 0.008 };
    } else {
        coinsWon = 8000;
        packName = "Sobre Oro";
        packColor = "#fbbf24";
        packDesc = "Participación en partido de FUT Draft.";
        packWeights = { bronze: 0.15, silver: 0.35, gold_rare: 0.46, totw: 0.035, hero: 0.004, icon: 0.001 };
    }

    gameState.coins += coinsWon;
    gameState.stats.coinsEarned = (gameState.stats.coinsEarned || 0) + coinsWon;

    // Inyectar el sobre a "Tus Sobres"
    gameState.myPacks.push({
        id: `pack_match_${Date.now()}`,
        name: packName,
        color: packColor,
        description: packDesc,
        source: `FUT Draft Match (${outcome === 'win' ? 'Victoria vs ' + matchSimState.rivalClub.name : 'Partido vs IA'})`,
        cardsCount: 9,
        weights: packWeights
    });

    updateHeaderUI();
    saveState();

    document.getElementById("draft-match-modal").classList.remove("active");
    alert(`🎉 ¡Recompensas añadidas! +${coinsWon.toLocaleString()} monedas y 1 ${packName} disponible en la pestaña 'Sobres -> Tus Sobres'.`);

    // Reiniciar FUT Draft
    renderDraftFormationSelection();
}

// Cálculo de Valoración y Química de FUT Draft (Clásica 0 a 100)
function updateDraftStats() {
    const allPicked = [
        ...draftState.starters.filter(Boolean),
        ...draftState.bench.filter(Boolean),
        ...draftState.reserves.filter(Boolean)
    ];

    const btnFinish = document.getElementById("btn-finish-draft");

    if (allPicked.length === 0) {
        document.getElementById("draft-total-rating").textContent = "0";
        document.getElementById("draft-total-chem").textContent = "0 / 100";
        if (btnFinish) btnFinish.style.display = "none";
        return;
    }

    // Media del equipo (promedio de los 11 titulares si hay, o de todas las cartas elegidas)
    const starterRatings = draftState.starters.filter(Boolean).map(p => p.rating);
    const avgRating = starterRatings.length > 0
        ? Math.round(starterRatings.reduce((a, b) => a + b, 0) / starterRatings.length)
        : Math.round(allPicked.map(p => p.rating).reduce((a, b) => a + b, 0) / allPicked.length);

    document.getElementById("draft-total-rating").textContent = avgRating;

    // Cálculo de Química Clásica (FUT clásico: 0 a 100)
    const form = draftState.formation;
    const finalChem = form ? calculateClassicSquadChem(form.positions, form.links, draftState.starters) : 0;
    document.getElementById("draft-total-chem").textContent = `${finalChem} / 100`;

    // Comprobar si el draft está completo (11 titulares + 6 suplentes + 4 reservas = 21 jugadores)
    const btnPlayMatch = document.getElementById("btn-play-match");
    if (allPicked.length === 21) {
        if (btnPlayMatch) {
            btnPlayMatch.style.display = "inline-flex";
        }
        if (btnFinish) {
            btnFinish.style.display = "inline-flex";
            const coinsEst = calculateDraftReward(avgRating, finalChem);
            btnFinish.textContent = `🏆 Cobrar Recompensa Directa (+${coinsEst.toLocaleString()} 💰)`;
        }
    } else {
        if (btnPlayMatch) btnPlayMatch.style.display = "none";
        if (btnFinish) btnFinish.style.display = "none";
    }
}

// --- CONFIGURACIÓN Y MOTOR DE LOGROS (ACHIEVEMENTS) ---
const ACHIEVEMENTS_CONFIG = [
    {
        id: "ach_all_gold",
        title: "Rey del Oro",
        category: "gold_rare",
        badge: "ORO COMPLETO",
        badgeBg: "#fbbf24",
        badgeColor: "#000",
        icon: "👑",
        desc: "Colecciona todos los jugadores Oro Único (Rating 75+) del juego.",
        rewardCoins: 250000,
        rewardPack: {
            id: "pack_gold_master",
            name: "Mega Sobre Oro Maestro",
            color: "#fbbf24",
            description: "¡Recompensa por completar todos los Oros! Garantiza cartas top y Walkouts.",
            cardsCount: 9,
            source: "Logro: Rey del Oro",
            weights: { bronze: 0, silver: 0, gold_rare: 0.65, totw: 0.22, hero: 0.08, icon: 0.05 }
        }
    },
    {
        id: "ach_all_silver",
        title: "Maestro de Plata",
        category: "silver",
        badge: "PLATA COMPLETO",
        badgeBg: "#94a3b8",
        badgeColor: "#000",
        icon: "🥈",
        desc: "Colecciona todos los jugadores Plata del juego.",
        rewardCoins: 150000,
        rewardPack: {
            id: "pack_silver_master",
            name: "Sobre Especial Plata Élite",
            color: "#cbd5e1",
            description: "¡Recompensa por completar todos los Platas! Contiene cartas premium.",
            cardsCount: 9,
            source: "Logro: Maestro de Plata",
            weights: { bronze: 0, silver: 0.15, gold_rare: 0.6, totw: 0.18, hero: 0.05, icon: 0.02 }
        }
    },
    {
        id: "ach_all_bronze",
        title: "Coleccionista de Bronce",
        category: "bronze",
        badge: "BRONCE COMPLETO",
        badgeBg: "#d97706",
        badgeColor: "#fff",
        icon: "🥉",
        desc: "Colecciona todos los jugadores Bronce del juego.",
        rewardCoins: 100000,
        rewardPack: {
            id: "pack_bronze_master",
            name: "Sobre Homenaje al Bronce",
            color: "#d97706",
            description: "¡Recompensa por completar todos los Bronces! Gran recompensa de cartas doradas.",
            cardsCount: 9,
            source: "Logro: Coleccionista de Bronce",
            weights: { bronze: 0.1, silver: 0.2, gold_rare: 0.55, totw: 0.12, hero: 0.02, icon: 0.01 }
        }
    },
    {
        id: "ach_all_totw",
        title: "Equipo de la Semana",
        category: "totw",
        badge: "TOTW COMPLETO",
        badgeBg: "#1e293b",
        badgeColor: "#fbbf24",
        icon: "⚡",
        desc: "Colecciona todas las cartas TOTW (In-Form) de la temporada.",
        rewardCoins: 350000,
        rewardPack: {
            id: "pack_totw_guaranteed",
            name: "Sobre TOTW Asegurado",
            color: "#1e293b",
            description: "¡Recompensa por completar todos los TOTW! Garantiza cartas en forma de élite.",
            cardsCount: 9,
            source: "Logro: Equipo de la Semana",
            weights: { bronze: 0, silver: 0, gold_rare: 0.45, totw: 0.45, hero: 0.07, icon: 0.03 }
        }
    },
    {
        id: "ach_all_icons",
        title: "Salón de la Fama",
        category: "icon",
        badge: "ICONOS COMPLETO",
        badgeBg: "#fef08a",
        badgeColor: "#713f12",
        icon: "🏛️",
        desc: "Colecciona todas las cartas de Iconos legendarios de la historia del fútbol.",
        rewardCoins: 1000000,
        rewardPack: {
            id: "pack_icon_master",
            name: "Sobre Icono Divino",
            color: "#fef08a",
            description: "¡Recompensa máxima por reunir todas las leyendas del fútbol!",
            cardsCount: 5,
            source: "Logro: Salón de la Fama",
            weights: { bronze: 0, silver: 0, gold_rare: 0.1, totw: 0.2, hero: 0.3, icon: 0.4 }
        }
    },
    {
        id: "ach_all_heroes",
        title: "Leyendas Heroicas",
        category: "hero",
        badge: "HÉROES COMPLETO",
        badgeBg: "#f472b6",
        badgeColor: "#831843",
        icon: "🦸‍♂️",
        desc: "Colecciona todos los Héroes FUT del juego.",
        rewardCoins: 500000,
        rewardPack: {
            id: "pack_hero_master",
            name: "Sobre Héroe Definitivo",
            color: "#f472b6",
            description: "¡Recompensa por reunir a todos los héroes del fútbol!",
            cardsCount: 7,
            source: "Logro: Leyendas Heroicas",
            weights: { bronze: 0, silver: 0, gold_rare: 0.3, totw: 0.25, hero: 0.35, icon: 0.1 }
        }
    }
];

function renderRewards() {
    const container = document.getElementById("rewards-list");
    if (!container) return;
    container.innerHTML = "";

    // Contar totales en PLAYERS_DB por categoría y cuántas tiene el jugador en gameState.club
    const categoryTotals = {};
    const categoryOwned = {};

    PLAYERS_DB.forEach(player => {
        const cat = player.cardType;
        categoryTotals[cat] = (categoryTotals[cat] || 0) + 1;
        if (gameState.club[player.id]) {
            categoryOwned[cat] = (categoryOwned[cat] || 0) + 1;
        }
    });

    if (!gameState.claimedAchievements) gameState.claimedAchievements = {};

    ACHIEVEMENTS_CONFIG.forEach(ach => {
        const total = categoryTotals[ach.category] || 0;
        const owned = categoryOwned[ach.category] || 0;
        const pct = total > 0 ? Math.min(100, Math.round((owned / total) * 100)) : 0;
        const isCompleted = owned >= total && total > 0;
        const isClaimed = !!gameState.claimedAchievements[ach.id];

        const card = document.createElement("div");
        card.className = `achievement-card ${isClaimed ? 'claimed' : (isCompleted ? 'completed' : '')}`;

        let actionBtnText = "En progreso...";
        let btnDisabled = true;

        if (isClaimed) {
            actionBtnText = "¡Reclamado! ✓";
            btnDisabled = true;
        } else if (isCompleted) {
            actionBtnText = "¡Reclamar Recompensa! 🎁";
            btnDisabled = false;
        }

        card.innerHTML = `
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-info">
                <div class="achievement-header">
                    <div class="achievement-title">${ach.title}</div>
                    <span class="achievement-badge" style="background: ${ach.badgeBg}; color: ${ach.badgeColor}">
                        ${ach.badge}
                    </span>
                </div>
                <div class="achievement-desc">${ach.desc}</div>
                <div class="achievement-progress-bar">
                    <div class="achievement-progress-fill" style="width: ${pct}%;"></div>
                </div>
                <div class="achievement-progress-text">
                    <span>Progreso: ${owned.toLocaleString()} / ${total.toLocaleString()} cartas</span>
                    <span>${pct}%</span>
                </div>
            </div>
            <div class="achievement-action">
                <span class="achievement-reward-tag">+💰 ${ach.rewardCoins.toLocaleString()}</span>
                <span class="achievement-reward-tag" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(56, 189, 248, 0.1);">+1 Sobre Especial 📦</span>
                <button class="btn-claim-achievement" ${btnDisabled ? 'disabled' : ''} data-ach-id="${ach.id}">
                    ${actionBtnText}
                </button>
            </div>
        `;

        if (isCompleted && !isClaimed) {
            card.querySelector(".btn-claim-achievement").addEventListener("click", () => {
                claimAchievementReward(ach);
            });
        }

        container.appendChild(card);
    });
}

function claimAchievementReward(ach) {
    if (!gameState.claimedAchievements) gameState.claimedAchievements = {};
    if (gameState.claimedAchievements[ach.id]) return;

    gameState.claimedAchievements[ach.id] = true;
    gameState.coins += ach.rewardCoins;

    if (!Array.isArray(gameState.myPacks)) gameState.myPacks = [];
    gameState.myPacks.push({
        id: `pack_${ach.id}_${Date.now()}`,
        name: ach.rewardPack.name,
        color: ach.rewardPack.color,
        description: ach.rewardPack.description,
        source: ach.rewardPack.source,
        cardsCount: ach.rewardPack.cardsCount,
        weights: ach.rewardPack.weights
    });

    SoundFX.playCardBurst();
    saveState();
    updateHeaderUI();
    renderRewards();

    alert(`🎉 ¡ENHORABUENA!\n\nHas completado el logro "${ach.title}".\n\nRecompensas recibidas:\n💰 +${ach.rewardCoins.toLocaleString()} Monedas\n📦 1x ${ach.rewardPack.name} (¡Guardado en "Tus Sobres"!)`);
}

// ===================================================
// MOTOR DE SQUAD BUILDING CHALLENGES (SBC)
// ===================================================

const SBC_CONFIG = [
    {
        id: "sbc_icon_upgrade",
        title: "Mejora de Icono Asegurado",
        icon: "👑",
        desc: "Entrega una plantilla de élite usando exclusivamente cartas repetidas para ganar 1 Sobre Legendario de Iconos & Héroes 100% asegurado.",
        badge: "RECOMPENSA ICONO",
        formation: "4-3-3",
        reward: {
            type: "pack",
            packRef: "pack_icon_legends",
            name: "Sobre Iconos & Héroes",
            color: "#ec4899",
            description: "Sobre legendario exclusivo ganado en SBC. ¡Garantiza 1 Icono o Héroe!",
            cardsCount: 5,
            weights: { bronze: 0.0, silver: 0.0, gold_rare: 0.35, totw: 0.25, hero: 0.25, icon: 0.15 }
        },
        positions: [
            { id: "p0", name: "POR", x: 50, y: 88, group: "POR" },
            { id: "p1", name: "LI",  x: 18, y: 72, group: "DEF" },
            { id: "p2", name: "DFC", x: 38, y: 74, group: "DEF" },
            { id: "p3", name: "DFC", x: 62, y: 74, group: "DEF" },
            { id: "p4", name: "LD",  x: 82, y: 72, group: "DEF" },
            { id: "p5", name: "MC",  x: 30, y: 50, group: "MED" },
            { id: "p6", name: "MC",  x: 50, y: 46, group: "MED" },
            { id: "p7", name: "MC",  x: 70, y: 50, group: "MED" },
            { id: "p8", name: "EI",  x: 20, y: 22, group: "DEL" },
            { id: "p9", name: "DC",  x: 50, y: 18, group: "DEL" },
            { id: "p10", name: "ED", x: 80, y: 22, group: "DEL" }
        ],
        links: [
            [0, 2], [0, 3],
            [1, 2], [2, 3], [3, 4],
            [1, 5], [4, 7],
            [2, 6], [3, 6],
            [5, 6], [6, 7],
            [5, 8], [7, 10],
            [6, 9],
            [8, 9], [9, 10]
        ],
        requirements: [
            {
                id: "req_full_squad",
                label: "Jugadores en la plantilla: Exactamente 11",
                check: (squad) => squad.filter(Boolean).length === 11
            },
            {
                id: "req_min_rating",
                label: "Valoración media de plantilla: Mínimo 84",
                check: (squad) => {
                    const filled = squad.filter(Boolean);
                    if (filled.length < 11) return false;
                    const avg = Math.round(filled.reduce((acc, p) => acc + p.rating, 0) / 11);
                    return avg >= 84;
                }
            },
            {
                id: "req_special_card",
                label: "Jugadores TOTW / Especiales: Mínimo 1",
                check: (squad) => squad.filter(p => p && ["totw", "hero", "icon"].includes(p.cardType)).length >= 1
            },
            {
                id: "req_gold_count",
                label: "Jugadores Oro Único o superior: Mínimo 9",
                check: (squad) => squad.filter(p => p && (p.cardType === "gold_rare" || p.rating >= 75)).length >= 9
            }
        ]
    },
    {
        id: "sbc_totw_upgrade",
        title: "Mejora de TOTW Garantizado",
        icon: "⚡",
        desc: "Entrega un once titular balanceado de jugadores repetidos para recibir un Sobre Oro Premium con alta probabilidad de TOTW y 50.000 Monedas.",
        badge: "SOBRE + MONEDAS",
        formation: "4-4-2",
        reward: {
            type: "pack_and_coins",
            coins: 50000,
            packRef: "pack_mega_top",
            name: "Mega Sobre Top Players",
            color: "#8b5cf6",
            description: "Ganado en el SBC de Mejora TOTW. 9 cartas Oro Único con Walkout 86+.",
            cardsCount: 9,
            weights: { bronze: 0.0, silver: 0.0, gold_rare: 0.73, totw: 0.18, hero: 0.06, icon: 0.03 }
        },
        positions: [
            { id: "p0", name: "POR", x: 50, y: 88, group: "POR" },
            { id: "p1", name: "LI",  x: 18, y: 72, group: "DEF" },
            { id: "p2", name: "DFC", x: 38, y: 74, group: "DEF" },
            { id: "p3", name: "DFC", x: 62, y: 74, group: "DEF" },
            { id: "p4", name: "LD",  x: 82, y: 72, group: "DEF" },
            { id: "p5", name: "MI",  x: 18, y: 44, group: "MED" },
            { id: "p6", name: "MC",  x: 40, y: 46, group: "MED" },
            { id: "p7", name: "MC",  x: 60, y: 46, group: "MED" },
            { id: "p8", name: "MD",  x: 82, y: 44, group: "MED" },
            { id: "p9", name: "DC",  x: 38, y: 20, group: "DEL" },
            { id: "p10", name: "DC", x: 62, y: 20, group: "DEL" }
        ],
        links: [
            [0, 2], [0, 3],
            [1, 2], [2, 3], [3, 4],
            [1, 5], [4, 8],
            [2, 6], [3, 7],
            [5, 6], [6, 7], [7, 8],
            [5, 9], [8, 10],
            [6, 9], [7, 10],
            [9, 10]
        ],
        requirements: [
            {
                id: "req_full_squad_totw",
                label: "Jugadores en la plantilla: Exactamente 11",
                check: (squad) => squad.filter(Boolean).length === 11
            },
            {
                id: "req_min_rating_totw",
                label: "Valoración media de plantilla: Mínimo 82",
                check: (squad) => {
                    const filled = squad.filter(Boolean);
                    if (filled.length < 11) return false;
                    const avg = Math.round(filled.reduce((acc, p) => acc + p.rating, 0) / 11);
                    return avg >= 82;
                }
            },
            {
                id: "req_min_chem_totw",
                label: "Química clásica de equipo: Mínimo 60 / 100",
                check: (squad) => calculateSBCSquadChem(squad) >= 60
            }
        ]
    },
    {
        id: "sbc_special_player_pedri",
        title: "Pedri González Especial TOTW",
        icon: "🌟",
        desc: "Entrega un mediocampo técnico y defensa de repetidas para desbloquear la carta oficial TOTW de Pedri con 88 de valoración directa a tu Club.",
        badge: "JUGADOR ESPECIAL",
        formation: "4-3-3",
        reward: {
            type: "player",
            playerId: "237692", // Pedri
            fallbackName: "Pedri TOTW 88",
            coins: 30000
        },
        positions: [
            { id: "p0", name: "POR", x: 50, y: 88, group: "POR" },
            { id: "p1", name: "LI",  x: 18, y: 72, group: "DEF" },
            { id: "p2", name: "DFC", x: 38, y: 74, group: "DEF" },
            { id: "p3", name: "DFC", x: 62, y: 74, group: "DEF" },
            { id: "p4", name: "LD",  x: 82, y: 72, group: "DEF" },
            { id: "p5", name: "MC",  x: 30, y: 50, group: "MED" },
            { id: "p6", name: "MC",  x: 50, y: 46, group: "MED" },
            { id: "p7", name: "MC",  x: 70, y: 50, group: "MED" },
            { id: "p8", name: "EI",  x: 20, y: 22, group: "DEL" },
            { id: "p9", name: "DC",  x: 50, y: 18, group: "DEL" },
            { id: "p10", name: "ED", x: 80, y: 22, group: "DEL" }
        ],
        links: [
            [0, 2], [0, 3],
            [1, 2], [2, 3], [3, 4],
            [1, 5], [4, 7],
            [2, 6], [3, 6],
            [5, 6], [6, 7],
            [5, 8], [7, 10],
            [6, 9],
            [8, 9], [9, 10]
        ],
        requirements: [
            {
                id: "req_pedri_full",
                label: "Jugadores en la plantilla: Exactamente 11",
                check: (squad) => squad.filter(Boolean).length === 11
            },
            {
                id: "req_pedri_rating",
                label: "Media de plantilla: Mínimo 83",
                check: (squad) => {
                    const filled = squad.filter(Boolean);
                    if (filled.length < 11) return false;
                    const avg = Math.round(filled.reduce((acc, p) => acc + p.rating, 0) / 11);
                    return avg >= 83;
                }
            },
            {
                id: "req_pedri_spanish",
                label: "Jugadores de España: Mínimo 2",
                check: (squad) => squad.filter(p => p && p.nation && p.nation.code === "es").length >= 2
            }
        ]
    }
];

let sbcActiveChallenge = null;
let sbcCurrentSquad = []; // Array de 11 slots con objetos player o null
let sbcActiveSlotIndex = -1;

function initSBC() {
    renderSBCChallengesList();
    setupSBCModalEvents();
}

function renderSBCChallengesList() {
    const listView = document.getElementById("sbc-list-view");
    const builderView = document.getElementById("sbc-builder-view");
    const container = document.getElementById("sbc-challenges-container");

    if (listView) listView.style.display = "block";
    if (builderView) builderView.style.display = "none";
    if (!container) return;

    container.innerHTML = "";

    if (!gameState.completedSBCs) gameState.completedSBCs = {};

    SBC_CONFIG.forEach(challenge => {
        const isCompleted = !!gameState.completedSBCs[challenge.id];
        const card = document.createElement("div");
        card.className = `sbc-card ${isCompleted ? 'completed' : ''}`;

        let rewardText = "🎁 Sobre Especial";
        if (challenge.reward.type === "pack") {
            rewardText = `🎁 ${challenge.reward.name}`;
        } else if (challenge.reward.type === "pack_and_coins") {
            rewardText = `🎁 ${challenge.reward.name} + ${challenge.reward.coins.toLocaleString()} 💰`;
        } else if (challenge.reward.type === "player") {
            rewardText = `⭐ Carta Especial + ${challenge.reward.coins.toLocaleString()} 💰`;
        }

        card.innerHTML = `
            <div class="sbc-card-badge">${isCompleted ? '✓ COMPLETADO' : challenge.badge}</div>
            <div>
                <div class="sbc-card-icon">${challenge.icon}</div>
                <div class="sbc-card-title">${challenge.title}</div>
                <div class="sbc-card-desc">${challenge.desc}</div>
            </div>

            <div>
                <div class="sbc-card-reward-box">
                    <span class="r-icon">🎁</span>
                    <div class="r-info">
                        <div class="r-label">Recompensa al Enviar</div>
                        <div class="r-name">${rewardText}</div>
                    </div>
                </div>

                <button class="btn-summary ${isCompleted ? 'secondary' : 'primary'}" style="width: 100%; justify-content: center;">
                    ${isCompleted ? '🔄 Reabrir Desafío' : '⚡ Desafío SBC'}
                </button>
            </div>
        `;

        card.querySelector("button").addEventListener("click", () => {
            openSBCChallenge(challenge);
        });

        container.appendChild(card);
    });
}

function openSBCChallenge(challenge) {
    sbcActiveChallenge = challenge;
    sbcCurrentSquad = new Array(challenge.positions.length).fill(null);

    const listView = document.getElementById("sbc-list-view");
    const builderView = document.getElementById("sbc-builder-view");
    if (listView) listView.style.display = "none";
    if (builderView) builderView.style.display = "block";

    document.getElementById("sbc-active-title").textContent = `DESAFÍO: ${challenge.title.toUpperCase()}`;
    document.getElementById("sbc-active-desc").textContent = challenge.desc;
    
    let rewardLabel = "🎁 Sobre Especial";
    if (challenge.reward.name) rewardLabel = `🎁 ${challenge.reward.name}`;
    document.getElementById("sbc-active-reward-badge").textContent = rewardLabel;

    renderSBCPitch();
    updateSBCRequirementsUI();
}

function renderSBCPitch() {
    const slotsLayer = document.getElementById("sbc-pitch-slots");
    if (!slotsLayer || !sbcActiveChallenge) return;
    slotsLayer.innerHTML = "";

    sbcActiveChallenge.positions.forEach((pos, idx) => {
        const player = sbcCurrentSquad[idx];
        const slotEl = document.createElement("div");
        slotEl.className = "pitch-slot-node";
        slotEl.style.left = `${pos.x}%`;
        slotEl.style.top = `${pos.y}%`;

        if (!player) {
            // Slot Vacío
            slotEl.innerHTML = `
                <div class="draft-slot draft-slot-empty">
                    <div class="plus-icon">＋</div>
                    <div class="pos-badge">${pos.name}</div>
                    <div class="tap-hint">Elegir Repetida</div>
                </div>
            `;
            slotEl.querySelector(".draft-slot").addEventListener("click", () => {
                openSBCDuplicatePicker(idx, pos);
            });
        } else {
            // Slot Ocupado por carta repetida
            const faceUrl = getPlayerFaceUrl(player);
            slotEl.innerHTML = `
                <div class="draft-slot draft-slot-filled">
                    <img class="draft-slot-face" src="${faceUrl}" alt="${player.name}" onerror="handleFaceImgError(this, window.PLAYERS_BY_ID ? window.PLAYERS_BY_ID['${player.id}'] : null);">
                    <div class="draft-slot-top-badge">
                        <span class="r-val">${player.rating}</span>
                        <span class="p-val">${player.pos}</span>
                    </div>
                    <div class="draft-slot-info-bar">
                        <span class="p-name">${player.name}</span>
                        <span class="p-team" style="color: #fbbf24;">(Repetida)</span>
                    </div>
                    <button class="sbc-slot-remove-btn" title="Quitar jugador">✕</button>
                </div>
            `;

            slotEl.querySelector(".sbc-slot-remove-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                sbcCurrentSquad[idx] = null;
                SoundFX.playClick();
                renderSBCPitch();
                updateSBCRequirementsUI();
            });

            slotEl.querySelector(".draft-slot").addEventListener("click", () => {
                openSBCDuplicatePicker(idx, pos);
            });
        }

        slotsLayer.appendChild(slotEl);
    });

    // Renderizar líneas de química clásicas SVG (verde/amarillo/rojo) para el SBC
    const challenge = sbcActiveChallenge;
    if (challenge && challenge.positions && challenge.links) {
        renderPitchChemLines("sbc-chem-svg", challenge.positions, challenge.links, sbcCurrentSquad);
    }
}

// Cálculo de química específico para plantilla de SBC (Clásica 0 a 100)
function calculateSBCSquadChem(squad) {
    if (!sbcActiveChallenge) return 0;
    return calculateClassicSquadChem(sbcActiveChallenge.positions, sbcActiveChallenge.links, squad);
}

function updateSBCRequirementsUI() {
    if (!sbcActiveChallenge) return;

    const list = document.getElementById("sbc-reqs-list");
    const statusText = document.getElementById("sbc-reqs-status");
    const submitBtn = document.getElementById("btn-submit-sbc");
    const currentRatingEl = document.getElementById("sbc-current-rating");
    const currentChemEl = document.getElementById("sbc-current-chem");

    if (!list) return;
    list.innerHTML = "";

    const filled = sbcCurrentSquad.filter(Boolean);
    const avgRating = filled.length > 0 
        ? Math.round(filled.reduce((acc, p) => acc + p.rating, 0) / filled.length) 
        : 0;
    const totalChem = calculateSBCSquadChem(sbcCurrentSquad);

    currentRatingEl.textContent = avgRating;
    currentChemEl.textContent = `${totalChem} / 100`;

    let metCount = 0;
    const totalReqs = sbcActiveChallenge.requirements.length;

    sbcActiveChallenge.requirements.forEach(req => {
        const isMet = req.check(sbcCurrentSquad);
        if (isMet) metCount++;

        const item = document.createElement("div");
        item.className = `sbc-req-item ${isMet ? 'met' : ''}`;
        item.innerHTML = `
            <span class="req-label">${req.label}</span>
            <span class="req-badge">${isMet ? '✓ CUMPLIDO' : '✗ PENDIENTE'}</span>
        `;
        list.appendChild(item);
    });

    statusText.textContent = `${metCount} / ${totalReqs} cumplidos`;

    const allMet = metCount === totalReqs && filled.length === sbcActiveChallenge.positions.length;
    if (submitBtn) {
        submitBtn.disabled = !allMet;
        if (allMet) {
            submitBtn.textContent = "🚀 ¡Entregar Plantilla y Reclamar Recompensa!";
            submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
            submitBtn.style.boxShadow = "0 4px 18px rgba(16, 185, 129, 0.4)";
        } else {
            submitBtn.textContent = `🔒 Requisitos Incompletos (${metCount}/${totalReqs})`;
            submitBtn.style.background = "";
            submitBtn.style.boxShadow = "";
        }
    }
}

// Selector modal exclusivo para cartas repetidas
function openSBCDuplicatePicker(slotIndex, posInfo) {
    sbcActiveSlotIndex = slotIndex;
    const modal = document.getElementById("sbc-pick-modal");
    const title = document.getElementById("sbc-pick-title");
    const subtitle = document.getElementById("sbc-pick-subtitle");
    const grid = document.getElementById("sbc-dups-selection-grid");

    title.textContent = `SELECCIONAR REPETIDA PARA ${posInfo.name}`;
    subtitle.textContent = `Posición sugerida: ${posInfo.name} (${posInfo.group}). Solo puedes entregar cartas repetidas.`;

    renderSBCDuplicatesSelection(posInfo);
    modal.classList.add("active");
    SoundFX.playClick();
}

function renderSBCDuplicatesSelection(posInfo) {
    const grid = document.getElementById("sbc-dups-selection-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const searchQuery = (document.getElementById("sbc-dup-search") ? document.getElementById("sbc-dup-search").value : "").trim().toLowerCase();
    const sourceFilter = document.getElementById("sbc-source-filter") ? document.getElementById("sbc-source-filter").value : "all_club";
    const posFilter = document.getElementById("sbc-dup-pos-filter") ? document.getElementById("sbc-dup-pos-filter").value : "all";
    const rarityFilter = document.getElementById("sbc-dup-rarity-filter") ? document.getElementById("sbc-dup-rarity-filter").value : "all";

    // Registrar IDs de cartas ya asignadas en otros slots del SBC actual
    const usedIdsInSBC = {};
    sbcCurrentSquad.forEach((p, idx) => {
        if (p && idx !== sbcActiveSlotIndex) {
            usedIdsInSBC[p.id] = (usedIdsInSBC[p.id] || 0) + 1;
        }
    });

    let candidatePlayers = [];

    if (sourceFilter === "dups_only") {
        // Solo cartas de la pila de repetidas
        const dupPlayerIds = Object.keys(gameState.duplicates || {}).filter(id => {
            const totalDups = gameState.duplicates[id] || 0;
            const alreadyUsed = usedIdsInSBC[id] || 0;
            return (totalDups - alreadyUsed) > 0;
        });

        candidatePlayers = dupPlayerIds.map(id => {
            return (window.PLAYERS_BY_ID && window.PLAYERS_BY_ID[id]) || PLAYERS_DB.find(p => String(p.id) === String(id));
        }).filter(Boolean);
    } else {
        // Todas las cartas disponibles del Club (repetidas + cartas del club no usadas aún en el SBC)
        const allIdsSet = new Set([
            ...Object.keys(gameState.club || {}),
            ...Object.keys(gameState.duplicates || {})
        ]);

        candidatePlayers = Array.from(allIdsSet).map(id => {
            const totalOwned = (gameState.club[id] ? 1 : 0) + (gameState.duplicates[id] || 0);
            const alreadyUsed = usedIdsInSBC[id] || 0;
            if (totalOwned - alreadyUsed > 0) {
                return (window.PLAYERS_BY_ID && window.PLAYERS_BY_ID[id]) || PLAYERS_DB.find(p => String(p.id) === String(id));
            }
            return null;
        }).filter(Boolean);

        // Si el usuario aún tiene muy pocas cartas en el club, le permitimos explorar de la base de datos para no bloquearlo
        if (candidatePlayers.length === 0 && Object.keys(gameState.club || {}).length === 0) {
            candidatePlayers = PLAYERS_DB.slice(0, 150);
        }
    }

    if (candidatePlayers.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <h3>No hay cartas disponibles con estos filtros</h3>
                <p>Cambia el filtro de fuente o abre sobres en la Tienda para conseguir más cartas.</p>
            </div>
        `;
        return;
    }

    // Filtros
    if (searchQuery) {
        candidatePlayers = candidatePlayers.filter(p => {
            return (p.name && p.name.toLowerCase().includes(searchQuery)) ||
                   (p.fullName && p.fullName.toLowerCase().includes(searchQuery)) ||
                   (p.club && p.club.name && p.club.name.toLowerCase().includes(searchQuery));
        });
    }

    if (rarityFilter !== "all") {
        candidatePlayers = candidatePlayers.filter(p => p.cardType === rarityFilter);
    }

    if (posFilter === "matching" && posInfo) {
        candidatePlayers = candidatePlayers.filter(p => {
            if (posInfo.group === "POR") return p.pos === "POR" || p.pos === "GK";
            if (posInfo.group === "DEF") return ["DFC", "LI", "LD", "CB", "LB", "RB", "CAD", "CAI", "LWB", "RWB"].includes(p.pos);
            if (posInfo.group === "MED") return ["MC", "MCD", "MCO", "MI", "MD", "CM", "CDM", "CAM", "LM", "RM"].includes(p.pos);
            if (posInfo.group === "DEL") return ["DEL", "DC", "EI", "ED", "ST", "CF", "LW", "RW"].includes(p.pos);
            return true;
        });
    } else if (posFilter !== "all") {
        candidatePlayers = candidatePlayers.filter(p => {
            if (posFilter === "POR") return p.pos === "POR" || p.pos === "GK";
            if (posFilter === "DEF") return ["DFC", "LI", "LD", "CB", "LB", "RB", "CAD", "CAI", "LWB", "RWB"].includes(p.pos);
            if (posFilter === "MED") return ["MC", "MCD", "MCO", "MI", "MD", "CM", "CDM", "CAM", "LM", "RM"].includes(p.pos);
            if (posFilter === "DEL") return ["DEL", "DC", "EI", "ED", "ST", "CF", "LW", "RW"].includes(p.pos);
            return true;
        });
    }

    // Ordenar por rating descendente
    candidatePlayers.sort((a, b) => b.rating - a.rating);

    candidatePlayers.forEach(player => {
        const totalDups = gameState.duplicates[player.id] || 0;
        const inClub = gameState.club[player.id] ? 1 : 0;
        const totalOwned = totalDups + inClub;
        const alreadyUsed = usedIdsInSBC[player.id] || 0;
        const availableCount = Math.max(1, totalOwned - alreadyUsed);

        const slot = document.createElement("div");
        slot.className = "sbc-dup-card-slot";
        slot.innerHTML = `
            <div class="sbc-dup-count-tag">${totalDups > 0 ? `Rep. x${totalDups}` : `Club`}</div>
            <img class="sbc-dup-face" src="${getPlayerFaceUrl(player)}" alt="${player.name}" onerror="handleFaceImgError(this, window.PLAYERS_BY_ID ? window.PLAYERS_BY_ID['${player.id}'] : null);">
            <div class="sbc-dup-info">
                <div class="sbc-dup-name">${player.name}</div>
                <div class="sbc-dup-meta">${player.rating} • ${player.pos}</div>
            </div>
        `;

        slot.addEventListener("click", () => {
            selectSBCDuplicate(player);
        });

        grid.appendChild(slot);
    });
}

function selectSBCDuplicate(player) {
    if (sbcActiveSlotIndex < 0) return;
    sbcCurrentSquad[sbcActiveSlotIndex] = player;
    SoundFX.playCardBurst();

    document.getElementById("sbc-pick-modal").classList.remove("active");
    renderSBCPitch();
    updateSBCRequirementsUI();
}

function submitSBCChallenge() {
    if (!sbcActiveChallenge) return;

    // Doble validación de requisitos
    const metAll = sbcActiveChallenge.requirements.every(req => req.check(sbcCurrentSquad));
    if (!metAll) {
        alert("⚠️ Tu plantilla aún no cumple todos los requisitos solicitados para este desafío.");
        return;
    }

    if (!confirm(`¿Confirmas que deseas enviar esta plantilla para el desafío "${sbcActiveChallenge.title}"?\n\n¡Las cartas repetidas utilizadas se consumirán de forma permanente a cambio de la recompensa!`)) {
        return;
    }

    // Consumir las cartas utilizadas (primero de repetidas si existen, sino del club)
    sbcCurrentSquad.forEach(player => {
        if (!player) return;
        const currentDupCount = gameState.duplicates[player.id] || 0;
        if (currentDupCount > 1) {
            gameState.duplicates[player.id] = currentDupCount - 1;
        } else if (currentDupCount === 1) {
            delete gameState.duplicates[player.id];
        } else if (gameState.club[player.id]) {
            delete gameState.club[player.id];
        }
    });

    // Entregar recompensa
    if (!gameState.completedSBCs) gameState.completedSBCs = {};
    gameState.completedSBCs[sbcActiveChallenge.id] = true;

    const reward = sbcActiveChallenge.reward;
    let rewardMsg = "";

    if (reward.type === "pack") {
        if (!Array.isArray(gameState.myPacks)) gameState.myPacks = [];
        gameState.myPacks.push({
            id: `pack_sbc_${Date.now()}`,
            name: reward.name,
            color: reward.color || "#ec4899",
            description: reward.description,
            source: `Desafío SBC: ${sbcActiveChallenge.title}`,
            cardsCount: reward.cardsCount || 5,
            weights: reward.weights
        });
        rewardMsg = `¡Has recibido 1x ${reward.name}! (Disponible en la pestaña 'Sobres -> Tus Sobres').`;

    } else if (reward.type === "pack_and_coins") {
        if (!Array.isArray(gameState.myPacks)) gameState.myPacks = [];
        gameState.myPacks.push({
            id: `pack_sbc_${Date.now()}`,
            name: reward.name,
            color: reward.color || "#8b5cf6",
            description: reward.description,
            source: `Desafío SBC: ${sbcActiveChallenge.title}`,
            cardsCount: reward.cardsCount || 9,
            weights: reward.weights
        });
        gameState.coins += (reward.coins || 0);
        rewardMsg = `¡Has recibido 1x ${reward.name} y +${reward.coins.toLocaleString()} monedas!`;

    } else if (reward.type === "player") {
        // Otorgar jugador a la colección del club
        const targetPlayer = (window.PLAYERS_BY_ID && window.PLAYERS_BY_ID[reward.playerId]) || PLAYERS_DB.find(p => String(p.id) === String(reward.playerId));
        if (targetPlayer) {
            gameState.club[targetPlayer.id] = true;
        }
        if (reward.coins) gameState.coins += reward.coins;
        rewardMsg = `¡Carta especial ${targetPlayer ? targetPlayer.name : reward.fallbackName} añadida a tu Club y +${(reward.coins || 0).toLocaleString()} monedas!`;
    }

    SoundFX.playCardBurst();
    saveState();
    updateHeaderUI();

    alert(`🎉 ¡DESAFÍO COMPLETADO CON ÉXITO!\n\n${rewardMsg}`);

    // Regresar al listado de SBCs
    renderSBCChallengesList();
}

function setupSBCModalEvents() {
    const btnBack = document.getElementById("btn-sbc-back");
    const btnSubmit = document.getElementById("btn-submit-sbc");
    const btnClear = document.getElementById("btn-clear-sbc");
    const btnClosePick = document.getElementById("btn-close-sbc-pick");
    const sbcPickModal = document.getElementById("sbc-pick-modal");

    if (btnBack) {
        btnBack.onclick = () => {
            renderSBCChallengesList();
        };
    }

    if (btnSubmit) {
        btnSubmit.onclick = () => {
            submitSBCChallenge();
        };
    }

    if (btnClear) {
        btnClear.onclick = () => {
            if (confirm("¿Vaciar todas las cartas colocadas en la plantilla actual?")) {
                if (sbcActiveChallenge) {
                    sbcCurrentSquad = new Array(sbcActiveChallenge.positions.length).fill(null);
                    renderSBCPitch();
                    updateSBCRequirementsUI();
                }
            }
        };
    }

    if (btnClosePick && sbcPickModal) {
        btnClosePick.onclick = () => {
            sbcPickModal.classList.remove("active");
        };
    }

    // Buscador y filtros de repetidas y cartas
    const dupSearch = document.getElementById("sbc-dup-search");
    const sourceFilter = document.getElementById("sbc-source-filter");
    const dupPosFilter = document.getElementById("sbc-dup-pos-filter");
    const dupRarityFilter = document.getElementById("sbc-dup-rarity-filter");

    const reFilterDups = () => {
        if (sbcActiveChallenge && sbcActiveSlotIndex >= 0) {
            const posInfo = sbcActiveChallenge.positions[sbcActiveSlotIndex];
            renderSBCDuplicatesSelection(posInfo);
        }
    };

    if (dupSearch) dupSearch.addEventListener("input", reFilterDups);
    if (sourceFilter) sourceFilter.addEventListener("change", reFilterDups);
    if (dupPosFilter) dupPosFilter.addEventListener("change", reFilterDups);
    if (dupRarityFilter) dupRarityFilter.addEventListener("change", reFilterDups);
}

// --- NAVEGACIÓN ENTRE PESTAÑAS ---
function switchTab(tabId) {
    SoundFX.playClick();
    currentTab = tabId;

    // Botón de retorno al menú principal
    const btnGlobalMenu = document.getElementById("btn-global-menu");
    if (btnGlobalMenu) {
        btnGlobalMenu.style.display = (tabId === "home") ? "none" : "inline-flex";
    }

    // Sincronizar pestañas superiores de Pacybits (ONLINE / SINGLE PLAYER / MY CLUB)
    document.querySelectorAll(".pb-top-tab").forEach(tab => {
        const nav = tab.dataset.nav;
        if (tabId === "home") {
            tab.classList.toggle("active", nav === "single_player");
        } else if (tabId === "draft") {
            tab.classList.toggle("active", nav === "online");
        } else if (tabId === "album" || tabId === "duplicates") {
            tab.classList.toggle("active", nav === "my_club");
        } else {
            tab.classList.remove("active");
        }
    });

    document.querySelectorAll(".tab-view").forEach(view => {
        view.classList.toggle("active", view.id === `view-${tabId}`);
    });

    if (tabId === "store") initStore();
    if (tabId === "draft") {
        if (!draftState.formation) {
            renderDraftFormationSelection();
        }
    }
    if (tabId === "album") renderAlbum();
    if (tabId === "duplicates") renderDuplicates();
    if (tabId === "rewards") renderRewards();
    if (tabId === "sbc") initSBC();
}

// --- INICIALIZACIÓN GLOBAL DE EVENTOS ---
document.addEventListener("DOMContentLoaded", async () => {
    // Botón global de volver al Menú
    const btnGlobalMenu = document.getElementById("btn-global-menu");
    if (btnGlobalMenu) {
        btnGlobalMenu.addEventListener("click", () => switchTab("home"));
    }

    // Navegación (para posibles tabs adicionales)
    document.querySelectorAll(".nav-tab").forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
            switchTab(tabBtn.dataset.tab);
        });
    });

    // Filtros de rareza en álbum
    document.querySelectorAll("#rarity-filters .filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            SoundFX.playClick();
            document.querySelectorAll("#rarity-filters .filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeRarityFilter = btn.dataset.rarity;
            albumCurrentPage = 1;
            renderAlbum();
        });
    });

    // Filtro de posición
    document.getElementById("pos-filter").addEventListener("change", (e) => {
        activePosFilter = e.target.value;
        albumCurrentPage = 1;
        renderAlbum();
    });

    // Filtro de estado de colección (todas / en posesión / faltantes)
    const ownershipFilter = document.getElementById("ownership-filter");
    if (ownershipFilter) {
        ownershipFilter.addEventListener("change", (e) => {
            activeOwnershipFilter = e.target.value;
            albumCurrentPage = 1;
            renderAlbum();
        });
    }

    // Buscador
    document.getElementById("album-search").addEventListener("input", (e) => {
        searchQuery = e.target.value;
        albumCurrentPage = 1;
        renderAlbum();
    });

    // Paginación del álbum
    const btnAlbumPrev = document.getElementById("btn-album-prev");
    if (btnAlbumPrev) {
        btnAlbumPrev.addEventListener("click", () => {
            if (albumCurrentPage > 1) {
                albumCurrentPage--;
                SoundFX.playClick();
                renderAlbum();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    const btnAlbumNext = document.getElementById("btn-album-next");
    if (btnAlbumNext) {
        btnAlbumNext.addEventListener("click", () => {
            albumCurrentPage++;
            SoundFX.playClick();
            renderAlbum();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Sonido toggle
    document.getElementById("btn-sound-toggle").addEventListener("click", () => {
        gameState.soundEnabled = !gameState.soundEnabled;
        updateHeaderUI();
        saveState();
    });

    // Modo Oscuro toggle
    const btnThemeToggle = document.getElementById("btn-theme-toggle");
    if (btnThemeToggle) {
        btnThemeToggle.addEventListener("click", () => {
            gameState.darkMode = !gameState.darkMode;
            SoundFX.playClick();
            updateHeaderUI();
            saveState();
        });
    }

    // Inicializar módulo de FUT Draft
    initDraft();

    // Eventos de la barra superior PACYBITS (ONLINE / SINGLE PLAYER / MY CLUB)
    document.querySelectorAll(".pb-top-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".pb-top-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            SoundFX.playClick();
            const nav = tab.dataset.nav;
            if (nav === "single_player") {
                switchTab("home");
            } else if (nav === "my_club") {
                switchTab("album");
            } else if (nav === "online") {
                switchTab("draft");
            }
        });
    });

    // Eventos de las tarjetas interactivas del Home Hub (Pacybits 20)
    const hubDraft = document.getElementById("hub-btn-draft");
    if (hubDraft) hubDraft.addEventListener("click", () => switchTab("draft"));

    const hubStore = document.getElementById("hub-btn-store");
    if (hubStore) hubStore.addEventListener("click", () => switchTab("store"));

    const hubSbc = document.getElementById("hub-btn-sbc");
    if (hubSbc) hubSbc.addEventListener("click", () => switchTab("sbc"));

    const hubVersus = document.getElementById("hub-btn-versus");
    if (hubVersus) hubVersus.addEventListener("click", () => {
        switchTab("draft");
        const btnPlay = document.getElementById("btn-play-match");
        if (btnPlay && btnPlay.style.display !== "none") {
            btnPlay.click();
        }
    });

    const hubStoreLightning = document.getElementById("hub-btn-store-lightning");
    if (hubStoreLightning) hubStoreLightning.addEventListener("click", () => switchTab("store"));

    const hubObjectives = document.getElementById("hub-btn-objectives");
    if (hubObjectives) hubObjectives.addEventListener("click", () => switchTab("rewards"));

    const hubLatest = document.getElementById("hub-btn-latest");
    if (hubLatest) hubLatest.addEventListener("click", () => switchTab("album"));

    const hubClub = document.getElementById("hub-btn-club");
    if (hubClub) hubClub.addEventListener("click", () => switchTab("album"));

    const hubDups = document.getElementById("hub-btn-dups");
    if (hubDups) hubDups.addEventListener("click", () => switchTab("duplicates"));

    const hubRewards = document.getElementById("hub-btn-rewards");
    if (hubRewards) hubRewards.addEventListener("click", () => switchTab("rewards"));

    // Cargar partida y renderizar tienda inicial
    await loadSavedData();
    initStore();
});
