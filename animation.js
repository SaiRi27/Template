window.addEventListener('scroll', function () {
    var viewportHeight = window.innerHeight;

    document.querySelectorAll('.showleft').forEach(function(element) {
        var position = element.getBoundingClientRect();
        if (position.top < viewportHeight * 0.5 && position.bottom > viewportHeight * 0.5) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });

    document.querySelectorAll('.showright').forEach(function(element) {
        var position = element.getBoundingClientRect();
        if (position.top < viewportHeight * 0.5 && position.bottom > viewportHeight * 0.5) {
            element.classList.add('visible2');
        } else {
            element.classList.remove('visible2');
        }
    });

    document.querySelectorAll('.showbasic').forEach(function(element) {
        var position = element.getBoundingClientRect();
        if (position.top < viewportHeight * 0.5 && position.bottom > viewportHeight * 0.1) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});



