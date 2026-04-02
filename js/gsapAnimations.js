// Animación de Montañas: Efecto Parallax infinito de desplazamiento lateral
gsap.to(".montana-fondo", {
    x: 40,             // Se mueve 40px hacia la derecha
    duration: 5,      // Tarda 12 segundos (muy lento y sutil)
    ease: "sine.inOut", // Curva de aceleración muy natural
    yoyo: true,        // Cuando termina, vuelve a la posición original
    repeat: -1         // -1 significa que se repetirá infinitamente
});

gsap.to(".montana-frente", {
    x: -50,            // Se mueve en dirección contraria para mayor profundidad
    duration: 15,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
});

// Animación de Hojas: Efecto de viento moviendo la maleza
gsap.to(".hoja-izq", {
    rotation: 12,      // Rota 12 grados desde su origen (la base)
    duration: 5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
});

gsap.to(".hoja-der", {
    rotation: -15,     // Rota en sentido contrario
    duration: 6.5,     // Duración diferente a la hoja izq. para que sea asimétrico y orgánico
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
});

// Ave 1 (paneo suave a la derecha con leve subida)
    gsap.to(".ave-1", {
        x: 100,            // Se mueve 100px a la derecha
        y: -30,            // Sube 30px suavemente
        duration: 15,      // Tarda 25 segundos (muy lento)
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });

    // Ave 2 (paneo más corto a la izquierda con leve descenso)
    gsap.to(".ave-2", {
        x: -80,            // Se mueve 80px a la izquierda
        y: 20,             // Baja 20px suavemente
        rotation: 5,       // Gira 5 grados para dar ángulo
        duration: 20,      
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });