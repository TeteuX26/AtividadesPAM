
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAtrYkOR2mMPXKGd42Ms9mBcJtK2wXe3sY",
  authDomain: "autenticacao-4fab6.firebaseapp.com",
  projectId: "autenticacao-4fab6",
  storageBucket: "autenticacao-4fab6.firebasestorage.app",
  messagingSenderId: "398098003953",
  appId: "1:398098003953:web:1e96eda2707673c9b93650"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
