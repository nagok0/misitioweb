const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("perfilForm");
  const nombreInput = document.getElementById("nombre");
  const descripcionInput = document.getElementById("descripcion");

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const uid = user.uid;

      try {
        const doc = await db.collection("usuarios").doc(uid).get();
        if (doc.exists) {
          const data = doc.data();
          nombreInput.value = data.nombre || "";
          descripcionInput.value = data.descripcion || "";
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        alert("Hubo un error al cargar tu perfil.");
      }

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
          await db.collection("usuarios").doc(uid).set({
            nombre: nombreInput.value,
            descripcion: descripcionInput.value
          });

          alert("Perfil actualizado correctamente");
        } catch (error) {
          console.error("Error al guardar los datos:", error);
          alert("Error al guardar los cambios.");
        }
      });
    } else {
      window.location.href = "login.html";
    }
  });
});
