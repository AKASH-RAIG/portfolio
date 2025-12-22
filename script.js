document.addEventListener("DOMContentLoaded", () => {

  /* ===== Typing Effect ===== */
  const text = "Android Developer | Data Science Minor | Problem Solver";
  let index = 0;
  const typingEl = document.getElementById("typing");

  function typeEffect() {
    if (typingEl && index < text.length) {
      typingEl.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 80);
    }
  }

  typeEffect();

  /* ===== Scroll Fade-in ===== */
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  /* ===== Dynamic Projects ===== */
  const projects = [
    {
      title: "CareBridge App",
      desc: "Android app for patient tracking using Firebase.",
      link: "#"
    },
    {
      title: "Loan Prediction System",
      desc: "ML project using Explainable AI.",
      link: "#"
    }
  ];

  const container = document.getElementById("project-container");

  if (container) {
    projects.forEach(project => {
      const div = document.createElement("div");
      div.className = "project-card";
      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" target="_blank">GitHub</a>
      `;
      container.appendChild(div);
    });
  }

});
