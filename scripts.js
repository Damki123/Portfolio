$('#hamburger').click(function(){
    $('#crossup').toggleClass('crossup');
    $('#crossdown').toggleClass('crossdown');
    $('#opaque').toggleClass('opaque0');
    $('.section-choose').toggleClass('section-choose-hidden');
    $('.logo').toggleClass('logo-shadow');
    $('#home').toggleClass('animlink1');
    $('#skills').toggleClass('animlink2');
    $('#projects').toggleClass('animlink3');
    $('#contact').toggleClass('animlink4');
})
$('.section-choose a').click(function(){
    $('#crossup').toggleClass('crossup');
    $('#crossdown').toggleClass('crossdown');
    $('#opaque').toggleClass('opaque0');
    $('.section-choose').toggleClass('section-choose-hidden');
    $('#home').toggleClass('animlink1');
    $('#skills').toggleClass('animlink2');
    $('#projects').toggleClass('animlink3');
    $('#contact').toggleClass('animlink4');
    if ($('.logo').hasClass('logo-shadow')){
        $('.logo').removeClass('logo-shadow');
    }
})
$('.skill-tree-start').click(function(){
    $('.skill').toggleClass('offscreen');
})
$('.skill').click(function(){
    $('.skill').toggleClass('offscreen');
    $(this).toggleClass('offscreen');
    $(this).toggleClass('skill-active');
    $('.skill-tree-start').toggleClass('offscreen');
})
$('#front-end').click(function(){
    $('.front-skills').toggleClass('opaque');
})
$('#languages').click(function(){
    $('.languages').toggleClass('opaque');
})
$('#softskills').click(function(){
    $('.softskills').toggleClass('opaque');
})
$(document).scroll(function(){
    var y = $(this).scrollTop();
    var x = $('#sec1').height();
    if(y > x/2){
        $('.scroll-top').fadeIn();
    }
    else{
        $('.scroll-top').fadeOut();
    }
})
$(document).scroll(function(){
    var y = $(this).scrollTop();
    var x = $('#sec2').height();
    if(y > (0.8)*x && y < (1.5)*x){
        $('.section-name').removeClass('section-name-hidden');
    }
    else{
        $('.section-name').addClass('section-name-hidden');
    }
})
$(document).scroll(function(){
    var y = $(this).scrollTop();
    var x = $('#sec3').height();
    if(y > 1.5*x && y < 2.7*x){
        $('.section-3-name').removeClass('section-3-name-hidden');
    }
    else{
        $('.section-3-name').addClass('section-3-name-hidden');
    }
})
$(document).scroll(function(){
    var y = $(this).scrollTop();
    var x = $('#sec4').height();
    if(y > (2.8)*x && y < 4*x){
        $('.section-name-4').removeClass('section-name-hidden');
    }
    else{
        $('.section-name-4').addClass('section-name-hidden');
    }
})