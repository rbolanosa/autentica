// Ejemplo simple: Cuando se hace clic en una imagen, se puede mostrar en grande o cambiarla
// (Opcional, puedes eliminar o modificar según desees)
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        // Puedes agregar más interacción aquí
    });
});

// Función para hacer arrastrables
function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        element.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            element.style.cursor = 'grab';
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const maxWidth = window.innerWidth - element.offsetWidth;
            const maxHeight = window.innerHeight - element.offsetHeight;
            let left = e.clientX - offsetX;
            let top = e.clientY - offsetY;

            left = Math.max(0, Math.min(left, maxWidth));
            top = Math.max(0, Math.min(top, maxHeight));

            element.style.position = 'fixed';
            element.style.left = left + 'px';
            element.style.top = top + 'px';
        }
    });
}

// Código para que el carrusel cambie automáticamente y reproducir el audio al cargar
window.onload = () => {
  const images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;

  // Función para mostrar la siguiente imagen
  function showNext() {
    images.forEach((img, index) => {
      img.classList.remove('active');
      if (index === currentIndex) {
        img.classList.add('active');
      }
    });
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Iniciamos mostrando la primera
  showNext();
  setInterval(showNext, 3000); // cambia cada 3 segundos

  // Reproducir audio automáticamente
  const audio = new Audio("audio/audio.mp4");
  audio.play();

  // Control en icono — para pausar y reanudar
  const icon = document.getElementById('audioIcon');
  icon.innerHTML = '▶️';
  icon.onclick = () => {
    if (audio.paused) {
      audio.play();
      icon.innerHTML = '▶️';
    } else {
      audio.pause();
      icon.innerHTML = '⏸️';
    }
  };
};