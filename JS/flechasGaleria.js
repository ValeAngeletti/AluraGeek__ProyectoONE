document.querySelector('.carrusel__flecha--izquierda').addEventListener('click', function () {
    const galeria = document.querySelector('.acces__galeria');
    galeria.scrollLeft -= 200; 
});

document.querySelector('.carrusel__flecha--derecha').addEventListener('click', function () {
    const galeria = document.querySelector('.acces__galeria');
    galeria.scrollLeft += 200; 
});

document.querySelector('.carrusel__flecha--izquierda--pants').addEventListener('click', function () {
    const galeria = document.querySelector('.pantalones__galeria');
    galeria.scrollLeft -= 200; 
});

document.querySelector('.carrusel__flecha--derecha--pants').addEventListener('click', function () {
    const galeria = document.querySelector('.pantalones__galeria');
    galeria.scrollLeft += 200; 
});

document.querySelector('.carrusel__flecha--izquierda--rem').addEventListener('click', function () {
    const galeria = document.querySelector('.remeras__galeria');
    galeria.scrollLeft -= 200; 
});

document.querySelector('.carrusel__flecha--derecha--rem').addEventListener('click', function () {
    const galeria = document.querySelector('.remeras__galeria');
    galeria.scrollLeft += 200; 
});

document.querySelector('.carrusel__flecha--izquierda--zap').addEventListener('click', function () {
    const galeria = document.querySelector('.zapatillas__galeria');
    galeria.scrollLeft -= 200; 
});

document.querySelector('.carrusel__flecha--derecha--zap').addEventListener('click', function () {
    const galeria = document.querySelector('.zapatillas__galeria');
    galeria.scrollLeft += 200; 
});


console.log("funcionando")
