// Estado + año automático (simple y estable)
document.addEventListener("DOMContentLoaded", async () => {
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  const estado = document.getElementById("estado");
  if (estado) estado.textContent = "✅ Servidor funcionando";

  // Si tu backend devuelve datos, aquí puedes conectarlo luego.
});
// Reveal on scroll (suave y sin librerías)
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".card, .project");
  items.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
});
