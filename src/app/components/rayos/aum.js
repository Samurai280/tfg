function increase(imagen) {

    if (imagen.requestFullscreen){
        imagen.requestFullscreen();
    } 	  
    if (imagen.webkitRequestFullscreen)
    {
        imagen.webkitRequestFullscreen();
    }
    if (imagen.mozRequestFullScreen)
    {
        imagen.mozRequestFullScreen();
    }
    if (imagen.msRequestFullscreen)
    {
        imagen.msRequestFullscreen();
    }

}