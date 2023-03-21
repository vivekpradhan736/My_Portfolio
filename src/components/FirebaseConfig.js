import Firebase from "firebase/compat/app";
import "firebase/compat/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdBRA09VtXOpL_aoefOrsrJEXEBNKlalo",
  authDomain: "react-portfolio-ea983.firebaseapp.com",
  databaseURL: "https://react-portfolio-ea983-default-rtdb.firebaseio.com",
  projectId: "react-portfolio-ea983",
  storageBucket: "react-portfolio-ea983.appspot.com",
  messagingSenderId: "435024386613",
  appId: "1:435024386613:web:a20e91ca1a6e324b546f7c"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;