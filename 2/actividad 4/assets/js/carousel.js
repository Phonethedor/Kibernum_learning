document.addEventListener('DOMContentLoaded', function () {
    const carouselEl = document.getElementById('videoCarousel');
    if (!carouselEl) return;

    // Obtener instancia de Bootstrap y desactivar el interval automático
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, { interval: false });

    let timer = null;

    function clearAllIframes() {
        carouselEl.querySelectorAll('iframe').forEach(iframe => {
            iframe.src = '';
        });
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function buildSrc(iframe) {
        const base = (iframe.dataset.src || '').replace(/[?].*$/, '');
        const start = iframe.dataset.start || 0;
        const end = iframe.dataset.end ? '&end=' + iframe.dataset.end : '';
        // Parámetros para ocultar TODOS los elementos de YouTube
        const params = [
            'rel=0',                    // sin videos recomendados
            'controls=0',               // sin controles de reproducción
            'modestbranding=1',         // logo minimalista
            'iv_load_policy=3',         // sin anotaciones
            'showinfo=0',               // sin información del video
            'autoplay=1',               // autoplay
            'mute=1',                   // silenciado
            'playsinline=1',            // reproducir en línea
            'enablejsapi=1',            // habilitar JS API
            'fs=0',                     // sin botón de pantalla completa
            'start=' + start
        ].join('&');
        return base + '?' + params + end;
    }

    function advanceNext() {
        const nextBtn = carouselEl.querySelector('[data-bs-slide="next"]');
        if (nextBtn) {
            nextBtn.click();
        } else if (carousel && typeof carousel.next === 'function') {
            carousel.next();
        }
    }

    function loadSlideIframe(slide) {
        clearAllIframes();
        if (!slide) return;
        const iframe = slide.querySelector('iframe');
        if (!iframe) return;
        iframe.src = buildSrc(iframe);

        const start = parseFloat(iframe.dataset.start) || 0;
        const end = parseFloat(iframe.dataset.end);
        let durationSec = 5; // fallback
        if (!isNaN(end) && end > start) durationSec = end - start;
        const delay = Math.max(1000, Math.round(durationSec * 1000));

        timer = setTimeout(() => {
            advanceNext();
        }, delay);
    }

    // Cargar iframe del slide activo al inicio
    const initial = carouselEl.querySelector('.carousel-item.active');
    if (initial) loadSlideIframe(initial);

    // Al comenzar el slide, limpiar y preparar el siguiente iframe
    carouselEl.addEventListener('slide.bs.carousel', function (e) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        // breve retardo para asegurar que e.relatedTarget está listo en DOM
        setTimeout(() => loadSlideIframe(e.relatedTarget), 50);
    });
});