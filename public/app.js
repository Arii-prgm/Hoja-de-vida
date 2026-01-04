async function cargar() {
  // 1) Verificar servidor
  const status = await fetch("/api/status").then(r => r.json());
  document.getElementById("estado").textContent = status.msg;

  // 2) Intentar perfil (si no hay DB todavía, mostrará error)
  try {
    const perfil = await fetch("/api/perfil").then(r => r.json());
    document.getElementById("nombre").textContent = perfil?.Nombre ?? "Tu Nombre";
    document.getElementById("titulo").textContent = perfil?.Titulo ?? "Tu título profesional";
  } catch (e) {
    document.getElementById("nombre").textContent = "Servidor OK, falta conectar la BD";
    document.getElementById("titulo").textContent = "";
  }
}

cargar();
