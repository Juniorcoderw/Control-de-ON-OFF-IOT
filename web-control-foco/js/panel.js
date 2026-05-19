const foco = document.getElementById("foco");
const texto_estado = document.getElementById("texto_estado");
const boton_on = document.getElementById("boton_on");
const boton_off = document.getElementById("boton_off");
const boton_salir = document.getElementById("boton_salir");
const mensaje = document.getElementById("mensaje");

const ruta = db.ref("/foco/estado");

function pintarEstado(estado) {
  if (estado) {
    texto_estado.textContent = "ENCENDIDO";
    foco.classList.remove("apagado");
    foco.classList.add("encendido");
  } else {
    texto_estado.textContent = "APAGADO";
    foco.classList.remove("encendido");
    foco.classList.add("apagado");
  }
}

function mostrarMensaje(texto, tipo = "") {
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`.trim();
}

function cambiarCarga(cargando) {
  boton_on.disabled = cargando;
  boton_off.disabled = cargando;
}

function traducirError(codigo) {
  const mapa = {
    "PERMISSION_DENIED": "Sin permisos para escribir en Firebase.",
    "auth/network-request-failed": "Sin conexión de red."
  };
  return mapa[codigo] || "No se pudo completar la operación.";
}

auth.onAuthStateChanged((usuario) => {
  if (!usuario) {
    window.location.href = "index.html";
    return;
  }

  ruta.on("value", (snap) => {
    const estado = !!snap.val();
    pintarEstado(estado);
  }, () => {
    mostrarMensaje("No se pudo leer el estado del foco.", "error");
  });
});

boton_on.addEventListener("click", async () => {
  cambiarCarga(true);
  try {
    await ruta.set(true);
    mostrarMensaje("Foco encendido.", "ok");
  } catch (error) {
    mostrarMensaje(traducirError(error.code), "error");
  } finally {
    cambiarCarga(false);
  }
});

boton_off.addEventListener("click", async () => {
  cambiarCarga(true);
  try {
    await ruta.set(false);
    mostrarMensaje("Foco apagado.", "ok");
  } catch (error) {
    mostrarMensaje(traducirError(error.code), "error");
  } finally {
    cambiarCarga(false);
  }
});

boton_salir.addEventListener("click", async () => {
  try {
    await auth.signOut();
    window.location.href = "index.html";
  } catch (error) {
    mostrarMensaje("No se pudo cerrar sesión.", "error");
  }
});
