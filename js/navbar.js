// navbar.js — rama: feature/navbar
// Aquí irá: cambio de sección del main y apertura del modal de reservas.// navbar.js — rama: feature/navbar
// 1) Cambiar entre secciones del <main>
// 2) Abrir/cerrar el modal de reservas

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1) Cambio de sección ---------- */
  const enlacesSeccion = document.querySelectorAll('.navbar__link[data-seccion]');
  const secciones      = document.querySelectorAll('.seccion');

  enlacesSeccion.forEach((enlace) => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      const destino = enlace.dataset.seccion;

      enlacesSeccion.forEach((l) => l.classList.remove('activo'));
      enlace.classList.add('activo');

      secciones.forEach((s) => {
        s.classList.toggle('activa', s.id === `seccion-${destino}`);
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  /* ---------- 2) Modal de reservas ---------- */
  const modal         = document.getElementById('modal-reserva');
  const abridores     = document.querySelectorAll('[data-modal="modal-reserva"]');
  const cerrarBotones = modal.querySelectorAll('.modal-cerrar, [data-cerrar-modal]');

  const abrir = () => {
    modal.classList.add('abierto');
    modal.setAttribute('aria-hidden', 'false');
  };

  const cerrar = () => {
    modal.classList.remove('abierto');
    modal.setAttribute('aria-hidden', 'true');
  };

  abridores.forEach((b) =>
    b.addEventListener('click', (e) => { e.preventDefault(); abrir(); })
  );
  cerrarBotones.forEach((b) => b.addEventListener('click', cerrar));

  // Cerrar al hacer clic fuera del cuadro
  modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrar();
  });

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('abierto')) cerrar();
  });

});