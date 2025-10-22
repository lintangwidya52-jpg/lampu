function toggleLamp(id) {
  const lamp = document.getElementById(id);
  const img = lamp.querySelector(".lamp-img");
  const statusText = lamp.querySelector(".status");
  const sound = document.getElementById("switch-sound");

  lamp.classList.toggle("on");
  sound.currentTime = 0;
  sound.play();

  if (lamp.classList.contains("on")) {
    statusText.textContent = "💡 Lampu Menyala";
    img.style.opacity = "1";
  } else {
    statusText.textContent = "🌑 Lampu Mati";
    img.style.opacity = "0.6";
  }
}
