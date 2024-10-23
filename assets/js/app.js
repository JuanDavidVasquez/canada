gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const wraps = document.querySelectorAll('.wrap');

    gsap.to(".container-wrap", {
        xPercent: -100 * (wraps.length - 1), // Mover hacia la izquierda por cada wrap
        ease: "none",
        scrollTrigger: {
            trigger: ".container-wrap",
            pin: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (wraps.length - 1), // Asegurarse de que el desplazamiento se ajuste a cada sección
                duration: 0.2,
                delay: 0.1,
            },
            end: () => "+=" + (wraps.length * 100) + "%", // El ancho total del contenedor
        }
    });
});
