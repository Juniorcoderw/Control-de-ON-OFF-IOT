# Web Control de Foco IoT

Aplicación web simple para iniciar sesión y controlar remotamente un foco (ON/OFF) usando Firebase Authentication y Firebase Realtime Database.

## Contexto académico
Proyecto del curso de **Sistemas Eléctricos y Electrónicos** (Ingeniería en Informática y Sistemas) para integrar web + nube + hardware (ESP32 + relé).

## Arquitectura del sistema
Usuario → Web App → Firebase → ESP32 → Módulo relé → Foco 220V AC

## Tecnologías
- HTML
- CSS
- JavaScript vanilla
- Firebase Authentication
- Firebase Realtime Database
- Vercel

## Estructura
```text
web-control-foco/
├── README.md
├── index.html
├── panel.html
├── css/
│   └── style.css
└── js/
    ├── firebase-config.js
    ├── login.js
    └── panel.js
```

## Configuración Firebase (paso a paso)
1. Crea un proyecto en Firebase Console.
2. Ve a **Authentication > Sign-in method** y habilita **Email/Password**.
3. Crea **Realtime Database**.
4. En la base crea el nodo inicial:
```json
{
  "foco": {
    "estado": false
  }
}
```
5. Copia tus credenciales web y reemplaza los valores de `js/firebase-config.js`.

### Reglas mínimas sugeridas (entorno académico)
> Ajusta estas reglas antes de producción real.

```json
{
  "rules": {
    "foco": {
      "estado": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
  }
}
```

## Ejecución local
1. Entra a la carpeta `web-control-foco`.
2. Configura `js/firebase-config.js`.
3. Levanta servidor estático, por ejemplo:
   - `python -m http.server 5500`
4. Abre `http://localhost:5500`.

## Despliegue en Vercel
1. Sube el repo a GitHub.
2. Importa el repo en Vercel.
3. Mantén configuración de sitio estático.
4. Verifica que Vercel publique `web-control-foco`.
5. Despliega y valida login + panel.

## Funcionamiento
- `index.html`: login y registro con correo/contraseña.
- `panel.html`: control ON/OFF en tiempo real.
- Botón **ENCENDER** escribe `true` en `/foco/estado`.
- Botón **APAGAR** escribe `false` en `/foco/estado`.
- El estado visual del foco se actualiza automáticamente.
- `panel.html` exige usuario autenticado.

## Ruta Firebase usada
`/foco/estado`

## Checklist para aceptar PR en GitHub
- [ ] Credenciales reales cargadas en `js/firebase-config.js`.
- [ ] Authentication Email/Password habilitado.
- [ ] Realtime Database creada con nodo `/foco/estado`.
- [ ] Reglas de lectura/escritura para usuarios autenticados.
- [ ] Prueba manual: login, registro, encender, apagar y cerrar sesión.

## Nota de seguridad
El ESP32 y el relé controlan una carga de **220V AC**. La conexión física debe hacerse con aislamiento, protección y supervisión de una persona capacitada.
