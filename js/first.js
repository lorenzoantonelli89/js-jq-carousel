function prevClick() {
    var activeImg = $('.active');

    if (activeImg.hasClass('first-img')) {
        var prevImg = $('img.last-img');

        activeImg.removeClass('active');
        prevImg.addClass('active');
    }else{
        
        var prevImg = activeImg.prev('img');

        activeImg.removeClass('active');
        prevImg.addClass('active');
    }
}

function nextClick() {
    var activeImg = $('.active');

    if (activeImg.hasClass('last-img')) {
        var nextImg = $('img.first-img');

        activeImg.removeClass('active');
        nextImg.addClass('active');
    } else {

        var nextImg = activeImg.next('img');

        activeImg.removeClass('active');
        nextImg.addClass('active');
    }
}

function init() {
    
    $('.prev').click(prevClick);
    $('.next').click(nextClick);
}

$(document).ready(init);