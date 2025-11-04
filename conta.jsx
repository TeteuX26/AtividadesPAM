import { createUserWithEmailAndPassword } from "firebase/auth";

async function cadastrar(email, senha) {
  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    alert("Usuário cadastrado com sucesso!");
  } catch (error) {
    alert("Erro ao cadastrar: " + error.message);
  }
}
