const model = {
  message: "🌟 Esta flor es para ti mi vida, Madeley 💛 Te amo mucho 💕",
  flowers: 1 // solo 1 flor
};

// ---- Mensaje con efecto de escritura ----
function typeMessage(text, speed = 100) {
  const messageDiv = document.getElementById("message");
  let i = 0;
  function typing() {
    if (i < text.length) {
      messageDiv.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// ---- Renderizar flores ----
function renderFlowers() {
  const garden = document.getElementById("garden");
  for (let i = 0; i < model.flowers; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // 8 pétalos
    for (let j = 0; j < 8; j++) {
      const petal = document.createElement("div");
      petal.classList.add("petal");
      flower.appendChild(petal);
    }

    // Centro
    const center = document.createElement("div");
    center.classList.add("center");
    flower.appendChild(center);

    // Tallo
    const stem = document.createElement("div");
    stem.classList.add("stem");
    flower.appendChild(stem);

    // Hojas
    const leafLeft = document.createElement("div");
    leafLeft.classList.add("leaf", "leaf-left");
    flower.appendChild(leafLeft);

    const leafRight = document.createElement("div");
    leafRight.classList.add("leaf", "leaf-right");
    flower.appendChild(leafRight);

    garden.appendChild(flower);
  }
}

// ---- Estrellas estáticas ----
function renderStaticStars(count = 100) {
  const container = document.querySelector(".stars");
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    const size = Math.random() * 2.2 + 1.2;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.setProperty("--tw", (Math.random() * 3 + 2) + "s");
    star.style.setProperty("--delay", (Math.random() * 5) + "s");
    container.appendChild(star);
  }
}

// ---- Estrella fugaz ----
function createShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  const startX = -150;
  const startY = window.innerHeight * 0.3 + Math.random() * (window.innerHeight * 0.4);
  const endX = window.innerWidth + 150;
  const endY = startY + (Math.random() * 60 - 30);
  const dx = endX - startX;
  const dy = endY - startY;
  const distance = Math.hypot(dx, dy);
  const angle = (Math.atan2(dy, dx) * 180 / Math.PI) + "deg";

  star.style.left = startX + "px";
  star.style.top = startY + "px";
  star.style.setProperty("--dx", dx + "px");
  star.style.setProperty("--dy", dy + "px");
  star.style.setProperty("--len", Math.max(120, distance * 0.3) + "px");
  star.style.setProperty("--angle", angle);

  const duration = (Math.random() * 1 + 1.2).toFixed(2);
  star.style.animation = `shoot ${duration}s linear forwards`;

  document.body.appendChild(star);
  setTimeout(() => star.remove(), duration * 1000 + 200);
}

// ---- Reproducir música con botón ----
function addMusicButton() {
  const btn = document.getElementById("musicBtn");
  const audio = document.getElementById("bgMusic");

  btn.addEventListener("click", () => {
    audio.play();
    btn.textContent = "🎵 Reproduciendo...";
    btn.disabled = true; // opcional: desactivar el botón después
  });
}

// ---- Inicialización ----
function init() {
  typeMessage(model.message);
  renderFlowers();
  renderStaticStars(100);
  setInterval(createShootingStar, 2000);
  addMusicButton(); // <--- integración del botón
}

init();
