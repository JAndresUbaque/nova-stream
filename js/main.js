// js/main.js
console.log("🚀 NovaStream JS cargado correctamente!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ DOM completamente cargado");

    // ==================== CARRUSELES ====================
    function initCarousels() {
        const carousels = document.querySelectorAll('.carousel');

        carousels.forEach(carousel => {
            const id = carousel.id;
            
            // Buscamos los botones específicos de ESTE carrusel
            const prevBtn = document.querySelector(`.carousel-btn.prev[data-carousel="${id}"]`);
            const nextBtn = document.querySelector(`.carousel-btn.next[data-carousel="${id}"]`);

            if (!prevBtn || !nextBtn) {
                console.warn(`⚠️ Botones no encontrados para el carrusel: ${id}`);
                return; // saltamos este carrusel
            }

            // ← Botón Anterior
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: -320,           // ancho aproximado de una tarjeta + gap
                    behavior: 'smooth'
                });
            });

            // → Botón Siguiente
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: 320,
                    behavior: 'smooth'
                });
            });

            console.log(`✅ Controles activados para: ${id}`);
        });
    }

    // Inicializamos todo
    initCarousels();
});