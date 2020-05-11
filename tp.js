function animar_carrusel(milliseconds_carrusel, id_div){

    /*------------------------------Variables----------------------------------*/

    var imagenActual = 0;
    var indice = 0;
    var cantImagenes = 0;
    var intervaloImagen = setInterval(cambiarImagenAdelante, milliseconds_carrusel);
    var intervaloBarra = setInterval(animarBarra,0);
    var ancho;

    function animarBarra(){
	    if (indice == 0) {
	    indice = 1;
	    var elem = document.getElementById("miBarra");
	    var width = 0;
	    intervaloBarra = setInterval(frame, milliseconds_carrusel/1000);
	        function frame() {
		        if (width >= 100) {
		            clearInterval(id);
		             indice = 0;
		        } 
		        else {
		            width=width+0.1;
		            elem.style.width = width + "%";
		    	}
			}
		}	
	}

    function cambiarImagenAdelante(){
        indice = 0;
        clearInterval(intervaloBarra);
        animarBarra();
        clearInterval(intervaloImagen);
        $("#"+id_div).find('img').each(function(index){
            if(index == imagenActual){
                $(this).fadeOut(200);     
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','lightgrey');

        if (imagenActual == cantImagenes) {
            imagenActual = 0;
        }
        
        else{

            imagenActual++;
        }
        $("#"+id_div).find('img').each(function(index) {    
            if(index == imagenActual){
                $(this).delay(200).fadeIn(200);
            }
        });
        console.log(imagenActual);
        $("#circulo"+(imagenActual+1)).css('background','red');

        intervaloImagen = setInterval(cambiarImagenAdelante, milliseconds_carrusel);
    }

    function cambiarImagenAtras(){
        indice = 0;
        clearInterval(intervaloBarra);
        animarBarra();
        clearInterval(intervaloImagen);

        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).fadeOut(200);     
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','lightgrey');

        if (imagenActual == 0) {
            imagenActual = cantImagenes;
        }
        else{
            imagenActual--;

        }  
        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).delay(200).fadeIn(200);
            }
        });
        console.log(imagenActual);
        $("#circulo"+(imagenActual+1)).css('background','red');

        intervaloImagen = setInterval(cambiarImagenAdelante, milliseconds_carrusel);
    }

    function OcultarDemasImagenes(){
        $("#"+id_div).find('img').each(function(index) {
                
             ancho=$(this).width();
            if(index!=0){
                $(this).css("display","none");
            }
        });    
    }

    function CreacionBarraCirculosYFlechas(){
        var barraDeCirculosYBotones="<div id='barraDeCirculosYBotones'>"+
        "<button id='atras'><</button>"+"<div id='barraCirculos'>";
        $("#"+id_div).find('img').each(function(index) {
            
        if (index==0) {
            barraDeCirculosYBotones = barraDeCirculosYBotones + "<div id='circulo"+(index+1)+"'class='circulo1'></div>";
        }
        else{
            barraDeCirculosYBotones = barraDeCirculosYBotones + "<div id='circulo"+(index+1)+" 'class='circulo2'></div>";
        } 
        if(index > cantImagenes){
            cantImagenes++;
        }
        });    
        barraDeCirculosYBotones = barraDeCirculosYBotones + "</div>" + "<button id='adelante'>></button>"+"</div>";
        var barraDeProgreso="<div id='miProgreso'><div id='miBarra'></div></div>";
        var NombreCarrusel=document.getElementById(id_div);
        NombreCarrusel.innerHTML += barraDeCirculosYBotones;
        NombreCarrusel.innerHTML += barraDeProgreso;    
    }
    
    OcultarDemasImagenes();
    $("#"+id_div).css({"margin":"4% auto","width":ancho,"display":"block"});
    CreacionBarraCirculosYFlechas();
    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);
    animarBarra();
}