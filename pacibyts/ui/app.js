// ===================================================
// PACYBITS FC 27 - MOTOR PRINCIPAL DE JUEGO (app.js)
// ===================================================

const STATE_KEY = "pacybits_fc27_save_v1";

// Estado global del juego
let gameState = {
    coins: 50000,
    club: {},         // { [cardId]: true }
    duplicates: {},   // { [cardId]: count }
    stats: {
        packsOpened: 0,
        walkouts: 0,
        coinsEarned: 0
    },
    claimedRewards: {},
    soundEnabled: true
};

let currentPackOpened = null;
let currentTab = "store";
let activeRarityFilter = "all";
let activePosFilter = "all";
let searchQuery = "";
let walkoutTimer = null;

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
    
    const totalCardsInDB = PLAYERS_DB.length;
    const collectedCount = Object.keys(gameState.club).length;
    const pct = Math.round((collectedCount / totalCardsInDB) * 100);
    document.getElementById("header-collection").textContent = `${collectedCount} / ${totalCardsInDB} (${pct}%)`;

    // Contador de repetidas en pestaña
    const totalDupsCount = Object.values(gameState.duplicates).reduce((acc, c) => acc + c, 0);
    document.getElementById("nav-dup-badge").textContent = totalDupsCount;

    // Actualizar sonido icon
    document.getElementById("btn-sound-toggle").textContent = gameState.soundEnabled ? "🔊" : "🔇";
}

function getPlayerFaceUrl(player) {
    if (!player) return "";
    return `assets/faces/${player.id}.png`;
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
    if (club.id) {
        return `assets/clubs/${club.id}.png`;
    }
    return "";
}

function getFallbackSvgFace(player) {
    const initials = (player.name || "PB").split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    let skinTone = "#d4a373";
    let hairColor = "#3d2314";
    let jerseyColor = "#1e293b";
    let accentColor = "#fbbf24";

    if (player.cardType === "icon") {
        jerseyColor = "#0f172a";
        accentColor = "#fbbf24";
    } else if (player.cardType === "totw") {
        jerseyColor = "#18181b";
        accentColor = "#f59e0b";
    } else if (player.cardType === "hero") {
        jerseyColor = "#4c1d95";
        accentColor = "#c084fc";
    }

    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
        <defs>
            <linearGradient id="g_${player.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${jerseyColor}" stop-opacity="0.95"/>
                <stop offset="100%" stop-color="#020617" stop-opacity="0.95"/>
            </linearGradient>
            <filter id="f_${player.id}">
                <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.4"/>
            </filter>
        </defs>
        <!-- Body / Jersey -->
        <path d="M 25 180 Q 90 115 155 180 Z" fill="url(#g_${player.id})" filter="url(#f_${player.id})"/>
        <!-- Collar -->
        <path d="M 72 138 Q 90 156 108 138 Q 90 148 72 138 Z" fill="${accentColor}"/>
        <!-- Neck -->
        <rect x="76" y="112" width="28" height="30" rx="6" fill="${skinTone}"/>
        <!-- Head -->
        <ellipse cx="90" cy="85" rx="34" ry="42" fill="${skinTone}" filter="url(#f_${player.id})"/>
        <!-- Hair -->
        <path d="M 56 75 C 56 42 70 32 90 32 C 110 32 124 42 124 75 C 118 64 110 58 90 58 C 70 58 62 64 56 75 Z" fill="${hairColor}"/>
        <!-- Initials Emblem on Chest -->
        <circle cx="90" cy="165" r="14" fill="${accentColor}" stroke="#ffffff" stroke-width="1.5"/>
        <text x="90" y="170" font-family="Arial, sans-serif" font-size="11" font-weight="900" fill="#000000" text-anchor="middle">${initials}</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
}

function renderCardElement(player, options = {}) {
    const {
        isNew = false,
        dupCount = 0,
        isSilhouette = false,
        scale = 1
    } = options;

    const card = document.createElement("div");
    card.className = `fc-card ${player.cardType}`;
    card.dataset.playerId = player.id;
    if (scale !== 1) {
        card.style.transform = `scale(${scale})`;
    }

    if (isSilhouette) {
        card.style.filter = "grayscale(100%) brightness(35%)";
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
            <div class="fc-card-glare"></div>
            
            <div class="card-left-col">
                <div class="card-rating">${player.rating}</div>
                <div class="card-pos">${player.pos}</div>
                <img class="card-nation-flag" src="${flagUrl}" alt="${player.nation.name}" onerror="this.src='https://flagcdn.com/w80/${player.nation.code}.png';">
                ${clubBadgeUrl ? `<img class="card-club-badge" src="${clubBadgeUrl}" alt="${player.club.name}" onerror="this.style.display='none'">` : ''}
            </div>

            <img class="card-player-face" 
                 src="${faceUrl}" 
                 alt="${player.name}" 
                 onerror="if (!this.dataset.triedProxy && '${player.faceUrl || ''}') { this.dataset.triedProxy = 'true'; this.src = '/img-proxy/${player.faceUrl}'; } else { this.onerror = null; this.src = '${getFallbackSvgFace(player)}'; }">

            <div class="card-name-bar">${player.name}</div>

            <div class="card-stats-grid">
                <div class="stat-item"><span class="stat-val">${player.stats.pac}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'DIV' : 'PAC'}</span></div>
                <div class="stat-item"><span class="stat-val">${player.stats.dri}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'REF' : 'DRI'}</span></div>
                <div class="stat-item"><span class="stat-val">${player.stats.sho}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'MAN' : 'SHO'}</span></div>
                <div class="stat-item"><span class="stat-val">${player.stats.def}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'POS' : 'DEF'}</span></div>
                <div class="stat-item"><span class="stat-val">${player.stats.pas}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'KIC' : 'PAS'}</span></div>
                <div class="stat-item"><span class="stat-val">${player.stats.phy}</span> <span class="stat-lbl">${player.pos === 'POR' ? 'SPD' : 'PHY'}</span></div>
            </div>
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

    // Clic para modal de detalle
    card.addEventListener("click", () => {
        if (!isSilhouette) {
            SoundFX.playClick();
            openCardDetailModal(player);
        }
    });

    return card;
}

// --- RENDERIZADO DE LA TIENDA DE SOBRES ---
function initStore() {
    const container = document.getElementById("packs-container");
    container.innerHTML = "";

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

        container.appendChild(packCard);
    });
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

    // Ponderación por calidad de media (rating) según el sobre:
    // - Sobre Gratis: Castigo severo a medias altas (90% de probabilidades de medias bajas < 82)
    // - Sobres Premium/Mega/Iconos: Probabilidad exponencialmente mayor de sacar medias TOP (87+)
    if (packId === "pack_free") {
        // Ponderar inversamente por media (favorece medias bajas)
        candidatePool.sort((a, b) => a.rating - b.rating);
        const index = Math.floor(Math.pow(Math.random(), 2.8) * candidatePool.length);
        return candidatePool[index];
    } else if (packId === "pack_mega_top" || packId === "pack_icon_legends") {
        // Ponderar favorablemente a medias altas (Walkouts 86+)
        candidatePool.sort((a, b) => b.rating - a.rating);
        const index = Math.floor(Math.pow(Math.random(), 2.2) * candidatePool.length);
        return candidatePool[index];
    } else if (packId === "pack_gold_premium") {
        candidatePool.sort((a, b) => b.rating - a.rating);
        const index = Math.floor(Math.pow(Math.random(), 1.6) * candidatePool.length);
        return candidatePool[index];
    }

    return candidatePool[Math.floor(Math.random() * candidatePool.length)];
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

    // Guardar cambios en local y Python
    saveState();

    currentPackOpened = {
        pack: pack,
        cardResults: cardResults,
        topCard: topCard
    };

    // ¿Es Walkout? (86+ de media o Icono/Héroe)
    const isWalkout = topCard.rating >= 86 || topCard.cardType === "icon" || topCard.cardType === "hero";

    if (isWalkout) {
        gameState.stats.walkouts++;
        triggerWalkoutCinematic(topCard, () => {
            showPackSummaryModal();
        });
    } else {
        SoundFX.playPackTear();
        showPackSummaryModal();
    }
}

// --- CINEMÁTICA WALKOUT (ESTILO PACYBITS) ---
function triggerWalkoutCinematic(player, onFinish) {
    const modal = document.getElementById("walkout-modal");
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

    // Limpiar clases previas
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

    // Crear carta gigante
    const walkoutCard = renderCardElement(player, { scale: 1 });
    cardBox.appendChild(walkoutCard);

    modal.classList.add("active");
    SoundFX.playWalkoutBass();

    btnSkip.onclick = () => {
        clearTimeout(walkoutTimer);
        modal.classList.remove("active");
        onFinish();
    };

    // Secuencia temporal de pistas
    // 1. Bandera
    walkoutTimer = setTimeout(() => {
        clueNation.classList.add("show");
        SoundFX.playClick();

        // 2. Posición
        walkoutTimer = setTimeout(() => {
            cluePos.classList.add("show");
            SoundFX.playClick();

            // 3. Club
            walkoutTimer = setTimeout(() => {
                clueClub.classList.add("show");
                SoundFX.playClick();

                // 4. ¡Explosión y Carta al Centro!
                walkoutTimer = setTimeout(() => {
                    SoundFX.playCardBurst();
                    cardBox.classList.add("reveal");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 300);
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

// --- VISTA DE ÁLBUM (MI CLUB) ---
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
        // Búsqueda por texto
        if (query) {
            const matchName = player.name.toLowerCase().includes(query) || player.fullName.toLowerCase().includes(query);
            const matchClub = player.club.name.toLowerCase().includes(query);
            const matchNation = player.nation.name.toLowerCase().includes(query);
            if (!matchName && !matchClub && !matchNation) return false;
        }
        return true;
    });

    // Ordenar por rating descendente
    filtered.sort((a, b) => b.rating - a.rating);

    if (filtered.length === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <h3>No se encontraron cartas</h3>
                <p>Prueba con otros filtros o abre sobres en la tienda.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(player => {
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

    const dupPlayerIds = Object.keys(gameState.duplicates).filter(id => gameState.duplicates[id] > 0);

    let totalCoinsValue = 0;
    let totalCardsCount = 0;

    dupPlayerIds.forEach(id => {
        const player = PLAYERS_DB.find(p => p.id === id);
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
        const player = PLAYERS_DB.find(p => p.id === id);
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

function createDraftSlotElement(player, posLabel, onClick) {
    const slot = document.createElement("div");
    slot.className = "draft-slot";

    if (!player) {
        slot.innerHTML = `
            <div class="draft-slot-empty">
                <div class="draft-slot-plus">+</div>
                <div class="draft-slot-pos-label">${posLabel}</div>
            </div>
        `;
    } else {
        const faceUrl = getPlayerFaceUrl(player);
        slot.innerHTML = `
            <div class="draft-slot-filled ${player.cardType}">
                <div class="draft-slot-top-badge">
                    <span class="r-val">${player.rating}</span>
                    <span class="p-val">${player.pos}</span>
                </div>
                <div class="draft-slot-face-crop">
                    <img class="player-img" src="${faceUrl}" alt="${player.name}" onerror="this.src='${getFallbackSvgFace(player)}';">
                </div>
                <div class="draft-slot-info-bar">
                    <span class="p-name">${player.name}</span>
                    <span class="p-team">${player.club.name}</span>
                </div>
            </div>
        `;
    }

    slot.addEventListener("click", () => {
        SoundFX.playClick();
        onClick();
    });

    return slot;
}

function renderDraftStarters() {
    const container = document.getElementById("pitch-starters-slots");
    container.innerHTML = "";

    const form = draftState.formation;
    form.positions.forEach((pos, idx) => {
        const player = draftState.starters[idx];
        const slot = createDraftSlotElement(player, pos.name, () => {
            openDraftPicker("starter", idx, pos.name, pos.group);
        });
        slot.style.left = `${pos.x}%`;
        slot.style.top = `${pos.y}%`;
        container.appendChild(slot);
    });
}

function renderDraftBench() {
    const container = document.getElementById("pitch-bench-slots");
    container.innerHTML = "";

    const benchCount = draftState.bench.filter(p => p !== null).length;
    document.getElementById("bench-progress").textContent = `${benchCount}/6`;

    for (let i = 0; i < 6; i++) {
        const player = draftState.bench[i];
        const slot = createDraftSlotElement(player, `SUPL ${i + 1}`, () => {
            openDraftPicker("bench", i, `Banquillo ${i + 1}`, "ALL");
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
        const slot = createDraftSlotElement(player, `RES ${i + 1}`, () => {
            openDraftPicker("reserve", i, `Reserva ${i + 1}`, "ALL");
        });
        container.appendChild(slot);
    }
}

// Genera 5 candidatos aleatorios de la base de datos
function openDraftPicker(type, index, label, posGroup) {
    draftState.activePickType = type;
    draftState.activePickIndex = index;

    const modal = document.getElementById("draft-pick-modal");
    const title = document.getElementById("draft-pick-title");
    const sub = document.getElementById("draft-pick-subtitle");
    const candidatesBox = document.getElementById("draft-pick-candidates");

    title.textContent = `ELIGE TU ${label.toUpperCase()}`;
    sub.textContent = "Selecciona 1 de las 5 opciones para esta posición.";
    candidatesBox.innerHTML = "";

    // Filtrar candidatos según posición específica si es titular, o aleatorio puro si es suplente/reserva
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

    // Elegir 5 jugadores distintos
    const candidates = [];
    const usedIds = new Set();

    // Evitar clones de jugadores que ya estén en la plantilla
    const alreadyDraftedIds = new Set([
        ...draftState.starters.filter(Boolean).map(p => p.id),
        ...draftState.bench.filter(Boolean).map(p => p.id),
        ...draftState.reserves.filter(Boolean).map(p => p.id)
    ]);

    let attempts = 0;
    while (candidates.length < 5 && attempts < 180) {
        attempts++;
        // 35% de probabilidad de buscar activamente una carta especial o de alta media si coincide la posición
        let chosenPlayer = null;
        if (Math.random() < 0.35) {
            const specialPool = eligiblePool.filter(p => ["icon", "hero", "totw"].includes(p.cardType) || p.rating >= 87);
            if (specialPool.length > 0) {
                chosenPlayer = specialPool[Math.floor(Math.random() * specialPool.length)];
            }
        }
        if (!chosenPlayer) {
            chosenPlayer = eligiblePool[Math.floor(Math.random() * eligiblePool.length)];
        }

        if (!usedIds.has(chosenPlayer.id) && !alreadyDraftedIds.has(chosenPlayer.id)) {
            usedIds.add(chosenPlayer.id);
            candidates.push(chosenPlayer);
        }
    }

    // Si faltan candidatos para completar 5, rellenar de la base completa
    while (candidates.length < 5) {
        const rand = PLAYERS_DB[Math.floor(Math.random() * PLAYERS_DB.length)];
        if (!usedIds.has(rand.id)) {
            usedIds.add(rand.id);
            candidates.push(rand);
        }
    }

    // Renderizar candidatos con animación escalonada (aparecen 1 a 1)
    candidates.forEach((player, idx) => {
        const cardEl = renderCardElement(player, { scale: 0.95 });
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
}

// Calcular monedas obtenidas según la calidad de la plantilla (Valoración + Química)
function calculateDraftReward(avgRating, totalChem) {
    // Fórmula basada en el score total = Media + Química
    // Media 80-84, Chem 20+: 15,000 - 30,000 monedas
    // Media 85-88, Chem 28+: 40,000 - 80,000 monedas
    // Media 89+, Chem 30+: 100,000 - 150,000+ monedas
    const score = avgRating + totalChem; // Rango típico: 100 a 125
    let coins = 10000;

    if (score >= 122) {
        coins = 150000; // Calidad Dios
    } else if (score >= 118) {
        coins = 100000; // Calidad Élite
    } else if (score >= 114) {
        coins = 65000;  // Calidad Oro Top
    } else if (score >= 110) {
        coins = 40000;  // Calidad Muy Buena
    } else if (score >= 105) {
        coins = 25000;  // Calidad Buena
    } else if (score >= 95) {
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

    let totalChem = 0;
    const starters = draftState.starters;
    starters.forEach((player, idx) => {
        if (!player) return;
        let points = 1;
        starters.forEach((other, oIdx) => {
            if (other && oIdx !== idx) {
                if (other.nation.code === player.nation.code) points += 0.5;
                if (other.club.id === player.club.id) points += 1;
            }
        });
        if (player.cardType === "icon" || player.cardType === "hero") points = 3;
        totalChem += Math.min(3, Math.floor(points));
    });
    totalChem = Math.min(33, totalChem);

    const coinsReward = calculateDraftReward(avgRating, totalChem);

    document.getElementById("reward-final-rating").textContent = avgRating;
    document.getElementById("reward-final-chem").textContent = `${totalChem} / 33`;
    document.getElementById("reward-final-coins").textContent = `+${coinsReward.toLocaleString()} 💰`;

    let tierMsg = "Plantilla estándar completada.";
    if (avgRating >= 89 && totalChem >= 30) {
        tierMsg = "🌟 ¡INCREÍBLE! Plantilla de Élite Mundial. Te llevas la recompensa máxima.";
    } else if (avgRating >= 86 && totalChem >= 25) {
        tierMsg = "🔥 ¡Gran Trabajo! Excelente valoración y química. Recompensa muy alta.";
    } else if (avgRating >= 83) {
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

    let totalChem = 0;
    const starters = draftState.starters;
    starters.forEach((player, idx) => {
        if (!player) return;
        let points = 1;
        starters.forEach((other, oIdx) => {
            if (other && oIdx !== idx) {
                if (other.nation.code === player.nation.code) points += 0.5;
                if (other.club.id === player.club.id) points += 1;
            }
        });
        if (player.cardType === "icon" || player.cardType === "hero") points = 3;
        totalChem += Math.min(3, Math.floor(points));
    });
    totalChem = Math.min(33, totalChem);

    const coinsWon = calculateDraftReward(avgRating, totalChem);
    gameState.coins += coinsWon;
    gameState.stats.coinsEarned = (gameState.stats.coinsEarned || 0) + coinsWon;
    updateHeaderUI();
    saveState();

    document.getElementById("draft-reward-modal").classList.remove("active");
    alert(`🎉 ¡Has recibido ${coinsWon.toLocaleString()} monedas por la calidad de tu plantilla!`);

    // Reiniciar para un nuevo draft
    renderDraftFormationSelection();
}

// Cálculo de Valoración y Química de FUT Draft
function updateDraftStats() {
    const allPicked = [
        ...draftState.starters.filter(Boolean),
        ...draftState.bench.filter(Boolean),
        ...draftState.reserves.filter(Boolean)
    ];

    const btnFinish = document.getElementById("btn-finish-draft");

    if (allPicked.length === 0) {
        document.getElementById("draft-total-rating").textContent = "0";
        document.getElementById("draft-total-chem").textContent = "0 / 33";
        if (btnFinish) btnFinish.style.display = "none";
        return;
    }

    // Media del equipo (promedio de los 11 titulares si hay, o de todas las cartas elegidas)
    const starterRatings = draftState.starters.filter(Boolean).map(p => p.rating);
    const avgRating = starterRatings.length > 0
        ? Math.round(starterRatings.reduce((a, b) => a + b, 0) / starterRatings.length)
        : Math.round(allPicked.map(p => p.rating).reduce((a, b) => a + b, 0) / allPicked.length);

    document.getElementById("draft-total-rating").textContent = avgRating;

    // Cálculo de Química (estilo FC 27 con 3 estrellas por jugador titular, máx 33)
    let totalChem = 0;
    const starters = draftState.starters;

    starters.forEach((player, idx) => {
        if (!player) return;
        let points = 1; // 1 punto base por posición correcta

        // Bonificaciones por país y club con otros titulares
        starters.forEach((other, oIdx) => {
            if (other && oIdx !== idx) {
                if (other.nation.code === player.nation.code) points += 0.5;
                if (other.club.id === player.club.id) points += 1;
            }
        });

        // Iconos y Héroes otorgan química automática completa
        if (player.cardType === "icon" || player.cardType === "hero") {
            points = 3;
        }

        totalChem += Math.min(3, Math.floor(points));
    });

    const finalChem = Math.min(33, totalChem);
    document.getElementById("draft-total-chem").textContent = `${finalChem} / 33`;

    // Comprobar si el draft está completo (11 titulares + 6 suplentes + 4 reservas = 21 jugadores)
    if (allPicked.length === 21) {
        if (btnFinish) {
            btnFinish.style.display = "inline-flex";
            const coinsEst = calculateDraftReward(avgRating, finalChem);
            btnFinish.textContent = `🏆 Cobrar Recompensa (+${coinsEst.toLocaleString()} 💰)`;
        }
    } else {
        if (btnFinish) btnFinish.style.display = "none";
    }
}

// --- NAVEGACIÓN ENTRE PESTAÑAS ---
function switchTab(tabId) {
    SoundFX.playClick();
    currentTab = tabId;

    document.querySelectorAll(".nav-tab").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabId);
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
}

// --- INICIALIZACIÓN GLOBAL DE EVENTOS ---
document.addEventListener("DOMContentLoaded", async () => {
    // Navegación
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
            renderAlbum();
        });
    });

    // Filtro de posición
    document.getElementById("pos-filter").addEventListener("change", (e) => {
        activePosFilter = e.target.value;
        renderAlbum();
    });

    // Buscador
    document.getElementById("album-search").addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderAlbum();
    });

    // Sonido toggle
    document.getElementById("btn-sound-toggle").addEventListener("click", () => {
        gameState.soundEnabled = !gameState.soundEnabled;
        updateHeaderUI();
        saveState();
    });

    // Inicializar módulo de FUT Draft
    initDraft();

    // Cargar partida y renderizar tienda inicial
    await loadSavedData();
    initStore();
});
