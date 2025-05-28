firebase.auth().onAuthStateChanged((user) => {
  const userName = document.getElementById("userName");
  const loginLink = document.getElementById("loginLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    // Mostrar correo en el header
    userName.textContent = user.email;
    userName.style.display = "inline";
    loginLink.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    // Mostrar solo el botón de login
    userName.style.display = "none";
    loginLink.style.display = "inline";
    logoutBtn.style.display = "none";
  }
});

// Evento para cerrar sesión
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        location.reload(); // Recarga la página para actualizar vista
      });
    });
  }
});

