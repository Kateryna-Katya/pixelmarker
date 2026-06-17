document.addEventListener("DOMContentLoaded", () => {
  const demoBtn = document.querySelector(".demo-btn");
  const fullscreenBtn = document.getElementById("fullscreenBtn");

  const iframeWrapper = document.querySelector(".iframe-wrapper");
  const iframe = document.getElementById("gameIframe");
  const closeBtn = document.getElementById("closeIframeBtn");

  if (
    !demoBtn ||
    !fullscreenBtn ||
    !iframe ||
    !closeBtn ||
    !iframeWrapper
  ) return;

  let gameStarted = false;

  function launchGame(url) {
    iframe.src = url;

    iframe.classList.add("active");
    iframeWrapper.classList.add("active");
    closeBtn.classList.add("active");

    demoBtn.style.display = "none";

    gameStarted = true;
  }

  // START GAME
  demoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!gameStarted) {
      launchGame(demoBtn.dataset.gameUrl);
    }
  });

  // FULLSCREEN
  fullscreenBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // якщо гра ще не запущена
    if (!gameStarted) {
      launchGame(fullscreenBtn.dataset.gameUrl);
    }

    // перемикання великого режиму
    iframeWrapper.classList.toggle("fullscreen-section");
  });

  // CLOSE
  closeBtn.addEventListener("click", () => {
    iframe.src = "";

    iframe.classList.remove("active");

    iframeWrapper.classList.remove(
      "active",
      "fullscreen-section"
    );

    closeBtn.classList.remove("active");

    demoBtn.style.display = "block";

    gameStarted = false;
  });
});