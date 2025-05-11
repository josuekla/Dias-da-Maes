AOS.init();
function fadeInAudio(audio) {
  let volume = 0;
  audio.volume = volume;
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        const fade = setInterval(() => {
          if (volume < 1) {
            volume += 0.1;
            audio.volume = Math.min(volume, 1);
          } else {
            clearInterval(fade);
          }
        }, 200);
      })
      .catch((error) => {
        console.log("Falha ao iniciar o áudio:", error);
      });
  }
}

function mostrarSurpresa() {
  const carta = document.getElementById("carta");
  const musica = document.getElementById("musicaFundo"); // Corrigido
  carta.classList.remove("oculto");
  fadeInAudio(musica);
}

function abrirCarta(){
  const carta = document.getElementById("carta");
  carta.classList.add("aberta");
}

AOS.init({ once: true });

function flipCard(cardEl) {
  cardEl.classList.toggle('flipped');
}

