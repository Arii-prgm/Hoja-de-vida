document.getElementById("anio").textContent = new Date().getFullYear();

fetch("/api/status")
  .then(r => r.json())
  .then(s => (document.getElementById("estado").textContent = s.msg))
  .catch(() => (document.getElementById("estado").textContent = "Servidor no disponible"));
