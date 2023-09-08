document.addEventListener("DOMContentLoaded", function () {
    const bannerFotos = document.querySelector(".banner__fotos");
    const fotos = document.querySelectorAll(".banner__img");
    const newImageURLs = [
        "../Imagenes/Modelos/Jogging_TopBlanco.jpg",
        "../Imagenes/Modelos/Pollera_TopNegro.jpg",
        "../Imagenes/Modelos/Short_RemeraNegra.jpg",
        "../Imagenes/Modelos/JoggerAncho_RemNegra.jpg"
        
        // Agrega las URL de las nuevas imágenes aquí
    ];

    let currentImage = 0;

    function changeImage() {
        currentImage = (currentImage + 1) % newImageURLs.length;
        const translateX = -currentImage * 100;
        bannerFotos.style.transform = `translateX(${translateX}%)`;
        fotos.forEach((foto, index) => {
            foto.src = newImageURLs[(currentImage + index) % newImageURLs.length];
        });
    }

    setInterval(changeImage, 500); // Cambia la imagen cada 3 segundos (ajusta según tu preferencia)
});
