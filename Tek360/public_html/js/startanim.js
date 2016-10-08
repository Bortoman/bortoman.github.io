/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function isElementInViewport(elem) {
    var $elem = $(elem);
    
    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.prodotto');

    // If the animation has already been started
    

    if (!$elem.hasClass('start') && isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
    var $elem = $('.chisiamodiv');

    // If the animation has already been started
   

    if (!$elem.hasClass('start') && isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
    var $elem = $('.bullet1');

    

    if (!$elem.hasClass('start') && isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
    var $elem = $('.bullet2');

    // If the animation has already been started
    

    if (!$elem.hasClass('start') && isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
    var $elem = $('.list_sec');

    // If the animation has already been started
    

    if (!$elem.hasClass('start') && isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
    
    
    return;
    
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});