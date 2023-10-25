let but = document.getElementById('but');

window.onscroll = function(){
    if(scrollY>= 400){
        but.style.display = 'block'
    }else{
        but.style.display = 'none'

    }
}

but.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}