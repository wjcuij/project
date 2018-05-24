$(function(){
    $('.compnay li').click(function(){
        $('#pop').css('display','block').removeClass('zoomOut').addClass('zoomIn animated')
        pop.addEventListener("webkitAnimationEnd", function(){
            $(this).css('display','block')
        })
        
    })
    $('#close').click(function(){
        $('#pop').removeClass('zoomIn').addClass('zoomOut')
        pop.addEventListener("webkitAnimationEnd", function(){
            $(this).css('display','none')
        })
    })
    
})