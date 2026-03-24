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
    desc:"Real-time Android chat app with Firebase Auth, Firestore & push notifications. Supports media sharing and contact with doctor with sos button",
    icon:"fab fa-android",
    tags:["Java","Firebase","Android"],
    cat:"android",
    github:"https://github.com/akashrairai",
    demo:"",
    featured:true
  },
  {
  title: "Loan Approval Prediction",
  desc: "Machine learning model achieving 88.7% accuracy...",
  icon: "fas fa-brain",
  tags: ["Python", "Scikit-learn", "Matplotlib"],
  cat: "python",
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
  title: "Power BI Dashboard",
  desc: "Interactive dashboard analyzing MSME loan data...",
  icon: "fas fa-chart-line",
  tags: ["Power BI", "DAX", "Excel"],
  cat: "data",
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

const TIMELINE = [
  {
    date:"2020",
    title:"First Lines of Code",
    sub:"Wrote first C program — the classic Hello World. Caught the programming bug instantly."
  },
  {
    date:"2021",
    title:"Discovered Java",
    sub:"Learned OOP fundamentals with Java and built console-based mini projects."
  },
  {
    date:"2022",
    title:"Joined LPU · B.Tech CSE",
    sub:"Started my Computer Science degree at Lovely Professional University."
  },
  {
    date:"2023",
    title:"Android Development",
    sub:"Built first Android app with Firebase. Fell in love with mobile development."
  },
  {
    date:"2024",
    title:"Data Science Journey",
    sub:"Explored Python, Pandas, and ML algorithms. Completed multiple data projects."
  },
  {
    date:"2025 → Now",
    title:"Seeking Internships",
    sub:"Actively looking for internship roles in Android and ML while building new projects."
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
   LOADER — won't get stuck
═══════════════════════════════════════════════════════ */
let animationsStarted = false;

function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("hidden");
  startAnimations();
}

// Primary trigger
window.addEventListener("load", () => {
  setTimeout(hideLoader, 1400);
});

// Safety fallback — fires if load is slow
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(hideLoader, 2500);
});

// Hard fallback — forces hide after 3s no matter what
setTimeout(hideLoader, 3000);

/* ═══════════════════════════════════════════════════════
   START ALL ANIMATIONS
═══════════════════════════════════════════════════════ */
function startAnimations() {
  // Guard — only run once
  if (animationsStarted) return;
  animationsStarted = true;

  initTypingRole();
  initCodeAnimation();
  initCounters();
  buildSkills();
  buildProjects();
  buildTimeline();
  initScrollEffects();
  initParticles();
  initCursor();
  setFooterYear();
}

/* ═══════════════════════════════════════════════════════
   THEME TOGGLE — runs immediately, no load needed
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
   HAMBURGER MENU — runs immediately
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
      el.innerHTML = word.substring(0, cIdx);
      if (cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % ROLES.length;
        setTimeout(type, 400);
        return;
      }
    } else {
      cIdx++;
      el.innerHTML = word.substring(0, cIdx);
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

  let lineIdx  = 0;
  let charIdx  = 0;
  let displayed = "";

  function typeCode() {
    if (lineIdx >= CODE_LINES.length) return;

    const line  = CODE_LINES[lineIdx];
    const plain = line.replace(/<[^>]+>/g, ""); // strip tags for char count

    if (charIdx <= plain.length) {
      let visible = 0;
      let output  = "";
      let inTag   = false;

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
      if (current >= target) {
        current = target;
        clearInterval(tick);
      }
      el.textContent = current;
    }, 40);
  });
}

/* ═══════════════════════════════════════════════════════
   BUILD SKILLS
═══════════════════════════════════════════════════════ */
function buildSkills() {
  const grid = document.getElementById("skills-grid");
  const bars = document.getElementById("proficiency-bars");
  if (!grid || !bars) return;

  // Render skill chips based on filter
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

    // Re-attach cursor hover listeners
    grid.querySelectorAll(".skill-chip").forEach(el => {
      el.addEventListener("mouseenter", () =>
        document.getElementById("cursor-follower")?.classList.add("hovered"));
      el.addEventListener("mouseleave", () =>
        document.getElementById("cursor-follower")?.classList.remove("hovered"));
    });
  }

  renderChips("all");

  // Tab buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderChips(btn.dataset.tab);
    });
  });

  // Proficiency bars
  SKILLS.forEach(s => {
    const item = document.createElement("div");
    item.className = "prof-item";
    item.innerHTML = `
      <label>
        <span>${s.name}</span>
        <span>${s.level}%</span>
      </label>
      <div class="prof-bar">
        <div class="prof-fill" data-width="${s.level}"></div>
      </div>`;
    bars.appendChild(item);
  });

  // Animate bars when scrolled into view
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".prof-fill").forEach(fill => {
          fill.style.width = fill.dataset.width + "%";
        });
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  barObserver.observe(bars);
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

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
    });
  });
}

/* ═══════════════════════════════════════════════════════
   BUILD TIMELINE
═══════════════════════════════════════════════════════ */
function buildTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  TIMELINE.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.style.transitionDelay = `${i * 0.1}s`;
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-title">${item.title}</div>
      <p class="timeline-sub">${item.sub}</p>`;
    container.appendChild(el);
  });

  // Animate items as they scroll into view
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  container.querySelectorAll(".timeline-item").forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════════════
   SCROLL EFFECTS
═══════════════════════════════════════════════════════ */
function initScrollEffects() {
  const navbar  = document.getElementById("navbar");
  const backTop = document.getElementById("back-to-top");

  // Reveal sections on scroll
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

  // Highlight active nav link
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

  // Navbar scroll style + back-to-top button
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

    // Draw dots
    particles.forEach(p => {
      p.update();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${p.alpha})`;
      ctx.fill();
    });

    // Connect nearby particles with lines
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

  // Expand follower on hoverable elements
  document.querySelectorAll(
    "a, button, .skill-chip, .project-card, .contact-card, .tab-btn, .filter-btn"
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

    // Clear previous errors
    [errName, errMail, errMsg].forEach(el => { if (el) el.textContent = ""; });
    [name, email, message].forEach(el => el?.classList.remove("error"));

    // Validate name
    if (!name?.value.trim()) {
      if (errName) errName.textContent = "Name is required.";
      name?.classList.add("error");
      valid = false;
    }

    // Validate email
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email?.value || "")) {
      if (errMail) errMail.textContent = "Enter a valid email address.";
      email?.classList.add("error");
      valid = false;
    }

    // Validate message
    if (!message?.value.trim()) {
      if (errMsg) errMsg.textContent = "Message cannot be empty.";
      message?.classList.add("error");
      valid = false;
    }

    if (!valid) return;

    // Show loading state
    const btn = document.getElementById("submit-btn");
    if (btn) {
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled  = true;
    }

    // Simulate sending — replace with EmailJS / Formspree for real emails
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
/* ═══════════════════════════════════════════════════════
   SMOOTH NAV SCROLL WITH TRANSITION OVERLAY
═══════════════════════════════════════════════════════ */
(function initSmoothNav() {

  // ── Create overlay element ──────────────────────────
  const overlay = document.createElement("div");
  overlay.id = "nav-transition";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: var(--accent);
    z-index: 99999;
    pointer-events: none;
    clip-path: circle(0% at 50% 50%);
    transition: clip-path 0.55s cubic-bezier(0.77,0,0.18,1);
    opacity: 0.15;
  `;
  document.body.appendChild(overlay);

  // ── Helper: animate scroll to target ───────────────
  function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navHeight = document.getElementById("navbar")?.offsetHeight || 70;
    const targetTop = target.getBoundingClientRect().top
                    + window.scrollY
                    - navHeight;

    // Step 1 — flash overlay in
    overlay.style.clipPath = "circle(150% at 50% 50%)";

    setTimeout(() => {
      // Step 2 — jump scroll (hidden behind overlay)
      window.scrollTo({ top: targetTop, behavior: "instant" });

      // Step 3 — fade overlay out
      setTimeout(() => {
        overlay.style.clipPath = "circle(0% at 50% 50%)";
      }, 180);

    }, 300);
  }

  // ── Attach to ALL nav links (desktop + mobile) ──────
  document.querySelectorAll(
    ".nav-links a, .mobile-menu a, .scroll-indicator, a[href^='#']"
  ).forEach(link => {

    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only handle internal hash links
      if (!href || !href.startsWith("#")) return;

      const targetId = href.slice(1);
      if (!targetId || !document.getElementById(targetId)) return;

      e.preventDefault();
      closeMobileMenu();
      smoothScrollTo(targetId);
    });
  });

})();