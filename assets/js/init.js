$(document).ready(function(){
    $('.scrollspy').scrollSpy({});
    $('.pushpin').pushpin({
        offset: 225
    });
    $('.js-tilt').tilt({
        maxTilt: 10,
        perspective: 2500,
        speed: 3500,
        scale: 1.02,
        glare: true,
        maxGlare: 0.3
    });
});
