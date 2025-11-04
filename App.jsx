import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig"; 
import "./App.css";
import Login from "./login"; 

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <h1>Autenticação Firebase</h1>
      {user ? (
        <div>
          <p>Bem-vindo, {user.email}</p>
          <button onClick={() => auth.signOut()}>Sair</button>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
