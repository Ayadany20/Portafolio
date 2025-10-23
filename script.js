document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("main section");
  const form = document.getElementById("contactForm");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulación de envío
    setTimeout(() => {
      mensajeExito.classList.remove("oculto");
      form.reset();

      // Oculta el mensaje después de 4 segundos
      setTimeout(() => {
        mensajeExito.classList.add("oculto");
      }, 4000);
    }, 1000);
  });

    // Ocultar secciones al inicio
    sections.forEach(sec => sec.classList.add("hidden"));

    // Mostrar sección al hacer clic en menú
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-section");

            // Ocultar todas
            sections.forEach(sec => sec.classList.add("hidden"));

            // Mostrar la elegida
            const sectionToShow = document.getElementById(targetId);
            if (sectionToShow) {
                sectionToShow.classList.remove("hidden");
                sectionToShow.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
