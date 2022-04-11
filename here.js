var fb= require('firebase');
var firebaseConfig = initializeApp({

  apiKey: "AIzaSyCnSDQn_muHm8Be5XClS1SmZ4v4-T4L1oU",

  authDomain: "manga-63087.firebaseapp.com",

  databaseURL: "https://manga-63087-default-rtdb.firebaseio.com",

  projectId: "manga-63087",

  storageBucket: "manga-63087.appspot.com",

  messagingSenderId: "496090278870",

  appId: "1:496090278870:web:fec4436c5c9034c814d277",

  measurementId: "G-GRNBF910G5"

});

// Initialize Firebase
var firebase=fb.database()

firebase.ref("ff").set("hhh")

