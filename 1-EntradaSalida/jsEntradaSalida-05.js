/*
Nombre: Miguel
Apellido: Leiva
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//reservo espacio en memoria para guardar el dato de las variables
	var nombre;
	var edad;

	
	//copio el nombre ingresado en la caja de texto embebida en la pagina; en la var nombre y edad
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	//con getElementById le digo donde va a estar ubicado el valor a asignar 

	//menjaje a mostrar con alert
	//alert("Usted se llama: " + nombre + " y tiene: " + edad + " años");
	
	//esta manera se denomina template string, con backtick
	alert(`Usted se llama: ${nombre} y tiene: ${edad} años`);
}

