import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGa2MJMAQV_8BPd5ZCXaAJlN-J6DPtTA0",
  authDomain: "cryptopulse-91f1b.firebaseapp.com",
  projectId: "cryptopulse-91f1b",
  storageBucket: "cryptopulse-91f1b.appspot.com",
  messagingSenderId: "756117330870",
  appId: "1:756117330870:web:ecb7d1e4af2b4d29343f17",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};
