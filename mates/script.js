// Funcionalidad del reproductor de radio
const playBtn = document.querySelector('.play-btn');
const playIcon = playBtn.querySelector('i');
const radioAudio = document.getElementById('radio-audio');
let isPlaying = false;

// Configurar el volumen inicial
radioAudio.volume = 0.8;

playBtn.addEventListener('click', function() {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        // Reproducir audio
        radioAudio.play()
            .then(() => {
                playIcon.classList.replace('fa-play', 'fa-pause');
                this.classList.add('pulse');
                document.querySelector('.player-title').textContent = "EN VIVO - ESCUCHANDO";
            })
            .catch(error => {
                console.error("Error al reproducir audio:", error);
                isPlaying = false;
            });
    } else {
        // Pausar audio
        radioAudio.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');
        this.classList.remove('pulse');
        document.querySelector('.player-title').textContent = "EN VIVO";
    }
});

// Control de volumen
const volumeControl = document.querySelector('.volume-control input');
volumeControl.addEventListener('input', function() {
    radioAudio.volume = this.value / 100;
});

// Botones de control (anterior/siguiente - solo visual)
document.querySelector('.control-btn[title="Anterior"]').addEventListener('click', function() {
    if (isPlaying) {
        // Solo efecto visual
        alert('Función de anterior deshabilitada - Solo un programa disponible');
    }
});

document.querySelector('.control-btn[title="Siguiente"]').addEventListener('click', function() {
    if (isPlaying) {
        // Solo efecto visual
        alert('Función de siguiente deshabilitada - Solo un programa disponible');
    }
});

// Efecto hover en las tarjetas de programas
const showCards = document.querySelectorAll('.show-card');
showCards.forEach(card => {
    const image = card.querySelector('.show-image');
    if (image) {
        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            image.style.transform = '';
        });
    }
});

// Simular botón de llamada
const callButton = document.querySelector('.call-button');
callButton.addEventListener('click', function() {
    // Cambiar el texto y estilo del botón
    this.innerHTML = '<i class="fas fa-phone-alt"></i> CONECTANDO...';
    this.style.background = 'var(--gold)';
    
    // Simular llamada después de 2 segundos
    setTimeout(() => {
        const isConnected = confirm('¡Estás a punto de conectarte en vivo! ¿Quieres continuar?');
        
        if (isConnected) {
            this.innerHTML = '<i class="fas fa-check"></i> ¡EN VIVO!';
            this.style.background = 'var(--success)';
            
            // Simular que el usuario está en el aire
            setTimeout(() => {
                alert('¡Estás en el aire! Habla ahora con el presentador.');
                
                // Finalizar llamada después de 5 segundos
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-phone-alt"></i> CONECTAR AHORA';
                    this.style.background = 'var(--accent)';
                }, 5000);
            }, 1000);
        } else {
            this.innerHTML = '<i class="fas fa-phone-alt"></i> CONECTAR AHORA';
            this.style.background = 'var(--accent)';
        }
    }, 2000);
});