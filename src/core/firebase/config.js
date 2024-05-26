import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnE3KRitPsEhV_U3W14WS-5wnOyP-uoJI",
  authDomain: "kids-tv-5a099.firebaseapp.com",
  projectId: "kids-tv-5a099",
  storageBucket: "kids-tv-5a099.appspot.com",
  messagingSenderId: "158404367800",
  appId: "1:158404367800:web:fc6fd356a709c198daeb4d",
  measurementId: "G-C558RV25QT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
