window.addEventListener('scroll', function() {
    const seta = document.getElementById('seta');
    const scrollPosition = window.scrollY;
    const fadeStart = 200;
    const fadeEnd = 900;

    if (scrollPosition <= fadeStart) {
        seta.style.opacity = 1;
    } else if (scrollPosition > fadeStart && scrollPosition < fadeEnd) {
        seta.style.opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
    } else {
        seta.style.opacity = 0;
    }
});