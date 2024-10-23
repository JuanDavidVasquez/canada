gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const tittleCanada = document.querySelector('.tittleCanada');

    gsap.fromTo(tittleCanada, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: tittleCanada,
            start: "top 80%"
        }
    });

    const descriptionCanada = document.querySelectorAll('.animationInit');

    descriptionCanada.forEach((element) => {
        gsap.fromTo(element, {
            y: 100, // Comienza desde 100px abajo
            opacity: 0 // Comienza completamente transparente
        }, {
            y: 0, // Se mueve a su posición original
            opacity: 1, // Se vuelve completamente visible
            duration: 2,
            scrollTrigger: {
                trigger: element, // Cambia 'descriptionCanada' por 'element'
                start: "top 70%", // Cuando el top del elemento esté en el 70% de la ventana
                end: "bottom 30%", // Finaliza la animación cuando la parte inferior del elemento está en el 30%
                onEnter: () => gsap.to(element, { y: 0, opacity: 1 }), // Al entrar
                onLeave: () => gsap.to(element, { y: 100, opacity: 0 }), // Al salir
                onEnterBack: () => gsap.to(element, { y: 0, opacity: 1 }), // Cuando vuelve a entrar
                onLeaveBack: () => gsap.to(element, { y: -100, opacity: 0 }), // Cuando sale hacia atrás
            }
        });
    });
    


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
