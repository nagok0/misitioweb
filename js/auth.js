// auth.js
firebase.auth().onAuthStateChanged((user) => {
  if (!user && window.location.pathname.includes("dashboard")) {
    window.location.href = "login.html";
  }
});