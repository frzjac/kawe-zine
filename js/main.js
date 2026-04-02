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

    //SELECCIÓN DE ELEMENTOS DEL DOM (Interfaz)
    const btnEntrar = document.getElementById('btn-entrar');
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    const audioSelva = document.getElementById('audio-selva');

    // Configurar el volumen del audio para que sea un ambiente sutil (30%)
    audioSelva.volume = 0.7;

  
    btnEntrar.addEventListener('click', () => {
        
     
        audioSelva.play().catch(error => {
            console.log("El navegador bloqueó el audio. El usuario debe interactuar más.", error);
        });

        page1.style.opacity = '0';
        page1.style.transform = 'scale(1.05)';
        //page1.classList.remove('active');
        
        setTimeout(() => {

          page1.classList.remove('active');  
          //page2.classList.add('active');
          console.log("Transición a la página 2 completada.");
        }, 600); 


    console.log("Motor del Zine Káwe iniciado correctamente.");
  });

  
});

