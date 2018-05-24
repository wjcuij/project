
window.onload = function(){
    var show = document.getElementsByClassName('show');
    var djs = 90,add = 1;
    
    var gydj = setInterval(function(){
        djs--;
        add++;
        daojishi.innerText = djs;
        for(var i =0 ;i < show.length;i++){
            show[i].style.top = 140-(add*1.55)+'px'
        }
        if(djs == 0){
            clearInterval(gydj)
        }
    },1000)
}