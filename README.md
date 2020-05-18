Mejor slider 2020 por Damian Blum y Maximo Gismondi
¿Cómo implementar el slider? 
1)En la carpeta donde se encuentre su proyecto deben de tener la ultima version de Jquery 
2)En el head de su html debe estar lo siguiente escrito: 
<script src=nombreDeMiJquery></script>
<link href="tp.css" type="text/css" rel="stylesheet">
<script src="tp.js"></script> 
3)En su html crear un div donde estará sus imagenes del slider y ponerle un id 
4)En body abrir un script y llamar a la función animar_carrusel, poniendole entre los parentesis, cuanto milisegundos quiere que dure y despues el id del carrusel. 
EJEMPLO DE CODIGO:

<!DOCTYPE html>
<html>
<head>
	<script src="nombreDeMiJquery"></script>
	<link href="tp.css" type="text/css" rel="stylesheet">
	<script src="tp.js"></script>
	<title>Prueba Carrusel</title>
</head>
<body>



<div id = "Carrusel">
	<img src="1.jpg">
	<img src="2.jpg">
	<img src="3.jpg">
	<img src="4.jpg">

</div>
<script>
	animar_carrusel(5000, "Carrusel");
</script>
</body>
</html>


Para poder probar el slider descargar todo el proyecto incluido la demo y hacer doble click a prueba que se encuentra en DEMO