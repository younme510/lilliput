const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const textEl = entry.target.querySelector(".type");
      if (textEl && !textEl.dataset.done) {
        typeText(textEl);
      }
    }
  });
}, { threshold: 0.6 });

slides.forEach(slide => observer.observe(slide));

function typeText(el) {
  const text = el.dataset.text;
  let i = 0;
  el.dataset.done = true;
  el.textContent = "";

  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, 50);
}
const music = document.getElementById("bgMusic");

// Play music on first user interaction
function startMusic() {
  music.play();
  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
