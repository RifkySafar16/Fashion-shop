import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD-M-Jo9PEhXZEjKVC3F9xr__hY73x8jtU",
    authDomain: "fashion-shop-1a8a0.firebaseapp.com",
    databaseURL: "https://fashion-shop-1a8a0-default-rtdb.firebaseio.com",
    projectId: "fashion-shop-1a8a0",
    storageBucket: "fashion-shop-1a8a0.appspot.com",
    messagingSenderId: "375243885439",
    appId: "1:375243885439:web:3fda4bba8261d67d0c284a"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


  export default firebase  ;