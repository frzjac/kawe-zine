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
    const navIndicador = document.getElementById('nav-indicador');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    const page3 = document.getElementById('page-3');
    const page4 = document.getElementById('page-4');
    const audioSelva = document.getElementById('audio-selva');

    // Configurar el volumen del audio para que sea un ambiente sutil (30%)
    audioSelva.volume = 0.7;

    let paginaActual = 1; // Variable para rastrear la página actual
  
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
                paginaActual = 2; // Actualizamos la página actual
                navIndicador.innerText = "02 / 05" // Actualizamos el indicador de página
                console.log("Transición a la página 2 completada.");
            }
        })
        .to(page2, { opacity: 1, duration: 0.6, ease: "power1.Out" })
        .fromTo(zineNav,{ y: 50, opacity: 0 },{ y: 0, duration: 0.5, opacity: 1, ease: "back.out(1.5)"}, "-=0.4") // Comienza un poco antes de que termine la animación de page2
        .to(".linea-decorativa", { width: "80px", duration: 0.5, ease: "power2.out" }, "-=0.2")
        .from(".territorio-texto p",{ y: 30, opacity: 0,
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

  btnNext.addEventListener('click', () => {
    if (paginaActual === 2) {
        // Transición P2 -> P3
        console.log("Transición a la página 3 (próximamente).");
        const tl = gsap.timeline();
            tl.to(page2, { opacity: 0, duration: 0.5, onComplete: () => {
                page2.style.display = 'none';
                page3.style.display = 'block'; // P3 usa un layout normal de bloque
                paginaActual = 3;
                navIndicador.innerText = "03 / 05";
            }})
            .to(page3, { opacity: 1, duration: 0.5 })
            .from(".minga-header h2, .minga-header p", { y: 20, opacity: 0, duration: 0.5, stagger: 0.2 })
            .from(".btn-minga", { y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)" }, "-=0.2");
    }
  });

  btnPrev.addEventListener('click', () => {
    if (paginaActual === 2) {
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
    }
    else if (paginaActual === 3) {
        // Transición P3 -> P2
        // Transición P3 -> P2
            const tl = gsap.timeline();
            tl.to(page3, { opacity: 0, duration: 0.5, onComplete: () => {
                page3.style.display = 'none';
                page2.style.display = 'grid';
                paginaActual = 2;
                navIndicador.innerText = "02 / 05";
            }})
            .to(page2, { opacity: 1, duration: 0.5 });      
    }
    
    // ..


  });

  const historiasMinga = {
        "cultivo": {
            titulo: "La Sombra y la Tierra",
            texto: "A la sombra de árboles nativos, cultivamos sin forzar. Respetamos los tiempos de la selva y el suelo húmedo de Villagarzón, dejando que la naturaleza dicte el sabor de cada grano."
        },
        "mujeres": {
            titulo: "Manos Resilientes",
            texto: "Las mujeres de la región son las guardianas del proceso. Su recolección manual y selectiva asegura que solo los granos en su punto perfecto de maduración lleguen a la botella."
        },
        "origen": {
            titulo: "Un Legado Vivo",
            texto: "Cada taza de Káwe no es solo café, es una Minga. Es el esfuerzo comunitario y la resistencia de una región que transformó su historia a través de la agricultura de especialidad."
        }
    };

    const botonesMinga = document.querySelectorAll('.btn-minga');
    const modalHistoria = document.getElementById('modal-historia');
    const btnCerrarModal = document.getElementById('btn-cerrar-modal');
    
    // Abrir Modal
    botonesMinga.forEach(boton => {
        boton.addEventListener('click', function() {
            // Extraer la información según el botón clickeado
            const idData = this.getAttribute('data-id');
            const data = historiasMinga[idData];
            
            // Inyectar textos
            document.getElementById('historia-titulo').innerText = data.titulo;
            document.getElementById('historia-parrafo').innerText = data.texto;
            
            // Mostrar y animar el modal
            modalHistoria.style.display = 'flex';
            gsap.to(modalHistoria, { opacity: 1, duration: 0.4 });
            gsap.from(".modal-content", { y: 50, scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.5)" });
            gsap.fromTo(".modal-linea", { width: 0 }, { width: "80px", duration: 0.5, delay: 0.3 });
        });
    });

    // Cerrar Modal
    btnCerrarModal.addEventListener('click', () => {
        gsap.to(modalHistoria, { 
            opacity: 0, 
            duration: 0.3, 
            onComplete: () => { modalHistoria.style.display = 'none'; }
        });
    });
  
  
});

