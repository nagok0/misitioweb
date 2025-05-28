// dashboard.js
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const userId = user.uid;
    firebase.firestore().collection("users").doc(userId).get()
      .then((doc) => {
        if (doc.exists) {
          document.getElementById("userName").innerText = doc.data().nombre;
        }
      });
  }
});

document.getElementById("goHomeBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

