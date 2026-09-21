// Esperar de manera segura a que todo el árbol HTML esté disponible en el navegador
document.addEventListener("DOMContentLoaded", function() {
    
    // Obtener las referencias de los botones y pantallas
    const btnOpen = document.getElementById('btn-open');
    const btnShowLetter = document.getElementById('btn-show-letter');
    const btnCloseLetter = document.getElementById('btn-close-letter');
    
    const giftScreen = document.getElementById('gift-screen');
    const mainContent = document.getElementById('main-content');
    const letterModal = document.getElementById('letter');

    // Función segura para abrir la caja de regalo
    if (btnOpen) {
        btnOpen.addEventListener('click', function() {
            giftScreen.style.display = 'none';
            mainContent.style.display = 'block';
        });
    }

    // Función para mostrar la carta oculta
    if (btnShowLetter) {
        btnShowLetter.addEventListener('click', function() {
            letterModal.style.display = 'block';
        });
    }

    // Función para cerrar la carta oculta
    if (btnCloseLetter) {
        btnCloseLetter.addEventListener('click', function() {
            letterModal.style.display = 'none';
        });
    }
});
