// body.js — rama: feature/body
// Lista de platos desde un array + modal de detalle.

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Datos de los platos (estáticos) ---------- */
  const PLATOS = [
    {
      id: 'ceviche',
      nombre: 'Ceviche Clásico',
      precio: 'S/ 32',
      descripcion: 'Pescado fresco del día marinado en limón, cebolla roja, ají limo y cilantro. Servido con camote y choclo.',
      imagen: 'img/ceviche.jpg'
    },
    {
      id: 'lomo',
      nombre: 'Lomo Saltado',
      precio: 'S/ 38',
      descripcion: 'Trozos de lomo fino salteados al wok con cebolla, tomate y ají amarillo. Acompañado de papas fritas y arroz.',
      imagen: 'img/lomo.jpg'
    },
    {
      id: 'aji',
      nombre: 'Ají de Gallina',
      precio: 'S/ 30',
      descripcion: 'Pechuga de pollo deshilachada en crema de ají amarillo, leche y pan. Con arroz, papa y huevo duro.',
      imagen: 'img/aji.jpg'
    },
    {
      id: 'anticucho',
      nombre: 'Anticuchos',
      precio: 'S/ 28',
      descripcion: 'Brochetas de corazón de res marinadas en ají panca y especias, a la parrilla. Con papa dorada y choclo.',
      imagen: 'img/anticucho.jpg'
    },
    {
      id: 'causa',
      nombre: 'Causa Limeña',
      precio: 'S/ 26',
      descripcion: 'Masa de papa amarilla con ají amarillo, rellena de pollo y palta. Servida fría con huevo y aceituna.',
      imagen: 'img/causa.jpg'
    },
    {
      id: 'suspiro',
      nombre: 'Suspiro a la Limeña',
      precio: 'S/ 18',
      descripcion: 'Postre tradicional: manjar blanco aromatizado con vainilla, cubierto de merengue y canela.',
      imagen: 'img/suspiro.jpg'
    }
  ];

  /* ---------- Render de la lista ---------- */
  const lista = document.getElementById('lista-platos');

  PLATOS.forEach((plato) => {
    const li = document.createElement('li');
    li.className = 'plato-card';
    li.dataset.plato = plato.id;

    const img = document.createElement('img');
    img.src = plato.imagen;
    img.alt = plato.nombre;
    img.loading = 'lazy';

    const info = document.createElement('div');
    info.className = 'plato-card__info';
    info.innerHTML = `
      <h3 class="plato-card__nombre">${plato.nombre}</h3>
      <p class="plato-card__precio">${plato.precio}</p>
    `;

    li.appendChild(img);
    li.appendChild(info);
    li.addEventListener('click', () => abrirModalPlato(plato.id));
    lista.appendChild(li);
  });

  /* ---------- Modal de plato ---------- */
  const modal     = document.getElementById('modal-plato');
  const imgEl     = document.getElementById('plato-imagen');
  const tituloEl  = document.getElementById('titulo-plato');
  const precioEl  = document.getElementById('plato-precio');
  const descEl    = document.getElementById('plato-descripcion');
  const cerrarBtn = modal.querySelector('.modal-cerrar');

  function abrirModalPlato(id) {
    const plato = PLATOS.find((p) => p.id === id);
    if (!plato) return;

    imgEl.src            = plato.imagen;
    imgEl.alt            = plato.nombre;
    tituloEl.textContent = plato.nombre;
    precioEl.textContent = plato.precio;
    descEl.textContent   = plato.descripcion;

    modal.classList.add('abierto');
    modal.setAttribute('aria-hidden', 'false');
  }

  function cerrarModalPlato() {
    modal.classList.remove('abierto');
    modal.setAttribute('aria-hidden', 'true');
  }

  cerrarBtn.addEventListener('click', cerrarModalPlato);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModalPlato();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('abierto')) {
      cerrarModalPlato();
    }
  });

});