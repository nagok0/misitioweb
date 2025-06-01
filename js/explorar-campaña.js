window.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.campañas-grid');

  const campañas = JSON.parse(localStorage.getItem('campañas')) || [];

  if (campañas.length === 0) {
    contenedor.innerHTML = '<p>No hay campañas publicadas aún.</p>';
    return;
  }

  campañas.forEach(campaña => {
    const div = document.createElement('div');
    div.className = 'campaña-card';

    div.innerHTML = `
      <img src="${campaña.imagen}" alt="Imagen del proyecto">
      <h2>${campaña.titulo}</h2>
      <p>${campaña.descripcion}</p>
      <span class="meta">Meta: $${campaña.meta}</span>
    `;

    contenedor.appendChild(div);
  });
});
