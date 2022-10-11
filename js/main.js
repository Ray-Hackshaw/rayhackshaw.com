function about(){
if($("#about").css('opacity') == 1) {
    return;
} {
    $('.container').animate({
        top: '200px'
        }, 200);
    $('.subtag').delay(200).animate({'opacity':0}, 'slow');
    $('.tagline').delay(200).animate({'opacity':0}, 'slow');
    $('.contact').delay(200).animate({'opacity':0}, 'slow');
    $('.container').delay(500).animate({
        top: '-200px'
        }, 300);
    $('#about').css('transform', 'translateY(-320px)');
    $('#about').css('margin', 'auto');
    $('#about').delay(900).animate({'opacity':1}, 'slow');
    }
}

