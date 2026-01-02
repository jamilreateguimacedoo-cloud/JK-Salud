document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por contactarnos. Te responderemos pronto.");
});

const elementos = document.querySelectorAll('.animada');

window.addEventListener('scroll', () => {
    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;
        const pantalla = window.innerHeight;
        if (posicion < pantalla - 100) {
            el.classList.add('visible');
        }
    });
});

<script>
  const elementos = document.querySelectorAll('.scroll-anim');

  const mostrarElemento = () => {
    const triggerBottom = window.innerHeight * 0.85;

    elementos.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', mostrarElemento);
  window.addEventListener('load', mostrarElemento);
</script></body>
