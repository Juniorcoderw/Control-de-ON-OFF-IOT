const firebaseConfig = {
codex/create-complete-files-as-per-read.md-l5l1ex
=======
codex/create-complete-files-as-per-read.md-6nidn5
main
  apiKey: "AIzaSyBBf7cPeI9Z6SPN6wFlopkXg4xpZk-vm1k",
  authDomain: "control-de-on-off-iot.firebaseapp.com",
  databaseURL: "https://control-de-on-off-iot-default-rtdb.firebaseio.com",
  projectId: "control-de-on-off-iot",
  storageBucket: "control-de-on-off-iot.firebasestorage.app",
  messagingSenderId: "211697475149",
  appId: "1:211697475149:web:709ce925f7094ef733c604",
  measurementId: "G-QXRQ23FSC0"
 codex/create-complete-files-as-per-read.md-l5l1ex

  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_ID",
  appId: "TU_APP_ID"
  main
main
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();
