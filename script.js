/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const SKILLS = [
  { name:"Java",     icon:"fab fa-java",     cat:"languages", level:80 },
  { name:"Python",   icon:"fab fa-python",   cat:"languages", level:75 },
  { name:"C / C++",  icon:"💻",              cat:"languages", level:65, emoji:true },
  { name:"HTML",     icon:"fab fa-html5",    cat:"languages", level:80 },
  { name:"CSS",      icon:"fab fa-css3-alt", cat:"languages", level:75 },
  { name:"Android",  icon:"fab fa-android",  cat:"tools",     level:78 },
  { name:"Firebase", icon:"🔥",              cat:"tools",     level:72, emoji:true },
  { name:"Git",      icon:"fab fa-git-alt",  cat:"tools",     level:70 },
  { name:"GitHub",   icon:"fab fa-github",   cat:"tools",     level:75 },
  { name:"Linux",    icon:"fab fa-linux",    cat:"tools",     level:60 },
  { name:"SQL",      icon:"🗄️",             cat:"tools",     level:60, emoji:true },
  { name:"VS Code",  icon:"💻",              cat:"tools",     level:85, emoji:true },
];

const PROJECTS = [
  {
    title:"CareBridge — Firebase",
    desc:"Real-time Android healthcare app with Firebase Auth, Firestore & push notifications. Supports media sharing, doctor contact and SOS button.",
    icon:"fab fa-android",
    tags:["Java","Firebase","Android"],
    cat:"android",
    github:"https://github.com/akashrairai",
    demo:"",
    featured:true
  },
  {
    title:"Loan Approval Prediction",
    desc:"Machine learning model achieving 88.7% accuracy using Scikit-learn with data visualisation via Matplotlib.",
    icon:"fas fa-brain",
    tags:["Python","Scikit-learn","Matplotlib"],
    cat:"python",
    github:"https://github.com/akashrairai",
    demo:"",
    featured:false
  },
  {
    title:"Portfolio Website",
    desc:"Dynamic responsive portfolio with particle background, dark/light theme and smooth scroll animations.",
    icon:"fas fa-globe",
    tags:["HTML","CSS","JavaScript"],
    cat:"web",
    github:"https://github.com/akashrairai",
    demo:"#",
    featured:true
  },
  {
    title:"Data Analyser",
    desc:"Python tool to analyse CSV datasets, generate plots with Matplotlib and export summary reports.",
    icon:"fas fa-chart-bar",
    tags:["Python","Pandas","Matplotlib"],
    cat:"python",
    github:"https://github.com/akashrairai",
    demo:"",
    featured:false
  },
  {
    title:"Power BI Dashboard",
    desc:"Interactive dashboard analysing MSME loan data with DAX formulas and Excel integration.",
    icon:"fas fa-chart-line",
    tags:["Power BI","DAX","Excel"],
    cat:"data",
    github:"",
    demo:"",
    featured:false
  },
  {
    title:"ML Spam Detector",
    desc:"Naive Bayes text classifier trained on SMS spam dataset, deployed as a simple Flask web API.",
    icon:"fas fa-robot",
    tags:["Python","scikit-learn","Flask"],
    cat:"python",
    github:"https://github.com/akashrairai",
    demo:"",
    featured:false
  },
];

const CERTIFICATES = [
  {
    title:  "Android App Development",
    issuer: "Google / Coursera",
    date:   "Jan 2024",
    cat:    "android",
    badge:  "Android",
    img:    "certs/android.jpg",
  },
  {
    title:  "Python for Data Science",
    issuer: "IBM / Coursera",
    date:   "Mar 2024",
    cat:    "python",
    badge:  "Python",
    img:    "certs/python.jpg",
  },
  {
    title:  "Machine Learning Fundamentals",
    issuer: "Stanford / Coursera",
    date:   "May 2024",
    cat:    "ml",
    badge:  "ML / AI",
    img:    "certs/ml.jpg",
  },
  {
    title:  "Firebase & Cloud Development",
    issuer: "Google",
    date:   "Jun 2024",
    cat:    "android",
    badge:  "Android",
    img:    "certs/firebase.jpg",
  },
  {
    title:  "Data Structures & Algorithms",
    issuer: "HackerRank",
    date:   "Aug 2024",
    cat:    "tools",
    badge:  "Tools",
    img:    "certs/dsa.jpg",
  },
  {
    title:  "Git & GitHub",
    issuer: "GitHub",
    date:   "Sep 2024",
    cat:    "tools",
    badge:  "Tools",
    img:    "certs/git.jpg",
  },
];

const ROLES = [
  "Android Apps 📱",
  "Data Science 🧠",
  "Clean Code ✨",
  "Firebase Apps 🔥",
  "Real-world Projects 🚀",
];

const CODE_LINES = [
  `<span style="color:#c792ea">class</span> <span style="color:#82aaff">Akash</span> {`,
  `  <span style="color:#c792ea">String</span>  role      = <span style="color:#c3e88d">"Android Dev"</span>;`,
  `  <span style="color:#c792ea">String</span>  uni       = <span style="color:#c3e88d">"LPU 2027"</span>;`,
  `  <span style="color:#c792ea">boolean</span> openToWork = <span style="color:#f78c6c">true</span>;`,
  ``,
  `  <span style="color:#82aaff">void</span> <span style="color:#c792ea">passion</span>() {`,
  `    build(<span style="color:#c3e88d">"Android"</span>);`,
  `    learn(<span style="color:#c3e88d">"Data Science"</span>);`,
  `    ship(<span style="color:#c3e88d">"Real Projects"</span>);`,
  `  }`,
  `}`,
];

/* ═══════════════════════════════════════════════════════
   LOADER
═══════════════════════════════════════════════════════ */
let animationsStarted = false;

function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("hidden");
  startAnimations();
}

window.addEventListener("load", () => {
  setTimeout(hideLoader, 1400);
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(hideLoader, 2500);
});
setTimeout(hideLoader, 3000);

/* ═══════════════════════════════════════════════════════
   START ALL ANIMATIONS
═══════════════════════════════════════════════════════ */
function startAnimations() {
  if (animationsStarted) return;
  animationsStarted = true;

  initTypingRole();
  initCodeAnimation();
  initCounters();
  buildSkills();
  buildProjects();
  buildCertificates();
  initScrollEffects();
  initSmoothNav();      // ✅ moved here so DOM is ready
  initParticles();
  initCursor();
  setFooterYear();
}

/* ═══════════════════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════════════════ */
(function initTheme() {
  const btn  = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const root = document.documentElement;

  const saved = localStorage.getItem("theme") || "dark";
  root.dataset.theme = saved;
  if (icon) icon.className = saved === "dark" ? "fas fa-sun" : "fas fa-moon";

  btn?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    if (icon) icon.className = next === "dark" ? "fas fa-sun" : "fas fa-moon";
  });
})();

/* ═══════════════════════════════════════════════════════
   HAMBURGER MENU
═══════════════════════════════════════════════════════ */
(function initHamburger() {
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu?.classList.toggle("open");
  });
})();

function closeMobileMenu() {
  document.getElementById("hamburger")?.classList.remove("open");
  document.getElementById("mobile-menu")?.classList.remove("open");
}

/* ═══════════════════════════════════════════════════════
   SMOOTH NAV SCROLL
   ✅ Called inside startAnimations() so DOM is fully ready
═══════════════════════════════════════════════════════ */
function initSmoothNav() {

  // Create curtain overlay
  const curtain = document.createElement("div");
  curtain.id = "nav-curtain";
  curtain.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(135deg,
      rgba(108,99,255,0.18),
      rgba(0,212,255,0.12)
    );
    z-index: 99999;
    pointer-events: none;
    transform: translateY(-100%);
    will-change: transform;
  `;
  document.body.appendChild(curtain);

  // Scroll to a section with curtain animation
  function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navH      = document.getElementById("navbar")?.offsetHeight || 70;
    const targetTop = target.getBoundingClientRect().top
                    + window.scrollY
                    - navH;

    // 1 — slide curtain DOWN
    curtain.style.transition =
      "transform 0.42s cubic-bezier(0.77,0,0.18,1)";
    curtain.style.transform  = "translateY(0%)";

    setTimeout(() => {
      // 2 — instant jump while hidden
      window.scrollTo({ top: targetTop, behavior: "instant" });

      // 3 — slide curtain UP
      curtain.style.transition =
        "transform 0.42s cubic-bezier(0.77,0,0.18,1)";
      curtain.style.transform  = "translateY(100%)";

      // 4 — reset silently for next use
      setTimeout(() => {
        curtain.style.transition = "none";
        curtain.style.transform  = "translateY(-100%)";
      }, 430);

    }, 310);
  }

  // Attach to every internal hash link
  document.querySelectorAll(
    ".nav-links a, .mobile-menu a, a[href^='#'], .scroll-indicator"
  ).forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.slice(1);
      if (!targetId || !document.getElementById(targetId)) return;

      e.preventDefault();
      closeMobileMenu();
      smoothScrollTo(targetId);
    });
  });
}

/* ═══════════════════════════════════════════════════════
   TYPING ROLE ANIMATION
═══════════════════════════════════════════════════════ */
function initTypingRole() {
  const el = document.getElementById("typed-role");
  if (!el) return;

  let rIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const word = ROLES[rIdx];

    if (deleting) {
      cIdx--;
      el.textContent = word.substring(0, cIdx);
      if (cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % ROLES.length;
        setTimeout(type, 400);
        return;
      }
    } else {
      cIdx++;
      el.textContent = word.substring(0, cIdx);
      if (cIdx === word.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}

/* ═══════════════════════════════════════════════════════
   CODE CARD ANIMATION
═══════════════════════════════════════════════════════ */
function initCodeAnimation() {
  const el = document.getElementById("code-animation");
  if (!el) return;

  let lineIdx   = 0;
  let charIdx   = 0;
  let displayed = "";

  function typeCode() {
    if (lineIdx >= CODE_LINES.length) return;

    const line  = CODE_LINES[lineIdx];
    const plain = line.replace(/<[^>]+>/g, "");

    if (charIdx <= plain.length) {
      let visible = 0, output = "", inTag = false;

      for (let i = 0; i < line.length; i++) {
        if (line[i] === "<") inTag = true;
        if (inTag) {
          output += line[i];
        } else {
          if (visible < charIdx) { output += line[i]; visible++; }
        }
        if (line[i] === ">") inTag = false;
      }

      el.innerHTML = displayed + output;
      charIdx++;
      setTimeout(typeCode, 28);
    } else {
      displayed += line + "\n";
      el.innerHTML = displayed;
      lineIdx++;
      charIdx = 0;
      setTimeout(typeCode, 80);
    }
  }
  typeCode();
}

/* ═══════════════════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════════════════ */
function initCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    let current  = 0;
    const step   = Math.ceil(target / 40);

    const tick = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(tick); }
      el.textContent = current;
    }, 40);
  });
}

/* ═══════════════════════════════════════════════════════
   BUILD SKILLS
═══════════════════════════════════════════════════════ */
function buildSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  function renderChips(filter) {
    grid.innerHTML = "";
    SKILLS
      .filter(s => filter === "all" || s.cat === filter)
      .forEach(s => {
        const chip = document.createElement("div");
        chip.className = "skill-chip";
        chip.innerHTML = s.emoji
          ? `<span class="skill-icon" style="font-size:1.8rem">${s.icon}</span>
             <span>${s.name}</span>`
          : `<i class="${s.icon} skill-icon"></i>
             <span>${s.name}</span>`;
        grid.appendChild(chip);
      });

    grid.querySelectorAll(".skill-chip").forEach(el => {
      el.addEventListener("mouseenter", () =>
        document.getElementById("cursor-follower")?.classList.add("hovered"));
      el.addEventListener("mouseleave", () =>
        document.getElementById("cursor-follower")?.classList.remove("hovered"));
    });
  }

  renderChips("all");

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderChips(btn.dataset.tab);
    });
  });
}

/* ═══════════════════════════════════════════════════════
   BUILD PROJECTS
═══════════════════════════════════════════════════════ */
function buildProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  function renderCards(filter) {
    grid.innerHTML = "";
    PROJECTS
      .filter(p => filter === "all" || p.cat === filter)
      .forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          ${p.featured
            ? `<span class="project-featured-badge">⭐ Featured</span>`
            : ""}
          <div class="project-header">
            <div class="project-icon">
              <i class="${p.icon}"></i>
            </div>
            <div class="project-links">
              ${p.github
                ? `<a href="${p.github}" target="_blank" title="GitHub">
                     <i class="fab fa-github"></i>
                   </a>`
                : ""}
              ${p.demo
                ? `<a href="${p.demo}" target="_blank" title="Live Demo">
                     <i class="fas fa-external-link-alt"></i>
                   </a>`
                : ""}
            </div>
          </div>
          <div class="project-body">
            <div class="project-title">${p.title}</div>
            <p class="project-desc">${p.desc}</p>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>`;
        grid.appendChild(card);
      });
  }

  renderCards("all");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
    });
  });
}

/* ═══════════════════════════════════════════════════════
   BUILD CERTIFICATES
═══════════════════════════════════════════════════════ */
function buildCertificates() {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;

  let visibleCerts = [...CERTIFICATES];
  let lightboxIndex = 0;

  // ── Render certificate cards ───────────────────────
  function renderCards(filter) {
    grid.innerHTML = "";
    visibleCerts = filter === "all"
      ? [...CERTIFICATES]
      : CERTIFICATES.filter(c => c.cat === filter);

    if (visibleCerts.length === 0) {
      grid.innerHTML = `
        <div style="
          grid-column:1/-1; text-align:center;
          color:var(--text-muted); padding:3rem;
          font-family:var(--font-mono); font-size:.9rem;
        ">No certificates in this category yet.</div>`;
      return;
    }

    visibleCerts.forEach((cert, i) => {
      const card = document.createElement("div");
      card.className = "cert-card";
      card.style.transitionDelay = `${i * 0.07}s`;
      card.dataset.index = i;

      card.innerHTML = `
        <div class="cert-img-wrap" data-index="${i}">
          <img
            src="${cert.img}"
            alt="${cert.title}"
            loading="lazy"
            onerror="
              this.style.display='none';
              this.nextElementSibling.style.display='flex';
            "
          />
          <div class="cert-img-placeholder" style="display:none">
            <i class="fas fa-certificate"></i>
            <span>No Image</span>
          </div>
          <div class="cert-img-overlay">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
        <div class="cert-body">
          <div class="cert-title">${cert.title}</div>
          <div class="cert-issuer">
            <i class="fas fa-building"></i> ${cert.issuer}
          </div>
          <div class="cert-date">
            <i class="fas fa-calendar-alt"></i> ${cert.date}
          </div>
          <div class="cert-footer">
            <span class="cert-badge">${cert.badge}</span>
            <button class="cert-view-btn" data-index="${i}">
              View Full <i class="fas fa-expand"></i>
            </button>
          </div>
        </div>`;

      grid.appendChild(card);
    });

    // Scroll reveal
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    }, { threshold: 0.1 });

    grid.querySelectorAll(".cert-card").forEach(c => obs.observe(c));

    // Open lightbox on click
    grid.querySelectorAll(".cert-img-wrap, .cert-view-btn").forEach(el => {
      el.addEventListener("click", () => {
        openLightbox(parseInt(el.dataset.index, 10));
      });
    });
  }

  renderCards("all");

  // Filter tabs
  document.querySelectorAll(".cert-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cert-tab")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
    });
  });

  // ── Lightbox ─────────────────────────────────────────
  const lightbox  = document.getElementById("cert-lightbox");
  const lbImg     = document.getElementById("lightbox-img");
  const lbCaption = document.getElementById("lightbox-caption");
  const lbClose   = document.getElementById("lightbox-close");
  const lbOverlay = document.getElementById("lightbox-overlay");
  const lbPrev    = document.getElementById("lightbox-prev");
  const lbNext    = document.getElementById("lightbox-next");

  if (!lightbox) return;

  function openLightbox(idx) {
    lightboxIndex    = idx;
    const cert       = visibleCerts[idx];
    lbImg.src        = cert.img;
    lbImg.alt        = cert.title;
    lbCaption.innerHTML = `
      <strong>${cert.title}</strong>
      ${cert.issuer} &nbsp;·&nbsp; ${cert.date}`;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function showPrev() {
    lightboxIndex =
      (lightboxIndex - 1 + visibleCerts.length) % visibleCerts.length;
    openLightbox(lightboxIndex);
  }

  function showNext() {
    lightboxIndex = (lightboxIndex + 1) % visibleCerts.length;
    openLightbox(lightboxIndex);
  }

  lbClose?.addEventListener("click",   closeLightbox);
  lbOverlay?.addEventListener("click", closeLightbox);
  lbPrev?.addEventListener("click",    showPrev);
  lbNext?.addEventListener("click",    showNext);

  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  showPrev();
    if (e.key === "ArrowRight") showNext();
  });
}

/* ═══════════════════════════════════════════════════════
   SCROLL EFFECTS
═══════════════════════════════════════════════════════ */
function initScrollEffects() {
  const navbar  = document.getElementById("navbar");
  const backTop = document.getElementById("back-to-top");

  // Reveal sections
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

  // Active nav link highlight
  const sections = document.querySelectorAll("section[id]");
  const linkObs  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll(".nav-links a")
          .forEach(a => a.classList.remove("active"));
        const active = document.querySelector(
          `.nav-links a[href="#${e.target.id}"]`
        );
        if (active) active.classList.add("active");
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => linkObs.observe(s));

  // Navbar + back-to-top on scroll
  window.addEventListener("scroll", () => {
    if (navbar)  navbar.classList.toggle("scrolled", window.scrollY > 50);
    if (backTop) backTop.classList.toggle("visible", window.scrollY > 400);
  });

  backTop?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/* ═══════════════════════════════════════════════════════
   PARTICLES
═══════════════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function Particle() { this.reset(); }
  Particle.prototype.reset = function () {
    this.x     = Math.random() * W;
    this.y     = Math.random() * H;
    this.r     = Math.random() * 1.5 + 0.5;
    this.vx    = (Math.random() - 0.5) * 0.4;
    this.vy    = (Math.random() - 0.5) * 0.4;
    this.alpha = Math.random() * 0.5 + 0.15;
  };
  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W ||
        this.y < 0 || this.y > H) this.reset();
  };

  particles = Array.from({ length: 90 }, () => new Particle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isDark = document.documentElement.dataset.theme !== "light";
    const col    = isDark ? "108,99,255" : "80,70,200";

    particles.forEach(p => {
      p.update();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${p.alpha})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${col},${0.08 * (1 - d / 120)})`;
          ctx.lineWidth   = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ═══════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════ */
function initCursor() {
  const cursor   = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followX = 0, followY = 0;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top  = mouseY + "px";
  });

  (function animFollower() {
    followX += (mouseX - followX) * 0.12;
    followY += (mouseY - followY) * 0.12;
    follower.style.left = followX + "px";
    follower.style.top  = followY + "px";
    requestAnimationFrame(animFollower);
  })();

  document.querySelectorAll(
    "a, button, .skill-chip, .project-card, .contact-card, .tab-btn, .filter-btn, .cert-card"
  ).forEach(el => {
    el.addEventListener("mouseenter", () =>
      follower.classList.add("hovered"));
    el.addEventListener("mouseleave", () =>
      follower.classList.remove("hovered"));
  });
}

/* ═══════════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════════ */
(function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name    = document.getElementById("cf-name");
    const email   = document.getElementById("cf-email");
    const message = document.getElementById("cf-message");
    const errName = document.getElementById("err-name");
    const errMail = document.getElementById("err-email");
    const errMsg  = document.getElementById("err-msg");

    [errName, errMail, errMsg].forEach(el => {
      if (el) el.textContent = "";
    });
    [name, email, message].forEach(el => el?.classList.remove("error"));

    if (!name?.value.trim()) {
      if (errName) errName.textContent = "Name is required.";
      name?.classList.add("error");
      valid = false;
    }

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email?.value || "")) {
      if (errMail) errMail.textContent = "Enter a valid email address.";
      email?.classList.add("error");
      valid = false;
    }

    if (!message?.value.trim()) {
      if (errMsg) errMsg.textContent = "Message cannot be empty.";
      message?.classList.add("error");
      valid = false;
    }

    if (!valid) return;

    const btn = document.getElementById("submit-btn");
    if (btn) {
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled  = true;
    }

    setTimeout(() => {
      if (btn) {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.disabled  = false;
      }
      const success = document.getElementById("form-success");
      if (success) {
        success.classList.add("visible");
        setTimeout(() => success.classList.remove("visible"), 5000);
      }
      form.reset();
    }, 1800);
  });
})();

/* ═══════════════════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════════════════ */
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = `© ${new Date().getFullYear()}`;
}