document.getElementById('campañaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const titulo = document.getElementById('titulo').value;
  const descripcion = document.getElementById('descripcion').value;
  const meta = document.getElementById('meta').value;
  const categoria = document.getElementById('categoria').value;
  const ubicacion = document.getElementById('ubicacion').value;
  const fecha = document.getElementById('fecha').value;
  const imagenInput = document.getElementById('imagen');

  const reader = new FileReader();
  reader.onload = function () {
    const imagenBase64 = reader.result;

    const nuevaCampaña = {
      titulo,
      descripcion,
      meta,
      categoria,
      ubicacion,
      fecha,
      imagen: imagenBase64
    };

    // Obtener campañas existentes
    const campañasExistentes = JSON.parse(localStorage.getItem('campañas')) || [];

    // Agregar la nueva
    campañasExistentes.push(nuevaCampaña);

    // Guardar de nuevo
    localStorage.setItem('campañas', JSON.stringify(campañasExistentes));

    alert('¡Campaña creada exitosamente!');

    // Redirigir a explorar
    window.location.href = 'explorar-campaña.html';
  };

  if (imagenInput.files[0]) {
    reader.readAsDataURL(imagenInput.files[0]);
  } else {
    alert('Por favor selecciona una imagen.');
  }
});
