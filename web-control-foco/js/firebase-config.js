const firebaseConfig = {
  apiKey: "AIzaSyBBf7cPeI9Z6SPN6wFlopkXg4xpZk-vm1k",
  authDomain: "control-de-on-off-iot.firebaseapp.com",
  databaseURL: "https://control-de-on-off-iot-default-rtdb.firebaseio.com",
  projectId: "control-de-on-off-iot",
  storageBucket: "control-de-on-off-iot.firebasestorage.app",
  messagingSenderId: "211697475149",
  appId: "1:211697475149:web:709ce925f7094ef733c604",
  measurementId: "G-QXRQ23FSC0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();
