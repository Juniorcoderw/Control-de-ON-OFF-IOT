# Control-de-ON-OFF-IOT
Proyecto de Sistemas electricos y electronicos
Crea una Web App sencilla, funcional y visualmente atractiva para controlar un foco IoT.

CONTEXTO DEL PROYECTO:
El proyecto pertenece al curso de Sistemas Eléctricos y Electrónicos de la carrera de Ingeniería en Informática y Sistemas. La idea es controlar remotamente un foco domiciliario de 220V AC usando una Web App desplegable en Vercel, Firebase y un ESP32 conectado a un módulo relé.

Arquitectura del sistema:
Usuario → Web App → Firebase → ESP32 → Módulo relé → Foco 220V AC

La Web App será usada para iniciar sesión y enviar la orden de encendido o apagado del foco. Firebase Realtime Database guardará el estado del foco, y el ESP32 leerá ese estado para activar o desactivar el relé.

TECNOLOGÍAS:
- HTML
- CSS
- JavaScript vanilla
- Firebase Authentication
- Firebase Realtime Database
- Vercel para despliegue

ESTRUCTURA DEL PROYECTO:
Crear esta estructura:

web-control-foco/
│
├── README.md
├── index.html
├── panel.html
│
├── css/
│   └── style.css
│
└── js/
    ├── firebase-config.js
    ├── login.js
    └── panel.js

FUNCIONALIDAD:
1. En index.html crear una pantalla de login con correo y contraseña.
2. Permitir iniciar sesión con Firebase Authentication.
3. Permitir crear cuenta con correo y contraseña.
4. Validar campos vacíos.
5. Mostrar mensajes simples de error o éxito.
6. Si el login es correcto, redirigir a panel.html.
7. En panel.html mostrar una tarjeta de control del foco.
8. Mostrar el estado actual del foco: ENCENDIDO o APAGADO.
9. Crear botón ENCENDER que escriba true en Firebase Realtime Database en la ruta /foco/estado.
10. Crear botón APAGAR que escriba false en Firebase Realtime Database en la ruta /foco/estado.
11. Leer en tiempo real el estado desde /foco/estado y actualizar la interfaz automáticamente.
12. Agregar botón cerrar sesión.
13. Proteger panel.html para que solo pueda entrar un usuario autenticado.
14. Crear diseño moderno, responsive y bonito.
15. Usar fondo azul oscuro, tarjeta central, botones grandes e ícono de foco.
16. El foco debe cambiar visualmente cuando esté encendido o apagado.

DISEÑO:
- Interfaz limpia y moderna.
- Responsive para celular y computadora.
- No usar frameworks.
- No usar React.
- No usar Bootstrap.
- Solo HTML, CSS y JavaScript vanilla.
- Estilo visual tipo panel IoT moderno.
- Colores recomendados: azul navy, blanco, celeste y amarillo para foco encendido.

FIREBASE:
Usar esta estructura simple en Realtime Database:

{
  "foco": {
    "estado": false
  }
}

El archivo js/firebase-config.js debe tener una plantilla clara para colocar los datos de Firebase:

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_ID",
  appId: "TU_APP_ID"
};

REGLAS DE CÓDIGO:
- Usar variables en español.
- No usar nombres de variables muy largos.
- Máximo usar nombres tipo: usuario, correo, clave, estado, foco, boton_on, boton_off, texto_estado.
- Evitar nombres largos como estadoActualDelDispositivoConectado.
- El código debe ser fácil de entender para estudiantes.
- No colocar muchos comentarios.
- Solo comentar partes importantes.
- Mantener el código ordenado y separado por archivos.
- No sobrecomplicar la lógica.
- Priorizar que funcione.

README.md:
Crear un archivo README.md con:
1. Nombre del proyecto.
2. Descripción breve.
3. Contexto académico.
4. Arquitectura del sistema.
5. Tecnologías usadas.
6. Estructura de carpetas.
7. Pasos para configurar Firebase.
8. Pasos para ejecutar localmente.
9. Pasos para desplegar en Vercel.
10. Explicación breve del funcionamiento.
11. Ruta usada en Firebase: /foco/estado.
12. Nota de seguridad: el ESP32 y el relé controlan una carga de 220V AC, por lo que la conexión física debe realizarse con cuidado, aislamiento y supervisión.

IMPORTANTE:
El resultado debe ser una primera versión funcional, simple y presentable para exposición universitaria. No debe ser demasiado compleja, pero sí debe verse profesional y permitir controlar el estado del foco desde Firebase.
