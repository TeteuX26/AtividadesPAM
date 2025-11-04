import { useState } from "react";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = "/perfil.html"; // redireciona após login
    } catch (error) {
      setErro("Erro ao fazer login: " + error.message);
    }
  }

  async function handleCadastro() {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      setErro("Erro ao cadastrar: " + error.message);
    }
  }

  return (
    <div>
      <h2>Login Firebase</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
      <button onClick={handleCadastro}>Cadastrar</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}

export default Login;
