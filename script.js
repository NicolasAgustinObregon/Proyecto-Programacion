// Función para mostrar información del planeta
function mostrarInformacion(planeta) {
    const infoText = document.getElementById('info-text');

    switch (planeta) {
        case 'mercurio':
            infoText.innerHTML = "Mercurio: El planeta más cercano al Sol. Tiene temperaturas extremas.";
            break;
        case 'venus':
            infoText.innerHTML = "Venus: Similar en tamaño a la Tierra, pero con atmósfera extremadamente densa.";
            break;
        case 'tierra':
            infoText.innerHTML = "Tierra: El único planeta conocido con vida. Tiene una atmósfera rica en oxígeno.";
            break;
        case 'marte':
            infoText.innerHTML = "Marte: Conocido como el planeta rojo, tiene grandes valles y montañas.";
            break;
        case 'jupiter':
            infoText.innerHTML = "Júpiter: El planeta más grande, con una gran tormenta roja en su atmósfera.";
            break;
        case 'saturno':
            infoText.innerHTML = "Saturno: Famoso por sus impresionantes anillos.";
            break;
        case 'urano':
            infoText.innerHTML = "Urano: Un gigante gaseoso con un color verde azulado debido al metano.";
            break;
        case 'neptuno':
            infoText.innerHTML = "Neptuno: El planeta más lejano del Sistema Solar, con vientos extremadamente fuertes.";
            break;
        default:
            infoText.innerHTML = "Haz clic en un planeta para ver más información.";
            break;
    }
}

// Agregar eventos de clic en los planetas
document.getElementById('mercurio').addEventListener('click', function() {
    mostrarInformacion('mercurio');
});

document.getElementById('venus').addEventListener('click', function() {
    mostrarInformacion('venus');
});

document.getElementById('tierra').addEventListener('click', function() {
    mostrarInformacion('tierra');
});

document.getElementById('marte').addEventListener('click', function() {
    mostrarInformacion('marte');
});

document.getElementById('jupiter').addEventListener('click', function() {
    mostrarInformacion('jupiter');
});

document.getElementById('saturno').addEventListener('click', function() {
    mostrarInformacion('saturno');
});

document.getElementById('urano').addEventListener('click', function() {
    mostrarInformacion('urano');
});

document.getElementById('neptuno').addEventListener('click', function() {
    mostrarInformacion('neptuno');
});
