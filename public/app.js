// Estado + año automático (simple y estable)
document.addEventListener("DOMContentLoaded", async () => {
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  const estado = document.getElementById("estado");
  if (estado) estado.textContent = "✅ Servidor funcionando";

  // Si tu backend devuelve datos, aquí puedes conectarlo luego.
});
