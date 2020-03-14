importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyBtghZrDoyOExGf_VUIzOYtqjY1gLODNEc",
  authDomain: "dsc29feb.firebaseapp.com",
  databaseURL: "https://dsc29feb.firebaseio.com",
  projectId: "dsc29feb",
  storageBucket: "dsc29feb.appspot.com",
  messagingSenderId: "335804497951",
  appId: "1:335804497951:web:40f0fc8e65c4c96d11952a",
  measurementId: "G-6JDZD1MHME"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});