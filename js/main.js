console.log("¡Hola, Káwe! El Despertar del Origen está en marcha.");



document.addEventListener('DOMContentLoaded', () => {    
    
    const animacionPortada = lottie.loadAnimation({
        container: document.getElementById('lottie-portada'), // El ID del div en tu HTML
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // rutas de animación         
        path: 'https://assets2.lottiefiles.com/packages/lf20_yzoqyyqf.json' 
    });

    // Lottie  para la Página 2 ( hojas/naturaleza)
    const animacionTerritorio = lottie.loadAnimation({
        container: document.getElementById('lottie-territorio'),
        renderer: 'svg',
        loop: true,
        autoplay: false, // No se reproduce hasta que entremos a la página 2
        path: 'https://lottie.host/e6237b0d-d240-4419-8990-8465178270b8/VqxIKfyuOb.json' 
    });

    //SELECCIÓN DE ELEMENTOS DEL DOM (Interfaz)
    const btnEntrar = document.getElementById('btn-entrar');
    const zineNav = document.getElementById('zine-nav'); // Seleccionamos la navegación
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    const audioSelva = document.getElementById('audio-selva');

    // Configurar el volumen del audio para que sea un ambiente sutil (30%)
    audioSelva.volume = 0.7;

  
    btnEntrar.addEventListener('click', () => {
        
     
        audioSelva.play().catch(error => {
            console.log("El navegador bloqueó el audio. El usuario debe interactuar más.", error);
        });

        // gsap timeline 
        const tlTransicion = gsap.timeline();
        tlTransicion.to(page1, {
            opacity: 0,
            scale: 1.1,
            duration: 0.6,
            ease: "power1.inOut",
            onComplete: () => {
                page1.style.display = 'none'; // Oculta completamente la página 1
                page2.style.display = 'grid'; // Muestra la página 2
                zineNav.style.display = 'flex'; // Muestra la navegación
                animacionTerritorio.play();
                console.log("Transición a la página 2 completada.");
            }
        })
        .to(page2, {
            opacity: 1,
            //scale: 1,
            duration: 0.6,
            ease: "power1.Out"
        })
        .fromTo(zineNav,{
            y: 50,
            opacity: 0
        },{
            y: 0,
            duration: 0.5,
            opacity: 1,
            ease: "back.out(1.5)"
        }, "-=0.4") // Comienza un poco antes de que termine la animación de page2
        .to(".linea-decorativa", {
            width: "80px",
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.2")
        .from(".territorio-texto p",{
            y: 30, // Caen desde 30px abajo
            opacity: 0,
            duration: 0.6,
            stagger: 0.2, // Retraso de 0.2s entre cada párrafo
            ease: "power2.out"
        }, "-=0.3")
        .to(".path-rio", {
            strokeDashoffset: 0,
            duration: 2,
            ease: "sine.inOut"
        }, "-=0.5"); // Comienza un poco antes de que termine la animación de page1


        

    console.log("Motor del Zine Káwe iniciado correctamente.");
  });

  btnPrev.addEventListener('click', () => {
    const tlBack = gsap.timeline();
    tlBack.to([page2, zineNav], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            page2.style.display = 'none';
            zineNav.style.display = 'none'; // oculta la navegación al volver a la portada
            page1.style.display = 'grid';  // Muestra la página 1
            animacionTerritorio.stop(); // Detiene la animación de la página 2
            // Reseteamos elementos de la P2 por si volvemos a entrar
            gsap.set(".linea-decorativa", { width: 0 });  // Reseteamos los párrafos
            gsap.set(".path-rio", { strokeDashoffset: 1000 }) // Reseteamos el río
        }
    })
    .to(page1, {
        opacity: 1,
        scale: 1, // Volvemos a la escala original
        duration: 0.6,
        ease: "power1.out"
    });
    // ..
  });

  btnNext.addEventListener('click', () => {
    console.log("Preparando transición a la Página 3: La Minga...");
  });
  
});

