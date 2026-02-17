importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDwIGeziyq7cQQqQp8PuAVPw6c9J8-9o1g",
  authDomain: "popup-bfbde.firebaseapp.com",
  projectId: "popup-bfbde",
  storageBucket: "popup-bfbde.firebasestorage.app",
  messagingSenderId: "402296852000",
  appId: "1:402296852000:web:09fcc8966b238288a5f645",
  measurementId: "G-NYVPD0QYYD"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
    vibrate: [200, 100, 200]
  });
});
