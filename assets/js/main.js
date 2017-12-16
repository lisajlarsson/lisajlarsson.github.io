window.sr = ScrollReveal();
sr.reveal('.headline');
sr.reveal('.featured-item', {viewFactor: 0.01});
sr.reveal('.about-section', {viewFactor: 1.00});
var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});
