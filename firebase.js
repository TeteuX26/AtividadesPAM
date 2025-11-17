const firebaseConfig = {
  apiKey: "AIzaSyAtrYkOR2mMPXKGd42Ms9mBcJtK2wXe3sY",
  authDomain: "autenticacao-4fab6.firebaseapp.com",
  projectId: "autenticacao-4fab6",
  storageBucket: "autenticacao-4fab6.firebasestorage.app",
  messagingSenderId: "398098003953",
  appId: "1:398098003953:web:1e96eda2707673c9b93650"
};

// Inicializando Firebase (v8)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// --- LOGIN ---
function login() {
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
            alert("Login realizado com sucesso!");
            window.location.href = "Perfil.html";
        })
        .catch(() => {
            alert("Erro: Login inválido");
        });
}

// --- REGISTRO ---
function registrar() {
    const email = document.getElementById("emailRegistro").value;
    const senha = document.getElementById("senhaRegistro").value;

    auth.createUserWithEmailAndPassword(email, senha)
        .then(() => {
            alert("Conta criada com sucesso!");
            window.location.href = "Perfil.html";
        })
        .catch((error) => {
            alert("Erro ao registrar: " + error.message);
        });
}

// TROCAR TELA
function mostrarRegistro() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registroBox").style.display = "block";
}

function mostrarLogin() {
    document.getElementById("registroBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}
