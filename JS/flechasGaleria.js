document.querySelector('.carrusel__flecha--izquierda').addEventListener('click', function () {
    const galeria = document.querySelector('.acces__galeria');
    galeria.scrollLeft -= 200; // Ajusta la cantidad de desplazamiento según tus necesidades
});

document.querySelector('.carrusel__flecha--derecha').addEventListener('click', function () {
    const galeria = document.querySelector('.acces__galeria');
    galeria.scrollLeft += 200; // Ajusta la cantidad de desplazamiento según tus necesidades
});

console.log("funcionando")
