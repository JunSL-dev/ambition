$(document).ready(function(){

    $('.card').on('mousemove',function(e){
        var pageX = e.pageX;
        var pageY = e.pageY;

        var width = $(this).width();
        var height = $(this).height();

        var offsetX = $(this).offset().left;
        var offsetY = $(this).offset().top;

        var posX = pageX - offsetX - width/2;
        var posY = pageY - offsetY - height/2;

        var mousePX = posX / width;
        var mousePY = posY / height;

        $(this).css('transform',`perspective(800px) rotateX(${-mousePY*30}deg) rotateY(${mousePX*30}deg)`);
        $(this).find('.bg').css('transform',`translateX(${-mousePX*40}px) translateY(${-mousePY*40}px)`);

        console.log(mousePX);
    });

    $('.card').on('mouseleave',function(){
        $(this).css('transition','.5s');
        $(this).css('transform','none');
        $(this).find('.bg').css('transition','.5s');
        $(this).find('.bg').css('transform','none');
    });
});