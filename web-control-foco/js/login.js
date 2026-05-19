const form_login = document.getElementById("form_login");
const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const boton_login = document.getElementById("boton_login");
const boton_registro = document.getElementById("boton_registro");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo = "") {
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`.trim();
}

function cambiarCarga(cargando) {
  boton_login.disabled = cargando;
  boton_registro.disabled = cargando;
  boton_login.textContent = cargando ? "Procesando..." : "Iniciar sesión";
}

function datos() {
  return {
    correo: correo.value.trim().toLowerCase(),
    clave: clave.value.trim()
  };
}

function validarCampos() {
  const dato = datos();

  if (!dato.correo || !dato.clave) {
    mostrarMensaje("Completa correo y contraseña.", "error");
    return false;
  }

  if (dato.clave.length < 6) {
    mostrarMensaje("La contraseña debe tener al menos 6 caracteres.", "error");
    return false;
  }

  return true;
}

function traducirError(codigo) {
  const mapa = {
    "auth/invalid-email": "Correo no válido.",
    "auth/user-not-found": "El usuario no existe.",
    "auth/wrong-password": "Contraseña incorrecta.",
    "auth/invalid-credential": "Correo o contraseña incorrectos.",
    "auth/email-already-in-use": "Este correo ya está registrado.",
    "auth/weak-password": "La contraseña es muy débil.",
 codex/create-complete-files-as-per-read.md-l5l1ex
    "auth/too-many-requests": "Demasiados intentos. Intenta más tarde.",
    "auth/operation-not-allowed": "Login con correo/clave no está habilitado en Firebase.",
    "auth/network-request-failed": "Sin conexión de red.",
    "auth/invalid-api-key": "API key inválida. Revisa firebase-config.js.",
    "auth/app-not-authorized": "Dominio no autorizado en Firebase Authentication."
  };

  if (mapa[codigo]) return mapa[codigo];
  return `Error de acceso (${codigo || "sin-código"}). Revisa Firebase Auth y dominio autorizado.`;
    "auth/too-many-requests": "Demasiados intentos. Intenta más tarde."
  };

  return mapa[codigo] || "Ocurrió un error. Revisa tus datos e intenta de nuevo.";
 main
}

form_login.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validarCampos()) return;

  cambiarCarga(true);
  try {
    const dato = datos();
    await auth.signInWithEmailAndPassword(dato.correo, dato.clave);
    mostrarMensaje("Login correcto. Redirigiendo...", "ok");
    setTimeout(() => {
      window.location.href = "panel.html";
    }, 500);
  } catch (error) {
    mostrarMensaje(traducirError(error.code), "error");
  } finally {
    cambiarCarga(false);
  }
});

boton_registro.addEventListener("click", async () => {
  if (!validarCampos()) return;

  cambiarCarga(true);
  try {
    const dato = datos();
    await auth.createUserWithEmailAndPassword(dato.correo, dato.clave);
    mostrarMensaje("Cuenta creada con éxito. Ahora puedes ingresar.", "ok");
  } catch (error) {
    mostrarMensaje(traducirError(error.code), "error");
  } finally {
    cambiarCarga(false);
  }
});

auth.onAuthStateChanged((usuario) => {
  if (usuario) {
    window.location.href = "panel.html";
  }
});
