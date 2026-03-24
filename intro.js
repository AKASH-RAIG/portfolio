/* ═══════════════════════════════════════════════════════
   PARTICLES
═══════════════════════════════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById("intro-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const particles = Array.from({ length: 70 }, () => ({
    x:     Math.random() * window.innerWidth,
    y:     Math.random() * window.innerHeight,
    r:     Math.random() * 1.5 + 0.4,
    vx:    (Math.random() - 0.5) * 0.35,
    vy:    (Math.random() - 0.5) * 0.35,
    alpha: Math.random() * 0.4 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108,99,255,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ═══════════════════════════════════════════════════════
   SHARED STATE
   keyUnlocked = true only after correct terminal command
   unlocked    = true after door animation completes
═══════════════════════════════════════════════════════ */
let keyUnlocked = false; // key can be dragged only when this is true
let unlocked    = false; // full unlock / redirect sequence started

/* ═══════════════════════════════════════════════════════
   KEY DRAG — disabled until keyUnlocked === true
═══════════════════════════════════════════════════════ */
(function initKeyDrag() {
  const keyWrap  = document.getElementById("key-wrap");
  const lockWrap = document.getElementById("lock-wrap");

  if (!keyWrap || !lockWrap) return;

  let isDragging = false;
  let startX, startY, origX, origY;

  // ── Helpers ───────────────────────────────────────
  function getLockCenter() {
    const r = lockWrap.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function dist(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  function snapBack() {
    keyWrap.style.position  = "";
    keyWrap.style.left      = "";
    keyWrap.style.top       = "";
    keyWrap.style.transform = "";
    keyWrap.style.bottom    = "";
    keyWrap.style.transition = "";
    lockWrap.style.filter   = "";
    keyWrap.classList.remove("dragging");
  }

  function moveKey(clientX, clientY) {
    const dx = clientX - startX;
    const dy = clientY - startY;
    keyWrap.style.position  = "fixed";
    keyWrap.style.left      = (origX + dx) + "px";
    keyWrap.style.top       = (origY + dy) + "px";
    keyWrap.style.transform = "none";
    keyWrap.style.bottom    = "auto";

    const d = dist({ x: clientX, y: clientY }, getLockCenter());
    lockWrap.style.filter = d < 65
      ? "drop-shadow(0 0 24px rgba(245,197,24,0.9))"
      : "";
  }

  function checkDrop(clientX, clientY) {
    isDragging = false;
    keyWrap.classList.remove("dragging");
    const d = dist({ x: clientX, y: clientY }, getLockCenter());
    if (d < 65) {
      triggerUnlock();
    } else {
      snapBack();
    }
  }

  // ── Shake key to show it's locked ─────────────────
  function shakeKeyLocked() {
    keyWrap.style.animation = "none";
    keyWrap.offsetHeight;   // force reflow
    keyWrap.style.animation = "shakeLocked 0.4s ease";

    // Show "type command first" message in terminal
    showLockedWarning();
  }

  // ── Mouse events ──────────────────────────────────
  keyWrap.addEventListener("mousedown", e => {
    if (unlocked) return;

    // ✅ Block drag if command not typed yet
    if (!keyUnlocked) {
      shakeKeyLocked();
      e.preventDefault();
      return;
    }

    isDragging = true;
    keyWrap.classList.add("dragging");
    startX = e.clientX;
    startY = e.clientY;
    origX  = keyWrap.offsetLeft;
    origY  = keyWrap.offsetTop;
    e.preventDefault();
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging || unlocked) return;
    moveKey(e.clientX, e.clientY);
  });

  document.addEventListener("mouseup", e => {
    if (!isDragging || unlocked) return;
    checkDrop(e.clientX, e.clientY);
  });

  // ── Touch events ──────────────────────────────────
  keyWrap.addEventListener("touchstart", e => {
    if (unlocked) return;

    // ✅ Block drag if command not typed yet
    if (!keyUnlocked) {
      shakeKeyLocked();
      e.preventDefault();
      return;
    }

    isDragging = true;
    keyWrap.classList.add("dragging");
    const t = e.touches[0];
    startX  = t.clientX;
    startY  = t.clientY;
    origX   = keyWrap.offsetLeft;
    origY   = keyWrap.offsetTop;
    e.preventDefault();
  }, { passive: false });

  document.addEventListener("touchmove", e => {
    if (!isDragging || unlocked) return;
    const t = e.touches[0];
    moveKey(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });

  document.addEventListener("touchend", e => {
    if (!isDragging || unlocked) return;
    const t = e.changedTouches[0];
    checkDrop(t.clientX, t.clientY);
  });

  // ── Mobile tap button — also needs command first ───
  document.getElementById("tap-btn")
    ?.addEventListener("click", () => {
      if (!keyUnlocked) {
        showLockedWarning();
        return;
      }
      triggerUnlock();
    });

})();

/* ═══════════════════════════════════════════════════════
   SHOW LOCKED WARNING IN TERMINAL
═══════════════════════════════════════════════════════ */
function showLockedWarning() {
  const tOutput = document.getElementById("t-output");
  if (!tOutput) return;

  // Avoid spamming the same message
  const last = tOutput.lastElementChild;
  if (last && last.dataset.warn === "1") return;

  const line = document.createElement("div");
  line.className    = "t-output-line";
  line.dataset.warn = "1";
  line.innerHTML = `
    <span class="t-prompt" style="color:rgba(108,99,255,0.5)">#</span>
    <span class="t-output-text error">
      🔒 Key is locked! Type the command first.
    </span>`;
  tOutput.appendChild(line);

  const body = document.getElementById("terminal-body");
  if (body) body.scrollTop = body.scrollHeight;

  // Remove warning tag after 2s so it can show again
  setTimeout(() => { line.dataset.warn = "0"; }, 2000);
}

/* ═══════════════════════════════════════════════════════
   UNLOCK SEQUENCE
═══════════════════════════════════════════════════════ */
function triggerUnlock() {
  if (unlocked) return;
  unlocked = true;

  const keyWrap  = document.getElementById("key-wrap");
  const lock     = document.getElementById("lock");
  const shackle  = document.getElementById("lock-shackle");
  const lockWrap = document.getElementById("lock-wrap");
  const scene    = document.getElementById("lock-scene");
  const doors    = document.getElementById("doors");

  if (!keyWrap || !lock || !shackle || !lockWrap || !scene || !doors) return;

  lockWrap.style.filter = "";

  // 1 — Snap key smoothly to lock center
  const r     = lockWrap.getBoundingClientRect();
  const lockCX = r.left + r.width  / 2;
  const lockCY = r.top  + r.height / 2;

  keyWrap.style.transition = "all 0.35s cubic-bezier(0.34,1.56,0.64,1)";
  keyWrap.style.position   = "fixed";
  keyWrap.style.left       = (lockCX - 30) + "px";
  keyWrap.style.top        = (lockCY - 30) + "px";
  keyWrap.style.transform  = "none";
  keyWrap.style.bottom     = "auto";

  // 2 — Rotate key into keyhole
  setTimeout(() => {
    const keyEl = document.getElementById("key");
    if (keyEl) {
      keyEl.style.transition = "transform 0.4s ease";
      keyEl.style.transform  = "rotate(45deg)";
    }
  }, 350);

  // 3 — Open shackle + turn lock green
  setTimeout(() => {
    shackle.classList.add("open");
    lock.classList.add("unlocked");
  }, 750);

  // 4 — Fade out lock scene + computer
  setTimeout(() => {
    scene.style.transition    = "opacity 0.5s ease";
    scene.style.opacity       = "0";
    scene.style.pointerEvents = "none";

    const comp = document.getElementById("computer-wrap");
    if (comp) {
      comp.style.transition = "opacity 0.5s ease";
      comp.style.opacity    = "0";
    }

    const hint = document.getElementById("hint-badge");
    if (hint) hint.style.display = "none";
  }, 1200);

  // 5 — Swing doors open
  setTimeout(() => {
    doors.classList.add("opening");
  }, 1600);

  // 6 — Navigate to portfolio
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2900);
}

/* ═══════════════════════════════════════════════════════
   INJECT KEYFRAMES
═══════════════════════════════════════════════════════ */
(function injectKeyframes() {
  const s = document.createElement("style");
  s.textContent = `

    /* Key shake when locked */
    @keyframes shakeLocked {
      0%,100% { transform: translateX(0)  rotate(-45deg); }
      20%     { transform: translateX(-8px) rotate(-50deg); }
      40%     { transform: translateX(8px)  rotate(-40deg); }
      60%     { transform: translateX(-6px) rotate(-48deg); }
      80%     { transform: translateX(6px)  rotate(-42deg); }
    }

    /* Lock icon bounce when blocked */
    @keyframes lockBounce {
      0%,100% { transform: scale(1); }
      30%     { transform: scale(1.15); }
      60%     { transform: scale(0.95); }
    }

    /* Key glow when unlocked by terminal */
    @keyframes keyGlow {
      0%,100% { filter: drop-shadow(0 0 8px rgba(245,197,24,0.6)); }
      50%     { filter: drop-shadow(0 0 20px rgba(245,197,24,1)); }
    }

  `;
  document.head.appendChild(s);
})();

/* ═══════════════════════════════════════════════════════
   TERMINAL INTERACTION
═══════════════════════════════════════════════════════ */
(function initTerminal() {

  const tTyped    = document.getElementById("t-typed");
  const tOutput   = document.getElementById("t-output");
  const hintBadge = document.getElementById("hint-badge");

  if (!tTyped || !tOutput) return;

  // ── The one correct command ────────────────────────
  const MAGIC_CMD = `cout<<"key";`;

  // ── Wrong command responses ────────────────────────
  const WRONG = [
    `Command not found. Think C++...`,
    `What does C++ use to print? Hint: cout`,
    `Error: unknown command. Try again.`,
    `Segmentation fault (core dumped).`,
    `Build failed — 1 error. Keep trying!`,
    `Access denied. Wrong syntax.`,
    `Nope. Remember: cout&lt;&lt;"key";`,
    `cout is your friend. Use it wisely.`,
  ];
  let wrongIdx = 0;
  let typed    = "";

  // ── Render typed text with syntax highlighting ─────
  // ── Render typed text — plain, no highlighting ─────
function renderTyped(text) {
  tTyped.textContent = text;
}
  // ── Append output line ─────────────────────────────
  function addOutput(html, type = "") {
    const line = document.createElement("div");
    line.className = "t-output-line";
    line.innerHTML = `
      <span class="t-prompt"
        style="color:rgba(108,99,255,0.5)">#</span>
      <span class="t-output-text ${type}">${html}</span>`;
    tOutput.appendChild(line);

    const body = document.getElementById("terminal-body");
    if (body) body.scrollTop = body.scrollHeight;
  }

  // ── Flash a keyboard key ───────────────────────────
  function flashKey(char) {
    document.querySelectorAll(".kb-key").forEach(k => {
      if (k.textContent.trim().toUpperCase() === char.toUpperCase()) {
        k.classList.add("pressed");
        setTimeout(() => k.classList.remove("pressed"), 120);
      }
    });
  }

  // ── Flash green on monitor screen ─────────────────
  function flashScreen() {
    const screen = document.querySelector(".monitor-screen");
    if (!screen) return;
    const flash = document.createElement("div");
    flash.className = "screen-flash";
    screen.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
  }

  // ── Make key glow + float after unlock ────────────
  function animateKeyUnlocked() {
    const keyWrap = document.getElementById("key-wrap");
    if (!keyWrap) return;
    keyWrap.style.animation = "keyGlow 1s ease-in-out infinite";

    // Update drag label
    const label = keyWrap.querySelector(".key-label");
    if (label) {
      label.textContent = "Drag to Lock! 🔓";
      label.style.color = "rgba(245,197,24,0.9)";
    }
  }

  // ── Process ENTER ──────────────────────────────────
  function handleEnter() {
    const cmd = typed.trim();
    typed = "";
    renderTyped("");

    if (!cmd) return;

    // Show the submitted command
    addOutput(`&gt;&gt; ${cmd}`, "");

    if (cmd === MAGIC_CMD) {

      // ✅ CORRECT COMMAND
      addOutput("🔑 Compiling...", "success");

      setTimeout(() => {
        flashScreen();
        addOutput("✅ Compiled successfully!", "success");
      }, 400);

      setTimeout(() => {
        // Show key reward line
        const reward = document.createElement("div");
        reward.className = "t-output-line";
        reward.innerHTML = `
          <span class="t-prompt"
            style="color:rgba(108,99,255,0.5)">#</span>
          <span class="t-key-reward">
            🗝️ &nbsp;Key unlocked! Now drag it to the lock.
          </span>`;
        tOutput.appendChild(reward);

        const body = document.getElementById("terminal-body");
        if (body) body.scrollTop = body.scrollHeight;

        // ✅ NOW allow key dragging
        keyUnlocked = true;
        animateKeyUnlocked();

      }, 900);

    } else {

      // ❌ WRONG COMMAND
      const msg = WRONG[wrongIdx % WRONG.length];
      wrongIdx++;
      addOutput(`❌ ${msg}`, "error");
    }
  }

  // ── Listen to keyboard ─────────────────────────────
  document.addEventListener("keydown", e => {
    if (unlocked) return;

    // Hide hint badge on first keypress
    hintBadge?.classList.add("hidden");

    const key = e.key;

    if (key === "Enter") {
      flashKey("Enter");
      handleEnter();
      return;
    }

    if (key === "Backspace") {
      flashKey("Backspace");
      typed = typed.slice(0, -1);
      renderTyped(typed);
      return;
    }

    // Only printable single characters
    if (key.length === 1) {
      flashKey(key);
      typed += key;
      renderTyped(typed);
    }

    // Stop space from scrolling the page
    if (key === " ") e.preventDefault();
  });

  // ── Auto hint after 6s of no typing ───────────────
  let hintShown = false;
  let hintTimer = null;

  function resetHintTimer() {
    clearTimeout(hintTimer);
    if (hintShown || unlocked) return;
    hintTimer = setTimeout(() => {
      if (typed.length === 0 && !unlocked && !hintShown) {
        addOutput(
          `💡 Hint: type exactly → cout&lt;&lt;"key";`,
          ""
        );
        hintShown = true;
      }
    }, 6000);
  }

  document.addEventListener("keydown", resetHintTimer);
  resetHintTimer();

})();