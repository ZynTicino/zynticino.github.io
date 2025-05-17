importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAjCBC7kydkvMS01SZupRagnPePEf6Pwts",
  authDomain: "zynticino.firebaseapp.com",
  projectId: "zynticino",
  messagingSenderId: "1034120421170",
  appId: "1:1034120421170:web:9ec2c2c7160c184dfa012b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
