const btnTema = document.getElementById('btn-tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Oscuro';
    }
});

const btnSaludo = document.getElementById('btn-saludo');
const mensaje = document.getElementById('mensaje');

btnSaludo.addEventListener('click', () => {
    mensaje.textContent = '🚀 ¡Qué gusto verte por aquí! Estás haciendo un gran trabajo.';
});

const btnIncrementar = document.getElementById('btn-incrementar');
const spanContador = document.getElementById('contador');
let contador = 0;

btnIncrementar.addEventListener('click', () => {
    contador++;
    spanContador.textContent = contador;
});
