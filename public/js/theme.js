const toggleBtn = document.getElementById("themeToggle");

const themes = ["light", "dark", "dim", "deep"];
const icons = ["☀️", "🌚", "🌗", "🌑"];

// load saved theme
let index = localStorage.getItem("themeIndex");

index = index !== null ? parseInt(index) : 0;

// apply saved theme
applyTheme(index);

toggleBtn.addEventListener("click", () => {
  index = (index + 1) % themes.length;
  applyTheme(index);

  // EFFECT RUN HERE
  runThemeEffect(themes[index]);

  localStorage.setItem("themeIndex", index);
});

function applyTheme(i) {
  document.body.classList.remove(...themes);
  document.body.classList.add(themes[i]);
  toggleBtn.textContent = icons[i];
}

/* =========================
   RAINY THEME THEME EFFECTS
========================= */

function runThemeEffect(theme) {
  const interval = setInterval(() => {
    const el = document.createElement("div");

    /* LIGHT */
    if (theme === "light") {
      el.classList.add("light-cloud");

      el.innerHTML = Math.random() > 0.5 ? "☁️" : "🌈";
    } else if (theme === "dark") {
      /* DARK */
      el.classList.add("dark-star");

      el.innerHTML = Math.random() > 0.5 ? "⭐" : "✨";
    } else if (theme === "dim") {
      /* DIM */
      el.classList.add("dim-bubble");

      el.innerHTML = Math.random() > 0.5 ? "🫧" : "✨";
    } else if (theme === "deep") {
      /* DEEP */
      el.classList.add("deep-glow");
      el.innerHTML = Math.random() > 0.5 ? "✦" : "✧";
    }

    /* RANDOM POSITION */
    el.style.left = Math.random() * window.innerWidth + "px";

    /* RANDOM SIZE */
    el.style.fontSize = 16 + Math.random() * 24 + "px";

    /* RANDOM SPEED */
    el.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 5000);
  }, 120); // create new symbol every 120ms

  /* STOP EFFECT AFTER 3.5 sec */

  setTimeout(() => {
    clearInterval(interval);
  }, 3500);
}
